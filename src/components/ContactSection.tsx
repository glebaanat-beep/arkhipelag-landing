import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
export function ContactSection() {
  const { t } = useLanguage();
  return <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-text-primary">
            {t('contact.title')}
          </h2>
          <div className="w-32 h-1 bg-luxury-gold mx-auto mb-10" />
          <p className="text-xl text-luxury-gold max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {/* Contact Information */}
          <div className="text-center">
            <div className="space-y-12 mb-16 max-w-md mx-auto">
              <div className="flex items-center space-x-8">
                <div className="w-20 h-20 bg-luxury-gold rounded-3xl flex items-center justify-center luxury-shadow flex-shrink-0">
                  <Mail className="w-10 h-10 text-background" />
                </div>
                <div className="text-left flex-1">
                  <p className="text-text-muted text-base mb-2">{t('contact.info.email')}</p>
                  <p className="text-text-primary font-semibold text-xl">arkhipelagllc@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-8">
                <div className="w-20 h-20 bg-luxury-gold rounded-3xl flex items-center justify-center luxury-shadow flex-shrink-0">
                  <Phone className="w-10 h-10 text-background" />
                </div>
                <div className="text-left flex-1">
                  <p className="text-text-muted text-base mb-2">{t('contact.info.phone')}</p>
                  <p className="text-text-primary font-semibold text-xl">+66622213911</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-8">
                <div className="w-20 h-20 bg-luxury-gold rounded-3xl flex items-center justify-center luxury-shadow flex-shrink-0">
                  <MessageCircle className="w-10 h-10 text-background" />
                </div>
                <div className="text-left flex-1">
                  <p className="text-text-muted text-base mb-2">{t('contact.info.telegram')}</p>
                  <a 
                    href="https://t.me/Arkhipelag_llc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-text-primary font-semibold text-xl hover:text-luxury-gold transition-colors"
                  >
                    @Arkhipelag_llc
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}