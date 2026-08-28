export type RentalType = 'anual' | 'temporada' | 'todos';
export type BuildingFilter = 'todos' | 'costa1' | 'costa2' | 'nenhum';

export interface CondoUnit {
  id: string;
  unitNumber: string;
  title: string;
  building: 'Residencial Costa I' | 'Residencial Costa II';
  city: 'Itajaí - SC' | 'Barra Velha - SC' | 'Itajubá - Barra Velha - SC';
  address: string;
  rentalType: 'anual' | 'temporada' | 'ambos';
  bedrooms: number;
  bathrooms: number;
  areaSqm: number;
  monthlyPrice: number; // R$ 900
  allInclusive: boolean; // Taxas inclusas
  onlyMen: boolean; // Somente para homens
  petFriendly: boolean; // False (Sem pet)
  simpleContract: boolean; // Contrato simples
  furnished: boolean;
  hasParking: boolean;
  seaView: boolean;
  floor: number;
  status: 'disponivel' | 'reservado' | 'alugado';
  description: string;
  amenities: string[];
  images: string[];
  videoUrl?: string;
  highlights: string[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'geral' | 'interiores' | 'lazer' | 'exterior' | 'costa1' | 'costa2' | 'videos';
  building?: string;
  city?: string;
  url: string;
  caption: string;
  duration?: string;
}

export interface LocationLandmark {
  name: string;
  type: 'praia' | 'supermercado' | 'restaurante' | 'ponto_turistico' | 'transporte';
  distance: string;
  walkTime: string;
  description: string;
}

export interface VisitInquiry {
  name: string;
  phone: string;
  email: string;
  unitId?: string;
  rentalType: 'anual' | 'temporada';
  preferredDate: string;
  preferredTime: string;
  notes: string;
}

export interface FilterState {
  searchQuery: string;
  building: BuildingFilter;
  rentalType: RentalType;
  maxPrice: number;
  minBedrooms: number;
  onlyFurnished: boolean;
  onlyParking: boolean;
}
