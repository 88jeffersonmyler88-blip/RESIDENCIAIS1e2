import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import { BUSINESS_INFO, CONDO_UNITS, NEARBY_LANDMARKS } from "./src/data/condoData";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy Gemini AI initialization helper
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is not defined");
  }
  return new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// API Health route
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    business: BUSINESS_INFO.name,
    costa1: BUSINESS_INFO.costa1,
    costa2: BUSINESS_INFO.costa2,
    phone: BUSINESS_INFO.phone,
    timestamp: new Date().toISOString(),
  });
});

// API Inquiry submission route
app.post("/api/inquiry", (req, res) => {
  const { name, phone, email, unitId, rentalType, preferredDate, preferredTime, notes } = req.body;

  if (!name || !phone) {
    res.status(400).json({ error: "Nome e telefone são obrigatórios" });
    return;
  }

  const selectedUnit = CONDO_UNITS.find((u) => u.id === unitId);

  res.json({
    success: true,
    message: "Solicitação recebida com sucesso! Nossa equipe entrará em contato em breve.",
    inquiry: {
      id: `INC-${Date.now()}`,
      name,
      phone,
      email,
      unit: selectedUnit ? `${selectedUnit.unitNumber} (${selectedUnit.title})` : "Geral / Consulta de Vagas",
      rentalType,
      preferredDate,
      preferredTime,
      notes,
      createdAt: new Date().toLocaleString("pt-BR"),
    },
  });
});

// Server-side Gemini AI Chat Assistant Endpoint
app.post("/api/gemini/chat", async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== "string") {
      res.status(400).json({ error: "Mensagem inválida" });
      return;
    }

    const ai = getGeminiClient();

    const systemPrompt = `Você é o atedente oficial dos Residenciais Costa 1 (Itajaí - SC) e Costa 2 (Barra Velha - SC).
Residencial Costa 1: Cidade de Itajaí - Santa Catarina.
Residencial Costa 2: Cidade de Barra Velha - Santa Catarina (R. José Antonio de Jesus, 536).
Telefone/WhatsApp: (47) 93384-3928.
Valores: R$ 900,00 por mês para qualquer unidade, com TODAS as taxas inclusas (água, luz, condomínio, internet e IPTU).
Regras Principais:
1. Somente para homens (público exclusivo masculino)
2. Sem pet (não aceita animais de estimação)
3. Contrato simples e sem burocracia

Unidades disponíveis:
${CONDO_UNITS.map(
  (u) =>
    `- ${u.unitNumber} (${u.building} em ${u.city}): ${u.title}. Valor mensal: R$ ${u.monthlyPrice}/mês (Todas as taxas inclusas).`
).join("\n")}

Diretrizes de Resposta:
1. Responda em português claro, cordial, profissional e prestativo.
2. Informe com clareza o telefone/WhatsApp (47) 93384-3928 e o valor fixo de R$ 900,00 com todas as taxas inclusas.
3. Reforce as duas localizações: Itajaí - SC (Costa 1) e Barra Velha - SC (Costa 2).`;

    const chatMessages: Array<{ role: string; parts: Array<{ text: string }> }> = [];

    if (Array.isArray(history)) {
      history.forEach((h: { sender: string; text: string }) => {
        chatMessages.push({
          role: h.sender === "user" ? "user" : "model",
          parts: [{ text: h.text }],
        });
      });
    }

    chatMessages.push({
      role: "user",
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: chatMessages,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
      },
    });

    res.json({
      reply: response.text || "Desculpe, não consegui processar a resposta no momento. Por favor, ligue para (47) 3346-1085.",
    });
  } catch (err: unknown) {
    console.error("Gemini Chat Error:", err);
    const errorMessage = err instanceof Error ? err.message : "Erro interno no servidor";
    res.status(500).json({
      error: "Não foi possível conectar ao assistente de IA.",
      details: errorMessage,
      fallbackPhone: "(47) 3346-1085",
    });
  }
});

// Vite middleware for dev / static serving for prod
async function setupViteOrStatic() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(
      express.static(distPath, {
        setHeaders: (res, filePath) => {
          if (filePath.endsWith(".js") || filePath.endsWith(".mjs")) {
            res.setHeader("Content-Type", "application/javascript; charset=utf-8");
          } else if (filePath.endsWith(".css")) {
            res.setHeader("Content-Type", "text/css; charset=utf-8");
          }
        },
      })
    );
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Residencial Costa 2] Server active on http://0.0.0.0:${PORT}`);
  });
}

setupViteOrStatic();
