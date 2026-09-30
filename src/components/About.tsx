import { RESTAURANT } from '@/data/site';
import { ABOUT_IMAGES } from '@/data/menu';
import { useReveal } from '@/hooks/useReveal';
import { ArrowRight } from 'lucide-react';

const FEATURES = [
  { label: 'Гастрономичная кухня', n: '01' },
  { label: 'Авторские напитки', n: '02' },
  { label: 'Уютная атмосфера', n: '03' },
  { label: 'Банкеты и мероприятия', n: '04' },
];

export default function About() {
  const ref = useReveal<HTMLElement>();

  const scrollToMenu = () => {
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} id="about" className="bg-basil-cream py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Text column — 5/12 on desktop */}
          <div className="reveal lg:col-span-5 lg:pt-8">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-basil-herb">
              О ресторане
            </p>
            <h2 className="mt-5 text-balance font-serif text-4xl font-normal leading-[1.1] text-basil-graphite sm:text-5xl md:text-6xl">
              Место, где можно<br />никуда не <em className="font-serif italic font-normal">спешить.</em>
            </h2>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-basil-graphite/70">
              Базилик — {RESTAURANT.tagline.toLowerCase()} в Тамбове для встреч с близкими,
              деловых ужинов, семейных событий и просто хорошего вечера.
            </p>

            {/* Features as numbered list */}
            <div className="mt-10 space-y-3.5">
              {FEATURES.map((f) => (
                <div
                  key={f.label}
                  className="flex items-baseline gap-4 border-b border-basil-graphite/8 pb-3.5"
                >
                  <span className="font-serif text-sm text-basil-herb/70 tabular-nums">
                    {f.n}
                  </span>
                  <span className="text-sm font-medium text-basil-graphite/80">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToMenu}
              className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-basil-deep transition-colors hover:text-basil-herb"
            >
              Посмотреть меню
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* Image grid — 7/12 on desktop, asymmetric */}
          <div className="reveal reveal-delay-2 lg:col-span-7">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Large left image */}
              <div className="aspect-[3/4] overflow-hidden rounded-xl sm:rounded-2xl">
                <img
                  src={ABOUT_IMAGES.interior}
                  alt="Интерьер ресторана"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Right column: two stacked images */}
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl">
                  <img
                    src={ABOUT_IMAGES.food}
                    alt="Блюдо ресторана"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl">
                  <img
                    src={ABOUT_IMAGES.bar}
                    alt="Бар ресторана"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Bottom: full-width atmosphere image, offset right */}
              <div className="col-span-2 aspect-[16/7] overflow-hidden rounded-xl sm:rounded-2xl">
                <img
                  src={ABOUT_IMAGES.atmosphere}
                  alt="Атмосфера ресторана"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
