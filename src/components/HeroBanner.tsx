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
        </div>
      </div>
    </section>
  );
};


