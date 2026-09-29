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
    <section ref={ref} id="menu" className="bg-basil-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-basil-herb">
            Меню
          </p>
          <h2 className="font-serif text-4xl text-basil-graphite sm:text-5xl md:text-6xl">
            Кухня и бар
          </h2>
        </div>

        {/* Category tabs */}
        <div className="reveal reveal-delay-1 mb-12 flex flex-wrap justify-center gap-2 sm:gap-3">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-all sm:px-6 ${
                active === cat.id
                  ? 'bg-basil-deep text-basil-cream'
                  : 'bg-basil-deep/5 text-basil-graphite/70 hover:bg-basil-deep/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dishes grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {category.dishes.map((dish) => (
            <article
              key={dish.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl text-basil-graphite">{dish.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-basil-graphite/60">
                  {dish.description}
                </p>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-basil-graphite/50">{dish.weight}</span>
                  <span className="font-serif text-lg font-semibold text-basil-deep">
                    {dish.price}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <button
            onClick={scrollToBooking}
            className="rounded-full border border-basil-deep px-8 py-4 text-sm font-semibold tracking-wide text-basil-deep transition-all hover:bg-basil-deep hover:text-basil-cream"
          >
            Забронировать столик
          </button>
        </div>
      </div>
    </section>
  );
}
