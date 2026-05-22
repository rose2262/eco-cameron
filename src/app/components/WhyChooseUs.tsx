import { motion } from 'motion/react';
import { Leaf, Award, Heart, Users } from 'lucide-react';
import { useInView } from './useInView';
import { useLanguage } from '../context/LanguageContext';

export function WhyChooseUs() {
  const { ref, inView } = useInView();
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      title: t('whyus.guides'),
      description: t('whyus.guides.desc'),
    },
    {
      icon: Leaf,
      title: t('whyus.eco'),
      description: t('whyus.eco.desc'),
    },
    {
      icon: Users,
      title: t('whyus.small'),
      description: t('whyus.small.desc'),
    },
    {
      icon: Heart,
      title: t('whyus.authentic'),
      description: t('whyus.authentic.desc'),
    },
  ];

  const titleWords = [t('whyus.title1'), t('whyus.title2'), t('whyus.title3')];

  return (
    <section id="why-us" ref={ref} className="relative bg-black py-20 sm:py-32 md:py-40 px-4 sm:px-6 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-emerald-400 tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-8 sm:mb-10 md:mb-12 text-center text-xs sm:text-sm"
        >
          {t('whyus.subtitle')}
        </motion.p>

        <div className="mb-12 sm:mb-16 md:mb-20 text-center overflow-hidden">
          {titleWords.map((word, i) => (
            <motion.h2
              key={i}
              initial={{ y: 100, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-white text-[2.5rem] leading-tight sm:text-5xl md:text-7xl lg:text-8xl tracking-tight"
              style={{ fontWeight: 700 }}
            >
              {word}
            </motion.h2>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 md:gap-10 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 60 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.5 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 mb-4 sm:mb-5 md:mb-6 bg-emerald-600/10 group-hover:bg-emerald-600/20 transition-all duration-500"
                >
                  <Icon size={24} className="text-emerald-400 sm:w-7 sm:h-7" />
                </motion.div>
                <h3 className="text-white text-lg sm:text-xl mb-3 sm:mb-4 tracking-tight" style={{ fontWeight: 600 }}>
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
