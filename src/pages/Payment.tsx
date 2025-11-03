import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Payment = () => {
  const { t, language } = useLanguage();
  const { cart, getTotalPrice } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/experiences-catalog');
    }
  }, [cart, navigate]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/checkout');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const orderNumber = `A-${new Date().getFullYear()}-${Math.floor(Math.random() * 1000)}`;
  const totalAmount = getTotalPrice();

  if (cart.length === 0) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-surface/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold gradient-gold">ARKHIPELAG</h1>
              <span className="text-text-secondary">|</span>
              <span className="text-text-primary font-medium">
                {language === 'en' ? 'Payment' : 'Оплата'}
              </span>
            </div>
            <div className="text-sm text-text-secondary">arkhipelag.com</div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Order Details */}
          <div className="bg-surface/30 border border-border/50 rounded-2xl p-8 mb-6">
            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-luxury-gold mb-2">
                {totalAmount.toLocaleString()} ฿
              </div>
              <div className="text-text-secondary">
                {language === 'en' ? 'Order' : 'Заказ'} #{orderNumber}
              </div>
            </div>

            <div className="space-y-4 border-t border-border/30 pt-6">
              <h3 className="font-semibold text-text-primary mb-3">
                {language === 'en' ? 'Services:' : 'Услуги:'}
              </h3>
              {cart.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-text-primary font-medium">
                    {t(item.service.titleKey)}
                  </div>
                  {item.selectedAddOns.length > 0 && (
                    <div className="pl-4 space-y-1">
                      {item.selectedAddOns.map((addon, addonIndex) => (
                        <div key={addonIndex} className="text-sm text-text-secondary flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold/50"></span>
                          {t(addon.titleKey)}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* SBP Payment Block */}
          <div className="bg-surface/30 border border-border/50 rounded-2xl p-8 mb-6">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold text-text-primary mb-2">
                {language === 'en' 
                  ? 'Pay via Fast Payment System (SBP)' 
                  : 'Оплата через Систему Быстрых Платежей (СБП)'}
              </h2>
              <p className="text-text-secondary text-sm">
                {language === 'en'
                  ? 'Scan the QR code using your mobile banking app'
                  : 'Отсканируйте QR-код с помощью мобильного банковского приложения'}
              </p>
            </div>

            {/* QR Code Placeholder */}
            <div className="flex justify-center mb-6">
              <div className="w-64 h-64 bg-white rounded-xl flex items-center justify-center border-2 border-border">
                <div className="text-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/5 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-6xl">QR</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Timer */}
            <div className="text-center text-sm text-text-secondary">
              {language === 'en' ? 'QR code valid for:' : 'QR-код действителен:'}{' '}
              <span className="font-mono text-luxury-gold">{formatTime(timeLeft)}</span>
            </div>
          </div>

          {/* Legal Block - Payment Agent Information */}
          <div className="bg-muted/30 border border-border/30 rounded-xl p-6 mb-6" style={{ fontSize: '0.85rem' }}>
            <div className="text-text-secondary leading-relaxed space-y-3">
              <div className="font-semibold text-text-primary">
                {language === 'en' ? 'Payment Agent: SOLUTEX LLC' : 'Платежный агент: ООО «СОЛЮТЕКС»'}
              </div>
              
              <p>
                {language === 'en'
                  ? 'Payment for Arkhipelag services is processed by our official payment agent - SOLUTEX LLC (ООО «Солютекс»).'
                  : 'Оплата услуг Arkhipelag обрабатывается нашим официальным платежным агентом - ООО «Солютекс» (SOLUTEX LLC).'}
              </p>
              
              <p>
                {language === 'en'
                  ? 'Your bank statement will show: "SOLUTEX" or "СОЛЮТЕКС".'
                  : 'В выписке из банка будет отображаться: «СОЛЮТЕКС» или «SOLUTEX».'}
              </p>
              
              <p>
                {language === 'en'
                  ? 'SOLUTEX LLC operates under agreement with Arkhipelag and ensures secure payment processing in accordance with the legislation of the Russian Federation.'
                  : 'ООО «Солютекс» работает по договору с Arkhipelag и обеспечивает безопасную обработку платежей в соответствии с законодательством Российской Федерации.'}
              </p>
              
              <p>
                {language === 'en'
                  ? 'Upon successful payment, Arkhipelag will automatically receive confirmation and proceed with your order.'
                  : 'После успешной оплаты Arkhipelag автоматически получит подтверждение и приступит к выполнению вашего заказа.'}
              </p>
            </div>
          </div>

          {/* Post-Payment Information */}
          <div className="bg-surface/30 border border-border/50 rounded-2xl p-6 mb-6">
            <div className="space-y-3 text-sm text-text-secondary text-center">
              <p>
                {language === 'en'
                  ? 'You will be automatically redirected back to Arkhipelag after successful payment'
                  : 'После успешной оплаты вы будете автоматически перенаправлены обратно на Arkhipelag'}
              </p>
              <p>
                {language === 'en' ? 'Payment issues? Contact:' : 'Проблемы с оплатой? Свяжитесь с нами:'}{' '}
                <a href="mailto:support@arkhipelag.com" className="text-luxury-gold hover:underline">
                  support@arkhipelag.com
                </a>
              </p>
            </div>
          </div>

          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate('/checkout')}
            className="w-full"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === 'en' ? 'Back to Checkout' : 'Вернуться к оформлению'}
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-surface/30 py-6 mt-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-secondary">
            <div className="flex gap-4">
              <a href="/terms-of-service" className="hover:text-luxury-gold transition-colors">
                {language === 'en' ? 'Terms of Service' : 'Условия использования'}
              </a>
              <span>|</span>
              <a href="/privacy-policy" className="hover:text-luxury-gold transition-colors">
                {language === 'en' ? 'Privacy Policy' : 'Политика конфиденциальности'}
              </a>
            </div>
            <div>© 2024 Arkhipelag</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Payment;
