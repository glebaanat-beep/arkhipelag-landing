import { Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Import testimonial images
import markusWeberImage from '../assets/testimonial-markus-weber.jpg';
import elenaPetrovaImage from '../assets/testimonial-elena-petrova.jpg';
import jamesMorrisonImage from '../assets/testimonial-james-morrison.jpg';
import sofiaMartinelliImage from '../assets/testimonial-sofia-martinelli.jpg';

const testimonials = [
  { 
    id: 1, 
    textKey: 'testimonials.1.text', 
    nameKey: 'testimonials.1.name', 
    titleKey: 'testimonials.1.title',
    image: markusWeberImage
  },
  { 
    id: 2, 
    textKey: 'testimonials.2.text', 
    nameKey: 'testimonials.2.name', 
    titleKey: 'testimonials.2.title',
    image: elenaPetrovaImage
  },
  { 
    id: 3, 
    textKey: 'testimonials.3.text', 
    nameKey: 'testimonials.3.name', 
    titleKey: 'testimonials.3.title',
    image: jamesMorrisonImage
  },
  { 
    id: 4, 
    textKey: 'testimonials.4.text', 
    nameKey: 'testimonials.4.name', 
    titleKey: 'testimonials.4.title',
    image: sofiaMartinelliImage
  },
];

export function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-text-primary">
            {t('testimonials.title')}
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-background p-8 rounded-2xl luxury-shadow relative"
            >
              <Quote className="w-8 h-8 text-luxury-gold mb-4" />
              
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                "{t(testimonial.textKey)}"
              </p>
              
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <img 
                    src={testimonial.image} 
                    alt={t(testimonial.nameKey)}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-text-primary font-semibold text-lg">
                    {t(testimonial.nameKey)}
                  </p>
                  <p className="text-luxury-gold text-sm font-medium">
                    {t(testimonial.titleKey)}
                  </p>
                </div>
              </div>
              
              <div className="absolute top-4 right-4">
                <div className="w-2 h-2 bg-luxury-gold rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}