import { useState } from 'react';
import { Globe, Menu, X, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
export function Navigation() {
  const {
    language,
    setLanguage,
    t
  } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isOnCatalog = location.pathname === '/experiences-catalog';
  const handleExperiencesClick = () => {
    navigate('/experiences-catalog');
    setIsOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    if (isOnCatalog) {
      // Navigate to home with anchor
      navigate(`/#${sectionId}`);
    } else {
      // Scroll to section on current page
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
    setIsOpen(false);
  };
  const handleBackClick = () => {
    navigate('/');
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Back button when on catalog */}
            {isOnCatalog}
            
            {/* Clickable logo */}
            <Link to="/" className="font-heading text-2xl font-bold text-luxury-gradient hover:opacity-80 transition-opacity">
              {t('hero.title')}
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-text-secondary hover:text-luxury-gold transition-colors duration-300">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('services')} className="text-text-secondary hover:text-luxury-gold transition-colors duration-300">
              {t('nav.services')}
            </button>
            <button onClick={() => scrollToSection('process')} className="text-text-secondary hover:text-luxury-gold transition-colors duration-300">
              {t('nav.process')}
            </button>
            <button onClick={handleExperiencesClick} className="text-text-secondary hover:text-luxury-gold transition-colors duration-300">
              {t('nav.experiences')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-text-secondary hover:text-luxury-gold transition-colors duration-300">
              {t('nav.contact')}
            </button>
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-text-muted" />
              <button onClick={() => setLanguage('en')} className={`px-2 py-1 text-sm transition-colors ${language === 'en' ? 'text-luxury-gold' : 'text-text-muted hover:text-text-secondary'}`}>
                EN
              </button>
              <span className="text-text-muted">|</span>
              <button onClick={() => setLanguage('ru')} className={`px-2 py-1 text-sm transition-colors ${language === 'ru' ? 'text-luxury-gold' : 'text-text-muted hover:text-text-secondary'}`}>
                RU
              </button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 mt-4">
              <button onClick={() => scrollToSection('about')} className="text-left text-text-secondary hover:text-luxury-gold transition-colors duration-300">
                {t('nav.about')}
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left text-text-secondary hover:text-luxury-gold transition-colors duration-300">
                {t('nav.services')}
              </button>
              <button onClick={() => scrollToSection('process')} className="text-left text-text-secondary hover:text-luxury-gold transition-colors duration-300">
                {t('nav.process')}
              </button>
              <button onClick={handleExperiencesClick} className="text-left text-text-secondary hover:text-luxury-gold transition-colors duration-300">
                {t('nav.experiences')}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-text-secondary hover:text-luxury-gold transition-colors duration-300">
                {t('nav.contact')}
              </button>
              
              <div className="flex items-center space-x-2 pt-2 border-t border-border">
                <Globe className="w-4 h-4 text-text-muted" />
                <button onClick={() => setLanguage('en')} className={`px-2 py-1 text-sm transition-colors ${language === 'en' ? 'text-luxury-gold' : 'text-text-muted hover:text-text-secondary'}`}>
                  EN
                </button>
                <span className="text-text-muted">|</span>
                <button onClick={() => setLanguage('ru')} className={`px-2 py-1 text-sm transition-colors ${language === 'ru' ? 'text-luxury-gold' : 'text-text-muted hover:text-text-secondary'}`}>
                  RU
                </button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
}