import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';
import { useLanguage } from '@/contexts/LanguageContext';

const navKeys = [
  'nav.home',
  'nav.services',
  'nav.petcare',
  'nav.about',
  'nav.contact',
];
const navAnchors = ['home', 'services', 'pet-care', 'about', 'contact'];

const WA_NUMBER = '6281384072641';
const getWhatsAppUrl = (lang: string) => {
  const text =
    lang === 'id'
      ? 'Halo Diamant Pet Care, saya ingin mendapatkan layanan untuk hewan saya.'
      : 'Hello Diamant Pet Care, I would like to get a service for my pet.';
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  return (
    <nav className='fixed inset-x-0 top-0 z-50 px-4 pt-4'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex h-20 items-center justify-between rounded-[2rem] border border-white/70 bg-white/75 px-6 shadow-[0_16px_45px_rgba(123,92,229,0.12)] backdrop-blur-xl'>
          <a href='#home' className='flex items-center gap-3'>
            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#fff0f8,#efe8ff)]'>
              <img
                src={logo}
                alt='Diamant Pet Care'
                className='h-8 w-8 object-contain'
              />
            </div>
            <span className='font-body text-xl font-extrabold tracking-[-0.04em] text-[#7b5ce5]'>
              Diamant<span className='text-[#ff4fb0]'>Pets</span>
            </span>
          </a>

          <ul className='hidden items-center gap-8 lg:flex'>
            {navKeys.map((key, i) => (
              <li key={key}>
                <a
                  href={`#${navAnchors[i]}`}
                  className={`font-body text-sm font-semibold tracking-[0.02em] transition-colors duration-200 ${
                    i === 0
                      ? 'text-[#ff4fb0]'
                      : 'text-[#6c6880] hover:text-[#7b5ce5]'
                  }`}
                >
                  {t(key)}
                </a>
              </li>
            ))}
          </ul>

          <div className='hidden items-center gap-3 lg:flex'>
            <button
              onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
              className='rounded-full border border-[#eadcff] bg-[#faf4ff] px-4 py-2 text-xs font-bold text-[#7b5ce5] transition-colors duration-200 hover:bg-[#f2e8ff]'
            >
              {lang === 'en' ? 'ID 🇮🇩' : 'EN 🇬🇧'}
            </button>

            <a
              href={getWhatsAppUrl(lang)}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center rounded-full bg-[#ff4fb0] px-6 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(255,79,176,0.22)] transition-transform duration-200 hover:-translate-y-0.5'
            >
              {t('nav.getService')}
            </a>
          </div>

          <button
            className='inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f6efff] text-[#7b5ce5] lg:hidden'
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label='Toggle menu'
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileOpen && (
          <div className='mt-3 rounded-[2rem] border border-white/70 bg-white/90 px-6 py-5 shadow-[0_16px_45px_rgba(123,92,229,0.12)] backdrop-blur-xl lg:hidden'>
            <div className='space-y-3'>
              {navKeys.map((key, i) => (
                <a
                  key={key}
                  href={`#${navAnchors[i]}`}
                  className='block text-sm font-semibold text-[#6c6880] transition-colors duration-200 hover:text-[#7b5ce5]'
                  onClick={() => setMobileOpen(false)}
                >
                  {t(key)}
                </a>
              ))}
            </div>
            <div className='mt-5 flex items-center gap-3'>
              <button
                onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
                className='rounded-full border border-[#eadcff] bg-[#faf4ff] px-4 py-2 text-xs font-bold text-[#7b5ce5]'
              >
                {lang === 'en' ? 'ID 🇮🇩' : 'EN 🇬🇧'}
              </button>
              <a
                href={getWhatsAppUrl(lang)}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center rounded-full bg-[#ff4fb0] px-5 py-2.5 text-sm font-bold text-white'
                onClick={() => setMobileOpen(false)}
              >
                {t('nav.getService')}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
