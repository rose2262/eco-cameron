import { motion } from 'motion/react';
import { Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { useInView } from './useInView';
import { useNavigate } from 'react-router';
import { tourData } from '../data/tourData';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function Tours() {
  const { ref, inView } = useInView();
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const titleWords = [t('tours.title1'), t('tours.title2'), t('tours.title3')];

  return (
    <section id="tours" ref={ref} className="relative bg-zinc-950 py-20 sm:py-32 md:py-40 px-4 sm:px-6 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
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
              className="text-white text-[2.5rem] leading-tight sm:text-5xl md:text-7xl lg:text-8xl tracking-tight text-center"
              style={{ fontWeight: 700 }}
            >
              {word}
            </motion.h2>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto"
        >
          <div className="bg-amber-500/10 border-2 border-amber-500/30 backdrop-blur-sm p-4 sm:p-6 md:p-8">
            <div className="flex items-start gap-3 sm:gap-4">
              <AlertCircle size={24} className="text-amber-400 flex-shrink-0 mt-1 sm:w-7 sm:h-7" />
              <div>
                <h4 className="text-amber-400 text-base sm:text-lg md:text-xl mb-2 tracking-tight" style={{ fontWeight: 600 }}>
                  {t('tours.alert.title')}
                </h4>
                <p className="text-amber-100/90 text-sm sm:text-base md:text-lg leading-relaxed">
                  {t('tours.alert.text')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {tourData.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => navigate(`/tour/${tour.id}`)}
              className="group relative overflow-hidden bg-black cursor-pointer active:opacity-80 transition-opacity"
            >
              <div className="relative h-72 sm:h-80 md:h-96 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${tour.image})` }}
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
                  animate={{
                    opacity: hoveredIndex === index ? 0.7 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute bottom-2 right-2 text-white/30 text-[10px] sm:text-xs tracking-wide">
                  Visual Representation Only
                </div>
              </div>

              <div className="p-5 sm:p-6 md:p-8">
                <h3 className="text-white text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-5 md:mb-6 tracking-tight" style={{ fontWeight: 600 }}>
                  {tour.title}
                </h3>

                <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-7 md:mb-8">
                  {tour.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.15 + i * 0.05 }}
                      className="flex items-start gap-2.5 sm:gap-3 text-gray-400 text-sm sm:text-base"
                    >
                      <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center gap-2.5 sm:gap-3 text-gray-400 mb-6 sm:mb-7 md:mb-8 pb-6 sm:pb-7 md:pb-8 border-b border-gray-800/50">
                  <Clock size={16} className="text-emerald-400" />
                  <span className="text-sm sm:text-base">{tour.duration}</span>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 uppercase tracking-wider text-xs sm:text-sm">{t('tours.perPax')}</span>
                    <span className="text-emerald-400 text-xl sm:text-2xl" style={{ fontWeight: 600 }}>{tour.pricePerPax}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 uppercase tracking-wider text-xs sm:text-sm">{t('tours.private')}</span>
                    <span className="text-emerald-400 text-xl sm:text-2xl" style={{ fontWeight: 600 }}>{tour.pricePrivate}</span>
                  </div>
                </div>

                <div className="mb-6 sm:mb-7 md:mb-8 p-3 bg-amber-500/5 border border-amber-500/20">
                  <p className="text-amber-400/90 text-xs sm:text-sm text-center tracking-wide">
                    {t('tours.excludes')}
                  </p>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/tour/${tour.id}`);
                  }}
                  className="group/btn relative block w-full px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent border border-white/20 text-white overflow-hidden transition-all duration-500 hover:border-emerald-400 active:bg-emerald-600/20 min-h-[48px]"
                >
                  <span className="relative z-10 text-sm sm:text-base tracking-widest uppercase">{t('tours.viewDetails')}</span>
                  <motion.div
                    className="absolute inset-0 bg-emerald-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    style={{ originX: 0 }}
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-sm sm:text-base tracking-widest uppercase text-black opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500">
                    {t('tours.viewDetails')}
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
