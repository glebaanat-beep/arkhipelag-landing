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
      title: 'Grand Palace & Emerald Buddha Temple',
      description: 'Private guide through the residence of the Rattanakosin kings and Thailand\'s most sacred Buddhist temple with exclusive access to restricted areas.',
      price: '1,500 – 8,000 THB'
    },
    {
      title: 'Ayutthaya + Chao Phraya River Cruise',
      description: 'A day in the ancient capital of Siam with luxury river cruise back to Bangkok, including private historian guide.',
      price: '8,000 – 12,000 THB'
    },
    {
      title: 'Floating Markets & Local Life',
      description: 'Authentic market experience at Damnoen Saduak with private longtail boat and cultural immersion activities.',
      price: '3,500 – 6,000 THB'
    },
    {
      title: 'Temple Hopping in Bangkok',
      description: 'Sacred journey through Wat Pho, Wat Arun, and hidden temple gems with meditation session.',
      price: '2,500 – 5,500 THB'
    },
    {
      title: 'Northern Hill Tribes Experience',
      description: 'Multi-day cultural immersion with Karen and Hmong communities in Chiang Mai mountains.',
      price: '15,000 – 25,000 THB'
    }
  ];

  const seaExperiences = [
    {
      title: 'Luxury Yacht Charter - Full Day',
      description: 'Private yacht charter with professional crew, gourmet catering, and customized island hopping itinerary.',
      price: '45,000 – 120,000 THB'
    },
    {
      title: 'Phi Phi Islands VIP Tour',
      description: 'Exclusive speedboat tour to Maya Bay, Bamboo Island, and Viking Cave with private beach access.',
      price: '12,000 – 18,000 THB'
    },
    {
      title: 'Sunset Sailing Experience',
      description: 'Romantic sunset cruise on traditional Thai sailing boat with champagne and canapes.',
      price: '8,500 – 15,000 THB'
    },
    {
      title: 'Phang Nga Bay Luxury Cruise',
      description: 'Full day luxury catamaran cruise through dramatic limestone karsts with sea kayaking and cave exploration.',
      price: '16,000 – 28,000 THB'
    },
    {
      title: 'Private Beach Picnic Setup',
      description: 'Exclusive beach access with luxury picnic setup, personal chef, and water sports equipment.',
      price: '25,000 – 40,000 THB'
    }
  ];

  const adventureExperiences = [
    {
      title: 'Jungle Canopy Zipline',
      description: 'Adrenaline-pumping zipline adventure through pristine rainforest canopy with certified guides.',
      price: '3,500 – 5,500 THB'
    },
    {
      title: 'White Water Rafting',
      description: 'Thrilling rapids adventure on Mae Taeng River with professional guides and safety equipment.',
      price: '2,800 – 4,500 THB'
    },
    {
      title: 'Rock Climbing & Rappelling',
      description: 'Challenge yourself on limestone cliffs in Railay Beach with expert instruction and equipment.',
      price: '4,500 – 7,000 THB'
    },
    {
      title: 'Jungle Trekking & Camping',
      description: 'Multi-day wilderness expedition with overnight camping, wildlife spotting, and survival skills.',
      price: '12,000 – 20,000 THB'
    },
    {
      title: 'Sea Kayaking Adventure',
      description: 'Explore hidden lagoons and sea caves in Krabi with professional guides and lunch on private beach.',
      price: '5,500 – 8,500 THB'
    }
  ];

  const extremeExperiences = [
    {
      title: 'Tandem Skydiving',
      description: 'Ultimate adrenaline rush with certified instructors, jumping from 15,000 feet over tropical paradise.',
      price: '18,000 – 25,000 THB'
    },
    {
      title: 'Paragliding Over Islands',
      description: 'Soar like a bird over turquoise waters and tropical islands with experienced tandem pilot.',
      price: '8,500 – 12,000 THB'
    },
    {
      title: 'Bungee Jumping',
      description: 'Take the leap from 200-foot platform over pristine jungle valley with full safety certification.',
      price: '3,500 – 5,000 THB'
    },
    {
      title: 'Helicopter Tours',
      description: 'Breathtaking aerial views of Thailand\'s coastline and islands from luxury helicopter with champagne service.',
      price: '35,000 – 65,000 THB'
    },
    {
      title: 'Wing Walking Experience',
      description: 'Once-in-a-lifetime adventure strapped to the wing of a vintage biplane over scenic landscapes.',
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
              <TabsList className="grid w-full grid-cols-4 max-w-4xl mx-auto mb-12">
                <TabsTrigger value="cultural">{t('catalog.tab.cultural')}</TabsTrigger>
                <TabsTrigger value="sea">{t('catalog.tab.sea')}</TabsTrigger>
                <TabsTrigger value="adventure">{t('catalog.tab.adventure')}</TabsTrigger>
                <TabsTrigger value="extreme">{t('catalog.tab.extreme')}</TabsTrigger>
              </TabsList>

              {/* Cultural Tab */}
              <TabsContent value="cultural" id="cultural" className="space-y-6">
                {culturalExperiences.map((experience, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-xl md:text-2xl mb-2">{experience.title}</CardTitle>
                          <CardDescription className="text-base md:text-lg">
                            {experience.description}
                          </CardDescription>
                        </div>
                        <div className="ml-6 text-right">
                          <div className="text-lg md:text-xl font-semibold text-luxury-gold mb-3">
                            {experience.price}
                          </div>
                          <Button 
                            onClick={openTelegram}
                            className="bg-luxury-gold hover:bg-luxury-gold-bright text-primary-foreground font-semibold gold-shadow"
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
                          <CardTitle className="text-xl md:text-2xl mb-2">{experience.title}</CardTitle>
                          <CardDescription className="text-base md:text-lg">
                            {experience.description}
                          </CardDescription>
                        </div>
                        <div className="ml-6 text-right">
                          <div className="text-lg md:text-xl font-semibold text-luxury-gold mb-3">
                            {experience.price}
                          </div>
                          <Button 
                            onClick={openTelegram}
                            className="bg-luxury-gold hover:bg-luxury-gold-bright text-primary-foreground font-semibold gold-shadow"
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
                          <CardTitle className="text-xl md:text-2xl mb-2">{experience.title}</CardTitle>
                          <CardDescription className="text-base md:text-lg">
                            {experience.description}
                          </CardDescription>
                        </div>
                        <div className="ml-6 text-right">
                          <div className="text-lg md:text-xl font-semibold text-luxury-gold mb-3">
                            {experience.price}
                          </div>
                          <Button 
                            onClick={openTelegram}
                            className="bg-luxury-gold hover:bg-luxury-gold-bright text-primary-foreground font-semibold gold-shadow"
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
                          <CardTitle className="text-xl md:text-2xl mb-2">{experience.title}</CardTitle>
                          <CardDescription className="text-base md:text-lg">
                            {experience.description}
                          </CardDescription>
                        </div>
                        <div className="ml-6 text-right">
                          <div className="text-lg md:text-xl font-semibold text-luxury-gold mb-3">
                            {experience.price}
                          </div>
                          <Button 
                            onClick={openTelegram}
                            className="bg-luxury-gold hover:bg-luxury-gold-bright text-primary-foreground font-semibold gold-shadow"
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