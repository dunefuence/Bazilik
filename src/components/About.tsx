import { RESTAURANT } from '@/data/site';
import { ABOUT_IMAGES } from '@/data/menu';
import { useReveal } from '@/hooks/useReveal';

const FEATURES = [
  'Гастрономичная кухня',
  'Авторские напитки',
  'Уютная атмосфера',
  'Банкеты и мероприятия',
];

export default function About() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="about" className="bg-basil-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="reveal">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-basil-herb">
              О ресторане
            </p>
            <h2 className="text-balance font-serif text-4xl leading-tight text-basil-graphite sm:text-5xl md:text-6xl">
              Место, где можно<br />никуда не спешить.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-basil-graphite/70">
              Базилик — {RESTAURANT.tagline.toLowerCase()} в Тамбове для встреч с близкими,
              деловых ужинов, семейных событий и просто хорошего вечера.
            </p>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {FEATURES.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2 text-sm font-medium text-basil-graphite/80"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-basil-herb" />
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-2 grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={ABOUT_IMAGES.interior}
                alt="Интерьер ресторана"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl">
              <img
                src={ABOUT_IMAGES.food}
                alt="Блюдо ресторана"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="-mt-8 overflow-hidden rounded-2xl">
              <img
                src={ABOUT_IMAGES.bar}
                alt="Бар ресторана"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-2xl">
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
    </section>
  );
}
