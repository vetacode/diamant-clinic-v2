import heroDog from '@/assets/hero-dog.png';
import heroVet from '@/assets/hero-vet.png';
import { Heart, PawPrint, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const serviceCards = [
  {
    key: 'vet',
    titleKey: 'hero.vetServices',
    descKey: 'hero.vetDesc',
    Icon: PawPrint,
  },
  {
    key: 'care',
    titleKey: 'hero.specialCare',
    descKey: 'hero.specialDesc',
    Icon: Heart,
  },
];

const stats = [
  { num: '3500+', labelKey: 'hero.happyPets', accent: 'text-[#ff4fb0]' },
  { num: '2500+', labelKey: 'hero.happyCustomers', accent: 'text-[#7b5ce5]' },
  { num: '150+', labelKey: 'hero.awards', accent: 'text-[#ff4fb0]' },
];

const frameShape = {
  clipPath: 'polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)',
};

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id='home'
      className='relative isolate min-h-screen overflow-hidden bg-[#fff9fd]'
    >
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(123,92,229,0.18),transparent_32%),radial-gradient(circle_at_left,_rgba(255,211,84,0.2),transparent_24%),radial-gradient(circle_at_right,_rgba(255,79,176,0.18),transparent_28%),linear-gradient(180deg,#fffefe_0%,#fff7fc_65%,#fff4fb_100%)]' />
        <div className='absolute inset-0 bg-white/70' />
        <div className='absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-[#eddfff]/40 blur-3xl' />
      </div>

      <div className='relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-10 pt-28 md:pt-32'>
        <div className='grid items-center gap-10 xl:grid-cols-[240px_minmax(0,1fr)_240px]'>
          <div className='hidden xl:flex justify-center'>
            <div className='relative w-full max-w-[270px]'>
              <div
                className='absolute inset-x-0 bottom-2 top-16 bg-[#ffd84f]'
                style={frameShape}
              />
              <img
                src={heroDog}
                alt='Happy dog'
                className='relative z-10 mx-auto w-full max-w-[240px] object-contain drop-shadow-[0_18px_30px_rgba(180,117,18,0.18)]'
              />
            </div>
          </div>

          <div className='mx-auto w-full max-w-4xl text-center'>
            <h1 className='font-body text-4xl font-extrabold leading-[1.02] tracking-[-0.05em] text-[#7b5ce5] sm:text-5xl lg:text-6xl xl:text-[4.75rem]'>
              <span className='block'>
                {t('hero.title1')} {t('hero.title2')}
              </span>
              <span className='block'>{t('hero.title3')}</span>
            </h1>

            <div className='mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row'>
              <a
                href='#services'
                className='inline-flex min-w-[170px] items-center justify-center rounded-full bg-[#ff4fb0] px-8 py-3.5 text-base font-bold text-white shadow-[0_14px_35px_rgba(255,79,176,0.25)] transition-transform duration-200 hover:-translate-y-0.5'
              >
                {t('hero.ourServices')}
              </a>
              <a
                href='#about'
                className='inline-flex items-center gap-3 rounded-full px-3 py-2 text-base font-semibold text-[#ff4fb0] transition-opacity duration-200 hover:opacity-80'
              >
                <span className='inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#ffd2ea] bg-[#fff0f8] text-[#ff4fb0]'>
                  <Play size={18} className='ml-0.5 fill-current' />
                </span>
                {t('hero.howTo')}
              </a>
            </div>

            <div className='mt-10 grid gap-4 lg:grid-cols-2'>
              {serviceCards.map(({ key, titleKey, descKey, Icon }) => (
                <div
                  key={key}
                  className='flex items-center gap-4 rounded-[2rem] border border-[#a88df8] bg-white/80 px-5 py-5 text-left shadow-[0_12px_30px_rgba(123,92,229,0.08)] backdrop-blur-sm sm:px-6'
                >
                  <div className='flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#efe8ff] text-[#8b6bf1]'>
                    <Icon size={28} strokeWidth={2.1} />
                  </div>
                  <div>
                    <p className='font-body text-xl font-extrabold tracking-[-0.03em] text-[#7b5ce5]'>
                      {t(titleKey)}
                    </p>
                    <p className='mt-1 max-w-[22ch] text-base leading-6 text-[#6b677a]'>
                      {t(descKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='hidden xl:flex justify-center'>
            <div className='relative w-full max-w-[270px]'>
              <div
                className='absolute inset-x-0 bottom-2 top-16 bg-[#7b5ce5]'
                style={frameShape}
              />
              <img
                src={heroVet}
                alt='Veterinarian with pet'
                className='relative z-10 mx-auto w-full max-w-[250px] object-contain drop-shadow-[0_18px_30px_rgba(123,92,229,0.2)]'
              />
            </div>
          </div>
        </div>

        <div className='mt-10 rounded-[2rem] bg-[#f4efff]/90 p-6 shadow-[0_20px_50px_rgba(123,92,229,0.08)] backdrop-blur-sm md:mt-14 md:px-8 md:py-7'>
          <div className='grid gap-6 md:grid-cols-3 md:gap-0'>
            {stats.map((stat, i) => (
              <div key={stat.labelKey} className='relative text-center'>
                <p className={`font-body text-4xl font-extrabold tracking-[-0.04em] ${stat.accent}`}>
                  {stat.num}
                </p>
                <p className='mt-1 text-lg font-medium leading-7 text-[#676278]'>
                  {t(stat.labelKey)}
                </p>
                {i < stats.length - 1 && (
                  <div className='absolute right-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-[#ff87cb]/70 md:block' />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
