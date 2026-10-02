import { useState, useRef, useEffect } from 'react';
import { MENU_CATEGORIES } from '@/data/menu';
import type { Dish } from '@/data/menu';
import { useReveal } from '@/hooks/useReveal';

function DishRow({ dish }: { dish: Dish }) {
  const hasPrice = dish.price.trim() !== '';
  const hasWeight = dish.weight.trim() !== '';
  const hasDescription = dish.description.trim() !== '';

  return (
    <article className="group py-5 first:pt-0 last:pb-0">
      <div className="flex items-baseline gap-3">
        <h3 className="font-serif text-lg font-normal leading-snug text-basil-cream transition-colors group-hover:text-white sm:text-xl">
          {dish.name}
        </h3>
        {hasPrice && (
          <>
            <span className="hidden h-px flex-1 translate-y-[-2px] bg-basil-cream/10 sm:block" />
            <span className="shrink-0 font-serif text-lg text-basil-gold sm:text-xl">
              {dish.price}
            </span>
          </>
        )}
      </div>

      {hasDescription && (
        <p className="mt-1.5 max-w-prose text-sm leading-relaxed text-basil-cream/40">
          {dish.description}
        </p>
      )}

      {hasWeight && (
        <p className="mt-1 text-xs font-medium uppercase tracking-wider text-basil-cream/25">
          {dish.weight}
        </p>
      )}
    </article>
  );
}

export default function MenuSection() {
  const ref = useReveal<HTMLElement>();
  const [active, setActive] = useState(MENU_CATEGORIES[0].id);
  const navRef = useRef<HTMLDivElement>(null);

  const activeCategory = MENU_CATEGORIES.find((c) => c.id === active)!;

  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll active nav button into view on mobile
  useEffect(() => {
    if (!navRef.current) return;
    const activeBtn = navRef.current.querySelector('[data-active="true"]') as HTMLElement | null;
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [active]);

  const handleCategoryClick = (catId: string) => {
    setActive(catId);
  };

  const isCompactCategory = (catId: string) =>
    catId === 'sauces' || catId === 'butter' || catId === 'bread';
  const isGrillCategory = (catId: string) => catId === 'grill';

  return (
    <section ref={ref} id="menu" className="bg-basil-graphite py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header — editorial */}
        <div className="reveal mb-10 sm:mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-basil-herb">
            Меню
          </p>
          <h2 className="mt-4 font-serif text-4xl font-normal text-basil-cream sm:text-5xl md:text-6xl">
            Кухня и бар
          </h2>
        </div>

        {/* Typographic category navigation — sticky */}
        <div className="sticky top-16 z-30 -mx-5 mb-12 border-y border-basil-cream/8 bg-basil-graphite/95 px-5 py-4 backdrop-blur-md sm:top-20 sm:rounded-none sm:border sm:border-basil-cream/8">
          {/* Mobile: scrollable row */}
          <div
            ref={navRef}
            className="-mx-5 flex gap-5 overflow-x-auto px-5 sm:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                data-active={active === cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`shrink-0 py-1 text-sm font-medium tracking-wide transition-colors ${
                  active === cat.id
                    ? 'text-basil-cream'
                    : 'text-basil-cream/35 hover:text-basil-cream/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Desktop: centered typographic nav */}
          <nav className="hidden flex-wrap justify-center gap-x-6 gap-y-2 sm:flex">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`relative py-1 text-sm font-medium tracking-wide transition-colors ${
                  active === cat.id
                    ? 'text-basil-cream'
                    : 'text-basil-cream/35 hover:text-basil-cream/60'
                }`}
              >
                {cat.label}
                {active === cat.id && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-basil-gold" />
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Active category content — only one category at a time */}
        <div key={active} className="menu-category-fade-in">
          {/* Category title */}
          <div className="mb-8 sm:mb-10">
            <h3 className="font-serif text-2xl font-normal text-basil-cream sm:text-3xl md:text-4xl">
              {activeCategory.label}
            </h3>
            <div className="mt-4 h-px w-12 bg-basil-gold/40" />
          </div>

          {/* Dishes grid */}
          {isCompactCategory(active) ? (
            <div className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
              {activeCategory.dishes.map((dish) => (
                <DishRow key={dish.id} dish={dish} />
              ))}
            </div>
          ) : isGrillCategory(active) ? (
            <div className="grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
              {activeCategory.dishes.map((dish) => (
                <DishRow key={dish.id} dish={dish} />
              ))}
            </div>
          ) : (
            <div className="grid gap-x-12 sm:grid-cols-2">
              {activeCategory.dishes.map((dish) => (
                <DishRow key={dish.id} dish={dish} />
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center sm:mt-24">
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
