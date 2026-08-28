import React from 'react';
import { FilterState } from '../types';

interface HeroBannerProps {
  filters: FilterState;
  onFilterChange: (filters: Partial<FilterState>) => void;
  onNavigateSection?: (sectionId: string) => void;
  onSelectBuilding?: (building: 'costa1' | 'costa2' | 'todos') => void;
  availableCount: number;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  filters,
  onSelectBuilding,
}) => {
  const currentBuilding = filters.building;

  const handleSelect = (building: 'costa1' | 'costa2' | 'todos') => {
    if (onSelectBuilding) {
      onSelectBuilding(building);
    }
  };

  return (
    <section id="hero" className="relative bg-transparent text-white pt-2 sm:pt-4 pb-4 sm:pb-6">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header - Highlighted Title */}
        <div className="text-center max-w-4xl mx-auto px-2">
          <h1 className="font-outfit text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.15] sm:leading-[1.1]">
            Quartos Individuais em <br className="hidden sm:inline" />
            <span className="text-amber-300">
              Itajaí
            </span>{' '}
            <span className="text-slate-300 font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl">e</span>{' '}
            <span className="text-cyan-300">
              Barra Velha - SC
            </span>
          </h1>
          <p className="mt-2 sm:mt-3 text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-medium">
            Locação mensal sem burocracia e sem caução para o público masculino.
          </p>

          {/* Direct Interactive Location Selector */}
          <div className="mt-5 sm:mt-6 flex flex-col items-center justify-center space-y-3">
            <span className="text-xs sm:text-sm font-bold text-amber-200/90 tracking-wide uppercase">
              👉 Escolha o Residencial ou Veja Todos:
            </span>

            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 w-full max-w-xl">
              {/* Ver Todos */}
              <button
                id="btn-hero-todos"
                type="button"
                onClick={() => handleSelect('todos')}
                className={`relative overflow-hidden px-4 py-3 rounded-2xl font-black text-xs sm:text-sm transition-all duration-300 cursor-pointer min-h-[48px] ${
                  currentBuilding === 'todos'
                    ? 'bg-amber-400 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.6)] scale-[1.03] border-2 border-amber-200'
                    : 'bg-[#0b182d] hover:bg-[#10223f] text-slate-300 border border-slate-700 hover:border-slate-500'
                }`}
              >
                Ver Todas as Unidades
              </button>

              {/* Costa I - Itajaí */}
              <button
                id="btn-hero-costa1"
                type="button"
                onClick={() => handleSelect('costa1')}
                className={`relative overflow-hidden flex items-center justify-center space-x-2 px-4 py-3 rounded-2xl font-black text-xs sm:text-sm transition-all duration-300 cursor-pointer min-h-[48px] ${
                  currentBuilding === 'costa1'
                    ? 'bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-slate-950 border-2 border-amber-200 shadow-[0_0_24px_rgba(245,158,11,0.85)] scale-[1.04] gold-radiant-active'
                    : 'bg-[#0b182d] hover:bg-[#10223f] text-amber-200 border-2 border-amber-500/50 hover:border-amber-400 gold-pulse-ambient hover:scale-[1.02]'
                }`}
              >
                {currentBuilding === 'costa1' && (
                  <div className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none animate-gold-shimmer" />
                )}
                <div
                  className={`w-2.5 h-2.5 rounded-full shrink-0 transition-colors ${
                    currentBuilding === 'costa1'
                      ? 'bg-slate-950 shadow-[0_0_8px_rgba(0,0,0,0.8)]'
                      : 'bg-amber-400'
                  }`}
                />
                <span className="whitespace-nowrap">Costa I – Itajaí</span>
              </button>

              {/* Costa II - Barra Velha */}
              <button
                id="btn-hero-costa2"
                type="button"
                onClick={() => handleSelect('costa2')}
                className={`relative overflow-hidden flex items-center justify-center space-x-2 px-4 py-3 rounded-2xl font-black text-xs sm:text-sm transition-all duration-300 cursor-pointer min-h-[48px] ${
                  currentBuilding === 'costa2'
                    ? 'bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 text-slate-950 border-2 border-cyan-200 shadow-[0_0_24px_rgba(6,182,212,0.85)] scale-[1.04] cyan-radiant-active'
                    : 'bg-[#0b182d] hover:bg-[#10223f] text-cyan-200 border-2 border-cyan-500/50 hover:border-cyan-400 cyan-pulse-ambient hover:scale-[1.02]'
                }`}
              >
                {currentBuilding === 'costa2' && (
                  <div className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none animate-cyan-shimmer" />
                )}
                <div
                  className={`w-2.5 h-2.5 rounded-full shrink-0 transition-colors ${
                    currentBuilding === 'costa2'
                      ? 'bg-slate-950 shadow-[0_0_8px_rgba(0,0,0,0.8)]'
                      : 'bg-cyan-400'
                  }`}
                />
                <span className="whitespace-nowrap">Costa II – Barra Velha</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


