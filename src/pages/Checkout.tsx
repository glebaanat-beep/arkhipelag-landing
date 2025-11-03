import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Check, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Navigation } from '@/components/Navigation';
import sbpLogo from '@/assets/sbp-logo.png';

const Checkout = () => {
  const { t } = useLanguage();
  const { cart, getTotalPrice } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    tourDate: undefined as Date | undefined,
    participants: '',
    specialRequests: '',
    dietaryRestrictions: [] as string[],
  });

  const [agreements, setAgreements] = useState({
    privacy: false,
    terms: false,
    confirmation: false,
  });

  const dietaryOptions = ['vegetarian', 'vegan', 'glutenFree'];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleDietaryRestriction = (option: string) => {
    setFormData(prev => ({
      ...prev,
      dietaryRestrictions: prev.dietaryRestrictions.includes(option)
        ? prev.dietaryRestrictions.filter(item => item !== option)
        : [...prev.dietaryRestrictions, option]
    }));
  };

  const isFormValid = () => {
    return (
      formData.fullName.trim() !== '' &&
      formData.email.trim() !== '' &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      formData.phone.trim() !== '' &&
      formData.tourDate !== undefined &&
      formData.participants !== '' &&
      agreements.privacy &&
      agreements.terms &&
      agreements.confirmation
    );
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      // Navigate to payment page
      navigate('/payment');
    }
  };

  if (cart.length === 0) {
    navigate('/experiences-catalog');
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 py-20 sm:py-24 md:py-32">
        {/* Progress Indicator */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm overflow-x-auto pb-2">
            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-luxury-gold text-background flex items-center justify-center">
                <Check className="w-3 h-3 sm:w-5 sm:h-5" />
              </div>
              <span className="text-text-primary font-medium hidden sm:inline">{t('checkout.progress.cart')}</span>
            </div>
            <div className="w-6 sm:w-12 h-px bg-border flex-shrink-0"></div>
            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-luxury-gold text-background flex items-center justify-center font-semibold text-xs sm:text-base">2</div>
              <span className="text-luxury-gold font-medium hidden sm:inline">{t('checkout.progress.checkout')}</span>
            </div>
            <div className="w-6 sm:w-12 h-px bg-border flex-shrink-0"></div>
            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-surface border border-border text-text-secondary flex items-center justify-center text-xs sm:text-base">3</div>
              <span className="text-text-secondary hidden sm:inline">{t('checkout.progress.payment')}</span>
            </div>
            <div className="w-6 sm:w-12 h-px bg-border flex-shrink-0"></div>
            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-surface border border-border text-text-secondary flex items-center justify-center text-xs sm:text-base">4</div>
              <span className="text-text-secondary hidden sm:inline">{t('checkout.progress.confirmation')}</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center">
            {t('checkout.title')}
          </h1>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="md:col-span-2 space-y-8">
              {/* Customer Information */}
              <div className="bg-surface/30 border border-border/50 rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-semibold text-text-primary mb-6">
                  {t('checkout.customerInfo.title')}
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="fullName">
                      {t('checkout.customerInfo.fullName')} <span className="text-luxury-gold">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      placeholder={t('checkout.customerInfo.fullNamePlaceholder')}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">
                      {t('checkout.customerInfo.email')} <span className="text-luxury-gold">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder={t('checkout.customerInfo.emailPlaceholder')}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">
                      {t('checkout.customerInfo.phone')} <span className="text-luxury-gold">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+7 XXX XXX XX XX"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label>
                      {t('checkout.customerInfo.tourDate')} <span className="text-luxury-gold">*</span>
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal mt-2",
                            !formData.tourDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.tourDate ? format(formData.tourDate, "PPP") : t('checkout.customerInfo.selectDate')}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-background" align="start">
                        <Calendar
                          mode="single"
                          selected={formData.tourDate}
                          onSelect={(date) => setFormData(prev => ({ ...prev, tourDate: date }))}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <Label htmlFor="participants">
                      {t('checkout.customerInfo.participants')} <span className="text-luxury-gold">*</span>
                    </Label>
                    <Select value={formData.participants} onValueChange={(value) => handleInputChange('participants', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder={t('checkout.customerInfo.selectParticipants')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4+">4+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="specialRequests">{t('checkout.customerInfo.specialRequests')}</Label>
                    <Textarea
                      id="specialRequests"
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                      placeholder={t('checkout.customerInfo.specialRequestsPlaceholder')}
                      className="mt-2 min-h-24"
                    />
                  </div>

                  <div>
                    <Label>{t('checkout.customerInfo.dietary')}</Label>
                    <div className="mt-3 space-y-2">
                      {dietaryOptions.map(option => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={option}
                            checked={formData.dietaryRestrictions.includes(option)}
                            onCheckedChange={() => toggleDietaryRestriction(option)}
                          />
                          <label htmlFor={option} className="text-sm text-text-primary cursor-pointer">
                            {t(`checkout.customerInfo.dietary.${option}`)}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-surface/30 border border-border/50 rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-semibold text-text-primary mb-6">
                  {t('checkout.payment.title')}
                </h2>
                
                <div className="border-2 border-luxury-gold/50 rounded-xl p-4 bg-luxury-gold/5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img src={sbpLogo} alt="SBP" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <div className="font-semibold text-text-primary">{t('checkout.payment.sbp')}</div>
                      <div className="text-sm text-text-secondary">{t('checkout.payment.sbpDescription')}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legal Agreements */}
              <div className="bg-surface/30 border border-border/50 rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-semibold text-text-primary mb-6">
                  {t('checkout.agreements.title')}
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="privacy"
                      checked={agreements.privacy}
                      onCheckedChange={(checked) => setAgreements(prev => ({ ...prev, privacy: checked as boolean }))}
                    />
                    <label htmlFor="privacy" className="text-sm text-text-primary cursor-pointer leading-relaxed">
                      {t('checkout.agreements.privacy')}{' '}
                      <a href="/privacy-policy.pdf" target="_blank" className="text-luxury-gold hover:underline">
                        {t('checkout.agreements.privacyLink')}
                      </a>
                    </label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="terms"
                      checked={agreements.terms}
                      onCheckedChange={(checked) => setAgreements(prev => ({ ...prev, terms: checked as boolean }))}
                    />
                    <label htmlFor="terms" className="text-sm text-text-primary cursor-pointer leading-relaxed">
                      {t('checkout.agreements.terms')}{' '}
                      <a href="/tos.pdf" target="_blank" className="text-luxury-gold hover:underline">
                        {t('checkout.agreements.termsLink')}
                      </a>
                    </label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="confirmation"
                      checked={agreements.confirmation}
                      onCheckedChange={(checked) => setAgreements(prev => ({ ...prev, confirmation: checked as boolean }))}
                    />
                    <label htmlFor="confirmation" className="text-sm text-text-primary cursor-pointer leading-relaxed">
                      {t('checkout.agreements.confirmation')}
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="md:col-span-1">
              <div className="bg-surface/30 border border-border/50 rounded-2xl p-6 sticky top-24">
                <h2 className="text-xl font-semibold text-text-primary mb-6">
                  {t('checkout.summary.title')}
                </h2>
                
                <div className="space-y-4 mb-6">
                  {cart.map((item, index) => (
                    <div key={index} className="pb-4 border-b border-border/30">
                      <div className="font-medium text-text-primary text-sm mb-1">
                        {t(item.service.titleKey)}
                      </div>
                      {item.selectedAddOns.length > 0 && (
                        <div className="text-xs text-text-secondary">
                          +{item.selectedAddOns.length} {t('checkout.summary.addons')}
                        </div>
                      )}
                      <div className="text-sm text-luxury-gold font-semibold mt-1">
                        {item.subtotal.toLocaleString()} ฿
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t-2 border-border">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-lg font-semibold text-text-primary">{t('checkout.summary.total')}</span>
                    <span className="text-2xl font-bold text-luxury-gold">{getTotalPrice().toLocaleString()} ฿</span>
                  </div>

                  <Button
                    onClick={handleSubmit}
                    disabled={!isFormValid()}
                    className="w-full"
                    size="lg"
                  >
                    {t('checkout.submit')}
                  </Button>

                  <Button
                    variant="ghost"
                    onClick={() => navigate('/experiences-catalog')}
                    className="w-full mt-3"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {t('checkout.backToCart')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
