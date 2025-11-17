import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="container px-4 py-16">
      <h2 className="text-3xl font-semibold text-white mb-6">{t('about.title')}</h2>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <p className="text-gray-300 leading-relaxed">
          {t('about.description')}
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• {t('about.highlights.1')}</li>
          <li>• {t('about.highlights.2')}</li>
          <li>• {t('about.highlights.3')}</li>
          <li>• {t('about.highlights.4')}</li>
          <li>• {t('about.highlights.5')}</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;

