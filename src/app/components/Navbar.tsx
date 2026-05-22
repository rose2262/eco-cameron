import { useState, useEffect } from 'react';
import { Menu, X, Globe, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { useNavigate, useLocation } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { generateWhatsAppLink } from '../utils/whatsapp';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'en' as const, name: 'English', flag: '🇬🇧' },
    { code: 'ms' as const, name: 'Bahasa Melayu', flag: '🇲🇾' },
    { code: 'zh' as const, name: '中文', flag: '🇨🇳' }
  ];

  const { scrollY } = useScroll();
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.85]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.language-menu')) {
        setIsLangMenuOpen(false);
      }
    };

    if (isLangMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isLangMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full max-w-full ${
          isScrolled ? 'bg-black/98 backdrop-blur-lg py-3' : 'bg-transparent py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={() => navigate('/')}
              style={{ scale: logoScale }}
              className="text-white text-lg md:text-xl tracking-[0.4em] hover:text-emerald-400 transition-colors duration-300"
            >
              ECO CAMERON
            </motion.button>

            {isHomePage && (
              <div className="hidden md:flex items-center gap-10">
                <a href="#about" className="text-white/80 hover:text-white transition-colors duration-300 text-sm tracking-wider uppercase">
                  {t('nav.about')}
                </a>
                <a href="#tours" className="text-white/80 hover:text-white transition-colors duration-300 text-sm tracking-wider uppercase">
                  {t('nav.tours')}
                </a>
                <a href="#why-us" className="text-white/80 hover:text-white transition-colors duration-300 text-sm tracking-wider uppercase">
                  {t('nav.whyUs')}
                </a>

                <div className="relative language-menu">
                  <button
                    onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300"
                  >
                    <Globe size={18} />
                    <span className="text-sm uppercase">{language}</span>
                  </button>

                  <AnimatePresence>
                    {isLangMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full right-0 mt-2 bg-black/95 backdrop-blur-lg border border-white/10 py-2 min-w-[180px] z-50"
                      >
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              setLanguage(lang.code);
                              setIsLangMenuOpen(false);
                            }}
                            className={`w-full px-4 py-2 text-left flex items-center gap-3 transition-colors ${
                              language === lang.code
                                ? 'bg-emerald-500/20 text-emerald-400'
                                : 'text-white/80 hover:bg-white/5 hover:text-white'
                            }`}
                          >
                            <span className="text-lg">{lang.flag}</span>
                            <span className="text-sm">{lang.name}</span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a
                  href={generateWhatsAppLink(undefined, "I'd like to book a tour.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-2 px-8 py-2.5 bg-transparent border border-white/30 text-white overflow-hidden transition-all duration-500 hover:border-emerald-400"
                >
                  <MessageCircle size={16} className="relative z-10" />
                  <span className="relative z-10 text-sm tracking-widest uppercase">{t('nav.bookNow')}</span>
                  <motion.div
                    className="absolute inset-0 bg-emerald-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    style={{ originX: 0 }}
                  />
                  <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm tracking-widest uppercase text-black opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    <MessageCircle size={16} />
                    {t('nav.bookNow')}
                  </span>
                </a>
              </div>
            )}

            {!isHomePage && (
              <div className="hidden md:flex items-center gap-8">
                <button
                  onClick={() => navigate('/')}
                  className="text-white/80 hover:text-white transition-colors duration-300 text-sm tracking-wider uppercase"
                >
                  {t('nav.home')}
                </button>

                <div className="relative language-menu">
                  <button
                    onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300"
                  >
                    <Globe size={18} />
                    <span className="text-sm uppercase">{language}</span>
                  </button>

                  <AnimatePresence>
                    {isLangMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full right-0 mt-2 bg-black/95 backdrop-blur-lg border border-white/10 py-2 min-w-[180px] z-50"
                      >
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              setLanguage(lang.code);
                              setIsLangMenuOpen(false);
                            }}
                            className={`w-full px-4 py-2 text-left flex items-center gap-3 transition-colors ${
                              language === lang.code
                                ? 'bg-emerald-500/20 text-emerald-400'
                                : 'text-white/80 hover:bg-white/5 hover:text-white'
                            }`}
                          >
                            <span className="text-lg">{lang.flag}</span>
                            <span className="text-sm">{lang.name}</span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a
                  href={generateWhatsAppLink(undefined, "I'd like to book a tour.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white transition-colors text-sm tracking-widest uppercase"
                >
                  <MessageCircle size={16} />
                  {t('nav.bookNow')}
                </a>
              </div>
            )}

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-3 hover:text-emerald-400 transition-colors z-50 relative min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="md:hidden fixed top-0 right-0 bottom-0 w-[85vw] max-w-[min(400px,calc(100vw-40px))] bg-black/98 backdrop-blur-lg border-l border-white/10 z-40 overflow-y-auto"
              >
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <span className="text-white text-lg tracking-[0.3em]">MENU</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white hover:text-emerald-400 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                    aria-label="Close menu"
                  >
                    <X size={28} />
                  </button>
                </div>
                <div className="px-5 sm:px-6 pt-4 sm:pt-6 pb-6 sm:pb-8 space-y-1">
                {isHomePage ? (
                  <>
                    <a
                      href="#about"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-white/80 hover:text-white active:text-emerald-400 transition-colors py-3.5 px-2 text-base tracking-wider uppercase min-h-[44px] flex items-center"
                    >
                      {t('nav.about')}
                    </a>
                    <a
                      href="#tours"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-white/80 hover:text-white active:text-emerald-400 transition-colors py-3.5 px-2 text-base tracking-wider uppercase min-h-[44px] flex items-center"
                    >
                      {t('nav.tours')}
                    </a>
                    <a
                      href="#why-us"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-white/80 hover:text-white active:text-emerald-400 transition-colors py-3.5 px-2 text-base tracking-wider uppercase min-h-[44px] flex items-center"
                    >
                      {t('nav.whyUs')}
                    </a>

                    <div className="border-t border-white/10 pt-3 mt-3">
                      <p className="text-white/60 text-xs uppercase tracking-wider mb-2 px-2">Language</p>
                      <div className="space-y-1">
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              setLanguage(lang.code);
                            }}
                            className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-colors min-h-[44px] ${
                              language === lang.code
                                ? 'bg-emerald-500/20 text-emerald-400'
                                : 'text-white/80 hover:bg-white/5 hover:text-white active:bg-white/10'
                            }`}
                          >
                            <span className="text-lg">{lang.flag}</span>
                            <span className="text-base">{lang.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <a
                        href={generateWhatsAppLink(undefined, "I'd like to book a tour.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-center text-base tracking-widest uppercase min-h-[48px] transition-colors"
                      >
                        <MessageCircle size={18} />
                        {t('nav.bookNow')}
                      </a>
                    </div>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        navigate('/');
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left text-white/80 hover:text-white active:text-emerald-400 transition-colors py-3.5 px-2 text-base tracking-wider uppercase min-h-[44px] flex items-center"
                    >
                      {t('nav.home')}
                    </button>

                    <div className="border-t border-white/10 pt-3 mt-3">
                      <p className="text-white/60 text-xs uppercase tracking-wider mb-2 px-2">Language</p>
                      <div className="space-y-1">
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              setLanguage(lang.code);
                            }}
                            className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-colors min-h-[44px] ${
                              language === lang.code
                                ? 'bg-emerald-500/20 text-emerald-400'
                                : 'text-white/80 hover:bg-white/5 hover:text-white active:bg-white/10'
                            }`}
                          >
                            <span className="text-lg">{lang.flag}</span>
                            <span className="text-base">{lang.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <a
                        href={generateWhatsAppLink(undefined, "I'd like to book a tour.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-center text-base tracking-widest uppercase min-h-[48px] transition-colors"
                      >
                        <MessageCircle size={18} />
                        {t('nav.bookNow')}
                      </a>
                    </div>
                  </>
                )}
              </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>

      {isHomePage && (
        <motion.a
          href={generateWhatsAppLink(undefined, "I'd like to book a tour from your homepage.")}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-40 flex items-center justify-center gap-2 px-10 py-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white shadow-2xl text-base tracking-widest uppercase min-h-[48px] transition-all duration-300 hover:scale-105 active:scale-95"
          style={{ boxShadow: '0 10px 40px rgba(16, 185, 129, 0.4)' }}
        >
          <MessageCircle size={18} />
          {t('nav.bookNow')}
        </motion.a>
      )}
    </>
  );
}
