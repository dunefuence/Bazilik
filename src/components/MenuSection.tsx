import { useState } from 'react';
import { MENU_CATEGORIES } from '@/data/menu';
import { useReveal } from '@/hooks/useReveal';

export default function MenuSection() {
  const ref = useReveal<HTMLElement>();
  const [active, setActive] = useState(MENU_CATEGORIES[0].id);

  const category = MENU_CATEGORIES.find((c) => c.id === active)!;

  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} id="menu" className="bg-basil-graphite py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header — left aligned, editorial */}
        <div className="reveal mb-10 sm:mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-basil-herb">
            Меню
          </p>
          <h2 className="mt-4 font-serif text-4xl font-normal text-basil-cream sm:text-5xl md:text-6xl">
            Кухня и бар
          </h2>
        </div>

        {/* Category navigation — horizontal scroll on mobile, wrap on desktop */}
        <div className="reveal reveal-delay-1 mb-10 sm:mb-14">
          {/* Mobile: scrollable row */}
          <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-all ${
                  active === cat.id
                    ? 'bg-basil-herb text-white'
                    : 'bg-basil-cream/5 text-basil-cream/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Desktop: centered wrap */}
          <div className="hidden flex-wrap justify-center gap-2 sm:flex">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`rounded-full px-6 py-2.5 text-sm font-medium tracking-wide transition-all ${
                  active === cat.id
                    ? 'bg-basil-herb text-white'
                    : 'bg-basil-cream/5 text-basil-cream/60 hover:bg-basil-cream/10 hover:text-basil-cream/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dishes — editorial list layout */}
        <div
          key={active}
          className="menu-fade-in grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {category.dishes.map((dish) => (
            <article key={dish.name} className="group flex flex-col">
              {/* Image */}
              <div className="aspect-[5/4] overflow-hidden rounded-lg">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="mt-4 flex flex-1 flex-col">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-xl font-normal text-basil-cream">
                    {dish.name}
                  </h3>
                  <span className="font-serif text-lg text-basil-cream/80">
                    {dish.price}
                  </span>
                </div>
                {/* Dotted separator */}
                <div className="mt-2 flex-1 border-b border-dotted border-basil-cream/15" />
                <p className="mt-2.5 text-sm leading-relaxed text-basil-cream/50">
                  {dish.description}
                </p>
                <span className="mt-3 text-xs font-medium uppercase tracking-wider text-basil-cream/35">
                  {dish.weight}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal mt-14 text-center sm:mt-20">
          <button
            onClick={scrollToBooking}
            className="rounded-full border border-basil-cream/25 px-8 py-4 text-sm font-semibold tracking-wide text-basil-cream transition-all hover:border-basil-cream/50 hover:bg-basil-cream/5"
          >
            Забронировать столик
          </button>
        </div>
      </div>
    </section>
  );
}
