import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Navigation } from '../components/Navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ServiceCard } from '../components/ServiceCard';
import { servicesData } from '../data/servicesData';

export default function ExperiencesCatalog() {
  const { t } = useLanguage();

  // Handle anchor links from homepage
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const tabId = hash.substring(1);
      const tabs = ['cultural', 'sea', 'adventure', 'extreme'];
      if (tabs.includes(tabId)) {
        setTimeout(() => {
          const tabElement = document.querySelector(`[data-state="active"]`);
          if (tabElement) {
            tabElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, []);

  // Group services by category
  const culturalServices = servicesData.filter(s => s.category === 'cultural');
  const seaServices = servicesData.filter(s => s.category === 'sea');
  const adventureServices = servicesData.filter(s => s.category === 'adventure');
  const extremeServices = servicesData.filter(s => s.category === 'extreme');

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-surface to-background">
          <div className="container mx-auto px-6 text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-luxury-gradient mb-6">
              {t('catalog.title')}
            </h1>
            <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto">
              {t('experiences.subtitle')}
            </p>
          </div>
        </section>

        {/* Catalog Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <Tabs defaultValue="cultural" className="w-full">
              <TabsList className="flex flex-wrap justify-center gap-2 mb-12 bg-transparent p-0 h-auto">
                <TabsTrigger 
                  value="cultural" 
                  className="relative bg-surface/80 backdrop-blur-sm border border-border/50 hover:border-luxury-gold/30 text-text-primary font-medium py-4 px-8 rounded-2xl data-[state=active]:bg-luxury-gold data-[state=active]:text-primary-foreground data-[state=active]:border-luxury-gold data-[state=active]:shadow-lg transition-all duration-300 hover:shadow-md hover:scale-105 min-w-[120px] text-center"
                >
                  {t('catalog.tab.cultural')}
                </TabsTrigger>
                <TabsTrigger 
                  value="sea" 
                  className="relative bg-surface/80 backdrop-blur-sm border border-border/50 hover:border-luxury-gold/30 text-text-primary font-medium py-4 px-8 rounded-2xl data-[state=active]:bg-luxury-gold data-[state=active]:text-primary-foreground data-[state=active]:border-luxury-gold data-[state=active]:shadow-lg transition-all duration-300 hover:shadow-md hover:scale-105 min-w-[120px] text-center"
                >
                  {t('catalog.tab.sea')}
                </TabsTrigger>
                <TabsTrigger 
                  value="adventure" 
                  className="relative bg-surface/80 backdrop-blur-sm border border-border/50 hover:border-luxury-gold/30 text-text-primary font-medium py-4 px-8 rounded-2xl data-[state=active]:bg-luxury-gold data-[state=active]:text-primary-foreground data-[state=active]:border-luxury-gold data-[state=active]:shadow-lg transition-all duration-300 hover:shadow-md hover:scale-105 min-w-[120px] text-center"
                >
                  {t('catalog.tab.adventure')}
                </TabsTrigger>
                <TabsTrigger 
                  value="extreme" 
                  className="relative bg-surface/80 backdrop-blur-sm border border-border/50 hover:border-luxury-gold/30 text-text-primary font-medium py-4 px-8 rounded-2xl data-[state=active]:bg-luxury-gold data-[state=active]:text-primary-foreground data-[state=active]:border-luxury-gold data-[state=active]:shadow-lg transition-all duration-300 hover:shadow-md hover:scale-105 min-w-[120px] text-center"
                >
                  {t('catalog.tab.extreme')}
                </TabsTrigger>
              </TabsList>

              {/* Cultural Tab */}
              <TabsContent value="cultural" id="cultural" className="space-y-6">
                {culturalServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </TabsContent>

              {/* Sea Tab */}
              <TabsContent value="sea" id="sea" className="space-y-6">
                {seaServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </TabsContent>

              {/* Adventure Tab */}
              <TabsContent value="adventure" id="adventure" className="space-y-6">
                {adventureServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </TabsContent>

              {/* Extreme Tab */}
              <TabsContent value="extreme" id="extreme" className="space-y-6">
                {extremeServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Contact Block */}
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-surface/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12 text-center">
                <p className="text-text-primary text-lg md:text-2xl leading-relaxed mb-2">
                  {t('catalog.contact.message')}{' '}
                  <a 
                    href="https://t.me/Arkhipelag_llc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-luxury-gold hover:text-luxury-gold-bright font-semibold transition-colors underline decoration-luxury-gold/30 hover:decoration-luxury-gold"
                  >
                    {t('catalog.contact.telegram')}
                  </a>
                </p>
                <p className="text-text-secondary text-base md:text-lg">
                  {t('catalog.contact.suffix')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
