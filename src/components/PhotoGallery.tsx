import React, { useState } from 'react';
import { Camera, Image as ImageIcon, Sparkles, Building2, MapPin, X, ChevronLeft, ChevronRight, Eye, CheckCircle2, Phone } from 'lucide-react';
import { GALLERY_PHOTOS, BUSINESS_INFO } from '../data/condoData';
import { GalleryPhoto } from '../types';

interface PhotoGalleryProps {
  currentBuilding?: string;
  onSelectBuilding?: (building: 'costa1' | 'costa2' | 'todos') => void;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  currentBuilding = 'todos',
  onSelectBuilding,
}) => {
  const [filterCategory, setFilterCategory] = useState<'todos' | 'costa1' | 'costa2'>('costa1');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Sync internal filter with external filter if given
  const activeTab = currentBuilding !== 'todos' ? currentBuilding : filterCategory;

  const handleTabChange = (tab: 'todos' | 'costa1' | 'costa2') => {
    setFilterCategory(tab);
    if (onSelectBuilding) {
      onSelectBuilding(tab);
    }
  };

  const displayedPhotos = GALLERY_PHOTOS.filter((photo) => {
    if (activeTab === 'costa1') {
      return photo.category === 'costa1' || photo.building === 'Residencial Costa I';
    }
    if (activeTab === 'costa2') {
      return photo.category === 'costa2' || photo.building === 'Residencial Costa II';
    }
    return true;
  });

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % displayedPhotos.length);
    }
  };

  const prevPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + displayedPhotos.length) % displayedPhotos.length);
    }
  };

  const currentPhoto = selectedPhotoIndex !== null ? displayedPhotos[selectedPhotoIndex] : null;

  return (
    <section id="galeria" className="py-12 sm:py-16 bg-[#060c18] border-t border-amber-500/20 text-white scroll-mt-20 relative">
      {/* Golden & Blue Ambient Lights */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-amber-300 text-xs font-black tracking-wider uppercase mb-1.5 sm:mb-2 bg-[#0e1c36] border border-amber-500/30 px-3.5 py-1 rounded-full">
              <Camera className="w-4 h-4 text-amber-400" />
              <span>Fotos Reais dos Imóveis</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Galeria de Fotos dos Residenciais
            </h2>
            <p className="text-slate-200 text-sm sm:text-base mt-1 font-medium max-w-2xl">
              Confira as fotos reais dos quartos privativos e instalações do <strong className="text-amber-300">Costa I (Itajaí)</strong> e <strong className="text-cyan-300">Costa II (Barra Velha)</strong>.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center space-x-2 bg-[#071120] p-1.5 rounded-2xl border border-slate-700/60 shadow-xl shrink-0">
            {/* Costa I (Itajaí) */}
            <button
              type="button"
              onClick={() => handleTabChange(activeTab === 'costa1' ? 'todos' : 'costa1')}
              className={`relative overflow-hidden flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all duration-300 cursor-pointer min-h-[42px] ${
                activeTab === 'costa1'
                  ? 'bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-slate-950 border-2 border-amber-200 shadow-[0_0_24px_rgba(245,158,11,0.85)] scale-[1.03] gold-radiant-active'
                  : 'bg-[#0b182d] hover:bg-[#10223f] text-amber-200 border-2 border-amber-500/50 hover:border-amber-400 gold-pulse-ambient'
              }`}
            >
              {/* Reluzente Shimmer beam when active */}
              {activeTab === 'costa1' && (
                <div className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none animate-gold-shimmer" />
              )}
              <div
                className={`w-2 h-2 rounded-full shrink-0 transition-colors ${
                  activeTab === 'costa1'
                    ? 'bg-slate-950 shadow-[0_0_8px_rgba(0,0,0,0.8)]'
                    : 'bg-amber-400 animate-ping'
                }`}
              />
              <span className="whitespace-nowrap">Costa I (Itajaí)</span>
            </button>

            {/* Costa II (Barra Velha) */}
            <button
              type="button"
              onClick={() => handleTabChange(activeTab === 'costa2' ? 'todos' : 'costa2')}
              className={`relative overflow-hidden flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all duration-300 cursor-pointer min-h-[42px] ${
                activeTab === 'costa2'
                  ? 'bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 text-slate-950 border-2 border-cyan-200 shadow-[0_0_24px_rgba(6,182,212,0.85)] scale-[1.03] cyan-radiant-active'
                  : 'bg-[#0b182d] hover:bg-[#10223f] text-cyan-200 border-2 border-cyan-500/50 hover:border-cyan-400 cyan-pulse-ambient'
              }`}
            >
              {/* Reluzente Shimmer beam when active */}
              {activeTab === 'costa2' && (
                <div className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none animate-cyan-shimmer" />
              )}
              <div
                className={`w-2 h-2 rounded-full shrink-0 transition-colors ${
                  activeTab === 'costa2'
                    ? 'bg-slate-950 shadow-[0_0_8px_rgba(0,0,0,0.8)]'
                    : 'bg-cyan-400 animate-ping'
                }`}
              />
              <span className="whitespace-nowrap">Costa II (Barra Velha)</span>
            </button>
          </div>
        </div>

        {/* Photo Grid */}
        {displayedPhotos.length === 0 ? (
          <div className="bg-[#0b162c] border-2 border-dashed border-amber-500/30 rounded-3xl p-8 sm:p-12 text-center max-w-lg mx-auto space-y-3 shadow-xl">
            <div className="w-16 h-16 rounded-2xl bg-[#0e1c36] text-amber-300 flex items-center justify-center mx-auto border border-amber-500/30">
              <Camera className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-black text-white">Galeria em Atualização</h3>
            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
              As imagens das acomodações estão sendo atualizadas. Para mais fotos, vídeos ou agendamento de visita, fale diretamente com a Josiane pelo WhatsApp.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {displayedPhotos.map((photo, index) => {
              const isCosta1 = photo.building?.includes('Costa I') || photo.category === 'costa1';
              
              return (
                <div
                  key={photo.id || index}
                  onClick={() => openLightbox(index)}
                  className={`group relative h-64 sm:h-72 rounded-3xl overflow-hidden cursor-pointer border-2 bg-slate-950 transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-2xl flex flex-col justify-end ${
                    isCosta1 ? 'border-amber-500/30 hover:border-amber-400' : 'border-cyan-500/30 hover:border-cyan-400'
                  }`}
                >
                  {/* Photo Image */}
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback in case of broken path
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                    }}
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070e1b] via-slate-950/30 to-transparent group-hover:via-slate-950/20 transition-all" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className={`text-[11px] font-black px-2.5 py-1 rounded-xl shadow-lg backdrop-blur-md border ${
                      isCosta1 ? 'bg-[#0f2347]/90 border-amber-400/40 text-amber-200' : 'bg-[#0c2944]/90 border-cyan-400/40 text-cyan-200'
                    }`}>
                      {photo.building || (isCosta1 ? 'Residencial Costa I' : 'Residencial Costa II')}
                    </span>

                    <div className="w-8 h-8 rounded-full bg-[#070e1b]/85 border border-white/20 text-white flex items-center justify-center backdrop-blur-md group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition shadow">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom Content / Caption */}
                  <div className="relative z-10 p-4 space-y-1">
                    <span className="text-[11px] font-bold text-amber-300 flex items-center">
                      <MapPin className="w-3 h-3 mr-1 shrink-0 text-amber-400" />
                      {photo.city || (isCosta1 ? 'Itajaí - SC' : 'Barra Velha - SC')}
                    </span>
                    <h3 className="font-extrabold text-sm sm:text-base text-white line-clamp-1 leading-snug group-hover:text-amber-200 transition">
                      {photo.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-300 line-clamp-2 leading-relaxed opacity-90">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedPhotoIndex !== null && currentPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/95 backdrop-blur-md">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 bg-[#0e1c36] text-amber-300 hover:text-white p-3 rounded-full border border-amber-500/40 shadow-xl transition cursor-pointer"
            title="Fechar"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={prevPhoto}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 bg-[#0e1c36]/90 hover:bg-[#152c56] text-amber-300 p-3 sm:p-4 rounded-full border border-amber-500/40 shadow-xl transition cursor-pointer"
            title="Foto Anterior"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={nextPhoto}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 bg-[#0e1c36]/90 hover:bg-[#152c56] text-amber-300 p-3 sm:p-4 rounded-full border border-amber-500/40 shadow-xl transition cursor-pointer"
            title="Próxima Foto"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Main Content */}
          <div className="max-w-4xl w-full flex flex-col items-center space-y-4 px-2">
            <div className="relative max-h-[75vh] w-full flex items-center justify-center overflow-hidden rounded-3xl border-2 border-amber-500/40 shadow-2xl bg-black">
              <img
                src={currentPhoto.url}
                alt={currentPhoto.title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Photo Info Banner */}
            <div className="bg-[#0b162c] border border-amber-500/30 rounded-2xl p-4 sm:p-5 w-full text-center space-y-2.5 shadow-xl">
              <div className="flex items-center justify-center space-x-2 text-xs font-black text-amber-400">
                <span>{currentPhoto.building}</span>
                <span>•</span>
                <span>{currentPhoto.city}</span>
                <span>•</span>
                <span className="text-slate-400 font-medium">Foto {selectedPhotoIndex + 1} de {displayedPhotos.length}</span>
              </div>
              <h4 className="text-base sm:text-lg font-black text-white">{currentPhoto.title}</h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">{currentPhoto.caption}</p>

              {/* Quick Actions in Lightbox */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
                <a
                  href={currentPhoto.building?.includes('Costa I') || currentPhoto.category === 'costa1' ? BUSINESS_INFO.googleMapsUrlCosta1 : BUSINESS_INFO.googleMapsUrlCosta2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-[#0e1c36] hover:bg-[#152a4e] text-amber-300 font-black text-xs border border-amber-500/40 transition flex items-center space-x-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Ver Localização no Google Maps</span>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.phoneClean}?text=Olá%20Josiane,%20vi%20a%20foto%20${encodeURIComponent(currentPhoto.title)}%20e%20gostaria%20de%20reservar`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs shadow transition flex items-center space-x-1.5"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span>Reservar Quarto</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
