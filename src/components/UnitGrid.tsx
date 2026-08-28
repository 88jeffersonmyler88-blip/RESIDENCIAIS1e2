import React, { useState } from 'react';
import {
  Bed,
  Bath,
  Utensils,
  Shirt,
  Bike,
  Video,
  Wifi,
  MapPin,
  ChevronRight,
  ChevronLeft,
  Phone,
  Building2,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Eye,
  CheckCircle2,
  Armchair
} from 'lucide-react';
import { CondoUnit } from '../types';
import { BUSINESS_INFO, AJC_ASSETS } from '../data/condoData';

interface UnitGridProps {
  units: CondoUnit[];
  currentBuilding?: string;
  onSelectBuilding?: (building: 'costa1' | 'costa2' | 'todos') => void;
  onSelectUnit: (unit: CondoUnit) => void;
  onSimulateUnit?: (unit: CondoUnit) => void;
}

// Single Unit Card with interactive image carousel
const UnitCardItem: React.FC<{
  unit: CondoUnit;
  onSelectUnit: (unit: CondoUnit) => void;
}> = ({ unit, onSelectUnit }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const isCosta1 = unit.building === 'Residencial Costa I';
  const images = unit.images && unit.images.length > 0 ? unit.images : [];

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setCurrentImgIndex(index);
  };

  return (
    <div
      className={`bg-[#0b162c]/95 border-2 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col group ${
        isCosta1 ? 'border-amber-500/30 hover:border-amber-400' : 'border-cyan-500/30 hover:border-cyan-400'
      }`}
    >
      {/* Interactive Image Carousel Container */}
      <div
        className="relative h-64 sm:h-72 overflow-hidden bg-slate-950 cursor-pointer select-none"
        onClick={() => onSelectUnit(unit)}
      >
        {images.length > 0 ? (
          <div className="relative w-full h-full">
            <img
              src={images[currentImgIndex]}
              alt={`${unit.title} - Foto ${currentImgIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-300"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = AJC_ASSETS.logo;
              }}
            />

            {/* Left / Right Carousel Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrevImage}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-950/75 hover:bg-slate-900 border border-white/30 text-white flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 z-20 focus:outline-none cursor-pointer"
                  title="Foto anterior"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>

                <button
                  type="button"
                  onClick={handleNextImage}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-950/75 hover:bg-slate-900 border border-white/30 text-white flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 z-20 focus:outline-none cursor-pointer"
                  title="Próxima foto"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </>
            )}

            {/* Carousel Dots & Photo Counter Bar */}
            {images.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center space-x-1.5 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 z-20 shadow-md">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => handleDotClick(e, idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentImgIndex === idx
                        ? isCosta1
                          ? 'w-6 bg-amber-400'
                          : 'w-6 bg-cyan-400'
                        : 'w-2 bg-white/50 hover:bg-white/80'
                    }`}
                    title={`Ver foto ${idx + 1}`}
                  />
                ))}
                <span className="text-[10px] font-black text-slate-200 ml-1.5 pl-1.5 border-l border-white/20">
                  {currentImgIndex + 1}/{images.length}
                </span>
              </div>
            )}
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0c1a33] via-[#081224] to-[#050b17] p-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-2 shadow-inner">
              <img
                src={AJC_ASSETS.logo}
                alt="Logo AJC"
                className="w-10 h-10 object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-xs font-black text-amber-300/90 tracking-wide">
              {unit.building}
            </span>
            <span className="text-[11px] text-slate-400 font-medium">
              {unit.city}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#070e1b] via-transparent to-black/40 pointer-events-none" />

        {/* Top Badges: Residencial & City */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
          <span className={`font-black text-xs px-3 py-1.5 rounded-xl shadow-lg text-white backdrop-blur-md border ${
            isCosta1 ? 'bg-[#0f2347]/90 border-amber-400/40 text-amber-200' : 'bg-[#0c2944]/90 border-cyan-400/40 text-cyan-200'
          }`}>
            {unit.building}
          </span>

          <span className="bg-[#070e1b]/90 text-white backdrop-blur-md text-xs font-extrabold px-3 py-1.5 rounded-xl border border-white/20 shadow-sm flex items-center">
            <MapPin className="w-3.5 h-3.5 mr-1 text-amber-400" />
            {unit.city}
          </span>
        </div>

        {/* Unit Number Badge (Top Left Sub) */}
        <div className="absolute top-12 left-3 z-10 pointer-events-none">
          <div className="text-[11px] text-amber-200 bg-[#070e1b]/90 backdrop-blur-md px-2.5 py-0.5 rounded-lg font-black border border-amber-500/30 shadow">
            {unit.unitNumber}
          </div>
        </div>

        {/* Strategic Company Logo Badge (Top Right Sub) */}
        <div className="absolute top-12 right-3 flex items-center space-x-1.5 bg-[#070e1b]/95 backdrop-blur-md px-2.5 py-0.5 rounded-xl border border-amber-500/40 shadow-lg text-amber-200 text-[10px] font-black z-10 pointer-events-none">
          <div className="w-3.5 h-3.5 rounded-full overflow-hidden border border-amber-400/60 shrink-0 bg-slate-900">
            <img
              src={AJC_ASSETS.logo}
              alt="Logo AJC"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/logo.png';
              }}
            />
          </div>
          <span className="tracking-wide">AJC Gestão</span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 sm:space-y-5">
        <div>
          {/* Header with Title, Address and AJC Logo */}
          <div className="space-y-1">
            <div className="flex items-center justify-between gap-2">
              <h3
                onClick={() => onSelectUnit(unit)}
                className="text-base sm:text-lg font-black text-white hover:text-amber-300 transition cursor-pointer flex-1"
              >
                {unit.title}
              </h3>
              {/* Company Logo alongside unit title */}
              <div className="w-6 h-6 rounded-full overflow-hidden border border-amber-400/50 shrink-0 shadow bg-slate-900" title={BUSINESS_INFO.management}>
                <img
                  src={AJC_ASSETS.logo}
                  alt="AJC Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <p className="text-xs text-slate-300 flex items-center font-medium">
              <MapPin className={`w-3.5 h-3.5 mr-1 shrink-0 ${isCosta1 ? 'text-amber-400' : 'text-cyan-400'}`} />
              <span>{unit.address}</span>
            </p>
          </div>

          <p className="text-xs sm:text-sm text-slate-200 mt-2.5 font-medium leading-relaxed">
            {unit.description}
          </p>

          {/* Pill features / All Specified Amenities */}
          <div className="mt-4 pt-3.5 border-t border-slate-800/80">
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block mb-2.5">
              Itens e Estrutura Inclusos:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 text-xs font-bold">
              {/* 1. Somente para homens */}
              <div className={`p-2 rounded-xl flex items-center shadow-sm border ${
                isCosta1
                  ? 'bg-[#0e1c36] text-amber-200 border-amber-500/30'
                  : 'bg-[#081e33] text-cyan-200 border-cyan-500/30'
              }`}>
                <UserCheck className={`w-3.5 h-3.5 mr-2 shrink-0 ${isCosta1 ? 'text-amber-400' : 'text-cyan-400'}`} />
                <span className="truncate">Somente para homens</span>
              </div>

              {/* 2. Registro em cartório */}
              <div className={`p-2 rounded-xl flex items-center shadow-sm border ${
                isCosta1
                  ? 'bg-[#0e1c36] text-amber-200 border-amber-500/30'
                  : 'bg-[#081e33] text-cyan-200 border-cyan-500/30'
              }`}>
                <ShieldCheck className={`w-3.5 h-3.5 mr-2 shrink-0 ${isCosta1 ? 'text-amber-400' : 'text-cyan-400'}`} />
                <span className="truncate">Registro em cartório</span>
              </div>

              {/* 3. Mobiliado */}
              <div className="bg-[#0b182d] text-slate-200 border border-slate-700/70 p-2 rounded-xl flex items-center shadow-sm">
                <Armchair className={`w-3.5 h-3.5 mr-2 shrink-0 ${isCosta1 ? 'text-amber-400' : 'text-cyan-400'}`} />
                <span className="truncate">Mobiliado</span>
              </div>

              {/* 4. Quarto Individual Privativo */}
              <div className="bg-[#0b182d] text-slate-200 border border-slate-700/70 p-2 rounded-xl flex items-center shadow-sm">
                <Bed className={`w-3.5 h-3.5 mr-2 shrink-0 ${isCosta1 ? 'text-amber-400' : 'text-cyan-400'}`} />
                <span className="truncate">Quarto Individual Privativo</span>
              </div>

              {/* 4. Banheiro Compartilhado */}
              <div className="bg-[#0b182d] text-slate-200 border border-slate-700/70 p-2 rounded-xl flex items-center shadow-sm">
                <Bath className={`w-3.5 h-3.5 mr-2 shrink-0 ${isCosta1 ? 'text-amber-400' : 'text-cyan-400'}`} />
                <span className="truncate">Banheiro Compartilhado</span>
              </div>

              {/* 5. Cozinha Compartilhada */}
              <div className="bg-[#0b182d] text-slate-200 border border-slate-700/70 p-2 rounded-xl flex items-center shadow-sm">
                <Utensils className={`w-3.5 h-3.5 mr-2 shrink-0 ${isCosta1 ? 'text-amber-400' : 'text-cyan-400'}`} />
                <span className="truncate">Cozinha Compartilhada</span>
              </div>

              {/* 6. Lavanderia Completa */}
              <div className="bg-[#0b182d] text-slate-200 border border-slate-700/70 p-2 rounded-xl flex items-center shadow-sm">
                <Shirt className={`w-3.5 h-3.5 mr-2 shrink-0 ${isCosta1 ? 'text-amber-400' : 'text-cyan-400'}`} />
                <span className="truncate">Lavanderia Completa</span>
              </div>

              {/* 7. Bicicletário */}
              <div className="bg-[#0b182d] text-slate-200 border border-slate-700/70 p-2 rounded-xl flex items-center shadow-sm">
                <Bike className={`w-3.5 h-3.5 mr-2 shrink-0 ${isCosta1 ? 'text-amber-400' : 'text-cyan-400'}`} />
                <span className="truncate">Bicicletário</span>
              </div>

              {/* 8. Zelador & Câmeras */}
              <div className="bg-[#0b182d] text-slate-200 border border-slate-700/70 p-2 rounded-xl flex items-center shadow-sm">
                <Video className={`w-3.5 h-3.5 mr-2 shrink-0 ${isCosta1 ? 'text-amber-400' : 'text-cyan-400'}`} />
                <span className="truncate">Zelador & Câmeras</span>
              </div>

              {/* 9. Limpeza Semanal */}
              <div className="bg-[#0b182d] text-slate-200 border border-slate-700/70 p-2 rounded-xl flex items-center shadow-sm">
                <Sparkles className={`w-3.5 h-3.5 mr-2 shrink-0 ${isCosta1 ? 'text-amber-400' : 'text-cyan-400'}`} />
                <span className="truncate">Limpeza Semanal</span>
              </div>

              {/* 10. Água, Luz, Wi-Fi & Gás */}
              <div className="bg-[#0b182d] text-slate-200 border border-slate-700/70 p-2 rounded-xl flex items-center shadow-sm col-span-2 sm:col-span-1">
                <Wifi className={`w-3.5 h-3.5 mr-2 shrink-0 ${isCosta1 ? 'text-amber-400' : 'text-cyan-400'}`} />
                <span className="truncate">Água, Luz, Wi-Fi & Gás</span>
              </div>
            </div>
          </div>
        </div>

        {/* Price Tag Box */}
        <div className="pt-2 border-t border-slate-800">
          <div className="bg-gradient-to-r from-[#0d1c38] to-[#0a182e] p-3.5 rounded-2xl border border-amber-500/30 flex items-center justify-between shadow-inner">
            <div>
              <span className="text-[10px] sm:text-xs text-amber-400 font-extrabold block uppercase tracking-wider">
                Valor Mensal Fixo
              </span>
              <div className="flex items-baseline space-x-1.5 mt-0.5">
                <span className="text-2xl sm:text-3xl font-black text-white">
                  R$ {unit.monthlyPrice},00
                </span>
                <span className="text-xs text-slate-300 font-bold">/mês</span>
              </div>
            </div>
            <div className="text-right text-[11px] text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
              Tudo Incluso
            </div>
          </div>
        </div>

        {/* Action Buttons: Reservar, Mapa, Detalhes */}
        <div className="flex gap-2 pt-1">
          <a
            href={`https://wa.me/${BUSINESS_INFO.phoneClean}?text=Olá%20Josiane,%20gostaria%20de%20reservar%20o%20${encodeURIComponent(unit.title)}%20(${encodeURIComponent(unit.city)})`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm uppercase transition-all duration-200 flex items-center justify-center space-x-1.5 shadow-md shadow-emerald-600/20 transform hover:-translate-y-0.5 border border-emerald-400/30 min-h-[44px]"
          >
            <Phone className="w-3.5 h-3.5 fill-current shrink-0" />
            <span>Reservar</span>
          </a>

          <a
            href={isCosta1 ? BUSINESS_INFO.googleMapsUrlCosta1 : BUSINESS_INFO.googleMapsUrlCosta2}
            target="_blank"
            rel="noopener noreferrer"
            title="Ver localização no Google Maps"
            className={`px-3.5 py-3 rounded-2xl font-black text-xs border transition flex items-center space-x-1 min-h-[44px] ${
              isCosta1
                ? 'bg-[#0e1c36] hover:bg-[#152a4e] text-amber-300 hover:text-white border-amber-500/30'
                : 'bg-[#081e33] hover:bg-[#0e2c4a] text-cyan-300 hover:text-white border-cyan-500/30'
            }`}
          >
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>Mapa</span>
          </a>

          <button
            type="button"
            onClick={() => onSelectUnit(unit)}
            className="px-3.5 py-3 rounded-2xl bg-[#0e1c36] hover:bg-[#152a4e] text-slate-200 hover:text-white text-xs sm:text-sm font-black border border-slate-700 hover:border-slate-500 transition flex items-center space-x-1 min-h-[44px] cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 shrink-0 text-amber-400" />
            <span>Detalhes</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export const UnitGrid: React.FC<UnitGridProps> = ({
  units,
  currentBuilding = 'todos',
  onSelectBuilding,
  onSelectUnit,
}) => {
  return (
    <section id="unidades" className="py-10 sm:py-14 bg-[#070e1b]/80 backdrop-blur-[1px] border-t border-amber-500/20 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-3 sm:gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-amber-300 text-xs font-black tracking-wider uppercase mb-1.5 sm:mb-2 bg-[#0e1c36] border border-amber-500/30 px-3.5 py-1 rounded-full">
              <Building2 className="w-4 h-4 text-amber-400" />
              <span>Opções de Quartos Privativos</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Acomodações Disponíveis
            </h2>
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => onSelectBuilding && onSelectBuilding('todos')}
              className={`px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer ${
                currentBuilding === 'todos'
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/30'
                  : 'bg-[#0e1c36] hover:bg-[#152a4e] text-slate-200 border border-slate-700'
              }`}
            >
              Ver Todas
            </button>
            <button
              type="button"
              onClick={() => onSelectBuilding && onSelectBuilding('costa1')}
              className={`px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer flex items-center space-x-1.5 ${
                currentBuilding === 'costa1'
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/30'
                  : 'bg-[#0e1c36] hover:bg-[#152a4e] text-amber-300 border border-amber-500/30'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Costa I (Itajaí)</span>
            </button>
            <button
              type="button"
              onClick={() => onSelectBuilding && onSelectBuilding('costa2')}
              className={`px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer flex items-center space-x-1.5 ${
                currentBuilding === 'costa2'
                  ? 'bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/30'
                  : 'bg-[#081e33] hover:bg-[#0e2c4a] text-cyan-300 border border-cyan-500/30'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Costa II (Barra Velha)</span>
            </button>
          </div>
        </div>

        {/* Selected Building Direct Banner for Costa I */}
        {currentBuilding === 'costa1' && (
          <div className="mb-6 sm:mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0d1d3a] to-[#0a1529] border border-amber-500/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300 font-black flex items-center justify-center shrink-0">
                I
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-bold text-amber-400 uppercase tracking-wide block">Acomodações Selecionadas:</span>
                <h3 className="text-base sm:text-lg font-black text-white">Residencial Costa I — Itajaí / SC</h3>
                <p className="text-xs sm:text-sm text-slate-300">Rua Maranhão, 333 Cordeiros</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 self-stretch md:self-auto">
              <a
                href={BUSINESS_INFO.googleMapsUrlCosta1}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#0e1c36] hover:bg-[#162a50] text-amber-300 hover:text-amber-200 text-xs sm:text-sm font-black rounded-xl border border-amber-500/40 shadow transition flex items-center space-x-1.5 justify-center min-h-[42px]"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Localização (Google Maps)</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.phoneClean}?text=Olá%20Josiane,%20gostaria%20de%20reservar%20um%20quarto%20no%20Residencial%20Costa%20I%20em%20Itajaí`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-black rounded-xl shadow transition flex items-center space-x-1.5 justify-center min-h-[42px]"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Reservar em Itajaí</span>
              </a>
            </div>
          </div>
        )}

        {/* Selected Building Direct Banner for Costa II */}
        {currentBuilding === 'costa2' && (
          <div className="mb-6 sm:mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#082035] to-[#071626] border border-cyan-500/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-black flex items-center justify-center shrink-0">
                II
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-bold text-cyan-400 uppercase tracking-wide block">Acomodações Selecionadas:</span>
                <h3 className="text-base sm:text-lg font-black text-white">Residencial Costa II — Barra Velha / SC</h3>
                <p className="text-xs sm:text-sm text-slate-300">R. José Antonio de Jesus, 536 - Bairro Itajubá</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 self-stretch md:self-auto">
              <a
                href={BUSINESS_INFO.googleMapsUrlCosta2}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#081e33] hover:bg-[#0e2c4a] text-cyan-300 hover:text-cyan-200 text-xs sm:text-sm font-black rounded-xl border border-cyan-500/40 shadow transition flex items-center space-x-1.5 justify-center min-h-[42px]"
              >
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Localização (Google Maps)</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.phoneClean}?text=Olá%20Josiane,%20gostaria%20de%20reservar%20um%20quarto%20no%20Residencial%20Costa%20II%20em%20Barra%20Velha`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-black rounded-xl shadow transition flex items-center space-x-1.5 justify-center min-h-[42px]"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Reservar em Barra Velha</span>
              </a>
            </div>
          </div>
        )}

        {/* Units Grid */}
        {units.length === 0 ? (
          <div className="bg-[#0b162c] border-2 border-dashed border-amber-500/30 rounded-3xl p-8 sm:p-12 text-center max-w-lg mx-auto space-y-3 shadow-md">
            <div className="w-14 h-14 rounded-2xl bg-[#0e1c36] text-amber-300 flex items-center justify-center mx-auto border border-amber-500/30">
              <Bed className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-black text-white">Nenhum quarto encontrado</h3>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              Selecione entre Costa I (Itajaí) e Costa II (Barra Velha) para conferir a acomodação.
            </p>
          </div>
        ) : (
          <div className={`grid grid-cols-1 ${units.length > 1 ? 'lg:grid-cols-2 max-w-6xl' : 'max-w-xl'} mx-auto gap-6 sm:gap-8`}>
            {units.map((unit) => (
              <UnitCardItem
                key={unit.id}
                unit={unit}
                onSelectUnit={onSelectUnit}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

