
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-secondary/30">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-gradient-purple w-8 h-8 rounded-full flex items-center justify-center">
              <span className="font-bold text-white text-xs">EN</span>
            </div>
            <span className="text-lg font-semibold">Edilson Novais</span>
          </div>
          
          {/* <div className="flex gap-6 mb-8">
            <a href="https://github.com/Andi" target="_blank" className="p-2 rounded-full bg-secondary hover:bg-purple-dark transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/Andi-Jackson-8a4b0b230/" target="_blank" className="p-2 rounded-full bg-secondary hover:bg-purple-dark transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/madhu__1116__/" target="_blank" className="p-2 rounded-full bg-secondary hover:bg-purple-dark transition-colors">
              <Instagram size={20} />
            </a>
            <a href="mailto:AndiJackson1998@gmail.com" className="p-2 rounded-full bg-secondary hover:bg-purple-dark transition-colors">
              <Mail size={20} />
            </a>
          </div> */}
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.home')}
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.about')}
            </a>
            <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.experience')}
            </a>
            <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.skills')}
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.projects')}
            </a>
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.services')}
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.contact')}
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground">&copy; {year} Edilson Novais. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
