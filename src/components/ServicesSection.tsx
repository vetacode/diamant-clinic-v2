import {
  Stethoscope,
  Scissors,
  Utensils,
  Dumbbell,
  ArrowUpRight,
} from 'lucide-react';
import servicesDog from '@/assets/services-dog.png';
import servicesCat from '@/assets/services-cat.png';
import { useLanguage } from '@/contexts/LanguageContext';

const WA_NUMBER = '6281384072641';

const serviceKeys = [
  {
    icon: Stethoscope,
    titleKey: 'services.health',
    descKey: 'services.healthDesc',
    price: 'Rp 350k',
    tint: 'from-[#fff1f8] to-[#f4eaff]',
    iconBg: 'bg-[#ffe0f0]',
    iconColor: 'text-[#ff4fb0]',
  },
  {
    icon: Scissors,
    titleKey: 'services.grooming',
    descKey: 'services.groomingDesc',
    price: 'Rp 250k',
    tint: 'from-[#f4ecff] to-[#eef6ff]',
    iconBg: 'bg-[#efe6ff]',
    iconColor: 'text-[#7b5ce5]',
  },
  {
    icon: Utensils,
    titleKey: 'services.nutrition',
    descKey: 'services.nutritionDesc',
    price: 'Rp 150k',
    tint: 'from-[#fff7eb] to-[#fff0f8]',
    iconBg: 'bg-[#fff0d3]',
    iconColor: 'text-[#f0a21e]',
  },
  {
    icon: Dumbbell,
    titleKey: 'services.training',
    descKey: 'services.trainingDesc',
    price: 'Rp 200k',
    tint: 'from-[#eff8ff] to-[#f4ecff]',
    iconBg: 'bg-[#e4f0ff]',
    iconColor: 'text-[#5a88ff]',
  },
];

const ServicesSection = () => {
  const { lang, t } = useLanguage();

  const getServiceWA = (serviceName: string) => {
    const text =
      lang === 'id'
        ? `Halo Diamant Pet Care, saya tertarik dengan layanan ${serviceName}. Bisa info lebih lanjut?`
        : `Hello Diamant Pet Care, I'm interested in ${serviceName} service. Can you tell me more?`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id='services'
      className='relative overflow-hidden bg-[linear-gradient(180deg,#fff6fb_0%,#fffdfd_55%,#fff6fb_100%)] py-24'
    >
      <div className='absolute inset-x-0 top-0 h-52 bg-[radial-gradient(circle_at_top,_rgba(123,92,229,0.16),transparent_52%)]' />
      <div className='absolute left-[-6rem] top-28 h-40 w-40 rounded-full bg-[#ffd84f]/20 blur-3xl' />
      <div className='absolute right-[-4rem] bottom-20 h-44 w-44 rounded-full bg-[#ff4fb0]/10 blur-3xl' />

      <div className='relative mx-auto max-w-7xl px-6'>
        <div className='relative px-6 py-14 text-center md:px-20 md:py-16 lg:px-28'>
          <div className='absolute inset-0 overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,#8c6bf2_0%,#7b5ce5_48%,#ff62ba_100%)] shadow-[0_24px_60px_rgba(123,92,229,0.18)]'>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.18),transparent_50%)]' />
          </div>
          <img
            src={servicesDog}
            alt='Dog services'
            className='pointer-events-none absolute -left-10 bottom-[-2.5rem] z-20 hidden w-80 object-contain drop-shadow-[0_28px_45px_rgba(76,42,163,0.28)] md:block lg:-left-20 lg:bottom-[-11rem] lg:w-[30rem] xl:-left-28 xl:w-[34rem]'
          />
          <img
            src={servicesCat}
            alt='Cat services'
            className='pointer-events-none absolute -right-8 bottom-[-1.5rem] z-20 hidden w-72 object-contain drop-shadow-[0_24px_40px_rgba(255,79,176,0.22)] md:block lg:-right-16 lg:bottom-[-10.7rem] lg:w-[24rem] xl:-right-24 xl:w-[28rem]'
          />

          <div className='relative z-10 mx-auto max-w-2xl'>
            <p className='text-sm font-bold uppercase tracking-[0.28em] text-white/70'>
              {t('services.subtitle')}
            </p>
            <h2 className='mt-4 font-body text-4xl font-extrabold tracking-[-0.05em] text-white md:text-5xl'>
              {t('services.title')}
            </h2>
            <p className='mx-auto mt-4 max-w-2xl text-base leading-7 text-white/80'>
              {t('services.lead')}
            </p>
          </div>
        </div>

        <div className='mt-12 grid gap-7 md:grid-cols-2'>
          {serviceKeys.map((s, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/80 bg-gradient-to-br ${s.tint} p-8 shadow-[0_18px_45px_rgba(123,92,229,0.08)] transition-transform duration-300 hover:-translate-y-1`}
            >
              <div className='absolute right-5 top-5 h-24 w-24 rounded-full bg-white/40 blur-2xl' />
              <div className='relative z-10 flex h-full flex-col gap-6'>
                <div className='flex items-start justify-between gap-4'>
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full ${s.iconBg} ${s.iconColor}`}
                  >
                    <s.icon size={28} strokeWidth={2.1} />
                  </div>
                  <span className='rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-[#7b5ce5]'>
                    From {s.price}
                  </span>
                </div>

                <div>
                  <h3 className='font-body text-2xl font-extrabold tracking-[-0.04em] text-[#7b5ce5]'>
                    {t(s.titleKey)}
                  </h3>
                  <p className='mt-3 max-w-[42ch] text-base leading-7 text-[#676278]'>
                    {t(s.descKey)}
                  </p>
                </div>

                <div className='mt-auto'>
                  <a
                    href={getServiceWA(t(s.titleKey))}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 rounded-full bg-[#ff4fb0] px-6 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(255,79,176,0.2)] transition-transform duration-200 hover:-translate-y-0.5'
                  >
                    {t('services.getService')}
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
