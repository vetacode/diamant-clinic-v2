import groomer1 from '@/assets/groomer1.jpg';
import trainer1 from '@/assets/trainer1.jpg';
import vet1 from '@/assets/vet1.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const team = [
  {
    name: 'Sarah Amelia',
    role: 'Groomer',
    img: groomer1,
    accent: 'bg-[#ff4fb0]',
    glow: 'bg-[#ff4fb0]/15',
  },
  {
    name: 'Diana Putri',
    role: 'Trainer',
    img: trainer1,
    accent: 'bg-[#7b5ce5]',
    glow: 'bg-[#7b5ce5]/15',
  },
  {
    name: 'Rachel Karina',
    role: 'Veterinarian',
    img: vet1,
    accent: 'bg-[#ffb521]',
    glow: 'bg-[#ffb521]/20',
  },
];

const TeamSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id='pet-care'
      className='relative overflow-hidden bg-[linear-gradient(180deg,#fff7fc_0%,#fffefe_100%)] py-24'
    >
      <div className='absolute left-1/2 top-10 h-56 w-56 -translate-x-1/2 rounded-full bg-[#eddfff]/25 blur-3xl' />

      <div className='relative mx-auto max-w-7xl px-6'>
        <div className='mx-auto max-w-2xl text-center'>
          <p className='text-sm font-bold uppercase tracking-[0.28em] text-[#ff4fb0]'>
            {t('team.subtitle')}
          </p>
          <h2 className='mt-4 font-body text-4xl font-extrabold tracking-[-0.05em] text-[#7b5ce5] md:text-5xl'>
            {t('team.title')}
          </h2>
          <p className='mt-4 text-base leading-7 text-[#6b6780]'>
            {t('team.desc')}
          </p>
        </div>

        <div className='mt-12 grid gap-8 md:grid-cols-3'>
          {team.map((member, i) => (
            <div
              key={i}
              className='group relative rounded-[2.5rem] border border-white/80 bg-white/70 p-4 shadow-[0_20px_50px_rgba(123,92,229,0.08)] backdrop-blur-sm'
            >
              <div className={`absolute right-6 top-6 h-24 w-24 rounded-full ${member.glow} blur-2xl`} />
              <div className='relative overflow-hidden rounded-[2rem]'>
                <img
                  src={member.img}
                  alt={member.name}
                  className='aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105'
                />
              </div>
              <div className='relative -mt-10 px-4 pb-2'>
                <div className='rounded-[1.75rem] border border-white/80 bg-white/90 px-6 py-4 text-center shadow-[0_16px_35px_rgba(123,92,229,0.12)] backdrop-blur-sm'>
                  <div className={`mx-auto mb-3 h-2.5 w-16 rounded-full ${member.accent}`} />
                  <p className='text-sm font-medium text-[#8a86a0]'>{member.name}</p>
                  <p className='font-body text-xl font-extrabold tracking-[-0.04em] text-[#7b5ce5]'>
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
