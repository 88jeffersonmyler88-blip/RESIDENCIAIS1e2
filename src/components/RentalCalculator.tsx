import React from 'react';
import { Calculator, Phone, Bike, Sparkles, ShieldCheck, Wifi, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/condoData';
import { CondoUnit } from '../types';

interface RentalCalculatorProps {
  initialUnit?: CondoUnit | null;
  currentBuilding?: string;
  onSelectBuilding?: (building: 'costa1' | 'costa2') => void;
}

export const RentalCalculator: React.FC<RentalCalculatorProps> = ({
  currentBuilding = 'nenhum',
  onSelectBuilding,
}) => {
  return (
    <section id="simulador" className="relative overflow-hidden py-12 sm:py-16 bg-[#091224]/85 backdrop-blur-[1px] border-t border-amber-500/20 text-white scroll-mt-20">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center space-x-2 text-amber-300 text-xs font-black tracking-wider uppercase mb-1.5 sm:mb-2 bg-[#0e1c36] border border-amber-500/30 px-3.5 py-1 rounded-full">
            <Calculator className="w-4 h-4 text-amber-400" />
            <span>Transparência de Custos</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Valores & Benefícios Inclusos
          </h2>
          <p className="text-slate-200 text-sm sm:text-base mt-2 font-medium">
            Entenda detalhadamente o que está incluso na mensalidade fixa sem custos extras ou surpresas.
          </p>
        </div>

        {/* Detailed Summary Box */}
        <div className="bg-[#0b162c] text-white rounded-3xl p-5 sm:p-8 shadow-2xl space-y-5 sm:space-y-6 border-2 border-amber-500/30 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 sm:pb-5 gap-3">
            <div>
              <span className="text-[11px] sm:text-xs font-black uppercase px-3 py-1 rounded-full inline-block mb-1.5 bg-[#0e2347] text-amber-300 border border-amber-500/30">
                {currentBuilding === 'costa1' ? 'Residencial Costa I — Itajaí' : currentBuilding === 'costa2' ? 'Residencial Costa II — Barra Velha' : 'Residenciais Costa I & Costa II'}
              </span>
              <h3 className="text-lg sm:text-2xl font-black text-white">
                Quarto Individual Completo
              </h3>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-3">
              {/* Costa I card */}
              <button
                type="button"
                onClick={() => onSelectBuilding && onSelectBuilding('costa1')}
                className={`p-3 rounded-2xl border text-left sm:text-right transition cursor-pointer ${
                  currentBuilding === 'costa1'
                    ? 'bg-[#0e1c36] border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.4)] scale-102'
                    : 'bg-[#0e1c36]/60 border-amber-500/30 hover:border-amber-400'
                }`}
              >
                <span className="text-[10px] font-black uppercase text-amber-400 block">Costa I (Itajaí)</span>
                <span className="text-xl sm:text-2xl font-black text-white block">R$ 950,00</span>
                <span className="text-[10px] text-slate-300 font-medium">/mês tudo incluso</span>
              </button>

              {/* Costa II card */}
              <button
                type="button"
                onClick={() => onSelectBuilding && onSelectBuilding('costa2')}
                className={`p-3 rounded-2xl border text-left sm:text-right transition cursor-pointer ${
                  currentBuilding === 'costa2'
                    ? 'bg-[#0c243b] border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)] scale-102'
                    : 'bg-[#0c243b]/60 border-cyan-500/30 hover:border-cyan-400'
                }`}
              >
                <span className="text-[10px] font-black uppercase text-cyan-400 block">Costa II (Barra Velha)</span>
                <span className="text-xl sm:text-2xl font-black text-white block">R$ 900,00</span>
                <span className="text-[10px] text-slate-300 font-medium">/mês tudo incluso</span>
              </button>
            </div>
          </div>

          {/* Checklist Grid */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-xs sm:text-sm font-black text-amber-300 uppercase tracking-wider">
              Serviços & Estrutura Inclusos no Valor:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs sm:text-sm font-bold">
              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#0e1c36] border border-slate-700/70 flex items-center justify-between">
                <span className="text-slate-100">Quarto Individual Privativo</span>
                <span className="text-[10px] sm:text-xs font-black text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-lg border border-emerald-500/30">INCLUSO</span>
              </div>

              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#0e1c36] border border-slate-700/70 flex items-center justify-between">
                <span className="text-slate-100">Banheiro Compartilhado</span>
                <span className="text-[10px] sm:text-xs font-black text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-lg border border-emerald-500/30">INCLUSO</span>
              </div>

              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#0e1c36] border border-slate-700/70 flex items-center justify-between">
                <span className="text-slate-100">Cozinha Compartilhada</span>
                <span className="text-[10px] sm:text-xs font-black text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-lg border border-emerald-500/30">INCLUSO</span>
              </div>

              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#0e1c36] border border-slate-700/70 flex items-center justify-between">
                <span className="text-slate-100">Lavanderia Completa</span>
                <span className="text-[10px] sm:text-xs font-black text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-lg border border-emerald-500/30">INCLUSO</span>
              </div>

              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#0e1c36] border border-slate-700/70 flex items-center justify-between">
                <span className="text-slate-100 flex items-center"><Bike className="w-4 h-4 mr-1.5 text-cyan-400 shrink-0" /> Bicicletário</span>
                <span className="text-[10px] sm:text-xs font-black text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-lg border border-emerald-500/30">INCLUSO</span>
              </div>

              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#0e1c36] border border-slate-700/70 flex items-center justify-between">
                <span className="text-slate-100 flex items-center"><ShieldCheck className="w-4 h-4 mr-1.5 text-amber-400 shrink-0" /> Zelador & Câmeras</span>
                <span className="text-[10px] sm:text-xs font-black text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-lg border border-emerald-500/30">INCLUSO</span>
              </div>

              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#0e1c36] border border-slate-700/70 flex items-center justify-between">
                <span className="text-slate-100 flex items-center"><Sparkles className="w-4 h-4 mr-1.5 text-amber-400 shrink-0" /> Limpeza Semanal</span>
                <span className="text-[10px] sm:text-xs font-black text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-lg border border-emerald-500/30">INCLUSO</span>
              </div>

              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#0e1c36] border border-slate-700/70 flex items-center justify-between">
                <span className="text-slate-100 flex items-center"><Wifi className="w-4 h-4 mr-1.5 text-cyan-400 shrink-0" /> Água, Luz, Wi-Fi & Gás</span>
                <span className="text-[10px] sm:text-xs font-black text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-lg border border-emerald-500/30">INCLUSO</span>
              </div>
            </div>
          </div>

          {/* Direct CTA */}
          <div className="pt-2 sm:pt-3 space-y-3">
            <a
              href={`https://wa.me/${BUSINESS_INFO.phoneClean}?text=${
                currentBuilding === 'costa1'
                  ? 'Olá%20Josiane,%20gostaria%20de%20reservar%20um%20quarto%20no%20Residencial%20Costa%20I%20em%20Itajaí'
                  : currentBuilding === 'costa2'
                  ? 'Olá%20Josiane,%20gostaria%20de%20reservar%20um%20quarto%20no%20Residencial%20Costa%20II%20em%20Barra%20Velha'
                  : 'Olá%20Josiane,%20gostaria%20de%20tirar%20dúvidas%20sobre%20as%20vagas%20nos%20Residenciais%20Costa'
              }`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm uppercase shadow-lg shadow-emerald-600/30 transition-all duration-200 flex items-center justify-center space-x-2.5 transform hover:-translate-y-0.5 border border-emerald-400/30 min-h-[48px]"
            >
              <Phone className="w-4 h-4 fill-current shrink-0" />
              <span className="text-center leading-snug">
                {currentBuilding === 'costa1'
                  ? 'Falar com Josiane no WhatsApp para Reservar em Itajaí'
                  : currentBuilding === 'costa2'
                  ? 'Falar com Josiane no WhatsApp para Reservar em Barra Velha'
                  : 'Chamar Josiane no WhatsApp: (47) 93384-3928'}
              </span>
            </a>

            {/* Location buttons for addresses */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <a
                href={BUSINESS_INFO.googleMapsUrlCosta1}
                target="_blank"
                rel="noopener noreferrer"
                className={`py-3.5 px-4 rounded-2xl font-extrabold text-xs sm:text-sm border shadow-lg transition-all flex items-center justify-center space-x-2 min-h-[46px] ${
                  currentBuilding === 'costa1'
                    ? 'bg-[#0e1c36] text-amber-200 border-amber-400 ring-2 ring-amber-500/30'
                    : 'bg-[#0e1c36]/60 text-slate-300 border-slate-700 hover:border-amber-500/40 hover:text-amber-200'
                }`}
              >
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-center">Localização Costa I · Itajaí (Google Maps)</span>
              </a>

              <a
                href={BUSINESS_INFO.googleMapsUrlCosta2}
                target="_blank"
                rel="noopener noreferrer"
                className={`py-3.5 px-4 rounded-2xl font-extrabold text-xs sm:text-sm border shadow-lg transition-all flex items-center justify-center space-x-2 min-h-[46px] ${
                  currentBuilding === 'costa2'
                    ? 'bg-[#081e33] text-cyan-200 border-cyan-400 ring-2 ring-cyan-500/30'
                    : 'bg-[#081e33]/60 text-slate-300 border-slate-700 hover:border-cyan-500/40 hover:text-cyan-200'
                }`}
              >
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-center">Localização Costa II · Barra Velha (Google Maps)</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

