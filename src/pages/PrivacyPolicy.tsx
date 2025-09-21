import { useLanguage } from '@/contexts/LanguageContext';

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="prose prose-invert mx-auto">
          <h1 className="text-4xl font-heading font-bold text-text-primary mb-8">
            {t('privacyPolicy.title')}
          </h1>
          
          <div className="text-text-secondary mb-8">
            <p>{t('privacyPolicy.location')}</p>
            <p>{t('privacyPolicy.date')}</p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
              {t('privacyPolicy.section1.title')}
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>{t('privacyPolicy.section1.p1')}</p>
              <p>{t('privacyPolicy.section1.p2')}</p>
              <p>{t('privacyPolicy.section1.p3')}</p>
              <p>{t('privacyPolicy.section1.p4')}</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
              {t('privacyPolicy.section2.title')}
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>{t('privacyPolicy.section2.p1')}</p>
              <p>{t('privacyPolicy.section2.p2')}</p>
              <p>{t('privacyPolicy.section2.p3')}</p>
              <p>{t('privacyPolicy.section2.p4')}</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
              {t('privacyPolicy.section3.title')}
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>{t('privacyPolicy.section3.intro')}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>{t('privacyPolicy.section3.item1')}</li>
                <li>{t('privacyPolicy.section3.item2')}</li>
                <li>{t('privacyPolicy.section3.item3')}</li>
                <li>{t('privacyPolicy.section3.item4')}</li>
                <li>{t('privacyPolicy.section3.item5')}</li>
                <li>{t('privacyPolicy.section3.item6')}</li>
              </ul>
              <p>{t('privacyPolicy.section3.disclaimer')}</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
              {t('privacyPolicy.section4.title')}
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>{t('privacyPolicy.section4.intro')}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>{t('privacyPolicy.section4.item1')}</li>
                <li>{t('privacyPolicy.section4.item2')}</li>
                <li>{t('privacyPolicy.section4.item3')}</li>
                <li>{t('privacyPolicy.section4.item4')}</li>
                <li>{t('privacyPolicy.section4.item5')}</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
              {t('privacyPolicy.section5.title')}
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>{t('privacyPolicy.section5.intro')}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>{t('privacyPolicy.section5.item1')}</li>
                <li>{t('privacyPolicy.section5.item2')}</li>
                <li>{t('privacyPolicy.section5.item3')}</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
              {t('privacyPolicy.section6.title')}
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>{t('privacyPolicy.section6.p1')}</p>
              <p>{t('privacyPolicy.section6.p2')}</p>
              <p>{t('privacyPolicy.section6.p3')}</p>
              <div>
                <p>{t('privacyPolicy.section6.p4')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>{t('privacyPolicy.section6.item1')}</li>
                  <li>{t('privacyPolicy.section6.item2')}</li>
                  <li>{t('privacyPolicy.section6.item3')}</li>
                </ul>
              </div>
              <p>{t('privacyPolicy.section6.p5')}</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
              {t('privacyPolicy.section7.title')}
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>{t('privacyPolicy.section7.intro')}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>{t('privacyPolicy.section7.item1')}</li>
                <li>{t('privacyPolicy.section7.item2')}</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
              {t('privacyPolicy.section8.title')}
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <div>
                <p>{t('privacyPolicy.section8.intro')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>{t('privacyPolicy.section8.item1')}</li>
                  <li>{t('privacyPolicy.section8.item2')}</li>
                  <li>{t('privacyPolicy.section8.item3')}</li>
                  <li>{t('privacyPolicy.section8.item4')}</li>
                </ul>
              </div>
              <p>{t('privacyPolicy.section8.p2')}</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
              {t('privacyPolicy.section9.title')}
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <div>
                <p>{t('privacyPolicy.section9.intro')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>{t('privacyPolicy.section9.email')}</li>
                  <li>{t('privacyPolicy.section9.address')}</li>
                </ul>
              </div>
              <p>{t('privacyPolicy.section9.response')}</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
              {t('privacyPolicy.section10.title')}
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>{t('privacyPolicy.section10.p1')}</p>
              <p>{t('privacyPolicy.section10.p2')}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;