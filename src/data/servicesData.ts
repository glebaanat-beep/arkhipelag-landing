import { Service } from '../contexts/CartContext';

export const servicesData: Service[] = [
  // Cultural Experiences
  {
    id: 'cultural-palace',
    titleKey: 'catalog.cultural.palace.title',
    descriptionKey: 'catalog.cultural.palace.description',
    basePrice: 1500,
    category: 'cultural',
    addOns: [
      { id: 'palace-photo', titleKey: 'addons.photographer', price: 2000 },
      { id: 'palace-lunch', titleKey: 'addons.lunch', price: 1500 },
      { id: 'palace-transport', titleKey: 'addons.transport', price: 1000 },
    ]
  },
  {
    id: 'cultural-ayutthaya',
    titleKey: 'catalog.cultural.ayutthaya.title',
    descriptionKey: 'catalog.cultural.ayutthaya.description',
    basePrice: 8000,
    category: 'cultural',
    addOns: [
      { id: 'ayutthaya-photo', titleKey: 'addons.photographer', price: 3000 },
      { id: 'ayutthaya-dinner', titleKey: 'addons.dinner', price: 2500 },
      { id: 'ayutthaya-guide', titleKey: 'addons.guide', price: 2000 },
    ]
  },
  {
    id: 'cultural-floating',
    titleKey: 'catalog.cultural.floating.title',
    descriptionKey: 'catalog.cultural.floating.description',
    basePrice: 3500,
    category: 'cultural',
    addOns: [
      { id: 'floating-photo', titleKey: 'addons.photographer', price: 1500 },
      { id: 'floating-breakfast', titleKey: 'addons.breakfast', price: 800 },
      { id: 'floating-transport', titleKey: 'addons.transport', price: 1200 },
    ]
  },
  {
    id: 'cultural-temples',
    titleKey: 'catalog.cultural.temples.title',
    descriptionKey: 'catalog.cultural.temples.description',
    basePrice: 2500,
    category: 'cultural',
    addOns: [
      { id: 'temples-photo', titleKey: 'addons.photographer', price: 1800 },
      { id: 'temples-meditation', titleKey: 'addons.meditation', price: 1000 },
      { id: 'temples-transport', titleKey: 'addons.transport', price: 900 },
    ]
  },
  {
    id: 'cultural-tribes',
    titleKey: 'catalog.cultural.tribes.title',
    descriptionKey: 'catalog.cultural.tribes.description',
    basePrice: 15000,
    category: 'cultural',
    addOns: [
      { id: 'tribes-photo', titleKey: 'addons.photographer', price: 5000 },
      { id: 'tribes-accommodation', titleKey: 'addons.accommodation', price: 3500 },
      { id: 'tribes-meals', titleKey: 'addons.meals', price: 2000 },
    ]
  },

  // Sea Experiences
  {
    id: 'sea-yacht',
    titleKey: 'catalog.sea.yacht.title',
    descriptionKey: 'catalog.sea.yacht.description',
    basePrice: 45000,
    category: 'sea',
    addOns: [
      { id: 'yacht-chef', titleKey: 'addons.chef', price: 8000 },
      { id: 'yacht-watersports', titleKey: 'addons.watersports', price: 5000 },
      { id: 'yacht-photo', titleKey: 'addons.photographer', price: 6000 },
    ]
  },
  {
    id: 'sea-phiphi',
    titleKey: 'catalog.sea.phiphi.title',
    descriptionKey: 'catalog.sea.phiphi.description',
    basePrice: 12000,
    category: 'sea',
    addOns: [
      { id: 'phiphi-photo', titleKey: 'addons.photographer', price: 3000 },
      { id: 'phiphi-lunch', titleKey: 'addons.lunch', price: 2000 },
      { id: 'phiphi-diving', titleKey: 'addons.diving', price: 4000 },
    ]
  },
  {
    id: 'sea-sunset',
    titleKey: 'catalog.sea.sunset.title',
    descriptionKey: 'catalog.sea.sunset.description',
    basePrice: 8500,
    category: 'sea',
    addOns: [
      { id: 'sunset-champagne', titleKey: 'addons.champagne', price: 2500 },
      { id: 'sunset-photo', titleKey: 'addons.photographer', price: 2000 },
      { id: 'sunset-dinner', titleKey: 'addons.dinner', price: 3500 },
    ]
  },
  {
    id: 'sea-phangnga',
    titleKey: 'catalog.sea.phangnga.title',
    descriptionKey: 'catalog.sea.phangnga.description',
    basePrice: 16000,
    category: 'sea',
    addOns: [
      { id: 'phangnga-photo', titleKey: 'addons.photographer', price: 4000 },
      { id: 'phangnga-lunch', titleKey: 'addons.lunch', price: 2500 },
      { id: 'phangnga-kayak', titleKey: 'addons.kayak', price: 1500 },
    ]
  },
  {
    id: 'sea-beach',
    titleKey: 'catalog.sea.beach.title',
    descriptionKey: 'catalog.sea.beach.description',
    basePrice: 25000,
    category: 'sea',
    addOns: [
      { id: 'beach-chef', titleKey: 'addons.chef', price: 5000 },
      { id: 'beach-photo', titleKey: 'addons.photographer', price: 4000 },
      { id: 'beach-watersports', titleKey: 'addons.watersports', price: 3000 },
    ]
  },

  // Adventure Experiences
  {
    id: 'adventure-zipline',
    titleKey: 'catalog.adventure.zipline.title',
    descriptionKey: 'catalog.adventure.zipline.description',
    basePrice: 3500,
    category: 'adventure',
    addOns: [
      { id: 'zipline-photo', titleKey: 'addons.photographer', price: 1500 },
      { id: 'zipline-lunch', titleKey: 'addons.lunch', price: 800 },
      { id: 'zipline-transport', titleKey: 'addons.transport', price: 1000 },
    ]
  },
  {
    id: 'adventure-rafting',
    titleKey: 'catalog.adventure.rafting.title',
    descriptionKey: 'catalog.adventure.rafting.description',
    basePrice: 2800,
    category: 'adventure',
    addOns: [
      { id: 'rafting-photo', titleKey: 'addons.photographer', price: 1200 },
      { id: 'rafting-lunch', titleKey: 'addons.lunch', price: 700 },
      { id: 'rafting-transport', titleKey: 'addons.transport', price: 800 },
    ]
  },
  {
    id: 'adventure-climbing',
    titleKey: 'catalog.adventure.climbing.title',
    descriptionKey: 'catalog.adventure.climbing.description',
    basePrice: 4500,
    category: 'adventure',
    addOns: [
      { id: 'climbing-photo', titleKey: 'addons.photographer', price: 2000 },
      { id: 'climbing-instructor', titleKey: 'addons.instructor', price: 1500 },
      { id: 'climbing-lunch', titleKey: 'addons.lunch', price: 900 },
    ]
  },
  {
    id: 'adventure-trekking',
    titleKey: 'catalog.adventure.trekking.title',
    descriptionKey: 'catalog.adventure.trekking.description',
    basePrice: 12000,
    category: 'adventure',
    addOns: [
      { id: 'trekking-photo', titleKey: 'addons.photographer', price: 4000 },
      { id: 'trekking-camping', titleKey: 'addons.camping', price: 3000 },
      { id: 'trekking-meals', titleKey: 'addons.meals', price: 2000 },
    ]
  },
  {
    id: 'adventure-kayaking',
    titleKey: 'catalog.adventure.kayaking.title',
    descriptionKey: 'catalog.adventure.kayaking.description',
    basePrice: 5500,
    category: 'adventure',
    addOns: [
      { id: 'kayaking-photo', titleKey: 'addons.photographer', price: 2000 },
      { id: 'kayaking-lunch', titleKey: 'addons.lunch', price: 1200 },
      { id: 'kayaking-transport', titleKey: 'addons.transport', price: 1000 },
    ]
  },

  // Extreme Experiences
  {
    id: 'extreme-skydiving',
    titleKey: 'catalog.extreme.skydiving.title',
    descriptionKey: 'catalog.extreme.skydiving.description',
    basePrice: 18000,
    category: 'extreme',
    addOns: [
      { id: 'skydiving-video', titleKey: 'addons.video', price: 3500 },
      { id: 'skydiving-photo', titleKey: 'addons.photographer', price: 2500 },
      { id: 'skydiving-transport', titleKey: 'addons.transport', price: 1500 },
    ]
  },
  {
    id: 'extreme-paragliding',
    titleKey: 'catalog.extreme.paragliding.title',
    descriptionKey: 'catalog.extreme.paragliding.description',
    basePrice: 8500,
    category: 'extreme',
    addOns: [
      { id: 'paragliding-video', titleKey: 'addons.video', price: 2000 },
      { id: 'paragliding-photo', titleKey: 'addons.photographer', price: 1500 },
      { id: 'paragliding-transport', titleKey: 'addons.transport', price: 1000 },
    ]
  },
  {
    id: 'extreme-bungee',
    titleKey: 'catalog.extreme.bungee.title',
    descriptionKey: 'catalog.extreme.bungee.description',
    basePrice: 3500,
    category: 'extreme',
    addOns: [
      { id: 'bungee-video', titleKey: 'addons.video', price: 1500 },
      { id: 'bungee-photo', titleKey: 'addons.photographer', price: 1000 },
      { id: 'bungee-transport', titleKey: 'addons.transport', price: 800 },
    ]
  },
  {
    id: 'extreme-helicopter',
    titleKey: 'catalog.extreme.helicopter.title',
    descriptionKey: 'catalog.extreme.helicopter.description',
    basePrice: 35000,
    category: 'extreme',
    addOns: [
      { id: 'helicopter-champagne', titleKey: 'addons.champagne', price: 5000 },
      { id: 'helicopter-photo', titleKey: 'addons.photographer', price: 8000 },
      { id: 'helicopter-extended', titleKey: 'addons.extended', price: 15000 },
    ]
  },
  {
    id: 'extreme-wingwalking',
    titleKey: 'catalog.extreme.wingwalking.title',
    descriptionKey: 'catalog.extreme.wingwalking.description',
    basePrice: 28000,
    category: 'extreme',
    addOns: [
      { id: 'wingwalking-video', titleKey: 'addons.video', price: 5000 },
      { id: 'wingwalking-photo', titleKey: 'addons.photographer', price: 4000 },
      { id: 'wingwalking-transport', titleKey: 'addons.transport', price: 2000 },
    ]
  },
];
