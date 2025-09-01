import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ru';

interface Translations {
  en: Record<string, string>;
  ru: Record<string, string>;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Translations = {
  en: {
    // Navigation
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'ARKHIPELAG',
    'hero.tagline': 'Navigating Your Luxury',
    'hero.statement': 'Unparalleled expertise and absolute discretion in luxury concierge services',
    'hero.cta': 'Discover Our Services',
    
    // About Us
    'about.title': 'About Us',
    'about.subtitle': 'Expertise. Connections. Confidentiality.',
    'about.content': 'ARKHIPELAG represents the pinnacle of luxury concierge services in Thailand. With extensive local connections and unwavering commitment to discretion, we provide our discerning clientele with access to the extraordinary. Our expertise spans every aspect of luxury lifestyle management, ensuring seamless experiences that exceed expectations.',
    
    // Services
    'services.title': 'Our Services',
    'services.car.title': 'Premium Car Booking',
    'services.car.description': 'Access to the finest collection of luxury vehicles with professional chauffeur services. From exotic sports cars to elegant sedans, we ensure your transportation matches your sophisticated standards.',
    
    'services.yacht.title': 'Yacht Rentals',
    'services.yacht.description': 'Exclusive access to premium yacht charters for intimate gatherings or grand celebrations. Our curated fleet offers the ultimate in maritime luxury with professional crew and bespoke itineraries.',
    
    'services.realestate.title': 'Real Estate Rentals',
    'services.realestate.description': 'Carefully selected luxury properties in Thailand\'s most prestigious locations. From private villas to penthouse suites, each property meets our exacting standards for comfort and elegance.',
    
    'services.shopping.title': 'Shopping Concierge',
    'services.shopping.description': 'Personal shopping services for discerning clients seeking the finest goods. Our connections with luxury brands and exclusive boutiques ensure access to limited editions and bespoke items.',
    
    'services.tours.title': 'Premium Tours',
    'services.tours.description': 'Bespoke cultural and adventure experiences crafted for the sophisticated traveler. Private guides, exclusive access, and meticulously planned itineraries create unforgettable journeys.',
    
    'services.events.title': 'Exclusive Events',
    'services.events.description': 'Flawless execution of private celebrations and corporate gatherings. From intimate dinners to grand galas, we orchestrate events that reflect your vision and exceed expectations.',
    
    // Testimonials
    'testimonials.title': 'Client Testimonials',
    'testimonials.1': 'Exceptional service with unmatched attention to detail. ARKHIPELAG transformed our Thailand experience into something truly extraordinary.',
    'testimonials.2': 'The level of discretion and professionalism is unparalleled. They understand the needs of discerning clients perfectly.',
    'testimonials.3': 'From yacht charters to private events, every service exceeded our highest expectations. Truly remarkable expertise.',
    'testimonials.4': 'ARKHIPELAG\'s local connections opened doors we never knew existed. An invaluable partner for luxury experiences.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Experience the pinnacle of luxury concierge services',
    'contact.form.salutation': 'Salutation',
    'contact.form.firstname': 'First Name',
    'contact.form.surname': 'Surname',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'How can we assist you?',
    'contact.form.submit': 'Send Inquiry',
    'contact.form.mr': 'Mr.',
    'contact.form.mrs': 'Mrs.',
    'contact.form.ms': 'Ms.',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.telegram': 'Telegram Channel',
    'contact.description': 'Ready to experience Thailand\'s finest luxury services? Contact our team to begin crafting your bespoke experience.',
  },
  ru: {
    // Navigation
    'nav.about': 'О нас',
    'nav.services': 'Услуги',
    'nav.testimonials': 'Отзывы',
    'nav.contact': 'Контакты',
    
    // Hero Section
    'hero.title': 'ARKHIPELAG',
    'hero.tagline': 'Навигация по роскоши',
    'hero.statement': 'Непревзойденная экспертиза и абсолютная конфиденциальность в сфере люкс-консьерж услуг',
    'hero.cta': 'Узнать о наших услугах',
    
    // About Us
    'about.title': 'О нас',
    'about.subtitle': 'Экспертиза. Связи. Конфиденциальность.',
    'about.content': 'ARKHIPELAG представляет вершину люкс-консьерж услуг в Таиланде. Благодаря обширным местным связям и непоколебимой приверженности дискретности, мы предоставляем нашим взыскательным клиентам доступ к необыкновенному. Наша экспертиза охватывает все аспекты управления роскошным образом жизни, обеспечивая безупречный опыт, превышающий ожидания.',
    
    // Services
    'services.title': 'Наши услуги',
    'services.car.title': 'Заказ премиум автомобилей',
    'services.car.description': 'Доступ к лучшей коллекции роскошных автомобилей с профессиональными услугами шофера. От экзотических спортивных автомобилей до элегантных седанов, мы гарантируем, что ваш транспорт соответствует вашим изысканным стандартам.',
    
    'services.yacht.title': 'Аренда яхт',
    'services.yacht.description': 'Эксклюзивный доступ к чартеру премиальных яхт для интимных встреч или грандиозных торжеств. Наш тщательно отобранный флот предлагает максимальную роскошь на воде с профессиональной командой и индивидуальными маршрутами.',
    
    'services.realestate.title': 'Аренда недвижимости',
    'services.realestate.description': 'Тщательно отобранная роскошная недвижимость в самых престижных местах Таиланда. От частных вилл до пентхаусов, каждая недвижимость соответствует нашим строгим стандартам комфорта и элегантности.',
    
    'services.shopping.title': 'Шоппинг-консьерж',
    'services.shopping.description': 'Персональные шоппинг-услуги для взыскательных клиентов, стремящихся к лучшим товарам. Наши связи с люксовыми брендами и эксклюзивными бутиками обеспечивают доступ к лимитированным изданиям и эксклюзивным товарам.',
    
    'services.tours.title': 'Премиум туры',
    'services.tours.description': 'Индивидуальные культурные и приключенческие программы, созданные для искушенного путешественника. Частные гиды, эксклюзивный доступ и тщательно спланированные маршруты создают незабываемые путешествия.',
    
    'services.events.title': 'Эксклюзивные мероприятия',
    'services.events.description': 'Безупречная организация частных торжеств и корпоративных собраний. От интимных ужинов до грандиозных гала-ужинов, мы организуем мероприятия, которые отражают ваше видение и превышают ожидания.',
    
    // Testimonials
    'testimonials.title': 'Отзывы клиентов',
    'testimonials.1': 'Исключительный сервис с непревзойденным вниманием к деталям. ARKHIPELAG превратил наш опыт в Таиланде во что-то поистине необыкновенное.',
    'testimonials.2': 'Уровень дискретности и профессионализма непревзойден. Они прекрасно понимают потребности взыскательных клиентов.',
    'testimonials.3': 'От чартера яхт до частных мероприятий, каждая услуга превзошла наши самые высокие ожидания. Поистине замечательная экспертиза.',
    'testimonials.4': 'Местные связи ARKHIPELAG открыли двери, о существовании которых мы даже не знали. Бесценный партнер для роскошных впечатлений.',
    
    // Contact
    'contact.title': 'Свяжитесь с нами',
    'contact.subtitle': 'Испытайте вершину люкс-консьерж услуг',
    'contact.form.salutation': 'Обращение',
    'contact.form.firstname': 'Имя',
    'contact.form.surname': 'Фамилия',
    'contact.form.phone': 'Номер телефона',
    'contact.form.message': 'Как мы можем вам помочь?',
    'contact.form.submit': 'Отправить запрос',
    'contact.form.mr': 'Г-н',
    'contact.form.mrs': 'Г-жа',
    'contact.form.ms': 'Г-жа',
    'contact.info.email': 'Электронная почта',
    'contact.info.phone': 'Телефон',
    'contact.info.telegram': 'Telegram канал',
    'contact.description': 'Готовы испытать лучшие люксовые услуги Таиланда? Свяжитесь с нашей командой, чтобы начать создание вашего индивидуального опыта.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  
  const t = (key: string): string => {
    return translations[language][key] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}