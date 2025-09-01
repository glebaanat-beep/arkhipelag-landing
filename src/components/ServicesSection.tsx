import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

// Import service images
import luxuryCarsImage from '../assets/luxury-cars.jpg';
import yachtRentalImage from '../assets/yacht-rental.jpg';
import realEstateImage from '../assets/real-estate.jpg';
import shoppingConciergeImage from '../assets/shopping-concierge.jpg';
import thaiTempleImage from '../assets/thai-temple.jpg';
import exclusiveEventsImage from '../assets/exclusive-events.jpg';

interface Service {
  id: string;
  image: string;
  titleKey: string;
  descriptionKey: string;
}

const services: Service[] = [
  {
    id: 'car',
    image: luxuryCarsImage,
    titleKey: 'services.car.title',
    descriptionKey: 'services.car.description',
  },
  {
    id: 'yacht',
    image: yachtRentalImage,
    titleKey: 'services.yacht.title',
    descriptionKey: 'services.yacht.description',
  },
  {
    id: 'realestate',
    image: realEstateImage,
    titleKey: 'services.realestate.title',
    descriptionKey: 'services.realestate.description',
  },
  {
    id: 'shopping',
    image: shoppingConciergeImage,
    titleKey: 'services.shopping.title',
    descriptionKey: 'services.shopping.description',
  },
  {
    id: 'tours',
    image: thaiTempleImage,
    titleKey: 'services.tours.title',
    descriptionKey: 'services.tours.description',
  },
  {
    id: 'events',
    image: exclusiveEventsImage,
    titleKey: 'services.events.title',
    descriptionKey: 'services.events.description',
  },
];

export function ServicesSection() {
  const { t } = useLanguage();
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-text-primary">
            {t('services.title')}
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto" />
        </div>
        
        {/* Service Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 font-medium ${
                  activeService === index
                    ? 'bg-luxury-gold text-background gold-shadow'
                    : 'bg-card hover:bg-card-elevated text-text-secondary hover:text-text-primary'
                }`}
              >
                {t(service.titleKey)}
              </button>
            ))}
          </div>
          
          {/* Service Content */}
          <div className="bg-card rounded-2xl luxury-shadow overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-80 md:h-96">
                <img
                  src={services[activeService].image}
                  alt={t(services[activeService].titleKey)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent" />
              </div>
              
              {/* Content Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-luxury-gold">
                  {t(services[activeService].titleKey)}
                </h3>
                
                <p className="text-text-secondary leading-relaxed text-lg">
                  {t(services[activeService].descriptionKey)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}