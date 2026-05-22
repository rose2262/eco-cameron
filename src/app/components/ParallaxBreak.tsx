import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function ParallaxBreak() {
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Reduce parallax effect on mobile for better performance
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.4]);

  return (
    <section ref={ref} className="relative h-[70vh] sm:h-[80vh] md:h-screen overflow-hidden w-full max-w-full">
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full"
      >
        <img
          src="https://images.unsplash.com/photo-1718868373099-98f37a6410e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=2400"
          alt="Mossy forest"
          className="w-full h-full object-cover min-w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
      </motion.div>

      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 w-full max-w-full">
        <motion.div
          style={{ opacity }}
          className="text-center max-w-6xl w-full overflow-hidden"
        >
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-[2.5rem] leading-tight sm:text-5xl md:text-7xl lg:text-8xl tracking-tight"
            style={{ fontWeight: 700 }}
          >
            {t('parallax.title1')}
          </motion.h3>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-emerald-400 text-[2.5rem] leading-tight sm:text-5xl md:text-7xl lg:text-8xl tracking-tight mt-3 sm:mt-4"
            style={{ fontWeight: 700 }}
          >
            {t('parallax.title2')}
          </motion.h3>
        </motion.div>
      </div>
    </section>
  );
}
