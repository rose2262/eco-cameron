import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from './useInView';
import { Star, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useState, useRef } from 'react';

// Review data combining TripAdvisor and Google sources
const reviews = [
  {
    name: "Sarah Mitchell",
    rating: 5,
    text: "Amazing experience exploring the mossy forest! Our guide was incredibly knowledgeable and passionate about conservation.",
    source: "TripAdvisor",
    platform: "tripadvisor"
  },
  {
    name: "James Chen",
    rating: 5,
    text: "Best eco-tour in Cameron Highlands! Professional guides, breathtaking views, and truly memorable experience.",
    source: "Google",
    platform: "google"
  },
  {
    name: "Maya Tan",
    rating: 5,
    text: "Friendly guides and unforgettable views. The tea plantation tour was breathtaking and educational.",
    source: "TripAdvisor",
    platform: "tripadvisor"
  },
  {
    name: "David Kumar",
    rating: 5,
    text: "Excellent service! The Land Rover tour was thrilling and our guide made sure we saw all the best spots.",
    source: "Google",
    platform: "google"
  },
  {
    name: "Emily Rodriguez",
    rating: 5,
    text: "Highly recommend! Small group size meant personalized attention and we learned so much about the highlands.",
    source: "TripAdvisor",
    platform: "tripadvisor"
  },
  {
    name: "Ahmad Ibrahim",
    rating: 5,
    text: "Professional, safe, and truly memorable. The sunrise tour exceeded all our expectations!",
    source: "Google",
    platform: "google"
  }
];

// Google review photos (using placeholder Unsplash images - replace with actual Google review photos)
const reviewPhotos = [
];

function PhotoGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <div className="relative group">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviewPhotos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex-shrink-0 w-72 h-48 sm:w-80 sm:h-52 rounded-lg overflow-hidden cursor-pointer group/photo"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo}
                alt={`Customer review photo ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover/photo:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 right-3 text-white/60 text-xs tracking-wide">
                From Customer Reviews
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white text-4xl"
            onClick={() => setSelectedPhoto(null)}
          >
            ×
          </button>
          <img
            src={selectedPhoto}
            alt="Review photo enlarged"
            className="max-w-full max-h-[90vh] object-contain"
          />
        </motion.div>
      )}
    </>
  );
}

export function SocialProof() {
  const { ref, inView } = useInView();
  const { t } = useLanguage();

  return (
    <section ref={ref} className="relative bg-neutral-950 py-20 sm:py-32 md:py-40 px-4 sm:px-6 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-emerald-400 tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-4 text-xs sm:text-sm"
          >
            Social Proof
          </motion.p>

          <div className="mb-6 overflow-hidden">
            {['Trusted', 'by', 'Travelers'].map((word, i) => (
              <motion.h2
                key={i}
                initial={{ y: 100, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-white text-[2.5rem] leading-tight sm:text-5xl md:text-7xl lg:text-8xl tracking-tight inline-block mr-3 sm:mr-4"
                style={{ fontWeight: 700 }}
              >
                {word}
              </motion.h2>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto"
          >
            See what our guests say on TripAdvisor and Google
          </motion.p>
        </div>

        {/* TripAdvisor & Google Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
          {/* TripAdvisor Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="relative bg-black/40 backdrop-blur-sm border border-white/10 p-6 sm:p-8 transition-all duration-500 hover:bg-black/60 hover:border-emerald-400/30 hover:shadow-2xl"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-white text-xl sm:text-2xl mb-3" style={{ fontWeight: 600 }}>
                  TripAdvisor
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        fill="#fbbf24"
                        stroke="#fbbf24"
                        className="sm:w-6 sm:h-6"
                      />
                    ))}
                  </div>
                  <span className="text-2xl sm:text-3xl text-white" style={{ fontWeight: 600 }}>4.5+</span>
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              Read verified reviews from travelers worldwide.
            </p>

            <a
              href="https://www.tripadvisor.com/Attraction_Review-g298292-d2555736-Reviews-or30-Eco_Cameron_Travel_Tours-Cameron_Highlands_Pahang.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 min-h-[48px]"
            >
              <span className="relative z-10 text-sm sm:text-base tracking-widest uppercase">View on TripAdvisor</span>
              <ExternalLink size={16} className="relative z-10 sm:w-[18px] sm:h-[18px]" />
              <motion.div
                className="absolute inset-0 bg-emerald-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ originX: 0 }}
              />
              <span className="absolute inset-0 flex items-center justify-center gap-3 text-sm sm:text-base tracking-widest uppercase text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                View on TripAdvisor
                <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
              </span>
            </a>
          </motion.div>

          {/* Google Reviews Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="relative bg-black/40 backdrop-blur-sm border border-white/10 p-6 sm:p-8 transition-all duration-500 hover:bg-black/60 hover:border-emerald-400/30 hover:shadow-2xl"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-white text-xl sm:text-2xl mb-3" style={{ fontWeight: 600 }}>
                  Google Reviews
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        fill="#fbbf24"
                        stroke="#fbbf24"
                        className="sm:w-6 sm:h-6"
                      />
                    ))}
                  </div>
                  <span className="text-2xl sm:text-3xl text-white" style={{ fontWeight: 600 }}>4.7+</span>
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              Real experiences shared by our customers on Google.
            </p>

            <a
              href="https://www.google.com/search?q=Eco+Cameron+Travel+%26+Tours+Reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 min-h-[48px]"
            >
              <span className="relative z-10 text-sm sm:text-base tracking-widest uppercase">View Google Reviews</span>
              <ExternalLink size={16} className="relative z-10 sm:w-[18px] sm:h-[18px]" />
              <motion.div
                className="absolute inset-0 bg-emerald-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ originX: 0 }}
              />
              <span className="absolute inset-0 flex items-center justify-center gap-3 text-sm sm:text-base tracking-widest uppercase text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                View Google Reviews
                <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
              </span>
            </a>
          </motion.div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.8 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-black/40 backdrop-blur-sm border border-white/10 p-5 sm:p-6 transition-all duration-500 hover:bg-black/60 hover:border-emerald-400/30 hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill="#fbbf24"
                      stroke="#fbbf24"
                      className="sm:w-4 sm:h-4"
                    />
                  ))}
                </div>
                <span className={`text-xs px-2 py-1 rounded ${
                  review.platform === 'google'
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'bg-green-500/20 text-green-400'
                }`}>
                  {review.source}
                </span>
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                "{review.text}"
              </p>

              <p className="text-emerald-400 text-xs sm:text-sm tracking-wider">
                — {review.name}
              </p>

              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Google Review Photos Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h3 className="text-white text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8" style={{ fontWeight: 600 }}>
            
          </h3>
          <PhotoGallery />
        </motion.div>
      </div>
    </section>
  );
}
