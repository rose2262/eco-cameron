import { useParams, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Users, MapPin, ChevronRight, Lightbulb, MessageCircle } from 'lucide-react';
import { tourData } from '../data/tourData';
import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { generateWhatsAppLink } from '../utils/whatsapp';

export function TourDetailPage() {
  const { tourId } = useParams();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useLanguage();

  const tour = tourData.find(t => t.id === Number(tourId));

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsLoaded(true), 100);
  }, [tourId]);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 w-full max-w-full overflow-hidden">
        <div className="text-center w-full max-w-md">
          <h1 className="text-white text-2xl sm:text-3xl mb-4 sm:mb-6">{t('tourDetail.notFound')}</h1>
          <button
            onClick={() => navigate('/')}
            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white transition-colors min-h-[48px] text-base sm:text-lg"
          >
            {t('tourDetail.backHome')}
          </button>
        </div>
      </div>
    );
  }

  const relatedTours = tourData.filter(t => t.id !== tour.id).slice(0, 3);
  const funFacts = [
    "The mossy forest is a rare cloud forest ecosystem found only at high elevations.",
    "Cameron Highlands produces some of the world's finest tea at 1,500m above sea level.",
    "Rafflesia arnoldii can grow up to 1 meter in diameter - the world's largest single flower.",
    "The highlands maintain a cool climate year-round, averaging 15-25°C."
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen w-full max-w-full overflow-x-hidden"
    >
      {/* Hero Section */}
      <section className="relative h-[70vh] sm:h-[80vh] md:h-screen w-full max-w-full overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0 w-full"
        >
          <div
            className="w-full h-full bg-cover bg-center min-w-full"
            style={{ backgroundImage: `url(${tour.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
          <div className="absolute bottom-2 right-2 text-white/30 text-[10px] sm:text-xs tracking-wide">
            Visual Representation Only
          </div>
        </motion.div>

        <button
          onClick={() => navigate('/')}
          className="absolute top-20 sm:top-24 left-4 md:left-8 z-20 flex items-center gap-2 px-4 py-3 bg-black/50 hover:bg-black/70 active:bg-black/80 text-white backdrop-blur-sm transition-colors min-h-[44px]"
        >
          <ArrowLeft size={20} />
          <span className="text-sm sm:text-base">{t('tourDetail.back')}</span>
        </button>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 text-center w-full max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-5xl"
          >
            <h1 className="text-white text-[2.5rem] leading-tight sm:text-5xl md:text-7xl lg:text-8xl mb-4 sm:mb-6 tracking-tight break-words">
              {tour.title}
            </h1>
            <p className="text-gray-200 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto px-4 break-words">
              {tour.description}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 z-10"
        >
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-black/60 backdrop-blur-md p-4 sm:p-5 md:p-6 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 border border-white/10">
              <div className="text-center">
                <Clock className="text-emerald-400 mx-auto mb-1.5 sm:mb-2 w-5 h-5 sm:w-6 sm:h-6" />
                <p className="text-gray-400 text-xs sm:text-sm mb-0.5 sm:mb-1">{t('tourDetail.duration')}</p>
                <p className="text-white text-sm sm:text-base">{tour.duration}</p>
              </div>
              <div className="text-center">
                <Users className="text-emerald-400 mx-auto mb-1.5 sm:mb-2 w-5 h-5 sm:w-6 sm:h-6" />
                <p className="text-gray-400 text-xs sm:text-sm mb-0.5 sm:mb-1">{t('tourDetail.perPax')}</p>
                <p className="text-white text-sm sm:text-base">{tour.pricePerPax}</p>
              </div>
              <div className="text-center col-span-2 md:col-span-1">
                <Users className="text-emerald-400 mx-auto mb-1.5 sm:mb-2 w-5 h-5 sm:w-6 sm:h-6" />
                <p className="text-gray-400 text-xs sm:text-sm mb-0.5 sm:mb-1">{t('tourDetail.privateTour')}</p>
                <p className="text-white text-sm sm:text-base">{tour.pricePrivate}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Tour Journey Flow */}
      <section className="relative bg-neutral-950 py-12 sm:py-16 md:py-20 px-4 sm:px-6 w-full max-w-full overflow-hidden">
        <div className="max-w-6xl mx-auto w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 sm:mb-10 md:mb-12"
          >
            {t('tourDetail.yourJourney')}
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-5 md:gap-4 max-w-4xl mx-auto">
            {[t('tourDetail.start'), t('tourDetail.explore'), t('tourDetail.discover'), t('tourDetail.return')].map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center gap-3 sm:gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-600/20 border-2 border-emerald-400 flex items-center justify-center mb-2">
                    <span className="text-emerald-400 text-lg sm:text-xl">{index + 1}</span>
                  </div>
                  <span className="text-white text-sm sm:text-base md:text-lg text-center">{step}</span>
                </div>
                {index < 3 && (
                  <ChevronRight className="text-emerald-400 hidden md:block w-5 h-5 md:w-6 md:h-6" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Highlights */}
      <section className="relative bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-10 sm:mb-12 md:mb-16"
          >
            {t('tourDetail.whatExperience')}
          </motion.h2>

          <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
            {tour.locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative group overflow-hidden aspect-[4/3]">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      src={location.image}
                      alt={location.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-2 right-2 text-white/30 text-[10px] sm:text-xs tracking-wide">
                      Visual Representation Only
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-start gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                    <MapPin className="text-emerald-400 flex-shrink-0 mt-1 w-5 h-5 sm:w-6 sm:h-6" />
                    <h3 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                      {location.name}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    {location.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Did You Know Section */}
      <section className="relative bg-neutral-950 py-12 sm:py-16 md:py-20 px-4 sm:px-6 w-full max-w-full overflow-hidden">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-900/20 to-emerald-600/10 border border-emerald-500/30 p-5 sm:p-6 md:p-8 lg:p-12"
          >
            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
              <Lightbulb className="text-emerald-400 flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl">{t('tourDetail.didYouKnow')}</h3>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {funFacts.slice(0, 2).map((fact, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed pl-3 sm:pl-4 border-l-2 border-emerald-400"
                >
                  {fact}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 pb-24 sm:pb-20 w-full max-w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center w-full"
        >
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-5 md:mb-6">
            {t('tourDetail.readyTitle')}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-7 md:mb-8 px-4">
            {t('tourDetail.readySubtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href={generateWhatsAppLink(tour.title, "I'd like to book this tour. Please provide availability and pricing details.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 sm:px-10 py-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white transition-all duration-300 hover:scale-105 active:scale-95 text-base sm:text-lg min-h-[48px]"
            >
              <MessageCircle size={20} />
              {t('tourDetail.bookWhatsapp')}
            </a>
            <a
              href={generateWhatsAppLink(tour.title, "I have questions about this tour. Please contact me.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 sm:px-10 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black active:bg-gray-100 transition-all duration-300 text-base sm:text-lg min-h-[48px]"
            >
              <MessageCircle size={20} />
              {t('tourDetail.contactUs')}
            </a>
          </div>

          <p className="text-gray-500 text-xs sm:text-sm mt-5 sm:mt-6 px-4">
            {t('tourDetail.excludes')}
          </p>
        </motion.div>
      </section>

      {/* Related Tours */}
      <section className="relative bg-neutral-950 py-12 sm:py-16 md:py-20 px-4 sm:px-6 pb-28 sm:pb-24 md:pb-20 w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 sm:mb-10 md:mb-12"
          >
            {t('tourDetail.otherTours')}
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {relatedTours.map((relatedTour, index) => (
              <motion.div
                key={relatedTour.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                onClick={() => {
                  setIsLoaded(false);
                  navigate(`/tour/${relatedTour.id}`);
                }}
                className="group cursor-pointer bg-neutral-900 overflow-hidden hover:scale-105 active:scale-95 transition-transform duration-500"
              >
                <div className="relative h-52 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={relatedTour.image}
                    alt={relatedTour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-2 right-2 text-white/30 text-[10px] sm:text-xs tracking-wide">
                    Visual Representation Only
                  </div>
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-white text-lg sm:text-xl mb-2">{relatedTour.title}</h3>
                  <div className="flex items-center justify-between text-gray-400 text-sm mb-3 sm:mb-4">
                    <span>{relatedTour.duration}</span>
                    <span className="text-emerald-400">{relatedTour.pricePerPax}</span>
                  </div>
                  <button className="w-full px-4 py-3 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white transition-colors min-h-[44px] text-sm sm:text-base">
                    {t('tourDetail.viewTour')}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky WhatsApp Button (Mobile) */}
      <a
        href={generateWhatsAppLink(tour.title, "I'd like to book this tour!")}
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-5 left-4 right-4 z-50 flex items-center justify-center gap-2 px-6 py-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-center shadow-2xl text-base sm:text-lg min-h-[48px] transition-all duration-300"
        style={{ boxShadow: '0 10px 40px rgba(16, 185, 129, 0.4)' }}
      >
        <MessageCircle size={20} />
        {t('tourDetail.bookThisTour')}
      </a>
    </motion.div>
  );
}
