import ctaPets from '@/assets/cta-pets.png';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WA_NUMBER = '6281384072641';

const CTASection = () => {
  const { lang, t } = useLanguage();

  const waUrl = () => {
    const text =
      lang === 'id'
        ? 'Halo Diamant Pet Care, saya ingin menjadwalkan kunjungan untuk hewan peliharaan saya.'
        : 'Hello Diamant Pet Care, I would like to schedule a visit for my pet.';
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className='relative overflow-hidden bg-[linear-gradient(180deg,#fff5fb_0%,#fffefe_100%)] py-24'>
      <div className='absolute inset-x-0 top-0 h-52 bg-[radial-gradient(circle_at_top,_rgba(255,79,176,0.12),transparent_44%)]' />

      <div className='relative mx-auto max-w-7xl px-6'>
        <div className='relative overflow-hidden rounded-[2.75rem] bg-[linear-gradient(135deg,#fff3fb_0%,#f3ecff_48%,#fff7eb_100%)] px-8 py-12 shadow-[0_24px_60px_rgba(123,92,229,0.12)] md:px-12 lg:grid lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-10'>
          <div className='absolute right-0 top-0 h-48 w-48 rounded-full bg-[#eddfff]/40 blur-3xl' />
          <div className='absolute left-0 bottom-0 h-40 w-40 rounded-full bg-[#ffd84f]/18 blur-3xl' />

          <div className='relative z-10 max-w-xl'>
            <p className='text-sm font-bold uppercase tracking-[0.28em] text-[#ff4fb0]'>
              {t('cta.badge')}
            </p>
            <h2 className='mt-4 font-body text-4xl font-extrabold tracking-[-0.05em] text-[#7b5ce5] md:text-5xl'>
              {t('cta.title')}
            </h2>
            <p className='mt-5 text-base leading-8 text-[#676278]'>
              {t('cta.desc')}
            </p>
            <a
              href={waUrl()}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-8 inline-flex items-center gap-2 rounded-full bg-[#ff4fb0] px-8 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(255,79,176,0.22)] transition-transform duration-200 hover:-translate-y-0.5'
            >
              {t('cta.schedule')}
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className='relative z-10 mt-10 flex justify-center lg:mt-0'>
            <div className='relative w-full max-w-[360px]'>
              <div className='absolute inset-x-8 bottom-4 top-16 rounded-[2.5rem] bg-[#7b5ce5]' />
              <div className='absolute inset-x-0 bottom-0 top-6 rounded-[2.5rem] bg-[#ffe17a]' />
              <img
                src={ctaPets}
                alt='Dog and cat'
                className='relative z-10 mx-auto w-full max-w-[340px] object-contain drop-shadow-[0_22px_40px_rgba(123,92,229,0.18)]'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
