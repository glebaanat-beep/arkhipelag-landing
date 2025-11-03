import { useLanguage } from '../contexts/LanguageContext';

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-surface">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-text-primary">
            {t('about.title')}
          </h2>
          
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8" />
          
          <h3 className="text-xl md:text-2xl text-luxury-gold mb-12 font-light">
            {t('about.subtitle')}
          </h3>
          
          <p className="text-lg text-text-secondary leading-relaxed">
            {t('about.content')}
          </p>
        </div>
      </div>
    </section>
  );
}