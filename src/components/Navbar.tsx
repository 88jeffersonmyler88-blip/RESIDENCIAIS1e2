import React from 'react';
import { BUSINESS_INFO, AJC_ASSETS } from '../data/condoData';

interface NavbarProps {
  onNavigateSection?: (sectionId: string) => void;
  activeSection?: string;
  onSelectBuilding?: (building: 'costa1' | 'costa2' | 'todos') => void;
  currentBuilding?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#070e1b]/95 backdrop-blur-md border-b border-amber-500/20 text-white shadow-2xl">
      {/* Header Container */}
      <div className="bg-[#091325]/95 py-2.5 px-4 sm:px-6 border-b border-amber-500/15">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          
          {/* Logo & Company Name / Admin - Centered */}
          <div className="flex items-center justify-center space-x-3 text-center">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-amber-400/80 shrink-0 shadow-md shadow-amber-500/25 bg-slate-900 flex items-center justify-center">
              <img
                src={AJC_ASSETS.logo}
                alt="Logo AJC Serviços Administrativos"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col text-left sm:text-center items-start sm:items-center">
              <span className="font-black text-xs sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-400 uppercase tracking-wider">
                {BUSINESS_INFO.name}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-300 font-semibold tracking-wide flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-1.5 inline-block animate-pulse shrink-0" />
                {BUSINESS_INFO.management}
              </span>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};




