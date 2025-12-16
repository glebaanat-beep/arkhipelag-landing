import { useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { ProcessSection } from '../components/ProcessSection';
import { CuratedExperiencesSection } from '../components/CuratedExperiencesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ContactSection } from '../components/ContactSection';

const Index = () => {
  // Handle anchor links when navigating from catalog page
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure the page is fully rendered
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <CuratedExperiencesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-surface border-t border-border py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <div className="font-heading text-2xl font-bold text-luxury-gradient mb-4">
              ARKHIPELAG
            </div>
            
            {/* Tax ID and Address Information */}
            <div className="text-text-muted text-sm max-w-2xl mx-auto space-y-2">
              <p><span className="font-medium">Tax ID:</span> 0835566018842</p>
              <p><span className="font-medium">Address:</span> 63/202 Moo 2, Thepkasattri Rd, Muang Phuket District, Phuket 83000, Thailand</p>
              <p><span className="font-medium">Payment Agent:</span> SOLUTEX LLC (OOO "Солютекс") Tax ID: 9909711209</p>
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
  );
};

export default Index;
