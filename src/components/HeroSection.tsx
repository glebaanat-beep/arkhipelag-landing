import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import heroImage from '../assets/hero-yacht.jpg';

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-heading text-6xl md:text-8xl font-bold mb-6 text-luxury-gradient">
          {t('hero.title')}
        </h1>
        
        <p className="text-xl md:text-2xl text-luxury-gold mb-8 font-light">
          {t('hero.tagline')}
        </p>
        
        <p className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
          {t('hero.statement')}
        </p>
        
        <Button
          onClick={scrollToServices}
          size="lg"
          className="bg-luxury-gold hover:bg-luxury-gold-bright text-background font-semibold px-8 py-4 text-lg gold-shadow transition-all duration-500 hover:scale-105"
        >
          {t('hero.cta')}
        </Button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-luxury-gold" />
      </div>
    </section>
  );
}