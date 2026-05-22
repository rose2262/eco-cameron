import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from './useInView';
import { useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import img1 from '../../imports/IMG_9844.JPEG';
import img2 from '../../imports/IMG_5408.JPG';

const images = [
  {
    src: img1,
    alt: 'Land Rover Defender parked with mountain backdrop'
  },
  {
    src: img2,
    alt: 'Land Rover navigating jungle trail'
  }
];

export function LandRoverSection() {
  const { ref, inView } = useInView();
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const titleWords = [t('landrover.title1'), t('landrover.title2'), t('landrover.title3'), t('landrover.title4')];

  return (
    <section ref={containerRef} className="relative bg-neutral-950 py-20 sm:py-32 md:py-40 px-4 sm:px-6 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto w-full">
        <div ref={ref} className="mb-12 sm:mb-16 md:mb-20 text-center overflow-hidden">
          {titleWords.map((word, i) => (
            <motion.h2
              key={i}
              initial={{ y: 100, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block mr-1.5 sm:mr-2.5 md:mr-3.5 lg:mr-5 text-[2rem] leading-tight sm:text-4xl md:text-6xl lg:text-7xl text-white tracking-tight"
              style={{ fontWeight: 700 }}
            >
              {word}
            </motion.h2>
          ))}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mt-5 sm:mt-7 md:mt-8 px-4"
          >
            {t('landrover.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto mb-12 sm:mb-16 md:mb-20">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative overflow-hidden bg-black"
            >
              <div className="relative overflow-hidden">
                <motion.div
                  className="w-full"
                  animate={{
                    scale: hoveredIndex === index ? 1.08 : 1,
                  }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto block object-cover"
                  />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"
                  animate={{
                    opacity: hoveredIndex === index ? 0.4 : 0.8,
                  }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 md:gap-12 max-w-4xl mx-auto"
        >
          {[
            { label: t('landrover.4x4'), description: t('landrover.4x4.desc') },
            { label: t('landrover.classic'), description: t('landrover.classic.desc') },
            { label: t('landrover.safe'), description: t('landrover.safe.desc') }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-emerald-400 text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 tracking-tight" style={{ fontWeight: 600 }}>
                {item.label}
              </div>
              <div className="text-gray-500 text-xs sm:text-sm uppercase tracking-widest">
                {item.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
