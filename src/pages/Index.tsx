import { LanguageProvider } from '../contexts/LanguageContext';
import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ContactSection } from '../components/ContactSection';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        
        {/* Footer */}
        <footer className="bg-surface border-t border-border py-8">
          <div className="container mx-auto px-6 text-center">
            <div className="font-heading text-2xl font-bold text-luxury-gradient mb-4">
              ARKHIPELAG
            </div>
            <p className="text-text-muted">
              © 2024 ARKHIPELAG. Navigating Your Luxury.
            </p>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
};

export default Index;
