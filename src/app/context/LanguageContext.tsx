import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ms' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.tours': 'Tours',
    'nav.whyUs': 'Why Us',
    'nav.bookNow': 'Book Now',
    'nav.home': 'Home',

    // Hero
    'hero.title': 'Experience Cameron Highlands',
    'hero.subtitle': 'Where nature meets luxury',
    'hero.exploreTours': 'Explore Tours',
    'hero.scroll': 'Scroll',

    // About
    'about.title1': 'Where',
    'about.title2': 'Nature',
    'about.title3': 'Meets',
    'about.title4': 'Adventure',
    'about.text1': 'Step into the misty forests, rolling tea plantations, and hidden trails of Cameron Highlands.',
    'about.text2': 'Eco Cameron brings you closer to nature through unforgettable experiences.',

    // Parallax
    'parallax.title1': 'Feel the Mist.',
    'parallax.title2': 'Breathe the Highlands.',

    // Tours
    'tours.title1': 'Choose',
    'tours.title2': 'Your',
    'tours.title3': 'Adventure',
    'tours.alert.title': 'Important Pricing Information',
    'tours.alert.text': 'Meals and entrance fees are excluded from tour prices. Please budget accordingly for a complete experience.',
    'tours.perPax': 'Per Pax',
    'tours.private': 'Private',
    'tours.viewDetails': 'View Details',
    'tours.excludes': '* Excludes meals & entrance fees',

    // Land Rover
    'landrover.title1': 'Travel',
    'landrover.title2': 'in',
    'landrover.title3': 'Iconic',
    'landrover.title4': 'Land Rovers',
    'landrover.subtitle': 'Built for rugged terrain and unforgettable journeys',
    'landrover.4x4': '4x4',
    'landrover.4x4.desc': 'Off-Road Capable',
    'landrover.classic': 'Classic',
    'landrover.classic.desc': 'Land Rover Defender',
    'landrover.safe': 'Safe',
    'landrover.safe.desc': 'Well-Maintained',

    // Why Choose Us
    'whyus.subtitle': 'Why Eco Cameron',
    'whyus.title1': 'Your',
    'whyus.title2': 'Trusted',
    'whyus.title3': 'Partner',
    'whyus.guides': 'Local Expert Guides',
    'whyus.guides.desc': 'Born and raised in Cameron Highlands with deep knowledge of every trail',
    'whyus.eco': 'Eco-Friendly Experiences',
    'whyus.eco.desc': 'Sustainable tourism that protects and preserves nature for future generations',
    'whyus.small': 'Small Group Tours',
    'whyus.small.desc': 'Intimate experiences with limited group sizes for personalized attention',
    'whyus.authentic': 'Authentic Nature Exploration',
    'whyus.authentic.desc': 'Discover hidden trails and untouched landscapes off the beaten path',

    // Reviews
    'reviews.title1': 'Trusted',
    'reviews.title2': 'by',
    'reviews.title3': 'Travelers',
    'reviews.title4': 'Worldwide',
    'reviews.subtitle': 'See what real travelers say about their experience with Eco Cameron.',
    'reviews.viewTripadvisor': 'View Reviews on TripAdvisor',

    // CTA
    'cta.title1': 'Start',
    'cta.title2': 'Your',
    'cta.title3': 'Journey',
    'cta.title4': 'Today',
    'cta.subtitle': 'Book your eco-adventure now and discover the pristine beauty of Cameron Highlands',
    'cta.bookWhatsapp': 'Book via WhatsApp',

    // Footer
    'footer.description': 'Sustainable eco-tourism in the heart of Cameron Highlands, Malaysia. Experience nature responsibly.',
    'footer.note': 'Note: Meals and entrance fees are excluded from tour prices',
    'footer.contact': 'Contact',
    'footer.phone': 'Phone',
    'footer.email': 'Email',
    'footer.location': 'Location',
    'footer.quickLinks': 'Quick Links',
    'footer.aboutUs': 'About Us',
    'footer.ourTours': 'Our Tours',
    'footer.whyChooseUs': 'Why Choose Us',
    'footer.rights': 'All rights reserved.',

    // Tour Detail Page
    'tourDetail.notFound': 'Tour Not Found',
    'tourDetail.backHome': 'Back to Home',
    'tourDetail.back': 'Back',
    'tourDetail.duration': 'Duration',
    'tourDetail.perPax': 'Per Pax',
    'tourDetail.privateTour': 'Private Tour',
    'tourDetail.yourJourney': 'Your Journey',
    'tourDetail.start': 'Start',
    'tourDetail.explore': 'Explore',
    'tourDetail.discover': 'Discover',
    'tourDetail.return': 'Return',
    'tourDetail.whatExperience': "What You'll Experience",
    'tourDetail.didYouKnow': 'Did You Know?',
    'tourDetail.readyTitle': 'Ready to Experience This Tour?',
    'tourDetail.readySubtitle': 'Book now and embark on an unforgettable journey through Cameron Highlands',
    'tourDetail.bookWhatsapp': 'Book via WhatsApp',
    'tourDetail.contactUs': 'Contact Us',
    'tourDetail.excludes': '* Meals and entrance fees are excluded',
    'tourDetail.otherTours': 'Explore Other Tours',
    'tourDetail.viewTour': 'View Tour',
    'tourDetail.bookThisTour': 'Book This Tour',
  },
  ms: {
    // Navigation
    'nav.about': 'Tentang',
    'nav.tours': 'Lawatan',
    'nav.whyUs': 'Mengapa Kami',
    'nav.bookNow': 'Tempah Sekarang',
    'nav.home': 'Utama',

    // Hero
    'hero.title': 'Alami Cameron Highlands',
    'hero.subtitle': 'Di mana alam bertemu kemewahan',
    'hero.exploreTours': 'Terokai Lawatan',
    'hero.scroll': 'Tatal',

    // About
    'about.title1': 'Di Mana',
    'about.title2': 'Alam',
    'about.title3': 'Bertemu',
    'about.title4': 'Pengembaraan',
    'about.text1': 'Melangkah ke dalam hutan berkabut, ladang teh berbukit, dan denai tersembunyi Cameron Highlands.',
    'about.text2': 'Eco Cameron membawa anda lebih dekat dengan alam semula jadi melalui pengalaman yang tidak dapat dilupakan.',

    // Parallax
    'parallax.title1': 'Rasai Kabus.',
    'parallax.title2': 'Hirup Tanah Tinggi.',

    // Tours
    'tours.title1': 'Pilih',
    'tours.title2': 'Pengembaraan',
    'tours.title3': 'Anda',
    'tours.alert.title': 'Maklumat Harga Penting',
    'tours.alert.text': 'Makanan dan yuran masuk tidak termasuk dalam harga lawatan. Sila belanjawan dengan sewajarnya untuk pengalaman yang lengkap.',
    'tours.perPax': 'Setiap Orang',
    'tours.private': 'Peribadi',
    'tours.viewDetails': 'Lihat Butiran',
    'tours.excludes': '* Tidak termasuk makanan & yuran masuk',

    // Land Rover
    'landrover.title1': 'Perjalanan',
    'landrover.title2': 'dengan',
    'landrover.title3': 'Land Rover',
    'landrover.title4': 'Ikonik',
    'landrover.subtitle': 'Dibina untuk medan yang sukar dan perjalanan yang tidak dapat dilupakan',
    'landrover.4x4': '4x4',
    'landrover.4x4.desc': 'Berkebolehan Luar Jalan',
    'landrover.classic': 'Klasik',
    'landrover.classic.desc': 'Land Rover Defender',
    'landrover.safe': 'Selamat',
    'landrover.safe.desc': 'Diselenggara Dengan Baik',

    // Why Choose Us
    'whyus.subtitle': 'Mengapa Eco Cameron',
    'whyus.title1': 'Rakan',
    'whyus.title2': 'Kongsi',
    'whyus.title3': 'Dipercayai',
    'whyus.guides': 'Pemandu Pakar Tempatan',
    'whyus.guides.desc': 'Dilahirkan dan dibesarkan di Cameron Highlands dengan pengetahuan mendalam tentang setiap denai',
    'whyus.eco': 'Pengalaman Mesra Alam',
    'whyus.eco.desc': 'Pelancongan mampan yang melindungi dan memelihara alam semula jadi untuk generasi akan datang',
    'whyus.small': 'Lawatan Kumpulan Kecil',
    'whyus.small.desc': 'Pengalaman intim dengan saiz kumpulan terhad untuk perhatian peribadi',
    'whyus.authentic': 'Penerokaan Alam Tulen',
    'whyus.authentic.desc': 'Temui denai tersembunyi dan landskap yang tidak tersentuh di luar laluan biasa',

    // Reviews
    'reviews.title1': 'Dipercayai',
    'reviews.title2': 'oleh',
    'reviews.title3': 'Pengembara',
    'reviews.title4': 'Seluruh Dunia',
    'reviews.subtitle': 'Lihat apa yang pelancong sebenar katakan tentang pengalaman mereka dengan Eco Cameron.',
    'reviews.viewTripadvisor': 'Lihat Ulasan di TripAdvisor',

    // CTA
    'cta.title1': 'Mulakan',
    'cta.title2': 'Perjalanan',
    'cta.title3': 'Anda',
    'cta.title4': 'Hari Ini',
    'cta.subtitle': 'Tempah pengembaraan eko anda sekarang dan temui keindahan Cameron Highlands yang tulen',
    'cta.bookWhatsapp': 'Tempah melalui WhatsApp',

    // Footer
    'footer.description': 'Eko-pelancongan mampan di tengah Cameron Highlands, Malaysia. Alami alam semula jadi secara bertanggungjawab.',
    'footer.note': 'Nota: Makanan dan yuran masuk tidak termasuk dalam harga lawatan',
    'footer.contact': 'Hubungi',
    'footer.phone': 'Telefon',
    'footer.email': 'E-mel',
    'footer.location': 'Lokasi',
    'footer.quickLinks': 'Pautan Pantas',
    'footer.aboutUs': 'Tentang Kami',
    'footer.ourTours': 'Lawatan Kami',
    'footer.whyChooseUs': 'Mengapa Pilih Kami',
    'footer.rights': 'Hak cipta terpelihara.',

    // Tour Detail Page
    'tourDetail.notFound': 'Lawatan Tidak Dijumpai',
    'tourDetail.backHome': 'Kembali ke Laman Utama',
    'tourDetail.back': 'Kembali',
    'tourDetail.duration': 'Tempoh',
    'tourDetail.perPax': 'Setiap Orang',
    'tourDetail.privateTour': 'Lawatan Peribadi',
    'tourDetail.yourJourney': 'Perjalanan Anda',
    'tourDetail.start': 'Mula',
    'tourDetail.explore': 'Terokai',
    'tourDetail.discover': 'Temui',
    'tourDetail.return': 'Kembali',
    'tourDetail.whatExperience': 'Apa Yang Anda Akan Alami',
    'tourDetail.didYouKnow': 'Tahukah Anda?',
    'tourDetail.readyTitle': 'Bersedia untuk Mengalami Lawatan Ini?',
    'tourDetail.readySubtitle': 'Tempah sekarang dan mulakan perjalanan yang tidak dapat dilupakan melalui Cameron Highlands',
    'tourDetail.bookWhatsapp': 'Tempah melalui WhatsApp',
    'tourDetail.contactUs': 'Hubungi Kami',
    'tourDetail.excludes': '* Makanan dan yuran masuk tidak termasuk',
    'tourDetail.otherTours': 'Terokai Lawatan Lain',
    'tourDetail.viewTour': 'Lihat Lawatan',
    'tourDetail.bookThisTour': 'Tempah Lawatan Ini',
  },
  zh: {
    // Navigation
    'nav.about': '关于我们',
    'nav.tours': '旅游配套',
    'nav.whyUs': '为何选择我们',
    'nav.bookNow': '立即预订',
    'nav.home': '首页',

    // Hero
    'hero.title': '体验金马仑高原',
    'hero.subtitle': '大自然与奢华的邂逅',
    'hero.exploreTours': '探索旅游',
    'hero.scroll': '向下滚动',

    // About
    'about.title1': '大自然',
    'about.title2': '与',
    'about.title3': '冒险',
    'about.title4': '的邂逅',
    'about.text1': '踏入金马仑高原的迷雾森林、起伏的茶园和隐秘的小径。',
    'about.text2': 'Eco Cameron 通过难忘的体验让您更接近大自然。',

    // Parallax
    'parallax.title1': '感受雾气。',
    'parallax.title2': '呼吸高原。',

    // Tours
    'tours.title1': '选择',
    'tours.title2': '您的',
    'tours.title3': '冒险',
    'tours.alert.title': '重要价格信息',
    'tours.alert.text': '餐费和门票不包含在旅游价格中。请相应地预算以获得完整的体验。',
    'tours.perPax': '每人',
    'tours.private': '私人',
    'tours.viewDetails': '查看详情',
    'tours.excludes': '* 不包括餐费和门票',

    // Land Rover
    'landrover.title1': '乘坐',
    'landrover.title2': '标志性的',
    'landrover.title3': 'Land Rover',
    'landrover.title4': '旅行',
    'landrover.subtitle': '专为崎岖地形和难忘旅程打造',
    'landrover.4x4': '四驱',
    'landrover.4x4.desc': '越野能力',
    'landrover.classic': '经典',
    'landrover.classic.desc': 'Land Rover Defender',
    'landrover.safe': '安全',
    'landrover.safe.desc': '保养良好',

    // Why Choose Us
    'whyus.subtitle': '为何选择 Eco Cameron',
    'whyus.title1': '您值得',
    'whyus.title2': '信赖的',
    'whyus.title3': '伙伴',
    'whyus.guides': '本地专家向导',
    'whyus.guides.desc': '在金马仑高原土生土长，对每条小径都了如指掌',
    'whyus.eco': '环保体验',
    'whyus.eco.desc': '可持续旅游，保护和保存自然为子孙后代',
    'whyus.small': '小团体旅游',
    'whyus.small.desc': '团体人数有限的亲密体验，提供个性化关注',
    'whyus.authentic': '真正的自然探索',
    'whyus.authentic.desc': '发现隐秘小径和未受破坏的风景',

    // Reviews
    'reviews.title1': '受到',
    'reviews.title2': '全球',
    'reviews.title3': '旅行者',
    'reviews.title4': '的信赖',
    'reviews.subtitle': '看看真正的旅行者对 Eco Cameron 体验的评价。',
    'reviews.viewTripadvisor': '在 TripAdvisor 上查看评论',

    // CTA
    'cta.title1': '今天',
    'cta.title2': '就开始',
    'cta.title3': '您的',
    'cta.title4': '旅程',
    'cta.subtitle': '立即预订您的生态探险，发现金马仑高原的原始之美',
    'cta.bookWhatsapp': '通过 WhatsApp 预订',

    // Footer
    'footer.description': '马来西亚金马仑高原中心的可持续生态旅游。负责任地体验大自然。',
    'footer.note': '注意：餐费和门票不包含在旅游价格中',
    'footer.contact': '联系方式',
    'footer.phone': '电话',
    'footer.email': '电子邮件',
    'footer.location': '地点',
    'footer.quickLinks': '快速链接',
    'footer.aboutUs': '关于我们',
    'footer.ourTours': '我们的旅游',
    'footer.whyChooseUs': '为何选择我们',
    'footer.rights': '版权所有。',

    // Tour Detail Page
    'tourDetail.notFound': '未找到旅游',
    'tourDetail.backHome': '返回首页',
    'tourDetail.back': '返回',
    'tourDetail.duration': '时长',
    'tourDetail.perPax': '每人',
    'tourDetail.privateTour': '私人旅游',
    'tourDetail.yourJourney': '您的旅程',
    'tourDetail.start': '开始',
    'tourDetail.explore': '探索',
    'tourDetail.discover': '发现',
    'tourDetail.return': '返回',
    'tourDetail.whatExperience': '您将体验什么',
    'tourDetail.didYouKnow': '您知道吗？',
    'tourDetail.readyTitle': '准备好体验这次旅游了吗？',
    'tourDetail.readySubtitle': '立即预订，开启穿越金马仑高原的难忘之旅',
    'tourDetail.bookWhatsapp': '通过 WhatsApp 预订',
    'tourDetail.contactUs': '联系我们',
    'tourDetail.excludes': '* 不包括餐费和门票',
    'tourDetail.otherTours': '探索其他旅游',
    'tourDetail.viewTour': '查看旅游',
    'tourDetail.bookThisTour': '预订此旅游',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
