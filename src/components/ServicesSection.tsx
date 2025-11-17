
import { Code, Database, Layout, Server, Smartphone, Brain } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

const services = [
  { key: 'frontend', icon: Layout },
  { key: 'backend', icon: Server },
  { key: 'database', icon: Database },
  { key: 'fullstack', icon: Code },
  { key: 'mobile', icon: Smartphone },
  { key: 'ai', icon: Brain },
];

const ServicesSection = () => {
  const { t } = useTranslation();
  
  return (
    <section id="services" className="section bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <p className="subheading">{t('services.subtitle')}</p>
          <h2 className="heading text-3xl md:text-4xl">{t('services.title')}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const highlights = [];
            for (let i = 1; i <= 4; i++) {
              const highlight = t(`services.${service.key}.highlights.${i}`, { defaultValue: '' });
              if (highlight) highlights.push(highlight);
            }
            
            return (
              <Card 
                key={index} 
                className="p-6 bg-secondary/40 border border-border transition-all hover:bg-secondary/60 hover:shadow-lg animate-fade-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-purple rounded-lg">
                    <Icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t(`services.${service.key}.title`)}</h3>
                    <p className="text-muted-foreground mb-4">{t(`services.${service.key}.description`)}</p>
                    <ul className="space-y-2">
                      {highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-purple-light"></div>
                          <span className="text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-lg">
            {t('services.closing')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
