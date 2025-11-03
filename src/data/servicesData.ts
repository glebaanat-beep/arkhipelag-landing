import { Service } from '../contexts/CartContext';

export const servicesData: Service[] = [
  // Cultural Experiences
  {
    id: 'cultural-palace',
    titleKey: 'catalog.cultural.palace.title',
    descriptionKey: 'catalog.cultural.palace.description',
    basePrice: 85000,
    category: 'cultural',
    addOns: [
      { id: 'palace-photo', titleKey: 'addons.palace.photo.title', price: 25000 },
      { id: 'palace-lunch', titleKey: 'addons.palace.lunch.title', price: 25000 },
      { id: 'palace-transport', titleKey: 'addons.palace.transport.title', price: 25000 },
    ]
  },
  {
    id: 'cultural-ayutthaya',
    titleKey: 'catalog.cultural.ayutthaya.title',
    descriptionKey: 'catalog.cultural.ayutthaya.description',
    basePrice: 75000,
    category: 'cultural',
    addOns: [
      { id: 'ayutthaya-photo', titleKey: 'addons.ayutthaya.photo.title', price: 25000 },
      { id: 'ayutthaya-dinner', titleKey: 'addons.ayutthaya.dinner.title', price: 15000 },
      { id: 'ayutthaya-guide', titleKey: 'addons.ayutthaya.guide.title', price: 25000 },
    ]
  },
  {
    id: 'cultural-floating',
    titleKey: 'catalog.cultural.floating.title',
    descriptionKey: 'catalog.cultural.floating.description',
    basePrice: 45000,
    category: 'cultural',
    addOns: [
      { id: 'floating-photo', titleKey: 'addons.floating.photo.title', price: 25000 },
      { id: 'floating-breakfast', titleKey: 'addons.floating.breakfast.title', price: 15000 },
      { id: 'floating-transport', titleKey: 'addons.floating.transport.title', price: 15000 },
    ]
  },
  {
    id: 'cultural-temples',
    titleKey: 'catalog.cultural.temples.title',
    descriptionKey: 'catalog.cultural.temples.description',
    basePrice: 65000,
    category: 'cultural',
    addOns: [
      { id: 'temples-photo', titleKey: 'addons.temples.photo.title', price: 25000 },
      { id: 'temples-meditation', titleKey: 'addons.temples.meditation.title', price: 35000 },
      { id: 'temples-transport', titleKey: 'addons.temples.transport.title', price: 25000 },
    ]
  },
  {
    id: 'cultural-tribes',
    titleKey: 'catalog.cultural.tribes.title',
    descriptionKey: 'catalog.cultural.tribes.description',
    basePrice: 295000,
    category: 'cultural',
    addOns: [
      { id: 'tribes-photo', titleKey: 'addons.tribes.photo.title', price: 75000 },
      { id: 'tribes-accommodation', titleKey: 'addons.tribes.accommodation.title', price: 55000 },
      { id: 'tribes-chef', titleKey: 'addons.tribes.chef.title', price: 45000 },
    ]
  },

  // Sea Experiences
  {
    id: 'sea-sunseeker',
    titleKey: 'catalog.sea.sunseeker.title',
    descriptionKey: 'catalog.sea.sunseeker.description',
    basePrice: 295000,
    category: 'sea',
    addOns: [
      { id: 'sunseeker-chef', titleKey: 'addons.sea.sunseeker.chef.title', price: 55000 },
      { id: 'sunseeker-photo', titleKey: 'addons.sea.sunseeker.photo.title', price: 45000 },
      { id: 'sunseeker-diving', titleKey: 'addons.sea.sunseeker.diving.title', price: 75000 },
    ]
  },
  {
    id: 'sea-princess',
    titleKey: 'catalog.sea.princess.title',
    descriptionKey: 'catalog.sea.princess.description',
    basePrice: 185000,
    category: 'sea',
    addOns: [
      { id: 'princess-lunch', titleKey: 'addons.sea.princess.lunch.title', price: 35000 },
      { id: 'princess-seabob', titleKey: 'addons.sea.princess.seabob.title', price: 45000 },
      { id: 'princess-overnight', titleKey: 'addons.sea.princess.overnight.title', price: 95000 },
    ]
  },
  {
    id: 'sea-swan',
    titleKey: 'catalog.sea.swan.title',
    descriptionKey: 'catalog.sea.swan.description',
    basePrice: 145000,
    category: 'sea',
    addOns: [
      { id: 'swan-quartet', titleKey: 'addons.sea.swan.quartet.title', price: 25000 },
      { id: 'swan-fireworks', titleKey: 'addons.sea.swan.fireworks.title', price: 45000 },
      { id: 'swan-floral', titleKey: 'addons.sea.swan.floral.title', price: 35000 },
    ]
  },

  // Adventure Experiences
  {
    id: 'adventure-hanuman',
    titleKey: 'catalog.adventure.hanuman.title',
    descriptionKey: 'catalog.adventure.hanuman.description',
    basePrice: 45000,
    category: 'adventure',
    addOns: [
      { id: 'hanuman-transport', titleKey: 'addons.adventure.hanuman.transport.title', price: 25000 },
      { id: 'hanuman-ceremony', titleKey: 'addons.adventure.hanuman.ceremony.title', price: 35000 },
      { id: 'hanuman-safari', titleKey: 'addons.adventure.hanuman.safari.title', price: 55000 },
    ]
  },
  {
    id: 'adventure-extreme-rafting',
    titleKey: 'catalog.adventure.extremerafting.title',
    descriptionKey: 'catalog.adventure.extremerafting.description',
    basePrice: 65000,
    category: 'adventure',
    addOns: [
      { id: 'extremerafting-drone', titleKey: 'addons.adventure.extremerafting.drone.title', price: 45000 },
      { id: 'extremerafting-survival', titleKey: 'addons.adventure.extremerafting.survival.title', price: 35000 },
      { id: 'extremerafting-helicopter', titleKey: 'addons.adventure.extremerafting.helicopter.title', price: 85000 },
    ]
  },
  {
    id: 'adventure-railay',
    titleKey: 'catalog.adventure.railay.title',
    descriptionKey: 'catalog.adventure.railay.description',
    basePrice: 95000,
    category: 'adventure',
    addOns: [
      { id: 'railay-equipment', titleKey: 'addons.adventure.railay.equipment.title', price: 55000 },
      { id: 'railay-photo', titleKey: 'addons.adventure.railay.photo.title', price: 75000 },
      { id: 'railay-spa', titleKey: 'addons.adventure.railay.spa.title', price: 45000 },
    ]
  },

  // Extreme Experiences
  {
    id: 'extreme-stratosphere',
    titleKey: 'catalog.extreme.stratosphere.title',
    descriptionKey: 'catalog.extreme.stratosphere.description',
    basePrice: 450000,
    category: 'extreme',
    addOns: [
      { id: 'stratosphere-film', titleKey: 'addons.extreme.stratosphere.film.title', price: 150000 },
      { id: 'stratosphere-certificate', titleKey: 'addons.extreme.stratosphere.certificate.title', price: 75000 },
      { id: 'stratosphere-jet', titleKey: 'addons.extreme.stratosphere.jet.title', price: 295000 },
    ]
  },
  {
    id: 'extreme-airbus',
    titleKey: 'catalog.extreme.airbus.title',
    descriptionKey: 'catalog.extreme.airbus.description',
    basePrice: 550000,
    category: 'extreme',
    addOns: [
      { id: 'airbus-volcano', titleKey: 'addons.extreme.airbus.volcano.title', price: 185000 },
      { id: 'airbus-diving', titleKey: 'addons.extreme.airbus.diving.title', price: 225000 },
      { id: 'airbus-dinner', titleKey: 'addons.extreme.airbus.dinner.title', price: 145000 },
    ]
  },
  {
    id: 'extreme-wing-abyss',
    titleKey: 'catalog.extreme.wingabyss.title',
    descriptionKey: 'catalog.extreme.wingabyss.description',
    basePrice: 850000,
    category: 'extreme',
    addOns: [
      { id: 'wingabyss-parachute', titleKey: 'addons.extreme.wingabyss.parachute.title', price: 95000 },
      { id: 'wingabyss-documentary', titleKey: 'addons.extreme.wingabyss.documentary.title', price: 185000 },
      { id: 'wingabyss-membership', titleKey: 'addons.extreme.wingabyss.membership.title', price: 155000 },
    ]
  },

  // Budget Experiences
  {
    id: 'budget-scooter',
    titleKey: 'catalog.budget.scooter.title',
    descriptionKey: 'catalog.budget.scooter.description',
    basePrice: 800,
    category: 'budget',
    addOns: [
      { id: 'scooter-helmet', titleKey: 'addons.budget.scooter.helmet.title', price: 200 },
      { id: 'scooter-gps', titleKey: 'addons.budget.scooter.gps.title', price: 300 },
      { id: 'scooter-insurance', titleKey: 'addons.budget.scooter.insurance.title', price: 400 },
    ]
  },
  {
    id: 'budget-motorcycle',
    titleKey: 'catalog.budget.motorcycle.title',
    descriptionKey: 'catalog.budget.motorcycle.description',
    basePrice: 3500,
    category: 'budget',
    addOns: [
      { id: 'motorcycle-gear', titleKey: 'addons.budget.motorcycle.gear.title', price: 1000 },
      { id: 'motorcycle-luggage', titleKey: 'addons.budget.motorcycle.luggage.title', price: 800 },
      { id: 'motorcycle-tracker', titleKey: 'addons.budget.motorcycle.tracker.title', price: 500 },
    ]
  },
  {
    id: 'budget-biketour',
    titleKey: 'catalog.budget.biketour.title',
    descriptionKey: 'catalog.budget.biketour.description',
    basePrice: 4500,
    category: 'budget',
    addOns: [
      { id: 'biketour-seafood', titleKey: 'addons.budget.biketour.seafood.title', price: 600 },
      { id: 'biketour-gopro', titleKey: 'addons.budget.biketour.gopro.title', price: 1200 },
      { id: 'biketour-transfer', titleKey: 'addons.budget.biketour.transfer.title', price: 400 },
    ]
  },
  {
    id: 'budget-templetour',
    titleKey: 'catalog.budget.templetour.title',
    descriptionKey: 'catalog.budget.templetour.description',
    basePrice: 1800,
    category: 'budget',
    addOns: [
      { id: 'templetour-lunch', titleKey: 'addons.budget.templetour.lunch.title', price: 400 },
      { id: 'templetour-photo', titleKey: 'addons.budget.templetour.photo.title', price: 800 },
      { id: 'templetour-transfer', titleKey: 'addons.budget.templetour.transfer.title', price: 600 },
    ]
  },
  {
    id: 'budget-island',
    titleKey: 'catalog.budget.island.title',
    descriptionKey: 'catalog.budget.island.description',
    basePrice: 2500,
    category: 'budget',
    addOns: [
      { id: 'island-snorkel', titleKey: 'addons.budget.island.snorkel.title', price: 600 },
      { id: 'island-bbq', titleKey: 'addons.budget.island.bbq.title', price: 500 },
      { id: 'island-gopro', titleKey: 'addons.budget.island.gopro.title', price: 800 },
    ]
  },
  {
    id: 'budget-cooking',
    titleKey: 'catalog.budget.cooking.title',
    descriptionKey: 'catalog.budget.cooking.description',
    basePrice: 2200,
    category: 'budget',
    addOns: [
      { id: 'cooking-market', titleKey: 'addons.budget.cooking.market.title', price: 500 },
      { id: 'cooking-book', titleKey: 'addons.budget.cooking.book.title', price: 300 },
      { id: 'cooking-transport', titleKey: 'addons.budget.cooking.transport.title', price: 600 },
    ]
  },
  {
    id: 'budget-snorkeling',
    titleKey: 'catalog.budget.snorkeling.title',
    descriptionKey: 'catalog.budget.snorkeling.description',
    basePrice: 1500,
    category: 'budget',
    addOns: [
      { id: 'snorkeling-gear', titleKey: 'addons.budget.snorkeling.gear.title', price: 400 },
      { id: 'snorkeling-photo', titleKey: 'addons.budget.snorkeling.photo.title', price: 700 },
      { id: 'snorkeling-instructor', titleKey: 'addons.budget.snorkeling.instructor.title', price: 900 },
    ]
  },
  {
    id: 'budget-foodtour',
    titleKey: 'catalog.budget.foodtour.title',
    descriptionKey: 'catalog.budget.foodtour.description',
    basePrice: 1200,
    category: 'budget',
    addOns: [
      { id: 'foodtour-extra', titleKey: 'addons.budget.foodtour.extra.title', price: 500 },
      { id: 'foodtour-private', titleKey: 'addons.budget.foodtour.private.title', price: 600 },
      { id: 'foodtour-transport', titleKey: 'addons.budget.foodtour.transport.title', price: 400 },
    ]
  },
];
