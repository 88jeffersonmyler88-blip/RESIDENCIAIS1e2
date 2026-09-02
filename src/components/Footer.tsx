import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO, CONDO_ASSETS } from '../data/condoData';

export const Footer: React.FC<{ onNavigateSection: (id: string) => void }> = ({ onNavigateSection }) => {
  return (
    <footer className="relative overflow-hidden bg-[#050b16]/90 backdrop-blur-[1px] text-slate-300 text-xs sm:text-sm border-t border-amber-500/20 pt-10 sm:pt-12 pb-8">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Contact Details & Company Brand */}
          <div className="space-y-2.5 sm:space-y-3">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-400/60 shadow-lg shadow-amber-500/20 shrink-0 bg-slate-900 flex items-center justify-center">
                <img
                  src={CONDO_ASSETS.logo}
                  alt="Logo Residenciais Costa"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-white font-black text-xs sm:text-sm uppercase tracking-wider">{BUSINESS_INFO.name}</h4>
                <span className="text-[11px] sm:text-xs text-amber-300 font-bold block">{BUSINESS_INFO.management}</span>
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span className="text-slate-200"><strong className="text-amber-300">Costa I:</strong> Rua Maranhão, 333 - Cordeiros, Itajaí - SC</span>
            </div>

            <div className="flex items-start space-x-2 pt-0.5">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span className="text-slate-200"><strong className="text-cyan-300">Costa II:</strong> R. José Antonio de Jesus, 536 - Bairro Itajubá, Barra Velha - SC</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-2">
            <h4 className="text-amber-300 font-black text-xs sm:text-sm uppercase tracking-wider mb-2">Navegação Rápida</h4>
            <ul className="space-y-2 text-slate-200 font-medium">
              <li>
                <button onClick={() => onNavigateSection('unidades')} className="hover:text-amber-300 transition py-1">
                  Quartos Disponíveis
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('simulador')} className="hover:text-amber-300 transition py-1">
                  Valores & Regras
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('faq')} className="hover:text-amber-300 transition py-1">
                  Dúvidas Frequentes (FAQ)
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="space-y-3">
            <h4 className="text-amber-300 font-black text-xs sm:text-sm uppercase tracking-wider mb-2">Atendimento Direto</h4>
            <a
              href={`https://wa.me/${BUSINESS_INFO.phoneClean}?text=Olá,%20gostaria%20de%20informações%20sobre%20os%20aluguéis`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-black uppercase flex items-center justify-center space-x-2 transition shadow-lg shadow-emerald-600/20 border border-emerald-400/30 min-h-[48px]"
            >
              <Phone className="w-4 h-4 fill-current shrink-0" />
              <span className="text-center">Conversar no WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-5 border-t border-slate-800 flex justify-center items-center text-slate-400 font-medium text-xs">
          <p className="text-center">© Residenciais Costa I e II. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
