import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Star, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Amazing experience exploring the mossy forest! Our guide was incredibly knowledgeable."
  },
  {
    name: "James L.",
    rating: 5,
    text: "Friendly guides and unforgettable views. The tea plantation tour was breathtaking."
  },
  {
    name: "Maya T.",
    rating: 5,
    text: "Best eco-tour in Cameron Highlands! Professional, safe, and truly memorable."
  }
];

export function Reviews() {
  const { ref, inView } = useInView();
  const { t } = useLanguage();

  const titleWords = [t('reviews.title1'), t('reviews.title2'), t('reviews.title3'), t('reviews.title4')];

  return (
    <section ref={ref} className="relative bg-neutral-950 py-20 sm:py-32 md:py-40 px-4 sm:px-6 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
          <div>
            <div className="mb-8 sm:mb-10 md:mb-12 overflow-hidden">
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
                  className="text-white text-[2rem] leading-tight sm:text-4xl md:text-6xl lg:text-7xl tracking-tight"
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
              className="mb-6 sm:mb-8"
            >
              <div className="flex items-center gap-2.5 sm:gap-3 mb-5 sm:mb-6">
                <div className="flex gap-0.5 sm:gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 drop-shadow-lg"
                      fill="#fbbf24"
                      stroke="#fbbf24"
                    />
                  ))}
                </div>
                <span className="text-2xl sm:text-3xl text-white" style={{ fontWeight: 600 }}>4.5+</span>
              </div>

              <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">
                {t('reviews.subtitle')}
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <a
                  href="https://www.tripadvisor.com/Attraction_Review-g298292-d2555736-Reviews-or30-Eco_Cameron_Travel_Tours-Cameron_Highlands_Pahang.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2.5 sm:gap-3 px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 bg-transparent border-2 border-white text-white overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 min-h-[48px]"
                >
                  <span className="relative z-10 text-xs sm:text-sm tracking-widest uppercase">{t('reviews.viewTripadvisor')}</span>
                  <ExternalLink size={16} className="relative z-10 sm:w-[18px] sm:h-[18px]" />
                  <motion.div
                    className="absolute inset-0 bg-emerald-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    style={{ originX: 0 }}
                  />
                  <span className="absolute inset-0 flex items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm tracking-widest uppercase text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {t('reviews.viewTripadvisor')}
                    <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </span>
                </a>
              </motion.div>
            </motion.div>
          </div>

          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.6 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-black/40 backdrop-blur-sm border border-white/10 p-4 sm:p-5 md:p-6 transition-all duration-500 hover:bg-black/60 hover:border-emerald-400/30 hover:-translate-y-2"
              >
                <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4"
                      fill="#fbbf24"
                      stroke="#fbbf24"
                    />
                  ))}
                </div>

                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
                  "{review.text}"
                </p>

                <p className="text-emerald-400 text-xs sm:text-sm tracking-wider">
                  — {review.name}
                </p>

                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
