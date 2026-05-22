import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headline = t('hero.title');
  const words = headline.split(" ");

  return (
    <section className="relative h-screen w-full overflow-hidden max-w-full">
      <motion.div
        className="absolute inset-0 z-0 w-full"
        style={{ scale }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 z-10" />
        <img
          src="https://images.unsplash.com/photo-1774797591538-d5dcd5c82e7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=2400"
          alt="Cameron Highlands tea plantation"
          className="h-full w-full object-cover min-w-full"
        />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-20 flex h-full flex-col items-center justify-center px-4 sm:px-6 w-full max-w-full">
        <div className="max-w-7xl text-center w-full">
          <div className="overflow-hidden mb-6 sm:mb-8 w-full">
            {words.map((word, i) => (
              <motion.h1
                key={i}
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[2.5rem] leading-tight sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white tracking-tight mb-2 sm:mb-3 break-words"
                style={{ fontWeight: 700 }}
              >
                {word}
              </motion.h1>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-emerald-300/90 tracking-wide px-4 break-words"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-10 sm:mt-16"
          >
            <a href="#tours">
              <button className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-transparent border-2 border-white text-white overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 min-h-[48px]">
                <span className="relative z-10 text-sm sm:text-base md:text-lg tracking-widest uppercase">{t('hero.exploreTours')}</span>
                <motion.div
                  className="absolute inset-0 bg-emerald-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ originX: 0 }}
                />
                <span className="absolute inset-0 flex items-center justify-center text-sm sm:text-base md:text-lg tracking-widest uppercase text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {t('hero.exploreTours')}
                </span>
              </button>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.3 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/50 text-xs tracking-[0.3em] uppercase">{t('hero.scroll')}</span>
            <svg
              className="w-5 h-5 text-white/50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
