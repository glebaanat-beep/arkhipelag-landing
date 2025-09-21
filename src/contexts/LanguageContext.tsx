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
    'nav.experiences': 'Collection',
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
    'experiences.cultural.title': 'Cultural & Historical Tours',
    'experiences.cultural.description': 'Immerse yourself in the rich heritage of Siam',
    'experiences.cultural.button': 'Learn More',
    'experiences.sea.title': 'Sea & Cruises',
    'experiences.sea.description': 'Discover hidden lagoons and pristine islands from the deck',
    'experiences.sea.button': 'Learn More',
    'experiences.adventure.title': 'Active Adventures',
    'experiences.adventure.description': 'Fuel your adrenaline with jungle expeditions and water sports',
    'experiences.adventure.button': 'Learn More',
    'experiences.extreme.title': 'Extreme & Sky',
    'experiences.extreme.description': 'Embrace the ultimate thrill from the skies above',
    'experiences.extreme.button': 'Learn More',

    // Catalog Page
    'catalog.title': 'Our Curated Collection of Experiences',
    'catalog.tab.cultural': 'Cultural',
    'catalog.tab.sea': 'Sea',
    'catalog.tab.adventure': 'Adventure',
    'catalog.tab.extreme': 'Extreme',
    'catalog.bookNow': 'Book Now',
    'catalog.contactToBook': 'Contact to Book',
    
    // Cultural Experiences
    'catalog.cultural.palace.title': 'Grand Palace and Emerald Buddha Temple',
    'catalog.cultural.palace.description': 'Private guided tour of the Rattanakosin Kings\' residence and Thailand\'s most sacred Buddhist temple with exclusive access to restricted areas.',
    'catalog.cultural.ayutthaya.title': 'Ayutthaya + Chao Phraya River Cruise',
    'catalog.cultural.ayutthaya.description': 'A day in the ancient capital of Siam with a luxurious river cruise back to Bangkok, including a private historian guide.',
    'catalog.cultural.floating.title': 'Floating Markets and Local Life',
    'catalog.cultural.floating.description': 'Authentic Damnoen Saduak market experience with private boat and cultural immersion activities.',
    'catalog.cultural.temples.title': 'Bangkok Temple Visits',
    'catalog.cultural.temples.description': 'Sacred journey through Wat Pho, Wat Arun and hidden temple gems with meditation session.',
    'catalog.cultural.tribes.title': 'Northern Hill Tribes Experience',
    'catalog.cultural.tribes.description': 'Multi-day cultural immersion with Karen and Hmong communities in the Chiang Mai mountains.',
    
    // Sea Experiences
    'catalog.sea.yacht.title': 'Luxury Yacht Charter - Full Day',
    'catalog.sea.yacht.description': 'Private yacht charter with professional crew, exquisite catering and customized island itinerary.',
    'catalog.sea.phiphi.title': 'VIP Phi Phi Islands Tour',
    'catalog.sea.phiphi.description': 'Exclusive speedboat tour to Maya Bay, Bamboo Island and Viking Cave with private beach access.',
    'catalog.sea.sunset.title': 'Romantic Sunset Cruise',
    'catalog.sea.sunset.description': 'Romantic sunset cruise on traditional Thai sailing boat with champagne and canapés.',
    'catalog.sea.phangnga.title': 'Luxury Phang Nga Bay Cruise',
    'catalog.sea.phangnga.description': 'Full-day luxury catamaran cruise through dramatic limestone karsts with kayaking and cave exploration.',
    'catalog.sea.beach.title': 'Private Beach Picnic Setup',
    'catalog.sea.beach.description': 'Exclusive beach access with luxury picnic setup, personal chef and water sports equipment.',
    
    // Adventure Experiences
    'catalog.adventure.zipline.title': 'Jungle Zipline',
    'catalog.adventure.zipline.description': 'Thrilling zipline adventure through pristine rainforest canopy with certified guides.',
    'catalog.adventure.rafting.title': 'White Water Rafting',
    'catalog.adventure.rafting.description': 'Exhilarating adventure on Mae Taeng River rapids with professional guides and safety equipment.',
    'catalog.adventure.climbing.title': 'Rock Climbing and Abseiling',
    'catalog.adventure.climbing.description': 'Challenge yourself on Railay Beach limestone cliffs with expert instruction and equipment.',
    'catalog.adventure.trekking.title': 'Jungle Trekking and Camping',
    'catalog.adventure.trekking.description': 'Multi-day wilderness expedition with tent camping, wildlife spotting and survival skills.',
    'catalog.adventure.kayaking.title': 'Adventure Kayaking',
    'catalog.adventure.kayaking.description': 'Explore hidden lagoons and sea caves in Krabi with professional guides and private beach lunch.',
    
    // Extreme Experiences
    'catalog.extreme.skydiving.title': 'Tandem Skydiving',
    'catalog.extreme.skydiving.description': 'Ultimate adrenaline rush with certified instructors, jumping from 15,000 feet above tropical paradise.',
    'catalog.extreme.paragliding.title': 'Paragliding Over Islands',
    'catalog.extreme.paragliding.description': 'Soar like a bird over turquoise waters and tropical islands with experienced tandem pilot.',
    'catalog.extreme.bungee.title': 'Bungee Jumping',
    'catalog.extreme.bungee.description': 'Take the leap from a 200-foot platform over pristine jungle valley with full safety certification.',
    'catalog.extreme.helicopter.title': 'Helicopter Tours',
    'catalog.extreme.helicopter.description': 'Breathtaking aerial views of Thailand\'s coastline and islands from luxury helicopter with champagne service.',
    'catalog.extreme.wingwalking.title': 'Wing Walking Experience',
    'catalog.extreme.wingwalking.description': 'Unique adventure strapped to the wing of a vintage biplane over scenic landscapes.',
    
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
    'contact.info.telegram': 'Telegram',
    'contact.description': 'Ready to experience Thailand\'s finest luxury services? Contact our team to begin crafting your bespoke experience.',
    'contact.form.privacyConsent.text': 'I agree to the processing of my personal data in accordance with the',
    'contact.form.privacyConsent.link': 'Privacy Policy',

    // Privacy Policy
    'privacyPolicy.title': 'Personal Data Processing Policy',
    'privacyPolicy.location': 'Phuket, Thailand',
    'privacyPolicy.date': 'September 21, 2025',
    
    'privacyPolicy.section1.title': '1. General Provisions',
    'privacyPolicy.section1.p1': '1.1. This Personal Data Processing Policy (hereinafter - "Policy") is developed in accordance with Federal Law No. 152-FZ of July 27, 2006 "On Personal Data" and defines the procedure for processing personal data and measures to ensure the security of personal data at ARKHIPELAG COMPANY LIMITED (hereinafter - "Operator").',
    'privacyPolicy.section1.p2': '1.2. The Policy applies to all information that the Operator may receive about visitors to the website https://arkhipelag.com/ (hereinafter - "Site").',
    'privacyPolicy.section1.p3': '1.3. By using the Site and providing personal data, the User confirms agreement with the terms of this Policy.',
    'privacyPolicy.section1.p4': '1.4. The Operator processes personal data of the User exclusively for the purposes specified in this Policy.',
    
    'privacyPolicy.section2.title': '2. Basic Terms Used in the Policy',
    'privacyPolicy.section2.p1': '2.1. Personal data - any information relating to a directly or indirectly determined or determinable natural person (personal data subject).',
    'privacyPolicy.section2.p2': '2.2. Personal data processing - any action (operation) or set of actions (operations) performed with or without automation tools with personal data, including collection, recording, systematization, accumulation, storage, clarification (updating, modification), extraction, use, transfer (distribution, provision, access), depersonalization, blocking, deletion, destruction of personal data.',
    'privacyPolicy.section2.p3': '2.3. Operator - ARKHIPELAG COMPANY LIMITED (TAX ID: 0835566018842), independently or jointly with other persons organizing and (or) carrying out personal data processing, as well as determining the purposes of personal data processing, the composition of personal data to be processed, actions (operations) performed with personal data.',
    'privacyPolicy.section2.p4': '2.4. Personal data subject (User) - a Site visitor who provided personal data to the Operator.',
    
    'privacyPolicy.section3.title': '3. List of Processed Personal Data',
    'privacyPolicy.section3.intro': '3.1. The Operator may process the following personal data of the User:',
    'privacyPolicy.section3.item1': 'Last name, first name, patronymic;',
    'privacyPolicy.section3.item2': 'Email address;',
    'privacyPolicy.section3.item3': 'Phone number;',
    'privacyPolicy.section3.item4': 'Nickname (username) or identifier in messengers (Telegram, WhatsApp, etc.);',
    'privacyPolicy.section3.item5': 'Information contained in User messages (purpose of request, project and other information provided voluntarily);',
    'privacyPolicy.section3.item6': 'Information about devices and services that the User uses to access the Site (technical data: IP address, cookie data, browser type, operating system, date and time of access).',
    'privacyPolicy.section3.disclaimer': '3.2. The Operator does not process special categories of personal data (race, nationality, health, etc.) and biometric data.',
    
    'privacyPolicy.section4.title': '4. Purposes of Personal Data Processing',
    'privacyPolicy.section4.intro': '4.1. Personal data processing is carried out for the following purposes:',
    'privacyPolicy.section4.item1': 'Establishing feedback with the User, including sending notifications, requests and information regarding Site use and service provision;',
    'privacyPolicy.section4.item2': 'Processing requests and applications from the User;',
    'privacyPolicy.section4.item3': 'Preparing and sending commercial offers to the User, concluding contracts;',
    'privacyPolicy.section4.item4': 'Informing the User about new services, promotions and special offers (only with separate consent);',
    'privacyPolicy.section4.item5': 'Conducting statistical and other research based on depersonalized data.',
    
    'privacyPolicy.section5.title': '5. Legal Grounds for Personal Data Processing',
    'privacyPolicy.section5.intro': '5.1. Legal grounds for personal data processing by the Operator are:',
    'privacyPolicy.section5.item1': 'Consent of the personal data subject to process personal data, expressed by checking the checkbox on the Site;',
    'privacyPolicy.section5.item2': 'Conclusion and performance of a contract to which the personal data subject is a party;',
    'privacyPolicy.section5.item3': 'Legitimate interests of the Operator within the framework of its activities that do not violate the rights and freedoms of personal data subjects.',
    
    'privacyPolicy.section6.title': '6. Procedure for Collection, Storage, Transfer and Processing of Personal Data',
    'privacyPolicy.section6.p1': '6.1. Security of personal data processed by the Operator is ensured by implementing legal, organizational and technical measures necessary to comply with federal legislation requirements.',
    'privacyPolicy.section6.p2': '6.2. Personal data processing is carried out using automation tools and without using such tools.',
    'privacyPolicy.section6.p3': '6.3. The Operator stores personal data in a form that allows identification of the personal data subject for no longer than required by processing purposes. Upon achieving processing purposes or in case of withdrawal of the subject\'s consent, personal data is subject to destruction or depersonalization.',
    'privacyPolicy.section6.p4': '6.4. The Operator may transfer personal data to third parties in the following cases:',
    'privacyPolicy.section6.item1': 'The User explicitly expressed consent to such actions;',
    'privacyPolicy.section6.item2': 'Transfer is necessary for the User to use a specific Site service or to fulfill a specific contract with the User;',
    'privacyPolicy.section6.item3': 'Transfer is provided by Russian or other applicable legislation within the procedure established by law.',
    'privacyPolicy.section6.p5': '6.5. When transferring personal data to third parties (e.g., mailing services, CRM systems), the Operator requires such third parties to comply with confidentiality and security of transferred personal data.',
    
    'privacyPolicy.section7.title': '7. List of Third Parties to Whom Personal Data is Transferred',
    'privacyPolicy.section7.intro': '7.1. To achieve data processing purposes, the Operator may engage the following processors:',
    'privacyPolicy.section7.item1': 'Hosting providers (companies providing Site hosting services);',
    'privacyPolicy.section7.item2': 'Analytics services (Google Analytics). Please note that data in these services is depersonalized.',
    
    'privacyPolicy.section8.title': '8. Rights of Personal Data Subject',
    'privacyPolicy.section8.intro': '8.1. The User, as a personal data subject, has the right to:',
    'privacyPolicy.section8.item1': 'Access to personal data, their clarification, correction;',
    'privacyPolicy.section8.item2': 'Destruction of personal data;',
    'privacyPolicy.section8.item3': 'Withdrawal of consent to personal data processing;',
    'privacyPolicy.section8.item4': 'Exercise of other rights provided by current legislation of the Russian Federation.',
    'privacyPolicy.section8.p2': '8.2. To exercise rights, the User may send a corresponding request to the Operator using contact details specified in section 9 of this Policy. The request must contain sufficient information to identify the User.',
    
    'privacyPolicy.section9.title': '9. Operator Contact Information',
    'privacyPolicy.section9.intro': '9.1. All suggestions, requests, demands or questions related to personal data processing and exercise of rights can be sent by the User to the Operator:',
    'privacyPolicy.section9.email': 'By email: arkhipelagllc@gmail.com',
    'privacyPolicy.section9.address': 'By postal address: 3250/19, Villa 1 Thep Krasat Tri-Nai Yang Rd, Phuket, Thailand, 83110',
    'privacyPolicy.section9.response': '9.2. The Operator undertakes to consider any User inquiry and send a response to the specified email address within reasonable time.',
    
    'privacyPolicy.section10.title': '10. Final Provisions',
    'privacyPolicy.section10.p1': '10.1. This Policy is a public document and is posted on the Site at: https://arkhipelag.com/privacy-policy',
    'privacyPolicy.section10.p2': '10.2. The Operator has the right to make changes to this Policy. All changes take effect from the moment of their publication on the Site. The User is obliged to independently and regularly familiarize themselves with the current version of the Policy.',
  },
  ru: {
    // Navigation
    'nav.about': 'О нас',
    'nav.services': 'Услуги',
    'nav.process': 'Наш процесс',
    'nav.experiences': 'Коллекция',
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
    'experiences.title': 'Тщательно отобранные впечатления',
    'experiences.subtitle': 'Откройте для себя индивидуальные сценарии роскошной жизни, созданные исключительно для вас',
    'experiences.cultural.title': 'Культурные и исторические туры',
    'experiences.cultural.description': 'Погрузитесь в богатое наследие Сиама',
    'experiences.cultural.button': 'Узнать больше',
    'experiences.sea.title': 'Море и круизы',
    'experiences.sea.description': 'Откройте скрытые лагуны и нетронутые острова с палубы',
    'experiences.sea.button': 'Узнать больше',
    'experiences.adventure.title': 'Активные приключения',
    'experiences.adventure.description': 'Подпитайте свой адреналин джунглями и водными видами спорта',
    'experiences.adventure.button': 'Узнать больше',
    'experiences.extreme.title': 'Экстрим и небо',
    'experiences.extreme.description': 'Окунитесь в максимальный трепет с высоты неба',
    'experiences.extreme.button': 'Узнать больше',

    // Catalog Page
    'catalog.title': 'Наша тщательно отобранная коллекция впечатлений',
    'catalog.tab.cultural': 'Культурные',
    'catalog.tab.sea': 'Море',
    'catalog.tab.adventure': 'Приключения',
    'catalog.tab.extreme': 'Экстрим',
    'catalog.bookNow': 'Забронировать',
    'catalog.contactToBook': 'Связаться для бронирования',
    
    // Cultural Experiences
    'catalog.cultural.palace.title': 'Большой дворец и храм Изумрудного Будды',
    'catalog.cultural.palace.description': 'Частная экскурсия с гидом по резиденции королей Раттанакосин и самому священному буддийскому храму Таиланда с эксклюзивным доступом к закрытым зонам.',
    'catalog.cultural.ayutthaya.title': 'Аюттхая + круиз по реке Чао Прайя',
    'catalog.cultural.ayutthaya.description': 'День в древней столице Сиама с роскошным речным круизом обратно в Бангкок, включая частного гида-историка.',
    'catalog.cultural.floating.title': 'Плавучие рынки и местная жизнь',
    'catalog.cultural.floating.description': 'Аутентичный опыт рынка в Дамноен Садуак с частной лодкой и мероприятиями культурного погружения.',
    'catalog.cultural.temples.title': 'Посещение храмов в Бангкоке',
    'catalog.cultural.temples.description': 'Священное путешествие по Ват По, Ват Арун и скрытым храмовым жемчужинам с сеансом медитации.',
    'catalog.cultural.tribes.title': 'Опыт северных горных племен',
    'catalog.cultural.tribes.description': 'Многодневное культурное погружение с общинами Карен и Хмонг в горах Чиангмай.',
    
    // Sea Experiences
    'catalog.sea.yacht.title': 'Аренда роскошной яхты - полный день',
    'catalog.sea.yacht.description': 'Частная аренда яхты с профессиональным экипажем, изысканным кейтерингом и индивидуальным маршрутом по островам.',
    'catalog.sea.phiphi.title': 'VIP тур по островам Пхи Пхи',
    'catalog.sea.phiphi.description': 'Эксклюзивный тур на скоростном катере к заливу Майя, острову Бамбу и пещере Викингов с частным доступом к пляжу.',
    'catalog.sea.sunset.title': 'Романтический круиз на закате',
    'catalog.sea.sunset.description': 'Романтический круиз на закате на традиционной тайской парусной лодке с шампанским и канапе.',
    'catalog.sea.phangnga.title': 'Роскошный круиз по заливу Пханг Нга',
    'catalog.sea.phangnga.description': 'Полнодневный роскошный круиз на катамаране через драматические известняковые карсты с каякингом и исследованием пещер.',
    'catalog.sea.beach.title': 'Частная организация пикника на пляже',
    'catalog.sea.beach.description': 'Эксклюзивный доступ к пляжу с роскошной организацией пикника, личным шефом и оборудованием для водных видов спорта.',
    
    // Adventure Experiences
    'catalog.adventure.zipline.title': 'Зиплайн по джунглям',
    'catalog.adventure.zipline.description': 'Захватывающее приключение на зиплайне через нетронутый тропический лес с сертифицированными гидами.',
    'catalog.adventure.rafting.title': 'Рафтинг по белой воде',
    'catalog.adventure.rafting.description': 'Захватывающее приключение на порогах реки Мае Тенг с профессиональными гидами и оборудованием безопасности.',
    'catalog.adventure.climbing.title': 'Скалолазание и спуск по канату',
    'catalog.adventure.climbing.description': 'Испытайте себя на известняковых скалах пляжа Райлей с экспертным обучением и оборудованием.',
    'catalog.adventure.trekking.title': 'Треккинг по джунглям и кемпинг',
    'catalog.adventure.trekking.description': 'Многодневная экспедиция в дикую природу с ночевкой в палатках, наблюдением за дикими животными и навыками выживания.',
    'catalog.adventure.kayaking.title': 'Приключенческий каякинг',
    'catalog.adventure.kayaking.description': 'Исследуйте скрытые лагуны и морские пещеры в Краби с профессиональными гидами и обедом на частном пляже.',
    
    // Extreme Experiences
    'catalog.extreme.skydiving.title': 'Тандемный прыжок с парашютом',
    'catalog.extreme.skydiving.description': 'Максимальный выброс адреналина с сертифицированными инструкторами, прыжок с высоты 15,000 футов над тропическим раем.',
    'catalog.extreme.paragliding.title': 'Полет на параплане над островами',
    'catalog.extreme.paragliding.description': 'Парите как птица над бирюзовыми водами и тропическими островами с опытным тандем-пилотом.',
    'catalog.extreme.bungee.title': 'Банджи-джампинг',
    'catalog.extreme.bungee.description': 'Совершите прыжок с 200-футовой платформы над нетронутой долиной джунглей с полной сертификацией безопасности.',
    'catalog.extreme.helicopter.title': 'Вертолетные туры',
    'catalog.extreme.helicopter.description': 'Захватывающие виды с воздуха на побережье и острова Таиланда с роскошного вертолета с обслуживанием шампанским.',
    'catalog.extreme.wingwalking.title': 'Опыт прогулки по крылу',
    'catalog.extreme.wingwalking.description': 'Уникальное приключение, привязанное к крылу винтажного биплана над живописными пейзажами.',
    
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
    'contact.info.telegram': 'Telegram',
    'contact.description': 'Готовы испытать лучшие люксовые услуги Таиланда? Свяжитесь с нашей командой, чтобы начать создание вашего индивидуального опыта.',
    'contact.form.privacyConsent.text': 'Я соглашаюсь на обработку моих персональных данных в соответствии с',
    'contact.form.privacyConsent.link': 'Политикой конфиденциальности',

    // Privacy Policy
    'privacyPolicy.title': 'Политика обработки персональных данных',
    'privacyPolicy.location': 'Пхукет, Тайланд',
    'privacyPolicy.date': '«21» Сентября 2025 г.',
    
    'privacyPolicy.section1.title': '1. Общие положения',
    'privacyPolicy.section1.p1': '1.1. Настоящая Политика обработки персональных данных (далее — «Политика») разработана в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных в ARKHIPELAG COMPANY LIMITED (далее — «Оператор»).',
    'privacyPolicy.section1.p2': '1.2. Политика действует в отношении всей информации, которую Оператор может получить о посетителях веб-сайта https://arkhipelag.com/ (далее — «Сайт»).',
    'privacyPolicy.section1.p3': '1.3. Используя Сайт и предоставляя свои персональные данные, Пользователь подтверждает свое согласие с условиями данной Политики.',
    'privacyPolicy.section1.p4': '1.4. Оператор обрабатывает персональные данные Пользователя исключительно в целях, указанных в настоящей Политике.',
    
    'privacyPolicy.section2.title': '2. Основные понятия, используемые в Политике',
    'privacyPolicy.section2.p1': '2.1. Персональные данные — любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных).',
    'privacyPolicy.section2.p2': '2.2. Обработка персональных данных — любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.',
    'privacyPolicy.section2.p3': '2.3. Оператор — ARKHIPELAG COMPANY LIMITED (TAX ID: 0835566018842), самостоятельно или совместно с другими лицами организующие и (или) осуществляющие обработку персональных данных, а также определяющие цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными.',
    'privacyPolicy.section2.p4': '2.4. Субъект персональных данных (Пользователь) — посетитель Сайта, предоставивший свои персональные данные Оператору.',
    
    'privacyPolicy.section3.title': '3. Перечень обрабатываемых персональных данных',
    'privacyPolicy.section3.intro': '3.1. Оператор может обрабатывать следующие персональные данные Пользователя:',
    'privacyPolicy.section3.item1': 'Фамилия, имя, отчество;',
    'privacyPolicy.section3.item2': 'Адрес электронной почты (e-mail);',
    'privacyPolicy.section3.item3': 'Номер телефона;',
    'privacyPolicy.section3.item4': 'Никнейм (username) или идентификатор в мессенджерах (Telegram, WhatsApp и др.);',
    'privacyPolicy.section3.item5': 'Сведения, содержащиеся в сообщениях Пользователя (цель запроса, проект и иная информация, предоставленная добровольно);',
    'privacyPolicy.section3.item6': 'Сведения об устройстве и сервисах, которые Пользователь использует для доступа к Сайту (технические данные: IP-адрес, данные файлов cookie, тип браузера, операционная система, дата и время доступа).',
    'privacyPolicy.section3.disclaimer': '3.2. Оператор не обрабатывает специальные категории персональных данных (раса, национальность, здоровье и т.д.) и биометрические данные.',
    
    'privacyPolicy.section4.title': '4. Цели обработки персональных данных',
    'privacyPolicy.section4.intro': '4.1. Обработка персональных данных осуществляется в следующих целях:',
    'privacyPolicy.section4.item1': 'Установление обратной связи с Пользователем, включая направление уведомлений, запросов и информации, касающихся использования Сайта и оказания услуг;',
    'privacyPolicy.section4.item2': 'Обработка запросов и заявок от Пользователя;',
    'privacyPolicy.section4.item3': 'Подготовка и направление Пользователю коммерческих предложений, заключение договоров;',
    'privacyPolicy.section4.item4': 'Информирование Пользователя о новых услугах, акциях и специальных предложениях (только с его отдельного согласия);',
    'privacyPolicy.section4.item5': 'Проведение статистических и иных исследований на основе обезличенных данных.',
    
    'privacyPolicy.section5.title': '5. Правовые основания обработки персональных данных',
    'privacyPolicy.section5.intro': '5.1. Правовыми основаниями обработки персональных данных Оператором являются:',
    'privacyPolicy.section5.item1': 'Согласие субъекта персональных данных на обработку его персональных данных, выраженное путем проставления отметки в чек-боксе на Сайте;',
    'privacyPolicy.section5.item2': 'Заключение и исполнение договора, стороной которого является субъект персональных данных;',
    'privacyPolicy.section5.item3': 'Законные интересы Оператора в рамках осуществления своей деятельности, не нарушающие права и свободы субъектов персональных данных.',
    
    'privacyPolicy.section6.title': '6. Порядок сбора, хранения, передачи и обработки персональных данных',
    'privacyPolicy.section6.p1': '6.1. Безопасность персональных данных, обрабатываемых Оператором, обеспечивается реализацией правовых, организационных и технических мер, необходимых для выполнения требований федерального законодательства.',
    'privacyPolicy.section6.p2': '6.2. Обработка персональных данных осуществляется с использованием средств автоматизации и без использования таких средств.',
    'privacyPolicy.section6.p3': '6.3. Оператор хранит персональные данные в форме, позволяющей определить субъекта персональных данных, не дольше, чем этого требуют цели обработки. По достижении целей обработки или в случае отзыва согласия субъекта персональные данные подлежат уничтожению или обезличиванию.',
    'privacyPolicy.section6.p4': '6.4. Оператор может передавать персональные данные третьим лицам в следующих случаях:',
    'privacyPolicy.section6.item1': 'Пользователь явно выразил свое согласие на такие действия;',
    'privacyPolicy.section6.item2': 'Передача необходима для использования Пользователем определенного сервиса Сайта или для исполнения определенного договора с Пользователем;',
    'privacyPolicy.section6.item3': 'Передача предусмотрена российским или иным применимым законодательством в рамках установленной законодательством процедуры.',
    'privacyPolicy.section6.p5': '6.5. При передаче персональных данных третьим лицам (например, сервисам рассылки, CRM-системам) Оператор требует от таких третьих лиц соблюдения конфиденциальности и безопасности передаваемых персональных данных.',
    
    'privacyPolicy.section7.title': '7. Перечень третьих лиц, которым передаются персональные данные',
    'privacyPolicy.section7.intro': '7.1. Для достижения целей обработки данных Оператор может привлекать следующих обработчиков:',
    'privacyPolicy.section7.item1': 'Хостинг-провайдеры (компании, предоставляющие услуги размещения Сайта);',
    'privacyPolicy.section7.item2': 'Сервисы аналитики (Google Analytics). Обращаем внимание, что данные в этих сервисах обезличены.',
    
    'privacyPolicy.section8.title': '8. Права субъекта персональных данных',
    'privacyPolicy.section8.intro': '8.1. Пользователь, как субъект персональных данных, имеет право:',
    'privacyPolicy.section8.item1': 'На доступ к своим персональным данным, их уточнение, исправление;',
    'privacyPolicy.section8.item2': 'На уничтожение своих персональных данных;',
    'privacyPolicy.section8.item3': 'На отзыв согласия на обработку персональных данных;',
    'privacyPolicy.section8.item4': 'На осуществление иных прав, предусмотренных действующим законодательством РФ.',
    'privacyPolicy.section8.p2': '8.2. Для реализации своих прав Пользователь может направить соответствующий запрос Оператору по контактным данным, указанным в разделе 9 настоящей Политики. Запрос должен содержать sufficient информацию для идентификации Пользователя.',
    
    'privacyPolicy.section9.title': '9. Контактная информация Оператора',
    'privacyPolicy.section9.intro': '9.1. Все предложения, запросы, требования или вопросы, связанные с обработкой персональных данных и реализацией своих прав, Пользователь может направлять Оператору:',
    'privacyPolicy.section9.email': 'По электронной почте: arkhipelagllc@gmail.com',
    'privacyPolicy.section9.address': 'По почтовому адресу: 3250/19 , Villa 1 Thep Krasat Tri-Nai Yang Rd, Пхукет, Тайланд, 83110',
    'privacyPolicy.section9.response': '9.2. Оператор обязуется рассмотреть любое обращение Пользователя и направить ответ на указанный им адрес электронной почты в разумные сроки.',
    
    'privacyPolicy.section10.title': '10. Заключительные положения',
    'privacyPolicy.section10.p1': '10.1. Настоящая Политика является публичным документом и размещена на Сайте по адресу: https://arkhipelag.com/privacy-policy',
    'privacyPolicy.section10.p2': '10.2. Оператор вправе вносить изменения в настоящую Политику. Все изменения вступают в силу с момента их опубликования на Сайте. Пользователь обязуется самостоятельно регулярно знакомиться с актуальной версией Политики.',
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