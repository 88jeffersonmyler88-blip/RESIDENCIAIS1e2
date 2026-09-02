import { CondoUnit, GalleryPhoto, LocationLandmark } from '../types';

export const CONDO_ASSETS = {
  logo: '/images/logo.jpeg',
};

export const BUSINESS_INFO = {
  name: 'Residenciais Costa I e Costa II',
  management: 'AJC Serviços Administrativos',
  subtitle: 'Aluguel de Quartos Individuais · Itajaí & Barra Velha - SC',
  category: 'Quartos Individuais com Tudo Incluso',
  contactName: 'Josiane',
  costa1: {
    title: 'Residencial Costa I',
    city: 'Itajaí - SC',
    neighborhood: 'Residencial Costa I em Itajaí',
    address: 'Rua Maranhão, 333 - Cordeiros, Itajaí - SC',
    highlights: '1º Mês na entrada + Registrado em cartório',
    badgeColor: 'cobalt',
  },
  costa2: {
    title: 'Residencial Costa II',
    city: 'Barra Velha - SC (Itajubá)',
    neighborhood: 'Bairro Itajubá',
    address: 'R. José Antonio de Jesus, 536 - Bairro Itajubá, Barra Velha - SC',
    highlights: 'Ótima localização em Itajubá + Bicicletário',
    badgeColor: 'cyan',
  },
  phone: '(47) 93384-3928',
  phoneDisplay: '(47) 93384-3928 (Josiane)',
  phoneClean: '5547933843928',
  hours: 'Atendimento diário com Josiane · 08:00 às 20:00',
  monthlyRate: 900,
  includedFeesText: 'Água, Luz, Internet Wi-Fi, Gás, Zelador, Câmeras e Limpeza Semanal das Áreas Comuns',
  rules: {
    gender: 'Somente para homens (sem exceção)',
    pets: 'Sem pet (Não aceita animais)',
    deposit: 'Sem caução (valor do aluguel pago sem devolução)',
    payment: 'Pagamento do 1º mês na entrada',
    contract: 'Contrato simples com Registrado em cartório',
  },
  googleMapsUrlCosta1: 'https://maps.google.com/?q=Rua+Maranh%C3%A3o,+333,+Itaja%C3%AD+-+SC',
  googleMapsUrlCosta2: 'https://maps.google.com/?q=R.+Jos%C3%A9+Antonio+de+Jesus,+536,+Barra+Velha+-+SC',
  googleMapsUrl: 'https://maps.google.com/?q=R.+Jos%C3%A9+Antonio+de+Jesus,+536,+Barra+Velha+-+SC',
};

