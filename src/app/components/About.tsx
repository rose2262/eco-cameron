import { motion } from 'motion/react';
import { useInView } from './useInView';
import { SectionLeaf } from './SectionLeaf';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { ref, inView } = useInView();
  const { t } = useLanguage();

  const titleWords = [t('about.title1'), t('about.title2'), t('about.title3'), t('about.title4')];

  return (
    <section id="about" ref={ref} className="relative bg-black py-20 sm:py-32 md:py-40 px-4 sm:px-6 overflow-hidden w-full max-w-full">
      <SectionLeaf />
      <div className="max-w-5xl mx-auto relative z-10 w-full">
        <div className="mb-10 sm:mb-12 md:mb-16 overflow-hidden">
          {titleWords.map((word, i) => (
            <motion.h2
              key={i}
              initial={{ y: 100, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-white text-[2.5rem] leading-tight sm:text-5xl md:text-7xl lg:text-8xl tracking-tight"
              style={{ fontWeight: 700 }}
            >
              {word}
            </motion.h2>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-4 sm:space-y-6 max-w-3xl"
        >
          <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
            {t('about.text1')}
          </p>
          <p className="text-emerald-400 text-base sm:text-lg md:text-xl leading-relaxed">
            {t('about.text2')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
