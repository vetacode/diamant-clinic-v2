import aboutImage from '@/assets/about-image.png';
import { HeartHandshake, BadgeCheck, Clock3, MessageCircleHeart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const badgeKeys = [
  { key: 'about.badge1', Icon: HeartHandshake, tint: 'bg-[#fff1f8] text-[#ff4fb0]' },
  { key: 'about.badge2', Icon: BadgeCheck, tint: 'bg-[#f1ebff] text-[#7b5ce5]' },
  { key: 'about.badge3', Icon: Clock3, tint: 'bg-[#fff6df] text-[#f0a21e]' },
  { key: 'about.badge4', Icon: MessageCircleHeart, tint: 'bg-[#eef7ff] text-[#5a88ff]' },
];

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id='about'
      className='relative overflow-hidden bg-[linear-gradient(180deg,#fffefe_0%,#fff7fc_100%)] py-24'
    >
      <div className='absolute right-0 top-0 h-56 w-56 rounded-full bg-[#eddfff]/35 blur-3xl' />
      <div className='absolute left-0 bottom-0 h-48 w-48 rounded-full bg-[#ffd84f]/15 blur-3xl' />

      <div className='relative mx-auto max-w-7xl px-6'>
        <div className='grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16'>
          <div className='relative'>
            <div className='absolute left-6 top-10 h-[82%] w-[82%] rounded-[2.75rem] bg-[#ffe17a]' />
            <div className='absolute right-2 top-0 h-[84%] w-[84%] rounded-[2.75rem] bg-[#7b5ce5]' />
            <div className='relative overflow-hidden rounded-[2.75rem] border border-white/80 bg-[linear-gradient(135deg,#fff4fb,#f4ecff)] p-4 shadow-[0_24px_60px_rgba(123,92,229,0.12)]'>
              <img
                src={aboutImage}
                alt='Our team'
                className='h-full w-full rounded-[2.1rem] object-cover'
              />
            </div>
          </div>

          <div className='rounded-[2.5rem] border border-white/80 bg-white/75 p-8 shadow-[0_18px_45px_rgba(123,92,229,0.08)] backdrop-blur-sm md:p-10'>
            <p className='text-sm font-bold uppercase tracking-[0.28em] text-[#ff4fb0]'>
              {t('about.subtitle')}
            </p>
            <h2 className='mt-4 font-body text-4xl font-extrabold tracking-[-0.05em] text-[#7b5ce5] md:text-5xl'>
              {t('about.title')}
            </h2>
            <p className='mt-5 text-base leading-8 text-[#666176]'>
              {t('about.desc')}
            </p>

            <div className='mt-8 grid gap-4 sm:grid-cols-2'>
              {badgeKeys.map(({ key, Icon, tint }) => (
                <div
                  key={key}
                  className='flex items-center gap-3 rounded-[1.75rem] border border-[#f2ebff] bg-[#fffdfd] px-5 py-4 shadow-[0_10px_25px_rgba(123,92,229,0.05)]'
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full ${tint}`}>
                    <Icon size={20} strokeWidth={2.1} />
                  </div>
                  <p className='text-sm font-bold leading-6 text-[#6b6780]'>
                    {t(key)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
