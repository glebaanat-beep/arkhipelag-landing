export interface TravelEssential {
  id: string;
  name: string;
  nameRu: string;
  price: number;
  description: string;
  descriptionRu: string;
  icon: string;
}

export const travelEssentialsData: TravelEssential[] = [
  {
    id: 'digital-companion',
    name: 'Digital Travel Companion',
    nameRu: 'Цифровой помощник путешественника',
    price: 4200,
    description: 'Comprehensive digital package with personalized city guides, real-time restaurant recommendations, and cultural insights updated throughout your stay.',
    descriptionRu: 'Комплексный цифровой пакет с персонализированными путеводителями, рекомендациями ресторанов в реальном времени и культурными инсайтами, обновляемыми на протяжении всего пребывания.',
    icon: 'Smartphone'
  },
  {
    id: 'airport-welcome',
    name: 'Premium Airport Welcome',
    nameRu: 'Премиум встреча в аэропорту',
    price: 7800,
    description: 'Fast-track immigration service with dedicated assistant, luggage handling, and private lounge access before hotel transfer.',
    descriptionRu: 'Ускоренное прохождение иммиграции с персональным ассистентом, обработка багажа и доступ в приватный лонж перед трансфером в отель.',
    icon: 'Plane'
  },
  {
    id: 'culinary-kit',
    name: 'Culinary Discovery Kit',
    nameRu: 'Набор кулинарных открытий',
    price: 3500,
    description: 'Handpicked selection of premium Thai ingredients with virtual masterclass and recipe book for authentic home cooking.',
    descriptionRu: 'Тщательно отобранные премиальные тайские ингредиенты с виртуальным мастер-классом и книгой рецептов для аутентичной домашней кухни.',
    icon: 'ChefHat'
  },
  {
    id: 'executive-connectivity',
    name: 'Executive Connectivity',
    nameRu: 'Бизнес-подключение',
    price: 6900,
    description: 'Global hotspot device with unlimited data, local SIM backup, and dedicated tech support during your stay.',
    descriptionRu: 'Глобальное устройство с неограниченным интернетом, резервная локальная SIM-карта и выделенная техподдержка во время пребывания.',
    icon: 'Wifi'
  },
  {
    id: 'cultural-workshop',
    name: 'Cultural Workshop Access',
    nameRu: 'Доступ к культурной мастерской',
    price: 8400,
    description: 'Private session with master artisan in traditional Thai crafts - choose from silk weaving, fruit carving, or pottery.',
    descriptionRu: 'Приватная сессия с мастером традиционных тайских ремесел - выбор из шелкоткачества, карвинга фруктов или гончарного дела.',
    icon: 'Palette'
  },
  {
    id: 'wellness-package',
    name: 'Wellness Arrival Package',
    nameRu: 'Велнес-пакет по прибытии',
    price: 5100,
    description: 'Premium wellness set including organic massage oils, herbal compresses, and guided meditation session.',
    descriptionRu: 'Премиальный велнес-набор, включающий органические масла для массажа, травяные компрессы и сеанс управляемой медитации.',
    icon: 'Sparkles'
  },
  {
    id: 'portrait-experience',
    name: 'Portrait Experience',
    nameRu: 'Портретная фотосессия',
    price: 9600,
    description: '90-minute professional photoshoot at iconic locations with 15 professionally edited digital portraits.',
    descriptionRu: '90-минутная профессиональная фотосессия в культовых локациях с 15 профессионально обработанными цифровыми портретами.',
    icon: 'Camera'
  },
  {
    id: 'personal-assistant',
    name: 'Personal Assistant Day',
    nameRu: 'День с личным ассистентом',
    price: 12300,
    description: '6-hour dedicated concierge service for shopping, reservations, and local exploration assistance.',
    descriptionRu: '6-часовой персональный консьерж-сервис для шопинга, резервирований и помощи в изучении местности.',
    icon: 'UserRound'
  },
  {
    id: 'luxury-transport',
    name: 'Luxury Transport Package',
    nameRu: 'Пакет премиум транспорта',
    price: 10700,
    description: 'Full-day premium vehicle with experienced driver for stress-free city navigation and sightseeing.',
    descriptionRu: 'Премиум автомобиль с опытным водителем на целый день для комфортного передвижения по городу и осмотра достопримечательностей.',
    icon: 'Car'
  },
  {
    id: 'exclusive-dining',
    name: 'Exclusive Dining Curation',
    nameRu: 'Эксклюзивная гастрономическая программа',
    price: 11900,
    description: 'Priority access to sought-after restaurants with personalized menu planning and sommelier consultation.',
    descriptionRu: 'Приоритетный доступ к популярным ресторанам с персонализированным планированием меню и консультацией сомелье.',
    icon: 'UtensilsCrossed'
  }
];
