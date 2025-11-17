import React from 'react';
import { useTranslation } from 'react-i18next';

type Experience = {
  key: string;
  tech: string[];
};

const experiences: Experience[] = [
  {
    key: 'freelancer',
    tech: ['React', 'Vue.js', 'Node.js', 'Laravel', 'Python', 'React Native', 'Flutter', 'AWS', 'Docker'],
  },
  {
    key: 'bluepixel',
    tech: ['React Native', 'Flutter', 'Node.js', 'PostgreSQL', 'NLP', 'Machine Learning', 'JWT', 'OAuth2'],
  },
  {
    key: 'softline',
    tech: ['Laravel', 'Vue.js', 'JavaScript', 'PHP', 'MySQL'],
  },
];

const ExperienceSection = () => {
  const { t } = useTranslation();
  
  return (
    <section id="experience" className="container px-4 py-16">
      <h2 className="text-3xl font-semibold text-white mb-8 text-center">{t('experience.title')}</h2>
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-border" />
        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const period = t(`experience.${exp.key}.period`);
            const startYear = period.match(/\d{4}/)?.[0] || '';
            const company = t(`experience.${exp.key}.company`);
            const role = t(`experience.${exp.key}.role`);
            
            // Get all detail keys
            const details = [];
            for (let i = 1; i <= 10; i++) {
              const detail = t(`experience.${exp.key}.details.${i}`, { defaultValue: '' });
              if (detail) details.push(detail);
            }
            
            return (
              <div key={index} className="relative md:grid md:grid-cols-2 gap-8 items-start">
                {/* Left column: experience card */}
                <div className="bg-secondary/40 border border-border p-6 rounded-lg shadow-sm animate-fade-up" style={{ animationDelay: `${0.1 + index * 0.05}s` }}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="h-2 w-2 rounded-full bg-gradient-purple inline-block" />
                    <span className="text-sm text-muted-foreground">{period}</span>
                  </div>
                  <h3 className="text-xl text-blue-400 font-bold">{role} - {company}</h3>
                  <ul className="list-disc list-inside text-gray-300 mt-3 space-y-1">
                    {details.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Right column: starting year with subtitle */}
                <div className="hidden md:flex flex-col items-start justify-center pl-6">
                  <span className="text-5xl font-bold text-muted-foreground/10 select-none">
                    {startYear}
                  </span>
                  <span className="mt-2 text-sm text-muted-foreground">{company}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
