import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { generateWhatsAppLink, getDisplayNumber } from '../utils/whatsapp';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-black py-12 sm:py-14 md:py-16 px-4 sm:px-6 border-t border-white/5 pb-24 sm:pb-16 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12 md:gap-16 mb-10 sm:mb-12 md:mb-16">
          <div>
            <h3 className="text-white text-xl sm:text-2xl tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-5 md:mb-6">ECO CAMERON</h3>
            <p className="text-gray-500 leading-relaxed mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base">
              {t('footer.description')}
            </p>
            <p className="text-gray-600 text-xs sm:text-sm">
              {t('footer.note')}
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base tracking-wider uppercase">{t('footer.contact')}</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="text-gray-500 text-sm sm:text-base">
                <span className="text-emerald-400 text-xs sm:text-sm tracking-wider uppercase block mb-1">{t('footer.phone')}</span>
                <a
                  href={generateWhatsAppLink(undefined, "I found your contact in the footer. I'd like to inquire about your tours.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-block"
                >
                  {getDisplayNumber()}
                </a>
              </li>
              <li className="text-gray-500 text-sm sm:text-base">
                <span className="text-emerald-400 text-xs sm:text-sm tracking-wider uppercase block mb-1">{t('footer.email')}</span>
                <a
                  href="mailto:ecocameron@outlook.com"
                  className="hover:text-emerald-400 transition-colors inline-block"
                >
                  ecocameron@outlook.com
                </a>
              </li>
              <li className="text-gray-500 text-sm sm:text-base">
                <span className="text-emerald-400 text-xs sm:text-sm tracking-wider uppercase block mb-1">{t('footer.location')}</span>
                Cameron Highlands<br />
                Pahang, Malaysia
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base tracking-wider uppercase">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              <li>
                <a href="#about" className="text-gray-500 hover:text-white active:text-emerald-400 transition-colors text-sm sm:text-base inline-block py-1">
                  {t('footer.aboutUs')}
                </a>
              </li>
              <li>
                <a href="#tours" className="text-gray-500 hover:text-white active:text-emerald-400 transition-colors text-sm sm:text-base inline-block py-1">
                  {t('footer.ourTours')}
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-gray-500 hover:text-white active:text-emerald-400 transition-colors text-sm sm:text-base inline-block py-1">
                  {t('footer.whyChooseUs')}
                </a>
              </li>
              <li>
                <a
                  href={generateWhatsAppLink(undefined, "I'd like to book a tour with Eco Cameron.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-emerald-400 active:text-emerald-500 transition-colors text-sm sm:text-base inline-block py-1"
                >
                  {t('nav.bookNow')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-7 md:pt-8 border-t border-white/5 text-center">
          <p className="text-gray-600 text-xs sm:text-sm tracking-wider">
            © {new Date().getFullYear()} Eco Cameron. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
