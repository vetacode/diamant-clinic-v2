import { Send } from 'lucide-react';
import logo from '@/assets/logo.png';
import { useLanguage } from '@/contexts/LanguageContext';

const WA_NUMBER = '6281384072641';

const FooterSection = () => {
  const { lang, t } = useLanguage();

  const waUrl = (context: string) => {
    const text =
      lang === 'id'
        ? `Halo Diamant Pet Care, ${context}`
        : `Hello Diamant Pet Care, ${context}`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <footer
      id='contact'
      className='relative overflow-hidden bg-[linear-gradient(180deg,#fffefe_0%,#f7f0ff_100%)] pt-8'
    >
      <div className='absolute left-0 top-16 h-48 w-48 rounded-full bg-[#ff4fb0]/8 blur-3xl' />
      <div className='absolute right-0 bottom-20 h-56 w-56 rounded-full bg-[#7b5ce5]/12 blur-3xl' />

      <div className='relative mx-auto max-w-7xl px-6 pb-10'>
        <div className='overflow-hidden rounded-[2.75rem] border border-white/80 bg-white/75 p-6 shadow-[0_24px_60px_rgba(123,92,229,0.12)] backdrop-blur-sm md:p-8'>
          <div className='mb-10'>
            <div className='mb-4 flex items-center justify-between gap-4'>
              <h4 className='font-body text-2xl font-extrabold tracking-[-0.04em] text-[#7b5ce5]'>
                {t('footer.location')}
              </h4>
              <span className='rounded-full bg-[#fff1f8] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#ff4fb0]'>
                {t('footer.visitBadge')}
              </span>
            </div>
            <div className='overflow-hidden rounded-[2rem] border border-[#efe5ff]'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.780744587491!2d106.88922327580022!3d-6.422211193568759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ebec65e0bde1%3A0x78a815d3f802c42b!2sTelur%20Cerdas!5e0!3m2!1sen!2sid!4v1773917705913!5m2!1sen!2sid'
                width='100%'
                height='350'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='Diamant Pet Care Location'
              />
            </div>
          </div>

          <div className='grid gap-10 md:grid-cols-2 xl:grid-cols-4'>
            <div>
              <div className='mb-4 flex items-center gap-3'>
                <div className='flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#fff0f8,#efe8ff)]'>
                  <img
                    src={logo}
                    alt='Diamant'
                    className='h-8 w-8 object-contain'
                  />
                </div>
                <span className='font-body text-xl font-extrabold tracking-[-0.04em] text-[#7b5ce5]'>
                  Diamant<span className='text-[#ff4fb0]'>Pets</span>
                </span>
              </div>
              <p className='text-sm leading-7 text-[#686379]'>
                {t('footer.desc')}
              </p>
            </div>

            <div>
              <h4 className='font-body text-xl font-extrabold tracking-[-0.04em] text-[#7b5ce5]'>
                {t('footer.explore')}
              </h4>
              <ul className='mt-4 space-y-3'>
                {[
                  { key: 'footer.aboutUs', href: '#about' },
                  { key: 'footer.services', href: '#services' },
                  { key: 'footer.ourTeam', href: '#pet-care' },
                  { key: 'footer.gallery', href: '#home' },
                ].map((item) => (
                  <li key={item.key}>
                    <a
                      href={item.href}
                      className='text-sm font-medium text-[#686379] transition-colors duration-200 hover:text-[#ff4fb0]'
                    >
                      {t(item.key)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className='font-body text-xl font-extrabold tracking-[-0.04em] text-[#7b5ce5]'>
                {t('footer.contactUs')}
              </h4>
              <p className='mt-4 text-sm leading-7 text-[#686379]'>
                {t('footer.contactDesc')}
              </p>
              <a
                href={waUrl(
                  lang === 'id' ? 'saya ingin bertanya.' : 'I have a question.',
                )}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-5 inline-flex items-center rounded-full bg-[#ff4fb0] px-5 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(255,79,176,0.18)] transition-transform duration-200 hover:-translate-y-0.5'
              >
                WhatsApp Us
              </a>
              <p className='mt-5 text-sm text-[#686379]'>
                Jl. Raya Leuwinanggung RT.01
              </p>
              <p className='text-sm text-[#686379]'>Kota Depok, Jawa Barat</p>
            </div>

            <div>
              <h4 className='font-body text-xl font-extrabold tracking-[-0.04em] text-[#7b5ce5]'>
                {t('footer.workingHours')}
              </h4>
              <p className='mt-4 text-sm leading-7 text-[#686379]'>
                <span className='font-bold text-[#7b5ce5]'>
                  {t('footer.monSat')}
                </span>{' '}
                10.00 - 22.00
              </p>
              <p className='text-sm leading-7 text-[#686379]'>
                <span className='font-bold text-[#7b5ce5]'>
                  {t('footer.sunday')}
                </span>{' '}
                {t('footer.closed')}
              </p>
              <p className='mt-6 text-sm font-bold uppercase tracking-[0.18em] text-[#ff4fb0]'>
                {t('footer.newsletter')}
              </p>
              <div className='mt-3 flex items-center rounded-full border border-[#eadcff] bg-[#fffdfd] p-1'>
                <input
                  type='email'
                  placeholder={t('footer.yourEmail')}
                  className='flex-1 bg-transparent px-4 py-2 text-sm text-[#504b60] outline-none placeholder:text-[#a39eb4]'
                />
                <button
                  className='flex h-11 w-11 items-center justify-center rounded-full bg-[#7b5ce5] text-white transition-transform duration-200 hover:-translate-y-0.5'
                  aria-label='Subscribe'
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-6 flex flex-col items-center justify-between gap-3 rounded-[2rem] bg-[#7b5ce5] px-6 py-5 text-center md:flex-row md:text-left'>
          <p className='text-sm text-white/75'>{t('footer.rights')}</p>
          <div className='flex items-center gap-5'>
            {['Facebook', 'Instagram', 'LinkedIn'].map((s) => (
              <a
                key={s}
                href='#'
                className='text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white'
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
