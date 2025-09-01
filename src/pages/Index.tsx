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
              
              {/* Legal Information */}
              <div className="space-y-2 text-text-muted text-sm max-w-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div>
                    <p><span className="font-medium">Tax ID:</span> 0835566018842</p>
                    <p><span className="font-medium">Bank Account:</span> ARKHIPELAG COMPANY LIMITED</p>
                  </div>
                  <div>
                    <p><span className="font-medium">Bank:</span> Siam Commercial Bank PCL</p>
                    <p><span className="font-medium">Branch:</span> Phuket Branch</p>
                  </div>
                </div>
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
