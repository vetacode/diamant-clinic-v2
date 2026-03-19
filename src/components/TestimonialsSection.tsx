import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import testimonialImage from '@/assets/testimonial-image.png';

const testimonials = [
  {
    name: 'Rina Susanti',
    role: 'Pet Owner',
    text: 'Diamant Pet Care has been absolutely wonderful with our golden retriever. The team is professional, caring, and always goes above and beyond. Our dog loves visiting them!',
    date: '15-01-2024',
  },
  {
    name: 'Budi Hartono',
    role: 'Cat Enthusiast',
    text: 'The grooming service is exceptional. My cats always come home looking and feeling great. The staff treats every pet like their own. Highly recommended!',
    date: '22-02-2024',
  },
  {
    name: 'Maya Dewi',
    role: 'Pet Parent',
    text: 'From routine check-ups to emergency care, Diamant has been our trusted partner. Their veterinarians are knowledgeable and compassionate. Five stars all the way!',
    date: '08-03-2024',
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  return (
    <section className='relative overflow-hidden bg-[linear-gradient(180deg,#fffefe_0%,#fff5fb_100%)] py-24'>
      <div className='absolute left-0 top-10 h-52 w-52 rounded-full bg-[#ff4fb0]/10 blur-3xl' />
      <div className='absolute right-0 bottom-10 h-56 w-56 rounded-full bg-[#7b5ce5]/12 blur-3xl' />

      <div className='relative mx-auto max-w-7xl px-6'>
        <div className='grid items-center gap-10 overflow-hidden rounded-[2.75rem] border border-white/80 bg-[linear-gradient(135deg,#8c6bf2_0%,#7b5ce5_52%,#ff62ba_100%)] p-6 shadow-[0_24px_60px_rgba(123,92,229,0.18)] lg:grid-cols-[1.1fr_0.9fr] lg:p-10'>
          <div className='rounded-[2.25rem] bg-white/12 p-1 backdrop-blur-sm'>
            <div className='rounded-[2rem] bg-white/95 p-8 shadow-[0_18px_40px_rgba(53,27,122,0.08)]'>
              <div className='flex items-start justify-between gap-4'>
                <div className='flex items-center gap-4'>
                  <div className='flex h-14 w-14 items-center justify-center rounded-full bg-[#f4ecff] text-xl font-extrabold text-[#7b5ce5]'>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className='text-sm font-medium text-[#8e89a2]'>{t.name}</p>
                    <p className='font-body text-xl font-extrabold tracking-[-0.04em] text-[#7b5ce5]'>
                      {t.role}
                    </p>
                  </div>
                </div>
                <span className='font-body text-6xl font-extrabold leading-none text-[#ff9ad3]'>
                  "
                </span>
              </div>

              <p className='mt-6 text-base leading-8 text-[#676278]'>"{t.text}"</p>

              <div className='mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
                <div className='flex items-center gap-1'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className='fill-[#ffb521] text-[#ffb521]'
                    />
                  ))}
                  <span className='ml-3 text-sm font-medium text-[#8e89a2]'>
                    {t.date}
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <button
                    onClick={() =>
                      setCurrent((current - 1 + testimonials.length) % testimonials.length)
                    }
                    className='flex h-11 w-11 items-center justify-center rounded-full border border-[#eadcff] bg-[#fff7fc] text-[#7b5ce5] transition-colors duration-200 hover:bg-[#f3e9ff]'
                    aria-label='Previous'
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => setCurrent((current + 1) % testimonials.length)}
                    className='flex h-11 w-11 items-center justify-center rounded-full bg-[#ff4fb0] text-white shadow-[0_12px_30px_rgba(255,79,176,0.2)] transition-transform duration-200 hover:-translate-y-0.5'
                    aria-label='Next'
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div className='mt-6 flex items-center justify-center gap-2'>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all duration-200 ${
                    i === current ? 'w-10 bg-white' : 'w-2.5 bg-white/35'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className='hidden justify-center lg:flex'>
            <div className='relative w-full max-w-[360px]'>
              <div className='absolute inset-x-6 bottom-3 top-14 rounded-[2.5rem] bg-[#ffe17a]' />
              <div className='absolute inset-x-0 bottom-0 top-0 rounded-[2.5rem] bg-white/14' />
              <img
                src={testimonialImage}
                alt='Happy pet'
                className='relative z-10 mx-auto w-full max-w-[320px] object-contain drop-shadow-[0_20px_35px_rgba(76,42,163,0.25)]'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
