import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
export function ContactSection() {
  const { t } = useLanguage();
  return <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-text-primary">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8" />
          <p className="text-xl text-luxury-gold">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="text-center">
            <h3 className="font-heading text-3xl font-bold mb-12 text-text-primary">
              {t('contact.info.title')}
            </h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-center justify-center space-x-6">
                <div className="w-16 h-16 bg-luxury-gold rounded-2xl flex items-center justify-center luxury-shadow">
                  <Mail className="w-8 h-8 text-background" />
                </div>
                <div className="text-left">
                  <p className="text-text-muted text-sm mb-1">{t('contact.info.email')}</p>
                  <p className="text-text-primary font-semibold text-lg">arkhipelagllc@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-6">
                <div className="w-16 h-16 bg-luxury-gold rounded-2xl flex items-center justify-center luxury-shadow">
                  <Phone className="w-8 h-8 text-background" />
                </div>
                <div className="text-left">
                  <p className="text-text-muted text-sm mb-1">{t('contact.info.phone')}</p>
                  <p className="text-text-primary font-semibold text-lg">+66622213911</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-6">
                <div className="w-16 h-16 bg-luxury-gold rounded-2xl flex items-center justify-center luxury-shadow">
                  <MessageCircle className="w-8 h-8 text-background" />
                </div>
                <div className="text-left">
                  <p className="text-text-muted text-sm mb-1">{t('contact.info.telegram')}</p>
                  <a 
                    href="https://t.me/Arkhipelag_llc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-text-primary font-semibold text-lg hover:text-luxury-gold transition-colors"
                  >
                    @Arkhipelag_llc
                  </a>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <div className="bg-card rounded-3xl p-10 luxury-shadow max-w-xl mx-auto">
              <p className="text-text-secondary text-xl leading-relaxed text-center">
                {t('contact.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}