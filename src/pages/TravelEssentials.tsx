import { useEffect, useState } from 'react';
import { Navigation } from '../components/Navigation';
import { TravelEssentialCard } from '../components/TravelEssentialCard';
import { travelEssentialsData, TravelEssential } from '../data/travelEssentialsData';
import { useLanguage } from '../contexts/LanguageContext';
import { MessageCircle } from 'lucide-react';

export default function TravelEssentials() {
  const { language } = useLanguage();
  const [shuffledEssentials, setShuffledEssentials] = useState<TravelEssential[]>([]);

  useEffect(() => {
    // Shuffle array on mount to randomize order
    const shuffled = [...travelEssentialsData].sort(() => Math.random() - 0.5);
    setShuffledEssentials(shuffled);
  }, []);

  useEffect(() => {
    // SEO meta tags
    document.title = 'Travel Essentials | Premium Concierge Services | Arkhipelag';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Curated essential services and experiences for discerning travelers. Enhance your journey with our premium concierge offerings.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Curated essential services and experiences for discerning travelers. Enhance your journey with our premium concierge offerings.';
      document.head.appendChild(meta);
    }

    window.scrollTo(0, 0);
  }, []);

  const title = language === 'en' ? 'Travel Essentials' : 'Туристические услуги';
  const subtitle = language === 'en' 
    ? 'Curated experiences and essential services for the discerning traveler'
    : 'Подобранные впечатления и важнейшие услуги для взыскательного путешественника';
  const contactText = language === 'en' 
    ? 'Need custom services?' 
    : 'Нужны индивидуальные услуги?';
  const contactButton = language === 'en' 
    ? 'Contact us on Telegram' 
    : 'Свяжитесь с нами в Telegram';

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-luxury-gradient">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {shuffledEssentials.map((essential) => (
              <div key={essential.id} className="w-full max-w-[380px] mx-auto">
                <TravelEssentialCard essential={essential} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Footer Section */}
      <section className="py-16 px-6 bg-surface/30">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground">
            {contactText}
          </h2>
          <a
            href="https://t.me/Arkhipelag_llc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-luxury-gold hover:bg-luxury-gold-bright text-primary-foreground font-semibold rounded-lg gold-shadow transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            {contactButton}
          </a>
        </div>
      </section>
    </div>
  );
}
