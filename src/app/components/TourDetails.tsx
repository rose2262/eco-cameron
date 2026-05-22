import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, MapPin, CheckCircle2 } from 'lucide-react';

interface TourLocation {
  name: string;
  description: string;
  image: string;
}

interface TourDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  tour: {
    title: string;
    duration: string;
    pricePerPax: string;
    pricePrivate: string;
    description: string;
    locations: TourLocation[];
  } | null;
}

export function TourDetails({ isOpen, onClose, tour }: TourDetailsProps) {
  if (!tour) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 z-50 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-y-auto bg-neutral-950 rounded-lg"
          >
            <div className="sticky top-0 z-10 bg-neutral-950 border-b border-gray-800 px-6 py-4 flex items-center justify-between">
              <h2 className="text-white text-2xl md:text-3xl">{tour.title}</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-neutral-900 rounded-full transition-colors"
              >
                <X className="text-white" size={24} />
              </button>
            </div>

            <div className="p-6 md:p-8">
              <div className="mb-8">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {tour.description}
                </p>

                <div className="flex flex-wrap gap-6 text-gray-300 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock size={20} className="text-emerald-400" />
                    <span>{tour.duration}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-neutral-900 rounded-lg">
                  <div>
                    <span className="text-gray-400 block mb-2">Per Pax</span>
                    <span className="text-emerald-400 text-3xl">{tour.pricePerPax}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block mb-2">Private Tour</span>
                    <span className="text-emerald-400 text-3xl">{tour.pricePrivate}</span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-white text-2xl mb-6">Tour Highlights</h3>
                <div className="space-y-8">
                  {tour.locations.map((location, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-neutral-900 rounded-lg overflow-hidden"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                        <div className="relative h-64 md:h-full min-h-[250px] rounded-lg overflow-hidden bg-neutral-800">
                          <img
                            src={location.image}
                            alt={location.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-2 right-2 text-white/30 text-xs tracking-wide">
                            Visual Representation Only
                          </div>
                        </div>
                        <div className="flex flex-col justify-center">
                          <div className="flex items-start gap-2 mb-3">
                            <MapPin size={20} className="text-emerald-400 flex-shrink-0 mt-1" />
                            <h4 className="text-white text-xl">{location.name}</h4>
                          </div>
                          <p className="text-gray-300 leading-relaxed">
                            {location.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="sticky bottom-0 bg-neutral-950 pt-6 border-t border-gray-800">
                <a
                  href={`https://wa.me/60125837277?text=Hi! I'm interested in the ${tour.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors text-center text-lg"
                >
                  Book This Tour via WhatsApp
                </a>
                <p className="text-gray-500 text-sm text-center mt-4">
                  * Meals and entrance fees are excluded
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
