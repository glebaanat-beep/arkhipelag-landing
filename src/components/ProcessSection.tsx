import { CheckCircle, MessageSquare, FileCheck, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
const processSteps = [{
  id: 1,
  icon: MessageSquare,
  titleKey: 'process.step1.title',
  descriptionKey: 'process.step1.description'
}, {
  id: 2,
  icon: CheckCircle,
  titleKey: 'process.step2.title',
  descriptionKey: 'process.step2.description'
}, {
  id: 3,
  icon: FileCheck,
  titleKey: 'process.step3.title',
  descriptionKey: 'process.step3.description'
}, {
  id: 4,
  icon: HeartHandshake,
  titleKey: 'process.step4.title',
  descriptionKey: 'process.step4.description'
}];
export function ProcessSection() {
  const {
    t
  } = useLanguage();
  return <section id="process" className="py-12 sm:py-16 md:py-20 bg-surface">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-text-primary">
            {t('process.title')}
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {processSteps.map((step, index) => {
          const IconComponent = step.icon;
          return <div key={step.id} className="relative bg-card rounded-2xl p-8 luxury-shadow text-center">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  
                </div>
                
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-luxury-gold" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="font-heading text-xl font-bold mb-4 text-luxury-gold">
                  {t(step.titleKey)}
                </h3>
                
                <p className="text-text-secondary leading-relaxed">
                  {t(step.descriptionKey)}
                </p>
                
                {/* Connector Line (except for last item) */}
                {index < processSteps.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-luxury-gold/30" />}
              </div>;
        })}
        </div>
      </div>
    </section>;
}