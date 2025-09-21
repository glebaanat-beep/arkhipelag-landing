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
    'nav.process': 'Our Process',
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
    'services.car.headline': 'Arrive in Style, Every Time',
    'services.car.description': 'Access to the finest collection of luxury vehicles with professional chauffeur services. From exotic sports cars to elegant sedans, we ensure your transportation matches your sophisticated standards.',
    'services.car.offering1': 'Selection and booking of any vehicle class',
    'services.car.offering2': 'Full transaction and insurance handling',
    'services.car.offering3': 'Delivery to any location in Thailand',
    'services.car.offering4': 'Professional chauffeur services available',
    
    'services.yacht.title': 'Yacht Rentals',
    'services.yacht.headline': 'Unparalleled Freedom and Privacy on the Water',
    'services.yacht.description': 'Exclusive access to premium yacht charters for intimate gatherings or grand celebrations. Our curated fleet offers the ultimate in maritime luxury with professional crew and bespoke itineraries.',
    'services.yacht.offering1': 'Luxury yacht fleet from 40ft to 200ft+',
    'services.yacht.offering2': 'Professional crew and captain services',
    'services.yacht.offering3': 'Custom itinerary planning',
    'services.yacht.offering4': 'Full provisioning and catering arrangements',
    
    'services.realestate.title': 'Real Estate Rentals',
    'services.realestate.headline': 'Your Private Sanctuary in Paradise',
    'services.realestate.description': 'Carefully selected luxury properties in Thailand\'s most prestigious locations. From private villas to penthouse suites, each property meets our exacting standards for comfort and elegance.',
    'services.realestate.offering1': 'Exclusive villa and penthouse portfolio',
    'services.realestate.offering2': 'Prime locations across Thailand',
    'services.realestate.offering3': 'Full property management services',
    'services.realestate.offering4': 'Concierge and housekeeping arrangements',
    
    'services.shopping.title': 'Shopping Concierge',
    'services.shopping.headline': 'Exclusive Access to the World\'s Finest',
    'services.shopping.description': 'Personal shopping services for discerning clients seeking the finest goods. Our connections with luxury brands and exclusive boutiques ensure access to limited editions and bespoke items.',
    'services.shopping.offering1': 'Private shopping appointments',
    'services.shopping.offering2': 'Access to limited and exclusive collections',
    'services.shopping.offering3': 'Authentication and quality verification',
    'services.shopping.offering4': 'International shipping and delivery',
    
    'services.tours.title': 'Premium Tours',
    'services.tours.headline': 'Discover Thailand Like Never Before',
    'services.tours.description': 'Bespoke cultural and adventure experiences crafted for the sophisticated traveler. Private guides, exclusive access, and meticulously planned itineraries create unforgettable journeys.',
    'services.tours.offering1': 'Private expert guides and historians',
    'services.tours.offering2': 'Exclusive access to restricted locations',
    'services.tours.offering3': 'Customized cultural immersion programs',
    'services.tours.offering4': 'Luxury transportation and accommodations',
    
    'services.events.title': 'Exclusive Events',
    'services.events.headline': 'Unforgettable Moments, Flawlessly Executed',
    'services.events.description': 'Flawless execution of private celebrations and corporate gatherings. From intimate dinners to grand galas, we orchestrate events that reflect your vision and exceed expectations.',
    'services.events.offering1': 'Venue sourcing and event design',
    'services.events.offering2': 'Celebrity chef and catering services',
    'services.events.offering3': 'Entertainment and guest coordination',
    'services.events.offering4': 'Full event production and management',
    
    'services.cta': 'Discuss details →',
    
    // Process
    'process.title': 'Our Process',
    'process.step1.title': 'Consultation',
    'process.step1.description': 'We discuss your needs, preferences, and context in detail.',
    'process.step2.title': 'Tailored Solution',
    'process.step2.description': 'We present several curated options that fit your request and budget.',
    'process.step3.title': 'Quote & Deposit',
    'process.step3.description': 'We confirm all details and provide a fixed price. A deposit is required to proceed.',
    'process.step4.title': 'Execution & Support',
    'process.step4.description': 'We handle everything and provide 24/7 support throughout your experience.',
    
    // Testimonials
    'testimonials.title': 'Client Testimonials',
    'testimonials.1.text': 'ARKHIPELAG didn\'t just book a villa; they understood we needed to impress our key business partners. They secured an incredible property and organized a private chef experience that became the highlight of our trip. Their attention to detail is absolute.',
    'testimonials.1.name': 'Markus Weber',
    'testimonials.1.title': 'Managing Director',
    'testimonials.2.text': 'When our family needed complete privacy for our Thailand retreat, ARKHIPELAG delivered beyond expectations. From the secluded yacht charter to the cultural experiences they arranged, every moment was perfectly orchestrated.',
    'testimonials.2.name': 'Elena Petrova',
    'testimonials.2.title': 'Tech Entrepreneur',
    'testimonials.3.text': 'Their network is extraordinary. ARKHIPELAG arranged exclusive access to locations I thought were impossible to visit. The investment in their services paid dividends in memories that will last a lifetime.',
    'testimonials.3.name': 'James Morrison',
    'testimonials.3.title': 'Investment Banker',
    'testimonials.4.text': 'Discretion and excellence define ARKHIPELAG. They handled our high-profile event with such professionalism that our guests are still talking about it months later. Simply unparalleled service.',
    'testimonials.4.name': 'Sofia Martinelli',
    'testimonials.4.title': 'Fashion Executive',
    
    // Curated Experiences section
    'experiences.title': 'Curated Experiences',
    'experiences.subtitle': 'Discover bespoke lifestyle scenarios crafted exclusively for you',
    'experiences.yacht.title': 'The Ultimate Island Escape',
    'experiences.yacht.description': 'Private yacht charters to hidden lagoons, exclusive villa accommodations, and personalized island-hopping itineraries in complete privacy.',
    'experiences.yacht.button': 'Discover',
    'experiences.gourmet.title': 'The Gastronomic Journey',
    'experiences.gourmet.description': 'Access to Michelin-starred venues, private chef experiences, and curated culinary tours through Thailand\'s most exclusive dining scenes.',
    'experiences.gourmet.button': 'Explore',
    'experiences.business.title': 'The Business Catalyst',
    'experiences.business.description': 'Premium transportation solutions, discreet meeting arrangements, and high-profile event hosting for important business engagements.',
    'experiences.business.button': 'Learn More',
    'experiences.family.title': 'The Family Legacy',
    'experiences.family.description': 'Tailored family adventures, educational cultural experiences, and luxury accommodations designed for multi-generational travel.',
    'experiences.family.button': 'Explore',
    
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
    'contact.info.title': 'Contact Information',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.telegram': 'Telegram Channel',
    'contact.description': 'Ready to experience Thailand\'s finest luxury services? Contact our team to begin crafting your bespoke experience.',
    'contact.form.privacyConsent.text': 'I agree to the processing of my personal data in accordance with the',
    'contact.form.privacyConsent.link': 'Privacy Policy',
  },
  ru: {
    // Navigation
    'nav.about': 'О нас',
    'nav.services': 'Услуги',
    'nav.process': 'Наш процесс',
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
    'services.car.headline': 'Прибытие в стиле, каждый раз',
    'services.car.description': 'Доступ к лучшей коллекции роскошных автомобилей с профессиональными услугами шофера. От экзотических спортивных автомобилей до элегантных седанов, мы гарантируем, что ваш транспорт соответствует вашим изысканным стандартам.',
    'services.car.offering1': 'Выбор и бронирование автомобилей любого класса',
    'services.car.offering2': 'Полное оформление сделки и страхования',
    'services.car.offering3': 'Доставка в любую точку Таиланда',
    'services.car.offering4': 'Профессиональные услуги шофера',
    
    'services.yacht.title': 'Аренда яхт',
    'services.yacht.headline': 'Непревзойденная свобода и приватность на воде',
    'services.yacht.description': 'Эксклюзивный доступ к чартеру премиальных яхт для интимных встреч или грандиозных торжеств. Наш тщательно отобранный флот предлагает максимальную роскошь на воде с профессиональной командой и индивидуальными маршрутами.',
    'services.yacht.offering1': 'Роскошный яхтенный флот от 40 до 200+ футов',
    'services.yacht.offering2': 'Профессиональная команда и услуги капитана',
    'services.yacht.offering3': 'Планирование индивидуальных маршрутов',
    'services.yacht.offering4': 'Полное снабжение и кейтеринг',
    
    'services.realestate.title': 'Аренда недвижимости',
    'services.realestate.headline': 'Ваше приватное убежище в раю',
    'services.realestate.description': 'Тщательно отобранная роскошная недвижимость в самых престижных местах Таиланда. От частных вилл до пентхаусов, каждая недвижимость соответствует нашим строгим стандартам комфорта и элегантности.',
    'services.realestate.offering1': 'Эксклюзивный портфель вилл и пентхаусов',
    'services.realestate.offering2': 'Лучшие локации по всему Таиланду',
    'services.realestate.offering3': 'Полное управление недвижимостью',
    'services.realestate.offering4': 'Консьерж и услуги домоправителя',
    
    'services.shopping.title': 'Шоппинг-консьерж',
    'services.shopping.headline': 'Эксклюзивный доступ к лучшему в мире',
    'services.shopping.description': 'Персональные шоппинг-услуги для взыскательных клиентов, стремящихся к лучшим товарам. Наши связи с люксовыми брендами и эксклюзивными бутиками обеспечивают доступ к лимитированным изданиям и эксклюзивным товарам.',
    'services.shopping.offering1': 'Приватные шоппинг-встречи',
    'services.shopping.offering2': 'Доступ к лимитированным коллекциям',
    'services.shopping.offering3': 'Аутентификация и контроль качества',
    'services.shopping.offering4': 'Международная доставка',
    
    'services.tours.title': 'Премиум туры',
    'services.tours.headline': 'Откройте Таиланд как никогда прежде',
    'services.tours.description': 'Индивидуальные культурные и приключенческие программы, созданные для искушенного путешественника. Частные гиды, эксклюзивный доступ и тщательно спланированные маршруты создают незабываемые путешествия.',
    'services.tours.offering1': 'Частные гиды-эксперты и историки',
    'services.tours.offering2': 'Эксклюзивный доступ к закрытым объектам',
    'services.tours.offering3': 'Персонализированные культурные программы',
    'services.tours.offering4': 'Роскошный транспорт и размещение',
    
    'services.events.title': 'Эксклюзивные мероприятия',
    'services.events.headline': 'Незабываемые моменты, безупречное исполнение',
    'services.events.description': 'Безупречная организация частных торжеств и корпоративных собраний. От интимных ужинов до грандиозных гала-ужинов, мы организуем мероприятия, которые отражают ваше видение и превышают ожидания.',
    'services.events.offering1': 'Поиск площадок и дизайн мероприятий',
    'services.events.offering2': 'Услуги знаменитых шеф-поваров и кейтеринг',
    'services.events.offering3': 'Развлечения и координация гостей',
    'services.events.offering4': 'Полное производство и управление событием',
    
    'services.cta': 'Обсудить детали →',
    
    // Process
    'process.title': 'Наш процесс',
    'process.step1.title': 'Консультация',
    'process.step1.description': 'Мы детально обсуждаем ваши потребности, предпочтения и контекст.',
    'process.step2.title': 'Индивидуальное решение',
    'process.step2.description': 'Мы представляем несколько тщательно отобранных вариантов, соответствующих вашему запросу и бюджету.',
    'process.step3.title': 'Прозрачная цена и депозит',
    'process.step3.description': 'Мы подтверждаем все детали и предоставляем фиксированную цену. Для продолжения требуется депозит.',
    'process.step4.title': 'Исполнение и поддержка',
    'process.step4.description': 'Мы берем на себя все заботы и обеспечиваем поддержку 24/7 на протяжении всего вашего опыта.',
    
    // Testimonials
    'testimonials.title': 'Отзывы клиентов',
    'testimonials.1.text': 'ARKHIPELAG не просто забронировал виллу; они поняли, что нам нужно впечатлить наших ключевых бизнес-партнеров. Они обеспечили невероятную недвижимость и организовали опыт с частным шефом, который стал изюминкой нашей поездки. Их внимание к деталям абсолютно.',
    'testimonials.1.name': 'Маркус Вебер',
    'testimonials.1.title': 'Управляющий директор',
    'testimonials.2.text': 'Когда нашей семье потребовалась полная конфиденциальность для нашего отдыха в Таиланде, ARKHIPELAG превзошел ожидания. От уединенного чартера яхты до культурных мероприятий, которые они организовали, каждый момент был идеально продуман.',
    'testimonials.2.name': 'Елена Петрова',
    'testimonials.2.title': 'Технологический предприниматель',
    'testimonials.3.text': 'Их сеть необыкновенна. ARKHIPELAG организовал эксклюзивный доступ к местам, которые я считал невозможными для посещения. Инвестиции в их услуги окупились воспоминаниями, которые останутся на всю жизнь.',
    'testimonials.3.name': 'Джеймс Моррисон',
    'testimonials.3.title': 'Инвестиционный банкир',
    'testimonials.4.text': 'Дискретность и совершенство определяют ARKHIPELAG. Они провели наше высокопрофильное мероприятие с таким профессионализмом, что наши гости все еще говорят о нем спустя месяцы. Просто непревзойденный сервис.',
    'testimonials.4.name': 'София Мартинелли',
    'testimonials.4.title': 'Руководитель модного бизнеса',
    
    // Curated Experiences section
    'experiences.title': 'Кураторские Впечатления',
    'experiences.subtitle': 'Откройте для себя эксклюзивные сценарии образа жизни, созданные специально для вас',
    'experiences.yacht.title': 'Идеальный Побег с Острова',
    'experiences.yacht.description': 'Частные чартеры яхт к скрытым лагунам, эксклюзивное размещение в виллах и персонализированные маршруты по островам в полной конфиденциальности.',
    'experiences.yacht.button': 'Открыть',
    'experiences.gourmet.title': 'Гастрономическое Путешествие',
    'experiences.gourmet.description': 'Доступ к мишленовским заведениям, услуги частных поваров и кураторские кулинарные туры по самым эксклюзивным местам Таиланда.',
    'experiences.gourmet.button': 'Исследовать',
    'experiences.business.title': 'Бизнес-Катализатор',
    'experiences.business.description': 'Премиальные транспортные решения, дискретная организация встреч и проведение высокопрофильных мероприятий для важных бизнес-событий.',
    'experiences.business.button': 'Узнать больше',
    'experiences.family.title': 'Семейное Наследие',
    'experiences.family.description': 'Индивидуальные семейные приключения, образовательные культурные впечатления и роскошное размещение для многопоколенческих путешествий.',
    'experiences.family.button': 'Исследовать',
    
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
    'contact.info.title': 'Контактная информация',
    'contact.info.email': 'Электронная почта',
    'contact.info.phone': 'Телефон',
    'contact.info.telegram': 'Telegram канал',
    'contact.description': 'Готовы испытать лучшие люксовые услуги Таиланда? Свяжитесь с нашей командой, чтобы начать создание вашего индивидуального опыта.',
    'contact.form.privacyConsent.text': 'Я соглашаюсь на обработку моих персональных данных в соответствии с',
    'contact.form.privacyConsent.link': 'Политикой конфиденциальности',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ru');
  
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