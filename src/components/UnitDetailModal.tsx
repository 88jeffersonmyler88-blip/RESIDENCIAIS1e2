import React, { useState } from 'react';
import {
  X,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Phone,
  ChevronLeft,
  ChevronRight,
  FileText,
  Ban,
  UserCheck,
  Key,
  Bike,
  Sparkles,
  Bed,
  Bath,
  Utensils,
  Shirt,
  Video,
  Wifi,
  Armchair
} from 'lucide-react';
import { CondoUnit } from '../types';
import { BUSINESS_INFO, CONDO_ASSETS } from '../data/condoData';

interface UnitDetailModalProps {
  unit: CondoUnit | null;
  onClose: () => void;
}

export const UnitDetailModal: React.FC<UnitDetailModalProps> = ({
  unit,
  onClose,
}) => {
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);

  if (!unit) return null;

  const isCosta1 = unit.building === 'Residencial Costa I';

  const nextImage = () => {
    setActiveImageIdx((prev) => (prev + 1) % unit.images.length);
  };

  const prevImage = () => {
    setActiveImageIdx((prev) => (prev - 1 + unit.images.length) % unit.images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#0b162c] border-2 border-amber-500/30 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative my-6 text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-[#070e1b]/90 text-amber-300 hover:text-white p-2 rounded-full border border-amber-500/30 shadow transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gallery Slider */}
        <div className="relative h-64 sm:h-80 bg-slate-950 flex items-center justify-center overflow-hidden">
          {unit.images && unit.images.length > 0 ? (
            <img
              src={unit.images[activeImageIdx]}
              alt={unit.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0c1a33] via-[#081224] to-[#050b17] p-8 text-center">
              <div className="w-20 h-20 rounded-3xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-3 shadow-inner">
                <img
                  src={CONDO_ASSETS.logo}
                  alt="Residenciais Costa"
                  className="w-12 h-12 object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-lg font-black text-white">{unit.title}</h4>
              <p className="text-xs text-amber-300 font-bold mt-1">{unit.building} · {unit.city}</p>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b162c] via-slate-950/20 to-transparent pointer-events-none" />

          {/* Navigation arrows */}
          {unit.images && unit.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#070e1b]/90 text-amber-300 border border-amber-500/30 shadow hover:bg-[#0e1c36] transition z-10"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#070e1b]/90 text-amber-300 border border-amber-500/30 shadow hover:bg-[#0e1c36] transition z-10"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Dots */}
          {unit.images && unit.images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5 z-10">
              {unit.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`w-2 h-2 rounded-full transition ${
                    activeImageIdx === idx ? 'bg-amber-400 w-5' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Color-Coded Badges (Top Left) */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
            <span className={`text-white text-xs font-black px-3 py-1 rounded-lg shadow border ${
              isCosta1 ? 'bg-[#0e2347] border-amber-400/40 text-amber-200' : 'bg-[#0c2944] border-cyan-400/40 text-cyan-200'
            }`}>
              {unit.building}
            </span>
            <span className="bg-[#070e1b]/90 text-white text-xs font-bold px-3 py-1 rounded-lg shadow border border-white/20">
              {unit.city}
            </span>
          </div>

          {/* Direct Admin Badge on Image (Bottom Right) */}
          <div className="absolute bottom-3 right-3 flex items-center space-x-2 bg-[#070e1b]/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-amber-500/40 shadow-lg text-amber-200 text-xs font-black z-10">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Locação Direta</span>
          </div>
        </div>

        {/* Thumbnail Preview Strip */}
        {unit.images && unit.images.length > 1 && (
          <div className="bg-[#070e1b] px-6 py-2.5 flex items-center justify-between gap-3 border-b border-slate-800/80 overflow-x-auto">
            <div className="flex items-center gap-2">
              {unit.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`w-12 h-10 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                    activeImageIdx === idx
                      ? 'border-amber-400 scale-105 shadow-md shadow-amber-500/30'
                      : 'border-slate-700 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Miniatura" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-2 text-[11px] text-amber-300 font-bold shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Fotos Reais do Imóvel</span>
            </div>
          </div>
        )}

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-4 sm:space-y-5">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className={`text-xs font-black uppercase ${isCosta1 ? 'text-amber-400' : 'text-cyan-400'}`}>
                  {unit.unitNumber}
                </span>
                <span className="text-[10px] sm:text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/30 font-extrabold">
                  Sem Caução
                </span>
              </div>
              <h2 className="text-lg sm:text-2xl font-black text-white mt-1">
                {unit.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 flex items-center mt-1 font-medium">
                <MapPin className="w-3.5 h-3.5 text-amber-400 mr-1 shrink-0" />
                <span>{unit.address}</span>
              </p>
            </div>

            <div className="bg-[#0e1c36] border border-amber-500/30 p-3 sm:p-3.5 rounded-2xl shrink-0 text-left sm:text-right">
              <span className="text-[10px] sm:text-xs text-amber-400 font-extrabold block uppercase">Aluguel Mensal Fixo</span>
              <div className="text-2xl sm:text-3xl font-black text-white">
                R$ {unit.monthlyPrice},00
                <span className="text-xs font-normal text-slate-300">/mês</span>
              </div>
            </div>
          </div>

          {/* Key Rules Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 text-xs">
            <div className="bg-[#0e1c36] p-2.5 sm:p-3 rounded-xl border border-slate-700 flex items-center space-x-2">
              <UserCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="font-bold text-white block">Somente Homens</span>
                <span className="text-[10px] sm:text-xs text-slate-400">Sem exceção</span>
              </div>
            </div>

            <div className="bg-[#0e1c36] p-2.5 sm:p-3 rounded-xl border border-slate-700 flex items-center space-x-2">
              <Key className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="font-bold text-white block">Sem Caução</span>
                <span className="text-[10px] sm:text-xs text-slate-400">Aluguel simples</span>
              </div>
            </div>

            <div className="bg-[#0e1c36] p-2.5 sm:p-3 rounded-xl border border-slate-700 flex items-center space-x-2">
              <Ban className="w-4 h-4 text-rose-400 shrink-0" />
              <div>
                <span className="font-bold text-white block">Sem Pets</span>
                <span className="text-[10px] sm:text-xs text-slate-400">Não aceita animais</span>
              </div>
            </div>

            <div className="bg-[#0e1c36] p-2.5 sm:p-3 rounded-xl border border-slate-700 flex items-center space-x-2">
              <FileText className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="font-bold text-white block">Contrato Direto</span>
                <span className="text-[10px] sm:text-xs text-slate-400">Com Josiane</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-amber-300 uppercase tracking-wider mb-1.5">Descrição</h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-[#0e1c36] p-3.5 sm:p-4 rounded-xl border border-slate-700 font-medium">
              {unit.description}
            </p>
          </div>

          {/* Included Services */}
          <div className="bg-[#0e1c36] border border-amber-500/30 p-4 sm:p-5 rounded-2xl space-y-2.5">
            <h3 className="text-xs sm:text-sm font-black text-amber-300 uppercase tracking-wider flex items-center">
              <ShieldCheck className="w-4 h-4 mr-1.5 text-amber-400 shrink-0" />
              Incluso no valor mensal (R$ {unit.monthlyPrice},00):
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2.5 text-xs sm:text-sm font-medium text-slate-200">
              <div className="flex items-center space-x-2 bg-slate-900/50 p-2 rounded-lg">
                <UserCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Somente para Homens</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-900/50 p-2 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Registro em Cartório</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-900/50 p-2 rounded-lg">
                <Armchair className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Mobiliado</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-900/50 p-2 rounded-lg">
                <Bed className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Quarto Individual Privativo</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-900/50 p-2 rounded-lg">
                <Bath className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Banheiro Compartilhado</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-900/50 p-2 rounded-lg">
                <Utensils className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Cozinha Compartilhada</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-900/50 p-2 rounded-lg">
                <Shirt className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Lavanderia Completa</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-900/50 p-2 rounded-lg">
                <Bike className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Bicicletário</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-900/50 p-2 rounded-lg">
                <Video className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Zelador & Câmeras</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-900/50 p-2 rounded-lg">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Limpeza Semanal</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-900/50 p-2 rounded-lg col-span-1 sm:col-span-2 lg:col-span-3">
                <Wifi className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Água, Luz, Wi-Fi & Gás Inclusos</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <a
              href={`https://wa.me/${BUSINESS_INFO.phoneClean}?text=Olá%20Josiane,%20gostaria%20de%20reservar%20o%20${encodeURIComponent(unit.unitNumber)}%20no%20${encodeURIComponent(unit.building)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3.5 sm:py-4 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm uppercase shadow transition flex items-center justify-center space-x-2 border border-emerald-400/30 min-h-[48px]"
            >
              <Phone className="w-4 h-4 fill-current shrink-0" />
              <span className="text-center">Chamar Josiane no WhatsApp: (47) 93384-3928</span>
            </a>

            <a
              href={isCosta1 ? BUSINESS_INFO.googleMapsUrlCosta1 : BUSINESS_INFO.googleMapsUrlCosta2}
              target="_blank"
              rel="noopener noreferrer"
              className={`py-3.5 sm:py-4 px-4 rounded-xl font-bold text-xs sm:text-sm border transition flex items-center justify-center space-x-1.5 min-h-[48px] ${
                isCosta1
                  ? 'bg-[#0e1c36] hover:bg-[#152a4e] text-amber-300 border-amber-500/40'
                  : 'bg-[#081e33] hover:bg-[#0e2c4a] text-cyan-300 border-cyan-500/40'
              }`}
            >
              <MapPin className="w-4 h-4 shrink-0" />
              <span>Ver Localização</span>
            </a>

            <button
              onClick={onClose}
              className="py-3.5 sm:py-4 px-5 rounded-xl bg-[#0e1c36] hover:bg-[#152a4e] text-slate-300 font-bold text-xs sm:text-sm border border-slate-700 transition min-h-[48px]"
            >
              Fechar
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
