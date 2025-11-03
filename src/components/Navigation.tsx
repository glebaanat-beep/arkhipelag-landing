import { useState } from 'react';
import { Globe, Menu, X, ShoppingCart, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
export function Navigation() {
  const {
    language,
    setLanguage,
    t
  } = useLanguage();
  const { getTotalItems, getTotalPrice, cart, removeFromCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
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
      <div className="container mx-auto px-4 sm:px-6 py-4">
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
            
            {/* Collection Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-text-secondary hover:text-luxury-gold transition-colors duration-300 outline-none">
                {language === 'en' ? 'Collection' : 'Коллекция'}
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem onClick={handleExperiencesClick} className="cursor-pointer">
                  {t('nav.experiences')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/collection/travel-essentials')} className="cursor-pointer">
                  {language === 'en' ? 'Travel Essentials' : 'Туристические услуги'}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <button onClick={() => scrollToSection('contact')} className="text-text-secondary hover:text-luxury-gold transition-colors duration-300">
              {t('nav.contact')}
            </button>
            
            {/* Cart Icon */}
            <Sheet open={cartOpen} onOpenChange={setCartOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-luxury-gold text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {getTotalItems()}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-lg">
                <SheetHeader>
                  <SheetTitle>{t('cart.title')}</SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-4">
                  {cart.length === 0 ? (
                    <p className="text-center text-text-muted py-8">{t('cart.empty')}</p>
                  ) : (
                    <>
                      <div className="space-y-4 max-h-[60vh] overflow-y-auto">
                        {cart.map((item) => (
                          <div key={item.service.id} className="border border-border rounded-lg p-4 space-y-2">
                            <div className="flex justify-between items-start">
                              <h3 className="font-semibold">{t(item.service.titleKey)}</h3>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeFromCart(item.service.id)}
                                className="text-destructive"
                              >
                                {t('cart.remove')}
                              </Button>
                            </div>
                            <p className="text-sm text-text-muted">
                              {t('catalog.basePrice')}: {item.service.basePrice.toLocaleString()} THB
                            </p>
                            {item.selectedAddOns.length > 0 && (
                              <div className="text-sm">
                                <p className="text-text-secondary font-medium">{t('cart.addOns')}:</p>
                                <ul className="list-disc list-inside text-text-muted">
                                  {item.selectedAddOns.map((addon) => (
                                    <li key={addon.id}>
                                      {t(addon.titleKey)} (+{addon.price.toLocaleString()} THB)
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            <p className="text-lg font-bold text-luxury-gold pt-2 border-t border-border">
                              {t('catalog.total')}: {item.subtotal.toLocaleString()} THB
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-border pt-4 space-y-4">
                        <div className="flex justify-between items-center text-xl font-bold">
                          <span>{t('cart.grandTotal')}:</span>
                          <span className="text-luxury-gold">{getTotalPrice().toLocaleString()} THB</span>
                        </div>
                        <Button
                          className="w-full bg-luxury-gold hover:bg-luxury-gold-bright text-primary-foreground font-semibold gold-shadow"
                          onClick={() => {
                            navigate('/checkout');
                            setCartOpen(false);
                          }}
                        >
                          {t('cart.checkout')}
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>

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
              
              {/* Collection submenu */}
              <div className="border-l-2 border-luxury-gold/30 pl-4 space-y-2">
                <div className="text-sm font-semibold text-luxury-gold mb-2">
                  {language === 'en' ? 'Collection' : 'Коллекция'}
                </div>
                <button onClick={handleExperiencesClick} className="block text-left text-text-secondary hover:text-luxury-gold transition-colors duration-300">
                  {t('nav.experiences')}
                </button>
                <button onClick={() => { navigate('/collection/travel-essentials'); setIsOpen(false); }} className="block text-left text-text-secondary hover:text-luxury-gold transition-colors duration-300">
                  {language === 'en' ? 'Travel Essentials' : 'Туристические услуги'}
                </button>
              </div>
              
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