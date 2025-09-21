import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Navigation } from '../components/Navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

export default function ExperiencesCatalog() {
  const { t } = useLanguage();

  // Handle anchor links from homepage
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Remove the # and find the corresponding tab
      const tabId = hash.substring(1);
      const tabs = ['cultural', 'sea', 'adventure', 'extreme'];
      if (tabs.includes(tabId)) {
        // Small delay to ensure the page is rendered
        setTimeout(() => {
          const tabElement = document.querySelector(`[data-state="active"]`);
          if (tabElement) {
            tabElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, []);

  const openTelegram = () => {
    window.open('https://t.me/Arkhipelag_llc', '_blank');
  };

  const culturalExperiences = [
    {
      titleKey: 'catalog.cultural.palace.title',
      descriptionKey: 'catalog.cultural.palace.description',
      price: '1,500 – 8,000 THB'
    },
    {
      titleKey: 'catalog.cultural.ayutthaya.title',
      descriptionKey: 'catalog.cultural.ayutthaya.description',
      price: '8,000 – 12,000 THB'
    },
    {
      titleKey: 'catalog.cultural.floating.title',
      descriptionKey: 'catalog.cultural.floating.description',
      price: '3,500 – 6,000 THB'
    },
    {
      titleKey: 'catalog.cultural.temples.title',
      descriptionKey: 'catalog.cultural.temples.description',
      price: '2,500 – 5,500 THB'
    },
    {
      titleKey: 'catalog.cultural.tribes.title',
      descriptionKey: 'catalog.cultural.tribes.description',
      price: '15,000 – 25,000 THB'
    }
  ];

  const seaExperiences = [
    {
      titleKey: 'catalog.sea.yacht.title',
      descriptionKey: 'catalog.sea.yacht.description',
      price: '45,000 – 120,000 THB'
    },
    {
      titleKey: 'catalog.sea.phiphi.title',
      descriptionKey: 'catalog.sea.phiphi.description',
      price: '12,000 – 18,000 THB'
    },
    {
      titleKey: 'catalog.sea.sunset.title',
      descriptionKey: 'catalog.sea.sunset.description',
      price: '8,500 – 15,000 THB'
    },
    {
      titleKey: 'catalog.sea.phangnga.title',
      descriptionKey: 'catalog.sea.phangnga.description',
      price: '16,000 – 28,000 THB'
    },
    {
      titleKey: 'catalog.sea.beach.title',
      descriptionKey: 'catalog.sea.beach.description',
      price: '25,000 – 40,000 THB'
    }
  ];

  const adventureExperiences = [
    {
      titleKey: 'catalog.adventure.zipline.title',
      descriptionKey: 'catalog.adventure.zipline.description',
      price: '3,500 – 5,500 THB'
    },
    {
      titleKey: 'catalog.adventure.rafting.title',
      descriptionKey: 'catalog.adventure.rafting.description',
      price: '2,800 – 4,500 THB'
    },
    {
      titleKey: 'catalog.adventure.climbing.title',
      descriptionKey: 'catalog.adventure.climbing.description',
      price: '4,500 – 7,000 THB'
    },
    {
      titleKey: 'catalog.adventure.trekking.title',
      descriptionKey: 'catalog.adventure.trekking.description',
      price: '12,000 – 20,000 THB'
    },
    {
      titleKey: 'catalog.adventure.kayaking.title',
      descriptionKey: 'catalog.adventure.kayaking.description',
      price: '5,500 – 8,500 THB'
    }
  ];

  const extremeExperiences = [
    {
      titleKey: 'catalog.extreme.skydiving.title',
      descriptionKey: 'catalog.extreme.skydiving.description',
      price: '18,000 – 25,000 THB'
    },
    {
      titleKey: 'catalog.extreme.paragliding.title',
      descriptionKey: 'catalog.extreme.paragliding.description',
      price: '8,500 – 12,000 THB'
    },
    {
      titleKey: 'catalog.extreme.bungee.title',
      descriptionKey: 'catalog.extreme.bungee.description',
      price: '3,500 – 5,000 THB'
    },
    {
      titleKey: 'catalog.extreme.helicopter.title',
      descriptionKey: 'catalog.extreme.helicopter.description',
      price: '35,000 – 65,000 THB'
    },
    {
      titleKey: 'catalog.extreme.wingwalking.title',
      descriptionKey: 'catalog.extreme.wingwalking.description',
      price: '28,000 – 40,000 THB'
    }
  ];

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
              <TabsList className="grid w-full grid-cols-4 max-w-4xl mx-auto mb-12 bg-surface-elevated border border-border p-2 rounded-xl shadow-lg">
                <TabsTrigger value="cultural" className="text-sm font-semibold py-3 px-4 rounded-lg data-[state=active]:bg-luxury-gold data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all duration-300">{t('catalog.tab.cultural')}</TabsTrigger>
                <TabsTrigger value="sea" className="text-sm font-semibold py-3 px-4 rounded-lg data-[state=active]:bg-luxury-gold data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all duration-300">{t('catalog.tab.sea')}</TabsTrigger>
                <TabsTrigger value="adventure" className="text-sm font-semibold py-3 px-4 rounded-lg data-[state=active]:bg-luxury-gold data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all duration-300">{t('catalog.tab.adventure')}</TabsTrigger>
                <TabsTrigger value="extreme" className="text-sm font-semibold py-3 px-4 rounded-lg data-[state=active]:bg-luxury-gold data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all duration-300">{t('catalog.tab.extreme')}</TabsTrigger>
              </TabsList>

              {/* Cultural Tab */}
              <TabsContent value="cultural" id="cultural" className="space-y-6">
                {culturalExperiences.map((experience, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-lg md:text-xl mb-2">{t(experience.titleKey)}</CardTitle>
                          <CardDescription className="text-sm md:text-base">
                            {t(experience.descriptionKey)}
                          </CardDescription>
                        </div>
                        <div className="ml-6 text-right">
                          <div className="text-base md:text-lg font-semibold text-luxury-gold mb-3">
                            {experience.price}
                          </div>
                          <Button 
                            onClick={openTelegram}
                            className="bg-luxury-gold hover:bg-luxury-gold-bright text-primary-foreground font-semibold gold-shadow text-sm"
                          >
                            {t('catalog.bookNow')}
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </TabsContent>

              {/* Sea Tab */}
              <TabsContent value="sea" id="sea" className="space-y-6">
                {seaExperiences.map((experience, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-lg md:text-xl mb-2">{t(experience.titleKey)}</CardTitle>
                          <CardDescription className="text-sm md:text-base">
                            {t(experience.descriptionKey)}
                          </CardDescription>
                        </div>
                        <div className="ml-6 text-right">
                          <div className="text-base md:text-lg font-semibold text-luxury-gold mb-3">
                            {experience.price}
                          </div>
                          <Button 
                            onClick={openTelegram}
                            className="bg-luxury-gold hover:bg-luxury-gold-bright text-primary-foreground font-semibold gold-shadow text-sm"
                          >
                            {t('catalog.bookNow')}
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </TabsContent>

              {/* Adventure Tab */}
              <TabsContent value="adventure" id="adventure" className="space-y-6">
                {adventureExperiences.map((experience, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-lg md:text-xl mb-2">{t(experience.titleKey)}</CardTitle>
                          <CardDescription className="text-sm md:text-base">
                            {t(experience.descriptionKey)}
                          </CardDescription>
                        </div>
                        <div className="ml-6 text-right">
                          <div className="text-base md:text-lg font-semibold text-luxury-gold mb-3">
                            {experience.price}
                          </div>
                          <Button 
                            onClick={openTelegram}
                            className="bg-luxury-gold hover:bg-luxury-gold-bright text-primary-foreground font-semibold gold-shadow text-sm"
                          >
                            {t('catalog.bookNow')}
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </TabsContent>

              {/* Extreme Tab */}
              <TabsContent value="extreme" id="extreme" className="space-y-6">
                {extremeExperiences.map((experience, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-lg md:text-xl mb-2">{t(experience.titleKey)}</CardTitle>
                          <CardDescription className="text-sm md:text-base">
                            {t(experience.descriptionKey)}
                          </CardDescription>
                        </div>
                        <div className="ml-6 text-right">
                          <div className="text-base md:text-lg font-semibold text-luxury-gold mb-3">
                            {experience.price}
                          </div>
                          <Button 
                            onClick={openTelegram}
                            className="bg-luxury-gold hover:bg-luxury-gold-bright text-primary-foreground font-semibold gold-shadow text-sm"
                          >
                            {t('catalog.bookNow')}
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  );
}