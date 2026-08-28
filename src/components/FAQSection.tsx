import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../data/condoData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative overflow-hidden py-12 sm:py-16 bg-[#070e1b]/80 backdrop-blur-[1px] border-t border-amber-500/20 text-white">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-2 text-amber-300 text-xs font-black tracking-wider uppercase mb-1.5 sm:mb-2 bg-[#0e1c36] border border-amber-500/30 px-3.5 py-1 rounded-full">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-200 text-sm sm:text-base mt-2 font-medium">
            Tudo o que você precisa saber sobre o <strong className="text-amber-300">Costa I (Itajaí)</strong> e <strong className="text-cyan-300">Costa II (Barra Velha)</strong>.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#0b162c] border-2 border-slate-800 hover:border-amber-500/50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg transition-all duration-200"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between font-black text-sm sm:text-base text-white hover:text-amber-300 transition gap-2"
              >
                <span className="flex items-center space-x-2.5 sm:space-x-3">
                  <span className="w-6 h-6 rounded-lg bg-[#0e1c36] border border-amber-500/30 text-amber-300 text-xs font-black flex items-center justify-center shrink-0">
                    ?
                  </span>
                  <span className="leading-snug">{faq.q}</span>
                </span>
                {openIndex === idx ? (
                  <ChevronUp className="w-5 h-5 text-amber-400 shrink-0 ml-2" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-500 shrink-0 ml-2" />
                )}
              </button>

              {openIndex === idx && (
                <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-2.5 text-xs sm:text-sm text-slate-200 border-t border-slate-800 leading-relaxed font-medium bg-[#0e1c36]/60">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

