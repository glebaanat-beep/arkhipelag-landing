import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart, Service, AddOn } from '../contexts/CartContext';
import { toast } from 'sonner';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { t } = useLanguage();
  const { addToCart } = useCart();
  const [selectedAddOns, setSelectedAddOns] = useState<AddOn[]>([]);

  const handleAddOnToggle = (addOn: AddOn) => {
    setSelectedAddOns(prev => {
      const exists = prev.find(item => item.id === addOn.id);
      if (exists) {
        return prev.filter(item => item.id !== addOn.id);
      } else {
        return [...prev, addOn];
      }
    });
  };

  const calculateTotal = () => {
    const addOnsTotal = selectedAddOns.reduce((sum, addon) => sum + addon.price, 0);
    return service.basePrice + addOnsTotal;
  };

  const handleAddToCart = () => {
    addToCart(service, selectedAddOns);
    toast.success(t('cart.added'));
    setSelectedAddOns([]);
  };

  const formatPrice = (price: number) => {
    return `${price.toLocaleString()} THB`;
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="space-y-4">
          <div>
            <CardTitle className="text-lg md:text-xl mb-2">
              {t(service.titleKey)}
            </CardTitle>
            <CardDescription className="text-sm md:text-base">
              {t(service.descriptionKey)}
            </CardDescription>
          </div>

          <div className="border-t border-border pt-4">
            <div className="text-base font-semibold text-luxury-gold mb-2">
              {t('catalog.basePrice')}: {formatPrice(service.basePrice)}
            </div>

            {service.addOns.length > 0 && (
              <div className="space-y-3 mt-4">
                <h4 className="text-sm font-medium text-text-secondary">
                  {t('catalog.addOns')}:
                </h4>
                {service.addOns.map((addOn) => (
                  <div
                    key={addOn.id}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-surface/50 transition-colors"
                  >
                    <Checkbox
                      id={addOn.id}
                      checked={selectedAddOns.some(item => item.id === addOn.id)}
                      onCheckedChange={() => handleAddOnToggle(addOn)}
                    />
                    <label
                      htmlFor={addOn.id}
                      className="flex-1 text-sm cursor-pointer flex justify-between items-center"
                    >
                      <span>{t(addOn.titleKey)}</span>
                      <span className="text-luxury-gold font-medium">
                        +{formatPrice(addOn.price)}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-4 pt-4 border-t border-border flex justify-between items-center">
              <div>
                <div className="text-xs text-text-muted mb-1">{t('catalog.total')}</div>
                <div className="text-xl font-bold text-luxury-gold">
                  {formatPrice(calculateTotal())}
                </div>
              </div>
              <Button
                onClick={handleAddToCart}
                className="bg-luxury-gold hover:bg-luxury-gold-bright text-primary-foreground font-semibold gold-shadow"
              >
                {t('catalog.addToCart')}
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};
