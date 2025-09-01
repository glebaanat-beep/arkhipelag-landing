import { Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const testimonials = [
  { id: 1, key: 'testimonials.1', author: 'Michael R.' },
  { id: 2, key: 'testimonials.2', author: 'Elena K.' },
  { id: 3, key: 'testimonials.3', author: 'James W.' },
  { id: 4, key: 'testimonials.4', author: 'Sofia M.' },
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
                "{t(testimonial.key)}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center mr-4">
                  <span className="text-background font-bold">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-text-primary font-semibold">
                    {testimonial.author}
                  </p>
                  <p className="text-text-muted text-sm">
                    Valued Client
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