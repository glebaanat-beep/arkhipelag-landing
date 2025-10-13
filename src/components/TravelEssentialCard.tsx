import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart, Service } from '../contexts/CartContext';
import { toast } from 'sonner';
import { TravelEssential } from '../data/travelEssentialsData';
import * as Icons from 'lucide-react';

interface TravelEssentialCardProps {
  essential: TravelEssential;
}

export const TravelEssentialCard: React.FC<TravelEssentialCardProps> = ({ essential }) => {
  const { language } = useLanguage();
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = React.useState(false);

  const IconComponent = Icons[essential.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  const handleAddToCart = () => {
    // Convert TravelEssential to Service format for cart compatibility
    const service: Service = {
      id: essential.id,
      titleKey: essential.name,
      descriptionKey: essential.description,
      basePrice: essential.price,
      category: 'cultural', // Default category for travel essentials
      addOns: []
    };

    addToCart(service, []);
    setIsAdded(true);
    toast.success(language === 'en' ? 'Added to cart!' : 'Добавлено в корзину!');
    
    // Reset after 2 seconds
    setTimeout(() => setIsAdded(false), 2000);
  };

  const name = language === 'en' ? essential.name : essential.nameRu;
  const description = language === 'en' ? essential.description : essential.descriptionRu;

  return (
    <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-border bg-card">
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 rounded-lg bg-luxury-gold/10 flex items-center justify-center flex-shrink-0">
            {IconComponent && <IconComponent className="w-6 h-6 text-luxury-gold" />}
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-luxury-gold">
              {essential.price.toLocaleString()}
            </div>
            <div className="text-xs text-text-muted">THB</div>
          </div>
        </div>
        <div>
          <CardTitle className="text-lg leading-tight mb-2">{name}</CardTitle>
          <CardDescription className="text-sm leading-relaxed h-[4.5rem] overflow-hidden">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto pt-0">
        <Button
          onClick={handleAddToCart}
          disabled={isAdded}
          className="w-full bg-luxury-gold hover:bg-luxury-gold-bright text-primary-foreground font-semibold gold-shadow transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isAdded 
            ? (language === 'en' ? 'Added to Cart' : 'Добавлено в корзину')
            : (language === 'en' ? 'Add to Cart' : 'Добавить в корзину')
          }
        </Button>
      </CardContent>
    </Card>
  );
};
