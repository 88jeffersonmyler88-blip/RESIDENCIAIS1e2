import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { UnitGrid } from './components/UnitGrid';
import { PhotoGallery } from './components/PhotoGallery';
import { UnitDetailModal } from './components/UnitDetailModal';
import { RentalCalculator } from './components/RentalCalculator';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { CONDO_UNITS } from './data/condoData';
import { CondoUnit, FilterState } from './types';

export default function App() {
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    building: 'todos',
    rentalType: 'todos',
    maxPrice: 10000,
    minBedrooms: 0,
    onlyFurnished: false,
    onlyParking: false,
  });

  const [selectedUnit, setSelectedUnit] = useState<CondoUnit | null>(null);
  const [simulatingUnit, setSimulatingUnit] = useState<CondoUnit | null>(null);
  const [activeSection, setActiveSection] = useState('hero');

  // Filtered units logic
  const filteredUnits = useMemo(() => {
    return CONDO_UNITS.filter((unit) => {
      // Building filter (costa1 vs costa2)
      if (filters.building === 'costa1' && unit.building !== 'Residencial Costa I') {
        return false;
      }
      if (filters.building === 'costa2' && unit.building !== 'Residencial Costa II') {
        return false;
      }

      // Search query
      if (filters.searchQuery.trim()) {
        const query = filters.searchQuery.toLowerCase();
        const matchesTitle = unit.title.toLowerCase().includes(query);
        const matchesNumber = unit.unitNumber.toLowerCase().includes(query);
        const matchesDesc = unit.description.toLowerCase().includes(query);
        const matchesCity = unit.city.toLowerCase().includes(query);
        const matchesBuilding = unit.building.toLowerCase().includes(query);
        const matchesAmenity = unit.amenities.some((a) => a.toLowerCase().includes(query));
        if (!matchesTitle && !matchesNumber && !matchesDesc && !matchesCity && !matchesBuilding && !matchesAmenity) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
    if (newFilters.building && newFilters.building !== 'todos' && newFilters.building !== 'nenhum') {
      const match = CONDO_UNITS.find(
        (u) =>
          (newFilters.building === 'costa1' && u.building === 'Residencial Costa I') ||
          (newFilters.building === 'costa2' && u.building === 'Residencial Costa II')
      );
      if (match) {
        setSimulatingUnit(match);
      }
    }
  };

  const handleNavigateSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarOffset = window.innerWidth < 640 ? 100 : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
    }
  };

  const handleDirectAccessBuilding = (building: 'costa1' | 'costa2' | 'todos') => {
    handleFilterChange({ building });
    handleNavigateSection('unidades');
  };

  const handleSimulateUnit = (unit: CondoUnit) => {
    setSimulatingUnit(unit);
    handleNavigateSection('simulador');
  };

  return (
    <div className="relative min-h-screen bg-[#070e1b] text-white font-sans selection:bg-amber-500 selection:text-slate-950 overflow-x-hidden">
      {/* Top Navigation */}
      <Navbar
        onNavigateSection={handleNavigateSection}
        activeSection={activeSection}
        onSelectBuilding={handleDirectAccessBuilding}
        currentBuilding={filters.building}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 pt-16 sm:pt-20">
        {/* Hero Banner & Direct Choice */}
        <HeroBanner
          filters={filters}
          onFilterChange={handleFilterChange}
          onNavigateSection={handleNavigateSection}
          onSelectBuilding={handleDirectAccessBuilding}
          availableCount={filteredUnits.length}
        />

        {/* Units Grid & Apartment Cards */}
        <UnitGrid
          units={filteredUnits}
          currentBuilding={filters.building}
          onSelectBuilding={handleDirectAccessBuilding}
          onSelectUnit={(unit) => setSelectedUnit(unit)}
          onSimulateUnit={handleSimulateUnit}
        />

        {/* Photo Gallery with High-Resolution Lightbox */}
        <PhotoGallery
          currentBuilding={filters.building}
          onSelectBuilding={handleDirectAccessBuilding}
        />

        {/* Rental & Rules Summary */}
        <RentalCalculator
          initialUnit={simulatingUnit}
          currentBuilding={filters.building}
          onSelectBuilding={handleDirectAccessBuilding}
        />

        {/* FAQs */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onNavigateSection={handleNavigateSection} />

      {/* Modals */}
      <UnitDetailModal
        unit={selectedUnit}
        onClose={() => setSelectedUnit(null)}
      />
    </div>
  );
}
