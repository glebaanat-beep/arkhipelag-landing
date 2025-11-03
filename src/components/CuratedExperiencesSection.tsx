import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

// Import the category images
import culturalImage from '../assets/category-cultural.jpg';
import seaImage from '../assets/category-sea.jpg';
import adventureImage from '../assets/category-adventure.jpg';
import extremeImage from '../assets/category-extreme.jpg';

const experiences = [
  {
    id: 'cultural',
    image: culturalImage,
    titleKey: 'experiences.cultural.title',
    descriptionKey: 'experiences.cultural.description',
    buttonKey: 'experiences.cultural.button',
    catalogLink: '/experiences-catalog#cultural',
  },
  {
    id: 'sea',
    image: seaImage,
    titleKey: 'experiences.sea.title',
    descriptionKey: 'experiences.sea.description',
    buttonKey: 'experiences.sea.button',
    catalogLink: '/experiences-catalog#sea',
  },
  {
    id: 'adventure',
    image: adventureImage,
    titleKey: 'experiences.adventure.title',
    descriptionKey: 'experiences.adventure.description',
    buttonKey: 'experiences.adventure.button',
    catalogLink: '/experiences-catalog#adventure',
  },
  {
    id: 'extreme',
    image: extremeImage,
    titleKey: 'experiences.extreme.title',
    descriptionKey: 'experiences.extreme.description',
    buttonKey: 'experiences.extreme.button',
    catalogLink: '/experiences-catalog#extreme',
  },
];

export function CuratedExperiencesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-luxury-gradient mb-6">
            {t('experiences.title')}
          </h2>
          <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto">
            {t('experiences.subtitle')}
          </p>
        </div>

        {/* Carousel for Desktop and Mobile */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {experiences.map((experience) => (
                <CarouselItem key={experience.id} className="pl-2 md:pl-4 basis-full md:basis-1/2">
                  <div className="group relative h-[400px] md:h-[500px] overflow-hidden rounded-lg cursor-pointer">
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
                      style={{
                        backgroundImage: `url(${experience.image})`,
                      }}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500" />
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                        {t(experience.titleKey)}
                      </h3>
                      
                      {/* Description - hidden by default, shows on hover */}
                      <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75 max-w-md">
                        {t(experience.descriptionKey)}
                      </p>
                      
                      {/* Button - hidden by default, shows on hover */}
                      <Button
                        asChild
                        className="w-fit bg-luxury-gold hover:bg-luxury-gold-bright text-primary-foreground font-semibold px-8 py-3 rounded-md opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150 gold-shadow"
                      >
                        <Link to={experience.catalogLink}>
                          {t(experience.buttonKey)}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation arrows */}
            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-16 top-1/2 -translate-y-1/2 bg-surface border-border hover:bg-surface-elevated text-foreground" />
              <CarouselNext className="absolute -right-16 top-1/2 -translate-y-1/2 bg-surface border-border hover:bg-surface-elevated text-foreground" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}