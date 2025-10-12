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
    'catalog.tab.cultural': 'Culture',
    'catalog.tab.sea': 'Sea',
    'catalog.tab.adventure': 'Adventure',
    'catalog.tab.extreme': 'Extreme',
    'catalog.bookNow': 'Book Now',
    'catalog.contactToBook': 'Contact to Book',
    'catalog.basePrice': 'Base Price',
    'catalog.addOns': 'Add Premium Services',
    'catalog.total': 'Total',
    'catalog.addToCart': 'Add to Cart',
    
    // Cart
    'cart.title': 'Shopping Cart',
    'cart.empty': 'Your cart is empty',
    'cart.added': 'Added to cart successfully!',
    'cart.remove': 'Remove',
    'cart.addOns': 'Selected Add-ons',
    'cart.grandTotal': 'Grand Total',
    'cart.checkout': 'Proceed to Checkout',
    
    // Add-ons
    'addons.photographer': 'Professional Photographer',
    'addons.lunch': 'Premium Lunch',
    'addons.dinner': 'Gourmet Dinner',
    'addons.breakfast': 'Luxury Breakfast',
    'addons.transport': 'Premium Transportation',
    'addons.guide': 'Expert Private Guide',
    'addons.meditation': 'Meditation Session',
    'addons.accommodation': 'Luxury Accommodation',
    'addons.meals': 'All Meals Included',
    'addons.chef': 'Personal Chef Service',
    'addons.watersports': 'Water Sports Equipment',
    'addons.diving': 'Scuba Diving Experience',
    'addons.champagne': 'Premium Champagne Service',
    'addons.kayak': 'Kayaking Equipment',
    'addons.instructor': 'Personal Instructor',
    'addons.camping': 'Luxury Camping Setup',
    'addons.video': 'Professional Video Recording',
    'addons.extended': 'Extended Tour Time',
    
    // Palace Add-ons
    'addons.palace.photo.title': 'Royal-Style Photo Session',
    'addons.palace.photo.description': 'Transform your palace visit into your own photographic chronicle. You will receive a collection of emotional and exquisite photographs that will become the most vibrant memory of your journey to Bangkok.',
    'addons.palace.lunch.title': 'Gastronomic Experience: Lunch at Le Normandie Restaurant',
    'addons.palace.lunch.description': 'We will reserve a table for you at the legendary Le Normandie restaurant (🌟🌟 Michelin), located at Mandarin Oriental Bangkok. This is the epitome of French cuisine and impeccable service with panoramic river views of the Chao Phraya.',
    'addons.palace.transport.title': 'Impeccable Transfer: Rolls-Royce Phantom',
    'addons.palace.transport.description': 'You will be accompanied throughout the entire route in a Rolls-Royce Phantom with a personal driver. This guarantees the highest level of comfort, confidentiality, and status.',
    
    // Ayutthaya Add-ons
    'addons.ayutthaya.photo.title': '"History and Light" Photo Session',
    'addons.ayutthaya.photo.description': 'Our photographer, whose work is published in travel magazines, will not just take pictures but create a portfolio for you in the spirit of artistic historical chronicles. Using the unique "sunset" lighting among ancient ruins, they will capture your journey as a narrative full of aesthetics and emotions.',
    'addons.ayutthaya.dinner.title': 'Gastronomic Experience: Dinner at Rongros Restaurant',
    'addons.ayutthaya.dinner.description': 'We will reserve a table for you at the famous Rongros restaurant (🌟 Michelin), located in the historic Rattanakosin district right on the Chao Phraya River waterfront. You can enjoy authentic Thai cuisine of the highest level with a view of Wat Arun in the rays of the setting sun - the perfect end to the day.',
    'addons.ayutthaya.guide.title': 'In-Depth Program: Ayutthaya Heritage Expert Guide',
    'addons.ayutthaya.guide.description': 'Your guide will be a recognized expert, author of scientific works or guest lecturer, who will reveal secrets not described in guidebooks. This option includes access to one of the lesser-known historical sites by prior arrangement and detailed artifact analysis.',
    
    // Floating Markets Add-ons
    'addons.floating.photo.title': 'Travel Journalism-Style Photo Essay',
    'addons.floating.photo.description': 'Our photographer, specializing in documentary and travel photography, will create a living and emotional story in pictures for you, not staged photos. You will receive a series of images that convey the authentic atmosphere of the market, the colors of goods, and the characters of local people.',
    'addons.floating.breakfast.title': 'Gastronomic Start to the Day: Breakfast at Mandarin Oriental Bangkok',
    'addons.floating.breakfast.description': 'Begin your day with an exquisite breakfast at the legendary Mandarin Oriental. At The Verandah restaurant, a luxurious buffet with dishes of international and Thai cuisine of the highest class awaits you, served with impeccable attention to detail before departure on your tour.',
    'addons.floating.transport.title': 'Impeccable Transfer: Premium Mercedes-Benz V-Class Van',
    'addons.floating.transport.description': 'Your journey to the market and back will be conducted with maximum comfort in a spacious and quiet Mercedes-Benz V-Class van. Air-conditioned cabin, leather seats, and a professional driver guarantee a relaxing and smooth ride along scenic suburban roads.',
    
    // Temples Add-ons
    'addons.temples.photo.title': '"Dialogue with Eternity" Photo Session',
    'addons.temples.photo.description': 'Our photographer, specializing in artistic and architectural photography, will create a portfolio for you where you become part of the sacred space. Using the play of light and shadow in temple complexes, they will capture moments of deep cultural immersion, creating timeless photographs in the aesthetics of high art.',
    'addons.temples.meditation.title': 'Deep Immersion: Meditation with Monk Mentor',
    'addons.temples.meditation.description': 'This is not a group session but a personal audience and spiritual consultation. You will spend the necessary time in a secluded cell or temple garden with a monk who will answer all your questions about life and the philosophy of Dharma and teach you personal meditation techniques tailored to your needs.',
    'addons.temples.transport.title': 'Premium Transfer: Lexus LX Business SUV',
    'addons.temples.transport.description': 'Move through bustling Bangkok in impeccable comfort and quietness in a luxurious Lexus LX SUV. Spacious cabin with climate control, leather trim, and professional driver services will ensure a state of serenity and smooth transition between worldly bustle and spiritual oases.',
    
    // Tribes Add-ons
    'addons.tribes.photo.title': 'Documentary Photography: "Keepers of Traditions"',
    'addons.tribes.photo.description': 'Our photographer, working in the genre of documentary anthropology, will create a unique photo diary for you. These will not be staged shots but a piercing artistic chronicle of your journey - portraits of masters at work, moments of rituals, and landscapes of lost worlds worthy of publication.',
    'addons.tribes.accommodation.title': 'Eco-Luxury Accommodation: Private Rainforest Camp',
    'addons.tribes.accommodation.description': 'Forgo standard guesthouses in favor of a premium eco-camping experience. Your accommodation is a luxury tent with a king-size bed, private bathroom with shower, and panoramic jungle views. In the evening, candlelit dinner and a jacuzzi under the starry sky await you.',
    'addons.tribes.chef.title': 'Gastronomic Experience: Personal Chef',
    'addons.tribes.chef.description': 'Forget standard group lunches. Throughout the expedition, your meals will be supervised by a personal chef who will prepare high Thai cuisine dishes from local products for you. You can participate in master classes on preparing traditional dishes of mountain tribes in the format of a private outdoor culinary show.',
    
    // Cultural Experiences
    'catalog.cultural.palace.title': 'Exclusive Visit to the Grand Palace and Temple of the Emerald Buddha',
    'catalog.cultural.palace.description': 'Prepare for a private immersion into Thailand\'s history and spirituality. This is not just a tour, but a unique journey designed for discerning travelers. You will enjoy private access to the Royal Palace halls closed to the general public and a monk offering ceremony at the Temple of the Emerald Buddha. Your personal accredited expert guide with deep knowledge of Chakri dynasty history and art will ensure complete immersion in the culture and traditions of the royal family.',
    'catalog.cultural.ayutthaya.title': 'Ayutthaya: Journey to the Ancient Capital of Siam with Premium Cruise',
    'catalog.cultural.ayutthaya.description': 'Discover the heritage of ancient Siam on an exclusive journey created for connoisseurs of history and impeccable service. Your private tour begins with comfortable transfer to Ayutthaya, where deep immersion in the kingdom\'s flourishing era awaits you in the company of your historian guide (PhD in Southeast Asian history). You will visit not only the main temples but also gain access to archaeological zones closed to ordinary tourists. In the evening, the day\'s culmination awaits you - a luxurious private cruise on a traditional rice barge stylized as a royal yacht, returning to Bangkok accompanied by sunset skies. Exquisite set menu from our chef and champagne on board await you while you enjoy panoramic views of life along the Chao Phraya River.',
    'catalog.cultural.floating.title': 'Thailand\'s Floating Markets: Exclusive Immersion in Non-Touristy Life',
    'catalog.cultural.floating.description': 'Reject standard routes and embark on a private journey to one of the country\'s most authentic floating markets. We offer not just a visit but deep immersion in the morning life of the canals. You will visit the bustling Damnoen Saduak market on a private long-tail boat, then turn into quiet canals hidden from tourists to see the real life of locals, traditional crafts, and plantations. Your anthropologist guide or Thai culture expert will help you understand the hidden meanings and centuries-old traditions of this unique place.',
    'catalog.cultural.temples.title': 'Sacred Bangkok: Private Pilgrimage and Meditation Session with Monk',
    'catalog.cultural.temples.description': 'Discover the spiritual heart of Thailand on an exclusive journey through Bangkok\'s most revered temples. Your private expert guide on Buddhist philosophy will lead you through the magnificent Wat Pho with its Reclining Buddha, reveal the symbolism of the Temple of Dawn (Wat Arun), and provide access to secluded temple complexes hidden from tourist eyes. The culmination will be a unique personal meditation session under the guidance of a monk in a temple\'s sacred hall, where you will become acquainted with ancient practices of achieving harmony.',
    'catalog.cultural.tribes.title': 'Forgotten Worlds: Expedition to the Mountain Tribes of Northern Thailand',
    'catalog.cultural.tribes.description': 'Embark on an exclusive multi-day expedition to the most remote and authentic villages of the Karen and Hmong peoples. This journey is not a tourist tour but deep anthropological immersion. You are accompanied by an ethnographer guide who will provide access to closed communities, arrange personal meetings with elders, and participation in ancient rituals. You will witness a traditional way of life that has remained unchanged for centuries.',
    
    // Sea Experiences
    'catalog.sea.sunseeker.title': 'Private Yacht Expedition Sunseeker 75',
    'catalog.sea.sunseeker.description': 'Experience absolute freedom in the Andaman Sea aboard a luxurious Sunseeker 75 yacht with captain and steward. Your personalized itinerary includes secret coves of Phi Phi and Ko Ha islands, where snorkeling with reef sharks and a private lunch on a deserted beach await. Every moment is accompanied by five-star service.',
    'catalog.sea.princess.title': 'Private Tour on Princess Y85 Speedboat',
    'catalog.sea.princess.description': 'Discover the bays of Phi Phi with maximum comfort on a Princess Y85 speedboat. Early access to Maya Bay before the crowds, private picnic on Bamboo Island, and Viking Cave exploration with a geologist. Krug champagne and caviar served throughout the tour.',
    'catalog.sea.swan.title': 'Romantic Cruise on Swan 58 Sailing Yacht',
    'catalog.sea.swan.description': 'Immerse yourself in the magic of sunset over the Andaman Sea on an elegant Swan 58 sailing yacht. Private cruise along Phuket\'s coastline with Dom Pérignon champagne and Imperial Beluga caviar tasting. A luxurious seven-course dinner prepared on board by a personal chef.',

    // Sea Add-ons
    'addons.sea.sunseeker.chef.title': 'Gastronomic Experience by Chef Mitama',
    'addons.sea.sunseeker.chef.description': 'Personal chef from Mizumi restaurant (🌟 Michelin) will prepare lunch from black caviar, langoustines and truffles directly on the yacht.',
    'addons.sea.sunseeker.photo.title': 'Underwater Photography with Professional Operator',
    'addons.sea.sunseeker.photo.description': 'Create a unique portfolio with a professional underwater operator who will capture your swim with whale sharks.',
    'addons.sea.sunseeker.diving.title': 'Diving Safari to Sunken Ship',
    'addons.sea.sunseeker.diving.description': 'Exclusive diving to a sunken WWII destroyer accompanied by a PADI Platinum instructor.',
    'addons.sea.princess.lunch.title': 'Lunch at Six Senses Yao Noi Hotel',
    'addons.sea.princess.lunch.description': 'Gastronomic lunch with panoramic views of Phang Nga Bay in a villa with private pool.',
    'addons.sea.princess.seabob.title': 'SeaBob F5 S Underwater Scooters',
    'addons.sea.princess.seabob.description': 'Explore the depths of the sea on the most advanced underwater scooters with an instructor.',
    'addons.sea.princess.overnight.title': 'Overnight Yacht Stay in Phi Phi Bay',
    'addons.sea.princess.overnight.description': 'Unique experience of overnight stay in the open sea with candlelit dinner and morning yoga on deck.',
    'addons.sea.swan.quartet.title': 'String Quartet Serenade',
    'addons.sea.swan.quartet.description': 'Live music performed by a professional string quartet on the yacht deck.',
    'addons.sea.swan.fireworks.title': 'Fireworks Show at Sea',
    'addons.sea.swan.fireworks.description': 'Exclusive fifteen-minute pyrotechnic show over the bay waters.',
    'addons.sea.swan.floral.title': 'Romantic Decor by Florist Lab',
    'addons.sea.swan.floral.description': 'Transforming the yacht into a work of art with floral installations by Bangkok\'s leading florist.',
    
    // Adventure Experiences
    'catalog.adventure.hanuman.title': 'Flying Hanuman Sanctuary Expedition',
    'catalog.adventure.hanuman.description': 'Conquer 30 platforms at 200 meters height in a private sanctuary with early access. Your adventure day concludes with a jungle lunch prepared by a chef from Blue Elephant restaurant.',
    'catalog.adventure.extremerafting.title': 'Extreme Class Rafting',
    'catalog.adventure.extremerafting.description': 'Conquer the most dangerous rapids of Mae Taeng River in complete privacy with a team of world rafting champions. The route includes an 8-meter waterfall and lunch with canyon views.',
    'catalog.adventure.railay.title': 'Climbing Experience on Railay Limestone',
    'catalog.adventure.railay.description': 'Ascend the legendary cliffs of Railay Beach with a personal sherpa. The route includes overnight stay in a suspended camp at 150 meters and sunrise meeting at the summit.',

    // Adventure Add-ons
    'addons.adventure.hanuman.transport.title': 'Transfer on Mercedes-Maybach GLS',
    'addons.adventure.hanuman.transport.description': 'Journey to the sanctuary in the most luxurious SUV with champagne and snacks.',
    'addons.adventure.hanuman.ceremony.title': 'Private Ceremony with Tribal Shaman',
    'addons.adventure.hanuman.ceremony.description': 'Ancient blessing ritual in a sacred cave with a keeper of Hmong people\'s traditions.',
    'addons.adventure.hanuman.safari.title': 'Night Safari with Biologist',
    'addons.adventure.hanuman.safari.description': 'Exclusive observation of jungle night fauna accompanied by a leading biologist.',
    'addons.adventure.extremerafting.drone.title': 'Action Filming with DJI Ronin 4D Drone',
    'addons.adventure.extremerafting.drone.description': 'Cinematic filming of your rafting from 360-degree angles.',
    'addons.adventure.extremerafting.survival.title': 'Jungle Survival Masterclass',
    'addons.adventure.extremerafting.survival.description': 'Survival skills training from a former special forces instructor.',
    'addons.adventure.extremerafting.helicopter.title': 'Helicopter Evacuation',
    'addons.adventure.extremerafting.helicopter.description': 'Dramatic tour conclusion with helicopter evacuation from the heart of the jungle.',
    'addons.adventure.railay.equipment.title': 'Custom Equipment from Petzl',
    'addons.adventure.railay.equipment.description': 'Individually crafted climbing equipment with engraving.',
    'addons.adventure.railay.photo.title': 'Photo Session with National Geographic',
    'addons.adventure.railay.photo.description': 'Photography of your ascent by a photographer published in National Geographic.',
    'addons.adventure.railay.spa.title': 'Spa Detox at Rayavadee Resort',
    'addons.adventure.railay.spa.description': 'Restorative massage and detox program at the famous resort after climbing.',
    
    // Extreme Experiences
    'catalog.extreme.stratosphere.title': 'Stratosphere Jump',
    'catalog.extreme.stratosphere.description': 'Exclusive jump from 25,000 feet above Phang Nga Bay with 90 seconds of free fall. Full equipment with oxygen system and 8K camera.',
    'catalog.extreme.airbus.title': 'Helicopter Tour on Airbus H160',
    'catalog.extreme.airbus.description': 'Three-hour tour on the world\'s most advanced helicopter over Similan Islands and Phang Nga Bay. Landing on a private island for lunch with Armand de Brignac champagne.',
    'catalog.extreme.wingabyss.title': 'Extreme Package "Wing and Abyss"',
    'catalog.extreme.wingabyss.description': 'Combined experience: biplane wing walk over islands, then parachute jump with yacht landing. Full day accompanied by film crew.',

    // Extreme Add-ons
    'addons.extreme.stratosphere.film.title': 'Hollywood Action Film Production',
    'addons.extreme.stratosphere.film.description': 'Create a professional film about your jump with operators who filmed "Fast and Furious".',
    'addons.extreme.stratosphere.certificate.title': 'Stratosphere Club Certificate',
    'addons.extreme.stratosphere.certificate.description': 'Exclusive certificate and membership in the closed stratonauts club.',
    'addons.extreme.stratosphere.jet.title': 'Fighter Jet Flight After Jump',
    'addons.extreme.stratosphere.jet.description': 'Continue the adrenaline experience on an L-39 Albatros training combat aircraft.',
    'addons.extreme.airbus.volcano.title': 'Night Landing on Volcano',
    'addons.extreme.airbus.volcano.description': 'Extreme landing on the active Krakatau volcano after sunset.',
    'addons.extreme.airbus.diving.title': 'Diving from Helicopter',
    'addons.extreme.airbus.diving.description': 'Dive to pristine coral reefs with direct helicopter delivery.',
    'addons.extreme.airbus.dinner.title': 'Romantic Dinner on Rock',
    'addons.extreme.airbus.dinner.description': 'Dinner on a private platform over the sea with helicopter delivery.',
    'addons.extreme.wingabyss.parachute.title': 'Golden Parachute',
    'addons.extreme.wingabyss.parachute.description': 'Custom parachute with gold coating and engraving.',
    'addons.extreme.wingabyss.documentary.title': 'Personal Documentary Film',
    'addons.extreme.wingabyss.documentary.description': 'Create a full-length film about your adventure with a director.',
    'addons.extreme.wingabyss.membership.title': 'Extreme Club Membership',
    'addons.extreme.wingabyss.membership.description': 'Lifetime membership in the closed extremists club with access to unique events.',
    
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
    'catalog.tab.cultural': 'Культура',
    'catalog.tab.sea': 'Море',
    'catalog.tab.adventure': 'Приключения',
    'catalog.tab.extreme': 'Экстрим',
    'catalog.bookNow': 'Забронировать',
    'catalog.contactToBook': 'Связаться для бронирования',
    'catalog.basePrice': 'Базовая цена',
    'catalog.addOns': 'Добавить премиум-услуги',
    'catalog.total': 'Итого',
    'catalog.addToCart': 'Добавить в корзину',
    
    // Cart
    'cart.title': 'Корзина покупок',
    'cart.empty': 'Ваша корзина пуста',
    'cart.added': 'Успешно добавлено в корзину!',
    'cart.remove': 'Удалить',
    'cart.addOns': 'Выбранные дополнения',
    'cart.grandTotal': 'Общая сумма',
    'cart.checkout': 'Перейти к оформлению',
    
    // Add-ons
    'addons.photographer': 'Профессиональный фотограф',
    'addons.lunch': 'Премиум обед',
    'addons.dinner': 'Изысканный ужин',
    'addons.breakfast': 'Роскошный завтрак',
    'addons.transport': 'Премиальный транспорт',
    'addons.guide': 'Частный гид-эксперт',
    'addons.meditation': 'Сеанс медитации',
    'addons.accommodation': 'Роскошное размещение',
    'addons.meals': 'Все блюда включены',
    'addons.chef': 'Персональный шеф-повар',
    'addons.watersports': 'Оборудование для водных видов спорта',
    'addons.diving': 'Подводное плавание',
    'addons.champagne': 'Премиальное шампанское',
    'addons.kayak': 'Оборудование для каякинга',
    'addons.instructor': 'Персональный инструктор',
    'addons.camping': 'Роскошный кемпинг',
    'addons.video': 'Профессиональная видеозапись',
    'addons.extended': 'Расширенное время тура',
    
    // Palace Add-ons
    'addons.palace.photo.title': 'Арт-сопровождение: фотосессия в королевском стиле',
    'addons.palace.photo.description': 'Превратите визит во дворец в собственную фото-летопись. Вы получите коллекцию эмоциональных и изысканных фотографий, которые станут самым ярким воспоминанием о вашем путешествии в Бангкок.',
    'addons.palace.lunch.title': 'Гастрономический опыт: обед в ресторане Le Normandie',
    'addons.palace.lunch.description': 'Мы забронируем для вас стол в легендарном ресторане Le Normandie (🌟🌟 Michelin), расположенном в отеле Mandarin Oriental Bangkok. Это эталон французской кухни и безупречного сервиса с панорамным видом на реку Чаопрайя.',
    'addons.palace.transport.title': 'Безупречный трансфер: автомобиль Rolls-Royce Phantom',
    'addons.palace.transport.description': 'Вас будут сопровождать на протяжении всего маршрута в автомобиле Rolls-Royce Phantom с персональным водителем. Это гарантирует высочайший уровень комфорта, конфиденциальности и статуса.',
    
    // Ayutthaya Add-ons
    'addons.ayutthaya.photo.title': 'Арт-сопровождение: фотосессия в стиле «История и свет»',
    'addons.ayutthaya.photo.description': 'Наш фотограф, чьи работы публикуются в журналах о путешествиях, не просто сделает снимки, а создаст для вас портфолио в духе художественной исторической хроники. Используя уникальное «закатное» освещение среди древних руин, он запечатлеет ваше путешествие как повествование, полное эстетики и эмоций.',
    'addons.ayutthaya.dinner.title': 'Гастрономический опыт: ужин в ресторане Rongros',
    'addons.ayutthaya.dinner.description': 'Мы забронируем для вас столик в знаменитом ресторане Rongros (🌟 Michelin), расположенном в историческом районе Раттанакосин прямо на набережной реки Чао Прайя. Вы сможете насладиться аутентичной тайской кухней высочайшего уровня с видом на храм Ват Арун в лучах заходящего солнца - идеальное завершение дня.',
    'addons.ayutthaya.guide.title': 'Углубленная программа: гид-эксперт по наследию Аюттхаи',
    'addons.ayutthaya.guide.description': 'Вашим гидом будет признанный эксперт, автор научных работ или приглашенный лектор, который откроет для вас тайны, не описанные в путеводителях. Эта опция включает доступ к одному из малоизвестных исторических объектов по предварительному согласованию и детальный анализ артефактов.',
    
    // Floating Markets Add-ons
    'addons.floating.photo.title': 'Арт-сопровождение: Фоторепортаж в духе тревел-журналистики',
    'addons.floating.photo.description': 'Наш фотограф, специализирующийся на документальной и travel-съемке, создаст для вас не постановочные фото, а живую и эмоциональную историю в картинках. Вы получите серию снимков, передающих подлинную атмосферу рынка, краски товаров и характеры местных жителей.',
    'addons.floating.breakfast.title': 'Гастрономический старт дня: Завтрак в отеле Mandarin Oriental Bangkok',
    'addons.floating.breakfast.description': 'Начните свой день с изысканного завтрака в легендарном отеле Mandarin Oriental. В ресторане The Veranduh вас ждет роскошный шведский стол с блюдами интернациональной и тайской кухни высочайшего класса, сервированный с безупречным вниманием к деталям перед отправлением в тур.',
    'addons.floating.transport.title': 'Безупречный трансфер: Премиальный минивэн Mercedes-Benz V-Class',
    'addons.floating.transport.description': 'Ваше путешествие до рынка и обратно будет проходить с максимальным комфортом в просторном и бесшумном минивэне Mercedes-Benz V-Class. Кондиционированный салон, кожаные сиденья и профессиональный водитель гарантируют расслабляющую и плавную поездку по живописным пригородным дорогам.',
    
    // Temples Add-ons
    'addons.temples.photo.title': 'Арт-сопровождение: Фотосессия «Диалог с вечностью»',
    'addons.temples.photo.description': 'Наш фотограф, специализирующийся на художественной и архитектурной съемке, создаст для вас портфолио, где вы станете частью сакрального пространства. Используя игру света и тени в храмовых комплексах, он запечатлеет моменты глубокого погружения в культуру, создав timeless-фотографии в эстетике высокого искусства.',
    'addons.temples.meditation.title': 'Глубокое погружение: Медитация с монахом-наставником',
    'addons.temples.meditation.description': 'Это не групповое занятие, а личная аудиенция и духовная консультация. Вы проведете необходимое количество времени в уединенной келье или саду храма с монахом, который ответит на все ваши вопросы о жизни и философии Дхармы и обучит вас персональным техникам медитации с учетом ваших запросов.',
    'addons.temples.transport.title': 'Премиальный трансфер: Бизнес-внедорожник Lexus LX',
    'addons.temples.transport.description': 'Передвигайтесь по оживленному Бангкоку в безупречном комфорте и тишине на роскошном внедорожнике Lexus LX. Просторный салон с климат-контролем, кожаная отделка и услуги профессионального водителя обеспечат состояние безмятежности и плавный переход между мирской суетой и духовными оазисами.',
    
    // Tribes Add-ons
    'addons.tribes.photo.title': 'Документальная фотосъемка: «Хранители традиций»',
    'addons.tribes.photo.description': 'Наш фотограф, работающий в жанре документальной антропологии, создаст для вас уникальный фотодневник. Это будут не постановочные кадры, а пронзительная художественная летопись вашего путешествия — портреты мастеров за работой, моменты ритуалов и пейзажи затерянных миров, достойные публикации.',
    'addons.tribes.accommodation.title': 'Эко-люкс размещение: Private Rainforest Camp',
    'addons.tribes.accommodation.description': 'Откажитесь от стандартных гестхаусов в пользу приватного эко-кемпинга премиум-класса. Ваше размещение — это роскошная палатка с кроватью king-size, собственной ванной комнатой с душем и панорамным видом на джунгли. Вечером вас ждет ужин при свечах и джакузи под звездным небом.',
    'addons.tribes.chef.title': 'Гастрономический опыт: Персональный шеф-повар',
    'addons.tribes.chef.description': 'Забудьте о стандартных групповых обедах. На протяжении всей экспедиции ваше питание будет курировать персональный повар, который приготовит для вас блюда высокой тайской кухни из локальных продуктов. Вы сможете участвовать в мастер-классах по приготовлению традиционных блюд горных племен в формате приватного кулинарного шоу на природе.',
    
    // Cultural Experiences
    'catalog.cultural.palace.title': 'Эксклюзивный визит в Большой дворец и Храм Изумрудного Будды',
    'catalog.cultural.palace.description': 'Приготовьтесь к приватному погружению в историю и духовность Таиланда. Это не просто экскурсия, а уникальное путешествие, разработанное для взыскательных путешественников. Вас ждет приватный доступ в закрытые для общего посещения залы Королевского дворца и церемония подношения монахам в Храме Изумрудного Будды. Ваш личный аккредитованный гид-эксперт с глубокими знаниями в истории и искусстве династии Чакри обеспечит полное погружение в культуру и традиции королевской семьи.',
    'catalog.cultural.ayutthaya.title': 'Аюттхая: Путешествие в древнюю столицу Сиама с премиум-круизом',
    'catalog.cultural.ayutthaya.description': 'Откройте для себя наследие древнего Сиама в ходе эксклюзивного путешествия, созданного для ценителей истории и безупречного сервиса. Ваш приватный тур начинается с комфортабельного трансфера в Аюттхаю, где вас ждет глубокое погружение в эпоху расцвета королевства в компании вашего гида-историка (PhD в области истории Юго-Восточной Азии). Вы посетите не только главные храмы, но и получите доступ к закрытым для обычных туристов археологическим зонам. Вечером вас ждет кульминация дня — роскошный частный круиз на традиционной рисовой барже, стилизованной под королевскую яхту, с возвращением в Бангкок под аккомпанемент закатного неба. Вас ожидает изысканный сет-меню от нашего шефа и шампанское на борту, пока вы будете наслаждаться панорамными видами на жизнь реки Чао Прайя.',
    'catalog.cultural.floating.title': 'Плавучие рынки Таиланда: Эксклюзивное погружение в нетуристическую жизнь',
    'catalog.cultural.floating.description': 'Откажитесь от стандартных маршрутов и отправьтесь в приватное путешествие на один из самых аутентичных плавучих рынков страны. Мы предлагаем не просто визит, а глубокое погружение в утреннюю жизнь каналов. Вы посетите оживленный рынок Дамноен Садуак на частной длинной лодке, а затем свернете в тихие, скрытые от туристов каналы, чтобы увидеть настоящий быт местных жителей, традиционные ремесла и плантации. Ваш гид-антрополог или эксперт по тайской культуре поможет понять скрытые смыслы и вековые традиции этого уникального места.',
    'catalog.cultural.temples.title': 'Сакральный Бангкок: Приватное паломничество и сеанс медитации с монахом',
    'catalog.cultural.temples.description': 'Откройте для себя духовное сердце Таиланда в ходе эксклюзивного путешествия по самым почитаемым храмам Бангкока. Ваш приватный гид-эксперт по буддийской философии проведет вас через величественный Ват По с его Лежащим Буддой, раскроет символизм храма Утренней Зари (Ват Арун) и откроет доступ в уединенные храмовые комплексы, скрытые от глаз туристов. Кульминацией станет уникальный персональный сеанс медитации под руководством монаха в священном зале одного из храмов, где вы познакомитесь с древними практиками обретения гармонии.',
    'catalog.cultural.tribes.title': 'Забытые миры: Экспедиция в горные племена Северного Таиланда',
    'catalog.cultural.tribes.description': 'Отправьтесь в эксклюзивную многодневную экспедицию в самые удаленные и аутентичные деревни народностей Карен и Хмонг. Это путешествие - не туристический тур, а глубокое антропологическое погружение. Вас сопровождает гид-этнограф, который откроет доступ в закрытые общины, организует личные встречи со старейшинами и участие в древних ритуалах. Вы станете свидетелем традиционного образа жизни, который остается неизменным на протяжении столетий.',
    
    // Sea Experiences
    'catalog.sea.sunseeker.title': 'Экспедиция на частной яхте Sunseeker 75',
    'catalog.sea.sunseeker.description': 'Испытайте абсолютную свободу в Андаманском море на роскошной яхте Sunseeker 75 с капитаном и стюардом. Ваш индивидуальный маршрут включает секретные бухты островов Пхи-Пхи и Ко-Ха, где вас ждет сноркелинг с рифовыми акулами и частный обед на необитаемом пляже. Каждый момент сопровождается сервисом уровня five-star.',
    'catalog.sea.princess.title': 'Приватный тур на катере Princess Y85',
    'catalog.sea.princess.description': 'Откройте заливы Пхи-Пхи с максимальным комфортом на скоростном катере Princess Y85. Ранний доступ к заливу Майя Бэй до прибытия толп, частный пикник на острове Бамбу и исследование пещеры Викингов с геологом. Шампанское Krug и икра обслуживаются на протяжении всего тура.',
    'catalog.sea.swan.title': 'Романтический круиз на парусной яхте Swan 58',
    'catalog.sea.swan.description': 'Погрузитесь в магию заката над Андаманским морем на элегантной парусной яхте Swan 58. Приватный круиз вдоль побережья Пхукета с дегустацией шампанского Dom Pérignon и икры Imperial Beluga. Роскошный ужин из семи блюд готовится на борту личным шефом.',

    // Sea Add-ons
    'addons.sea.sunseeker.chef.title': 'Гастрономический опыт от шефа Mitama',
    'addons.sea.sunseeker.chef.description': 'Персональный шеф из ресторана Mizumi (🌟 Michelin) приготовит для вас обед из черной икры, лангустинов и трюфелей прямо на яхте.',
    'addons.sea.sunseeker.photo.title': 'Подводная фотосъемка с профессиональным оператором',
    'addons.sea.sunseeker.photo.description': 'Создайте уникальное портфолио с профессиональным подводным оператором, который запечатлит ваше плавание с китовыми акулами.',
    'addons.sea.sunseeker.diving.title': 'Дайвинг-сафари к затонувшему кораблю',
    'addons.sea.sunseeker.diving.description': 'Эксклюзивный дайвинг к затонувшему эсминцу времен Второй мировой войны в сопровождении инструктора PADI Platinum.',
    'addons.sea.princess.lunch.title': 'Обед в отеле Six Senses Yao Noi',
    'addons.sea.princess.lunch.description': 'Гастрономический обед с панорамным видом на залив Пханг Нга в вилле с личным бассейном.',
    'addons.sea.princess.seabob.title': 'Подводные скутеры SeaBob F5 S',
    'addons.sea.princess.seabob.description': 'Исследуйте морские глубины на самых технологичных подводных скутерах с инструктором.',
    'addons.sea.princess.overnight.title': 'Ночная яхтенная стоянка в заливе Пхи-Пхи',
    'addons.sea.princess.overnight.description': 'Уникальный опыт ночевки в открытом море с ужином при свечах и утренней йогой на палубе.',
    'addons.sea.swan.quartet.title': 'Серенада струнного квартета',
    'addons.sea.swan.quartet.description': 'Живая музыка в исполнении профессионального струнного квартета на палубе яхты.',
    'addons.sea.swan.fireworks.title': 'Фейерверк-шоу в открытом море',
    'addons.sea.swan.fireworks.description': 'Эксклюзивное пятнадцатиминутное пиротехническое шоу над акваторией залива.',
    'addons.sea.swan.floral.title': 'Романтический декор от Florist Lab',
    'addons.sea.swan.floral.description': 'Превращение яхты в произведение искусства с цветочными инсталляциями от ведущего флориста Бангкока.',
    
    // Adventure Experiences
    'catalog.adventure.hanuman.title': 'Экспедиция Flying Hanuman Sanctuary',
    'catalog.adventure.hanuman.description': 'Преодолейте 30 платформ на высоте 200 метров в частном заповеднике с ранним доступом. Ваш приключенческий день завершится обедом в джунглях, приготовленным шефом из ресторана Blue Elephant.',
    'catalog.adventure.extremerafting.title': 'Рафтинг класса "Экстрим"',
    'catalog.adventure.extremerafting.description': 'Покорите самые опасные пороги реки Мэй-Тенг в полной приватности с командой чемпионов мира по рафтингу. Маршрут включает водопад высотой 8 метров и обед с видом на каньон.',
    'catalog.adventure.railay.title': 'Альпинистский опыт на известняках Райлей',
    'catalog.adventure.railay.description': 'Восхождение на легендарные скалы пляжа Райлей с персональным шерпой. Маршрут включает ночевку в подвесном лагере на высоте 150 метров и встречу рассвета на вершине.',

    // Adventure Add-ons
    'addons.adventure.hanuman.transport.title': 'Трансфер на Mercedes-Maybach GLS',
    'addons.adventure.hanuman.transport.description': 'Поездка до заповедника в самом роскошном внедорожнике с шампанским и закусками.',
    'addons.adventure.hanuman.ceremony.title': 'Частная церемония с шаманом племени',
    'addons.adventure.hanuman.ceremony.description': 'Древний ритуал благословения в священной пещере с хранителем традиций народа хмонг.',
    'addons.adventure.hanuman.safari.title': 'Ночное сафари с биологом',
    'addons.adventure.hanuman.safari.description': 'Эксклюзивное наблюдение за ночной фауной джунглей в сопровождении ведущего биолога.',
    'addons.adventure.extremerafting.drone.title': 'Экшн-съемка с дрона DJI Ronin 4D',
    'addons.adventure.extremerafting.drone.description': 'Кинематографическая съемка вашего сплава с углов 360 градусов.',
    'addons.adventure.extremerafting.survival.title': 'Мастер-класс выживания в джунглях',
    'addons.adventure.extremerafting.survival.description': 'Обучение навыкам выживания у бывшего инструктора спецназа.',
    'addons.adventure.extremerafting.helicopter.title': 'Геликоптерная эвакуация',
    'addons.adventure.extremerafting.helicopter.description': 'Драматическое завершение тура с эвакуацией вертолетом из сердца джунглей.',
    'addons.adventure.railay.equipment.title': 'Кастомное снаряжение от Petzl',
    'addons.adventure.railay.equipment.description': 'Индивидуально изготовленное альпинистское снаряжение с гравировкой.',
    'addons.adventure.railay.photo.title': 'Фотосессия с National Geographic',
    'addons.adventure.railay.photo.description': 'Съемка вашего восхождения фотографом, публиковавшимся в National Geographic.',
    'addons.adventure.railay.spa.title': 'Спа-детокс в Rayavadee Resort',
    'addons.adventure.railay.spa.description': 'Восстановительный массаж и детокс-программа в знаменитом отеле после восхождения.',
    
    // Extreme Experiences
    'catalog.extreme.stratosphere.title': 'Прыжок в стратосферу',
    'catalog.extreme.stratosphere.description': 'Эксклюзивный прыжок с высоты 25,000 футов над заливом Пханг Нга с 90 секундами свободного падения. Полная экипировка с кислородной системой и камерой 8K.',
    'catalog.extreme.airbus.title': 'Вертолетный тур на Airbus H160',
    'catalog.extreme.airbus.description': 'Трехчасовой тур на самом технологичном вертолете мира над островами Симилан и заливом Пханг Нга. Посадка на частном острове для обеда с шампанским Armand de Brignac.',
    'catalog.extreme.wingabyss.title': 'Экстрим-пакет "Крыло и бездна"',
    'catalog.extreme.wingabyss.description': 'Комбинированный опыт: прогулка по крылу биплана над островами, затем прыжок с парашютом с последующей посадкой на яхту. Весь день сопровождается съемочной группой.',

    // Extreme Add-ons
    'addons.extreme.stratosphere.film.title': 'Кинопроизводство Hollywood Action',
    'addons.extreme.stratosphere.film.description': 'Создание профессионального фильма о вашем прыжке с операторами, снимавшими "Форсаж".',
    'addons.extreme.stratosphere.certificate.title': 'Сертификат стратосферного клуба',
    'addons.extreme.stratosphere.certificate.description': 'Эксклюзивный сертификат и членство в закрытом клубе стратонавтов.',
    'addons.extreme.stratosphere.jet.title': 'Полет на истребителе после прыжка',
    'addons.extreme.stratosphere.jet.description': 'Продолжение адреналинового опыта на учебно-боевом самолете L-39 Albatros.',
    'addons.extreme.airbus.volcano.title': 'Ночная посадка на вулкане',
    'addons.extreme.airbus.volcano.description': 'Экстремальная посадка на активном вулкане Кракатау после заката.',
    'addons.extreme.airbus.diving.title': 'Дайвинг с вертолета',
    'addons.extreme.airbus.diving.description': 'Погружение к нетронутым коралловым рифам с прямой доставкой вертолетом.',
    'addons.extreme.airbus.dinner.title': 'Романтический ужин на скале',
    'addons.extreme.airbus.dinner.description': 'Ужин на частной платформе над морем с доставкой вертолетом.',
    'addons.extreme.wingabyss.parachute.title': 'Золотой парашют',
    'addons.extreme.wingabyss.parachute.description': 'Кастомный парашют с золотым напылением и гравировкой.',
    'addons.extreme.wingabyss.documentary.title': 'Персональный документальный фильм',
    'addons.extreme.wingabyss.documentary.description': 'Создание полнометражного фильма о вашем приключении с режиссером.',
    'addons.extreme.wingabyss.membership.title': 'Членство в Extreme Club',
    'addons.extreme.wingabyss.membership.description': 'Пожизненное членство в закрытом клубе экстремалов с доступом к уникальным событиям.',
    
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