export const CONDO_UNITS: CondoUnit[] = [
  // COSTA I - ITAJAÍ - SC (Azul Cobalto) - Fotos reais do Google Drive (Pasta 1)
  {
    id: 'costa1-101',
    unitNumber: 'Quarto Individual - Costa I',
    title: 'Quarto Individual no Residencial Costa I em Itajaí',
    building: 'Residencial Costa I',
    city: 'Itajaí - SC',
    address: 'Rua Maranhão, 333 Cordeiros, Itajaí - SC',
    rentalType: 'anual',
    bedrooms: 1,
    bathrooms: 1,
    areaSqm: 28,
    monthlyPrice: 950,
    allInclusive: true,
    onlyMen: true,
    petFriendly: false,
    simpleContract: true,
    furnished: true,
    hasParking: true,
    seaView: false,
    floor: 1,
    status: 'disponivel',
    description: 'Quarto individual no Residencial Costa I em Itajaí - SC. Pagamento do 1º mês na entrada com contrato simples e Registrado em cartório. R$ 950,00/mês com água, luz, internet, gás e limpeza inclusos. Exclusivo para homens sem exceção.',
    amenities: [
      'Somente para Homens',
      'Registro em Cartório',
      'Mobiliado',
      'Quarto Individual Privativo',
      'Banheiro Compartilhado',
      'Cozinha Compartilhada',
      'Lavanderia Completa',
      'Bicicletário',
      'Zelador & Câmeras',
      'Limpeza Semanal',
      'Água, Luz, Wi-Fi & Gás'
    ],
    images: [
      '/images/costa1/img1.jpeg',
      '/images/costa1/img2.jpeg',
      '/images/costa1/img3.jpeg',
      '/images/costa1/img4.jpeg',
      '/images/costa1/img5.jpeg',
      '/images/costa1/img6.jpeg'
    ],
    highlights: ['Somente Homens', 'Registro em Cartório', 'Quarto Individual', 'Tudo Incluso']
  },

  // COSTA II - BARRA VELHA / ITAJUBÁ (Azul Ciano / Turquesa)
  {
    id: 'costa2-101',
    unitNumber: 'Quarto Individual - Costa II',
    title: 'Quarto Individual no Residencial Costa II em Barra Velha',
    building: 'Residencial Costa II',
    city: 'Barra Velha - SC',
    address: 'R. José Antonio de Jesus, 536 - Bairro Itajubá, Barra Velha - SC',
    rentalType: 'anual',
    bedrooms: 1,
    bathrooms: 1,
    areaSqm: 35,
    monthlyPrice: 900,
    allInclusive: true,
    onlyMen: true,
    petFriendly: false,
    simpleContract: true,
    furnished: true,
    hasParking: true,
    seaView: false,
    floor: 1,
    status: 'disponivel',
    description: 'Quarto individual no Residencial Costa II em Barra Velha - SC (Itajubá). R$ 900,00/mês com água, luz, internet, gás e limpeza inclusos. Exclusivo para homens sem exceção.',
    amenities: [
      'Somente para Homens',
      'Registro em Cartório',
      'Mobiliado',
      'Quarto Individual Privativo',
      'Banheiro Compartilhado',
      'Cozinha Compartilhada',
      'Lavanderia Completa',
      'Bicicletário',
      'Zelador & Câmeras',
      'Limpeza Semanal',
      'Água, Luz, Wi-Fi & Gás'
    ],
    images: [
      '/images/costa2/img5.jpeg',
      '/images/costa2/img3.jpeg',
      '/images/costa2/img2.jpeg',
      '/images/costa2/img1.jpeg',
      '/images/costa2/img4.jpeg'
    ],
    highlights: ['Somente Homens', 'Registro em Cartório', 'Quarto Individual', 'Tudo Incluso']
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  // COSTA I - ITAJAÍ
  {
    id: 'p1_1',
    title: 'Residencial Costa I - Pátio e Estrutura dos Quartos',
    category: 'costa1',
    building: 'Residencial Costa I',
    city: 'Itajaí - SC',
    url: '/images/costa1/img1.jpeg',
    caption: 'Residencial Costa I: Pátio externo com escada de acesso aos quartos, piso de brita e instalações limpas.'
  },
  {
    id: 'p1_2',
    title: 'Residencial Costa I - Cozinha & Refeitório Compartilhado',
    category: 'costa1',
    building: 'Residencial Costa I',
    city: 'Itajaí - SC',
    url: '/images/costa1/img2.jpeg',
    caption: 'Residencial Costa I: Ampla cozinha compartilhada com mesa rústica de madeira, geladeiras, fogão e bancada.'
  },
  {
    id: 'p1_3',
    title: 'Residencial Costa I - Banheiro Higienizado Completo',
    category: 'costa1',
    building: 'Residencial Costa I',
    city: 'Itajaí - SC',
    url: '/images/costa1/img3.jpeg',
    caption: 'Residencial Costa I: Banheiro completo com azulejos claros, pia de coluna com espelho, vaso sanitário e box.'
  },
  {
    id: 'p1_4',
    title: 'Residencial Costa I - Instalações e Quartos',
    category: 'costa1',
    building: 'Residencial Costa I',
    city: 'Itajaí - SC',
    url: '/images/costa1/img4.jpeg',
    caption: 'Residencial Costa I: Acomodações individuais privativas com chave, arejadas e organizadas (R$ 950/mês tudo incluso).'
  },
  {
    id: 'p1_5',
    title: 'Residencial Costa I - Estrutura do Residencial',
    category: 'costa1',
    building: 'Residencial Costa I',
    city: 'Itajaí - SC',
    url: '/images/costa1/img5.jpeg',
    caption: 'Residencial Costa I: Ambiente seguro, monitoramento por câmeras, zelador e limpeza frequente.'
  },
  {
    id: 'p1_6',
    title: 'Residencial Costa I - Detalhes das Acomodações',
    category: 'costa1',
    building: 'Residencial Costa I',
    city: 'Itajaí - SC',
    url: '/images/costa1/img6.jpeg',
    caption: 'Residencial Costa I: Instalações prontas para morar em Cordeiros, Itajaí.'
  },

  // COSTA II - BARRA VELHA (ITAJUBÁ)
  {
    id: 'p2_1',
    title: 'Residencial Costa II - Vista e Acomodações em Itajubá',
    category: 'costa2',
    building: 'Residencial Costa II',
    city: 'Barra Velha - SC',
    url: '/images/costa2/img5.jpeg',
    caption: 'Residencial Costa II: R. José Antonio de Jesus, 536 - Bairro Itajubá, Barra Velha - SC.'
  },
  {
    id: 'p2_2',
    title: 'Residencial Costa II - Quarto Individual Aconchegante',
    category: 'costa2',
    building: 'Residencial Costa II',
    city: 'Barra Velha - SC',
    url: '/images/costa2/img3.jpeg',
    caption: 'Residencial Costa II: Quarto privativo arejado em Barra Velha (R$ 900/mês tudo incluso).'
  },
  {
    id: 'p2_3',
    title: 'Residencial Costa II - Instalações e Conforto',
    category: 'costa2',
    building: 'Residencial Costa II',
    city: 'Barra Velha - SC',
    url: '/images/costa2/img2.jpeg',
    caption: 'Residencial Costa II: Ambiente limpo, higienizado semanalmente e seguro.'
  },
  {
    id: 'p2_4',
    title: 'Residencial Costa II - Fachada e Acesso',
    category: 'costa2',
    building: 'Residencial Costa II',
    city: 'Barra Velha - SC',
    url: '/images/costa2/img1.jpeg',
    caption: 'Residencial Costa II: Próximo à praia, bicicletário e fácil acesso ao comércio de Itajubá.'
  },
  {
    id: 'p2_5',
    title: 'Residencial Costa II - Vista Interna das Unidades',
    category: 'costa2',
    building: 'Residencial Costa II',
    city: 'Barra Velha - SC',
    url: '/images/costa2/img4.jpeg',
    caption: 'Residencial Costa II: Moradia tranquila exclusiva para homens sem necessidade de caução.'
  }
];

export const NEARBY_LANDMARKS: LocationLandmark[] = [
  {
    name: 'Itajaí - SC (Residencial Costa I)',
    type: 'ponto_turistico',
    distance: 'Rua Maranhão, 333 - Cordeiros, Itajaí - SC',
    walkTime: 'Acesso fácil a transporte e comércio',
    description: 'Localização no Residencial Costa I em Itajaí - SC.'
  },
  {
    name: 'Itajubá - Barra Velha - SC (Residencial Costa II)',
    type: 'praia',
    distance: 'R. José Antonio de Jesus, 536 - Bairro Itajubá',
    walkTime: 'Ótima localização no bairro Itajubá',
    description: 'Localização privilegiada no Bairro Itajubá em Barra Velha - SC.'
  }
];

export const FAQS = [
  {
    q: 'Qual é o valor do aluguel e o que está incluso?',
    a: 'O valor fixo é R$ 950,00/mês para Itajaí (Costa I) e R$ 900,00/mês para Barra Velha (Costa II). TAXAS INCLUSAS: água, luz, internet Wi-Fi, gás, zelador, câmeras de segurança e limpeza das áreas compartilhadas 1x por semana. Paga-se somente o aluguel!'
  },
  {
    q: 'Onde fica o Residencial Costa I e quais as condições?',
    a: 'Fica na Rua Maranhão, 333 - Cordeiros, Itajaí - SC. O pagamento do 1º mês é feito na entrada, acompanhado de contrato simples com Registrado em cartório.'
  },
  {
    q: 'Onde fica o Residencial Costa II e quais os diferenciais?',
    a: 'Fica na R. José Antonio de Jesus, 536, Bairro Itajubá, Barra Velha - SC. Conta com ótima localização perto da praia, bicicletário e atendimento direto com a proprietária Josiane.'
  },
  {
    q: 'Quais são as regras e restrições?',
    a: 'O aluguel é SOMENTE PARA HOMENS (sem exceção). Não é cobrada caução (e o valor pago do aluguel não possui devolução). Não aceita animais de estimação (sem pet).'
  },
  {
    q: 'Como falar diretamente com a proprietária?',
    a: 'Você pode ligar ou enviar mensagem no WhatsApp para a Josiane no número (47) 93384-3928.'
  }
];
