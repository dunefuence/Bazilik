import { RECOMMENDATIONS } from '@/data/menu';
import { useReveal } from '@/hooks/useReveal';
import { ArrowRight } from 'lucide-react';

export default function Recommendations() {
  const ref = useReveal<HTMLElement>();

  const scrollToMenu = () => {
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const featured = RECOMMENDATIONS.find((r) => r.featured)!;
  const others = RECOMMENDATIONS.filter((r) => !r.featured);

  return (
    <section ref={ref} className="bg-basil-deep py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header — left aligned, editorial */}
        <div className="reveal mb-12 sm:mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-basil-herb">
            Выбор команды Базилика
          </p>
          <h2 className="mt-4 font-serif text-4xl font-normal text-basil-cream sm:text-5xl md:text-6xl">
            Стоит <em className="font-serif italic font-normal">попробовать</em>
          </h2>
        </div>

        {/* Featured + secondary grid */}
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Featured — large, left, 7/12 */}
          <div className="reveal reveal-delay-1 lg:col-span-7">
            <article className="group relative h-full overflow-hidden rounded-2xl">
              <div className="aspect-[4/3] overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[480px]">
                <img
                  src={featured.image}
                  alt={featured.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-basil-deep/90 via-basil-deep/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-basil-herb">
                  {featured.category}
                </p>
                <h3 className="mt-2 font-serif text-3xl font-normal text-basil-cream sm:text-4xl">
                  {featured.name}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-basil-cream/70 sm:text-base">
                  {featured.description}
                </p>
                <div className="mt-4 flex items-center gap-4 text-sm">
                  <span className="text-basil-cream/50">{featured.weight}</span>
                  <span className="font-serif text-lg text-basil-cream/90">{featured.price}</span>
                </div>
              </div>
            </article>
          </div>

          {/* Secondary — 3 stacked cards, right, 5/12 */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:col-span-5">
            {others.map((item, i) => (
              <article
                key={item.name}
                className={`reveal reveal-delay-${i + 2} group flex gap-4 overflow-hidden rounded-2xl bg-basil-mid/30 p-3 transition-colors hover:bg-basil-mid/50 sm:gap-5 sm:p-4`}
              >
                {/* Image */}
                <div className="aspect-square w-28 shrink-0 overflow-hidden rounded-xl sm:w-36">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                {/* Content */}
                <div className="flex flex-1 flex-col justify-center py-1">
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-basil-herb/80">
                    {item.category}
                  </p>
                  <h3 className="mt-1 font-serif text-xl font-normal text-basil-cream sm:text-2xl">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-basil-cream/55">
                    {item.description}
                  </p>
                  <div className="mt-2 flex items-center gap-3 text-sm">
                    <span className="text-basil-cream/40">{item.weight}</span>
                    <span className="font-serif text-base text-basil-cream/80">{item.price}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="reveal mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
          <button
            onClick={scrollToMenu}
            className="group inline-flex items-center gap-2 rounded-full bg-basil-herb px-8 py-4 text-sm font-semibold tracking-wide text-white transition-all hover:bg-basil-mid"
          >
            Смотреть всё меню
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
          <button
            onClick={scrollToBooking}
            className="text-sm font-medium tracking-wide text-basil-cream/60 transition-colors hover:text-basil-cream"
          >
            Забронировать стол
          </button>
        </div>
      </div>
    </section>
  );
}
