import { LanguageProvider } from '../contexts/LanguageContext';
import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { ProcessSection } from '../components/ProcessSection';
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
          <ProcessSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        
        {/* Footer */}
        <footer className="bg-surface border-t border-border py-12">
          <div className="container mx-auto px-6">
            <div className="text-center mb-8">
              <div className="font-heading text-2xl font-bold text-luxury-gradient mb-4">
                ARKHIPELAG
              </div>
              
              {/* Address Information */}
              <div className="text-text-muted text-sm max-w-2xl mx-auto">
                <p><span className="font-medium">Address:</span> 63/202 Moo 2, Thepkasattri Rd, Muang Phuket District, Phuket 83000, Thailand</p>
              </div>
            </div>
            
            <div className="text-center pt-8 border-t border-border">
              <p className="text-text-muted">
                © 2024 ARKHIPELAG. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
};

export default Index;
