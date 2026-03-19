import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "id";

type Translations = {
  [key: string]: { en: string; id: string };
};

const translations: Translations = {
  // Navbar
  "nav.home": { en: "Home", id: "Beranda" },
  "nav.services": { en: "Services", id: "Layanan" },
  "nav.petcare": { en: "Pet Care", id: "Perawatan Hewan" },
  "nav.about": { en: "About", id: "Tentang" },
  "nav.contact": { en: "Contact", id: "Kontak" },
  "nav.getService": { en: "Get Service", id: "Dapatkan Layanan" },

  // Hero
  "hero.title1": { en: "The Greatest Team For", id: "Tim Terbaik Untuk" },
  "hero.title2": { en: "Pet Care", id: "Perawatan Hewan" },
  "hero.title3": { en: "Services", id: "Peliharaan" },
  "hero.ourServices": { en: "Our Services", id: "Layanan Kami" },
  "hero.howTo": { en: "How to pet care?", id: "Cara merawat hewan?" },
  "hero.vetServices": { en: "Vet Services", id: "Layanan Dokter Hewan" },
  "hero.vetDesc": { en: "Expert medical care for all pets", id: "Perawatan medis ahli untuk semua hewan" },
  "hero.specialCare": { en: "Special Care", id: "Perawatan Khusus" },
  "hero.specialDesc": { en: "Personalized treatment plans", id: "Rencana perawatan personal" },
  "hero.happyPets": { en: "Happy Pets", id: "Hewan Bahagia" },
  "hero.happyCustomers": { en: "Happy Customers", id: "Pelanggan Puas" },
  "hero.awards": { en: "Awards", id: "Penghargaan" },

  // Services
  "services.subtitle": { en: "What We Offer", id: "Yang Kami Tawarkan" },
  "services.title": { en: "Our Services", id: "Layanan Kami" },
  "services.health": { en: "Health & Wellness", id: "Kesehatan & Kebugaran" },
  "services.healthDesc": { en: "Comprehensive veterinary check-ups, vaccinations, and preventive care for your beloved pets.", id: "Pemeriksaan dokter hewan menyeluruh, vaksinasi, dan perawatan preventif untuk hewan kesayangan Anda." },
  "services.grooming": { en: "Pet Grooming", id: "Grooming Hewan" },
  "services.groomingDesc": { en: "Professional grooming services including bathing, haircuts, nail trimming, and styling.", id: "Layanan grooming profesional termasuk mandi, potong bulu, potong kuku, dan styling." },
  "services.nutrition": { en: "Pet Nutrition", id: "Nutrisi Hewan" },
  "services.nutritionDesc": { en: "Customized diet plans and premium nutrition counseling for optimal pet health.", id: "Rencana diet khusus dan konsultasi nutrisi premium untuk kesehatan hewan optimal." },
  "services.training": { en: "Pet Training", id: "Pelatihan Hewan" },
  "services.trainingDesc": { en: "Behavioral training programs tailored to your pet's needs and temperament.", id: "Program pelatihan perilaku yang disesuaikan dengan kebutuhan dan temperamen hewan Anda." },
  "services.getService": { en: "Get Service", id: "Dapatkan Layanan" },
  "services.lead": { en: "Premium pet care packages with the same cheerful, polished style as the new hero.", id: "Paket perawatan hewan premium dengan nuansa ceria dan tampilan elegan yang selaras dengan hero baru." },

  // About
  "about.subtitle": { en: '" Who We Are "', id: '" Siapa Kami "' },
  "about.title": { en: "Best Service For Your Pet", id: "Layanan Terbaik Untuk Hewan Anda" },
  "about.desc": { en: "If you love animals, you've probably thought about getting a job that involves caring for them. At Diamant Pet Care, we nurture every pet with the highest standards of medical expertise and genuine compassion.", id: "Jika Anda mencintai hewan, Anda pasti pernah berpikir untuk bekerja merawat mereka. Di Diamant Pet Care, kami merawat setiap hewan dengan standar tertinggi keahlian medis dan kasih sayang yang tulus." },
  "about.badge1": { en: "Pet Lover", id: "Pecinta Hewan" },
  "about.badge2": { en: "Certified Groomers", id: "Groomer Bersertifikat" },
  "about.badge3": { en: "7 Years Of Experience", id: "7 Tahun Pengalaman" },
  "about.badge4": { en: "Excellent Communications", id: "Komunikasi Baik" },

  // Team
  "team.subtitle": { en: '" Pet Care "', id: '" Perawatan Hewan "' },
  "team.title": { en: "Our Friendly Team", id: "Tim Ramah Kami" },
  "team.desc": { en: "Friendly specialists with bright personalities and premium care standards.", id: "Spesialis yang ramah, penuh energi, dan menghadirkan standar perawatan premium." },

  // CTA
  "cta.badge": { en: "Ready To Visit", id: "Siap Berkunjung" },
  "cta.title": { en: "Visit Us Today And Book Your Reservation", id: "Kunjungi Kami Hari Ini Dan Buat Reservasi" },
  "cta.desc": { en: "The kind of care your pets deserve. Love and concern for your pets while you're away! Everything that you need for your pet. Walking makes your pet happy.", id: "Perawatan yang layak untuk hewan Anda. Cinta dan perhatian untuk hewan Anda saat Anda pergi! Semua yang dibutuhkan hewan Anda." },
  "cta.schedule": { en: "Schedule a Visit", id: "Jadwalkan Kunjungan" },

  // Footer
  "footer.desc": { en: "Pet care is the care and medical treatment of pets. At Diamant, we provide premium services for your most loyal companions.", id: "Perawatan hewan adalah perawatan dan pengobatan medis untuk hewan peliharaan. Di Diamant, kami menyediakan layanan premium untuk sahabat setia Anda." },
  "footer.explore": { en: "Explore", id: "Jelajahi" },
  "footer.aboutUs": { en: "About Us", id: "Tentang Kami" },
  "footer.services": { en: "Services", id: "Layanan" },
  "footer.ourTeam": { en: "Our Team", id: "Tim Kami" },
  "footer.gallery": { en: "Gallery", id: "Galeri" },
  "footer.contactUs": { en: "Contact Us", id: "Hubungi Kami" },
  "footer.contactDesc": { en: "If you have any question, please contact us via WhatsApp", id: "Jika Anda memiliki pertanyaan, silakan hubungi kami via WhatsApp" },
  "footer.workingHours": { en: "Working Hours", id: "Jam Operasional" },
  "footer.monSat": { en: "Monday - Saturday:", id: "Senin - Sabtu:" },
  "footer.sunday": { en: "Sunday:", id: "Minggu:" },
  "footer.closed": { en: "We are Closed", id: "Kami Tutup" },
  "footer.newsletter": { en: "Subscribe to our newsletter", id: "Berlangganan newsletter kami" },
  "footer.yourEmail": { en: "Your Email", id: "Email Anda" },
  "footer.rights": { en: "© 2024 Diamant Pet Care. All rights reserved.", id: "© 2024 Diamant Pet Care. Hak cipta dilindungi." },
  "footer.location": { en: "Our Location", id: "Lokasi Kami" },
  "footer.visitBadge": { en: "Visit Us", id: "Kunjungi Kami" },
};

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "id",
  setLang: () => {},
  t: (key) => key,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("id");

  const t = (key: string): string => {
    return translations[key]?.[lang] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
