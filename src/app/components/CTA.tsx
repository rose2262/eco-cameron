import { motion, useScroll, useTransform } from 'motion/react';
import { MessageCircle, Mail, Phone } from 'lucide-react';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { generateWhatsAppLink, getDisplayNumber } from '../utils/whatsapp';

export function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  const titleWords = [t('cta.title1'), t('cta.title2'), t('cta.title3'), t('cta.title4')];

  return (
    <section
      id="book"
      ref={ref}
      className="relative py-20 sm:py-32 md:py-40 px-4 sm:px-6 overflow-hidden w-full max-w-full"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full"
      >
        <img
          src="https://images.unsplash.com/photo-1703566454447-b4c5d906e063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=2400"
          alt="Cameron Highlands landscape"
          className="w-full h-full object-cover min-w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="mb-8 sm:mb-10 md:mb-12 text-center overflow-hidden">
          {titleWords.map((word, i) => (
            <motion.h2
              key={i}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
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

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl mb-10 sm:mb-12 md:mb-16 max-w-3xl mx-auto text-center px-4"
        >
          {t('cta.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex justify-center mb-10 sm:mb-12 md:mb-16"
        >
          <a
            href={generateWhatsAppLink(undefined, "I'm ready to book a tour! Please send me more information.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 sm:gap-4 px-8 sm:px-10 md:px-12 py-4 sm:py-5 bg-transparent border-2 border-white text-white overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 min-h-[48px]"
          >
            <MessageCircle size={20} className="relative z-10 sm:w-[22px] sm:h-[22px]" />
            <span className="relative z-10 text-sm sm:text-base tracking-widest uppercase">{t('cta.bookWhatsapp')}</span>
            <motion.div
              className="absolute inset-0 bg-emerald-500"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ originX: 0 }}
            />
            <span className="absolute inset-0 flex items-center justify-center gap-3 sm:gap-4 text-sm sm:text-base tracking-widest uppercase text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <MessageCircle size={20} className="sm:w-[22px] sm:h-[22px]" />
              {t('cta.bookWhatsapp')}
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-5 sm:gap-8 justify-center items-center text-gray-400"
        >
          <a
            href={generateWhatsAppLink(undefined, "I have a question about your tours.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 sm:gap-3 hover:text-emerald-400 transition-colors"
          >
            <Phone size={16} className="text-emerald-400 sm:w-[18px] sm:h-[18px]" />
            <span className="text-sm sm:text-base tracking-wide">{getDisplayNumber()}</span>
          </a>
          <div className="hidden sm:block w-px h-4 bg-gray-600"></div>
          <div className="flex items-center gap-2.5 sm:gap-3">
            <Mail size={16} className="text-emerald-400 sm:w-[18px] sm:h-[18px]" />
            <span className="text-sm sm:text-base tracking-wide">ecocameron@outlook.com</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
