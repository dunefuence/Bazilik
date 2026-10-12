import { useState, useRef, useEffect, useCallback } from 'react';
import { MENU_CATEGORIES } from '@/data/menu';
import type { Dish } from '@/data/menu';
import { useReveal } from '@/hooks/useReveal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function DishCard({ dish, index }: { dish: Dish; index: number }) {
  const hasPrice = dish.price.trim() !== '';
  const hasWeight = dish.weight.trim() !== '';
  const hasDescription = dish.description.trim() !== '';
  const num = String(index + 1).padStart(2, '0');

  return (
    <article
      className="group flex h-full w-[280px] shrink-0 snap-start flex-col justify-between border-l border-basil-cream/10 pl-6 pr-2 sm:w-[340px] sm:pl-8"
    >
      {/* Top — number + image placeholder */}
      <div>
        <div className="mb-6 flex items-center justify-between">
          <span className="font-serif text-sm text-basil-gold/60 tabular-nums">
            {num}
          </span>
          {hasWeight && (
            <span className="text-xs font-medium uppercase tracking-wider text-basil-cream/25">
              {dish.weight}
            </span>
          )}
        </div>

        {/* Image area — placeholder with elegant typographic treatment */}
        <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-sm bg-basil-deep/40">
          {dish.image ? (
            <img
              src={dish.image}
              alt={dish.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center">
              <span className="font-serif text-6xl font-normal text-basil-cream/8 transition-colors duration-500 group-hover:text-basil-cream/12">
                {num}
              </span>
            </div>
          )}
          {/* Gold accent line on hover */}
          <div className="absolute bottom-0 left-0 h-px w-0 bg-basil-gold transition-all duration-500 group-hover:w-full" />
        </div>
      </div>

      {/* Middle — name and description */}
      <div className="flex-1">
        <h3 className="font-serif text-lg font-normal leading-snug text-basil-cream transition-colors duration-300 group-hover:text-white sm:text-xl">
          {dish.name}
        </h3>
        {hasDescription && (
          <p className="mt-3 text-sm leading-relaxed text-basil-cream/40">
            {dish.description}
          </p>
        )}
      </div>

      {/* Bottom — price */}
      <div className="mt-5 flex items-center gap-3">
        {hasPrice ? (
          <span className="font-serif text-lg text-basil-gold sm:text-xl">
            {dish.price}
          </span>
        ) : (
          <span className="text-xs font-medium uppercase tracking-wider text-basil-cream/20">
            Цена по запросу
          </span>
        )}
      </div>
    </article>
  );
}

export default function MenuSection() {
  const ref = useReveal<HTMLElement>();
  const [active, setActive] = useState(MENU_CATEGORIES[0].id);
  const navRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const activeCategory = MENU_CATEGORIES.find((c) => c.id === active)!;
  const dishCount = activeCategory.dishes.length;

  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateScrollState();
  }, [active, updateScrollState]);

  useEffect(() => {
    if (!navRef.current) return;
    const activeBtn = navRef.current.querySelector('[data-active="true"]') as HTMLElement | null;
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [active]);

  const scrollByCards = (direction: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 280 + 24;
    el.scrollBy({ left: direction * cardWidth * 2, behavior: 'smooth' });
  };

  const handleCategoryClick = (catId: string) => {
    setActive(catId);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

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

        {/* Active category — horizontal gallery */}
        <div key={active} className="menu-category-fade-in">
          {/* Category header with scroll controls */}
          <div className="mb-8 flex items-end justify-between gap-6 sm:mb-10">
            <div>
              <h3 className="font-serif text-2xl font-normal text-basil-cream sm:text-3xl md:text-4xl">
                {activeCategory.label}
              </h3>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-px w-12 bg-basil-gold/40" />
                <span className="text-xs font-medium uppercase tracking-wider text-basil-cream/30">
                  {dishCount} {dishCount === 1 ? 'позиция' : dishCount < 5 ? 'позиции' : 'позиций'}
                </span>
              </div>
            </div>

            {/* Scroll arrows — desktop only */}
            <div className="hidden gap-2 sm:flex">
              <button
                onClick={() => scrollByCards(-1)}
                disabled={!canScrollLeft}
                aria-label="Прокрутить влево"
                className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all ${
                  canScrollLeft
                    ? 'border-basil-cream/20 text-basil-cream/70 hover:border-basil-gold/50 hover:text-basil-gold'
                    : 'border-basil-cream/8 text-basil-cream/20'
                }`}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scrollByCards(1)}
                disabled={!canScrollRight}
                aria-label="Прокрутить вправо"
                className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all ${
                  canScrollRight
                    ? 'border-basil-cream/20 text-basil-cream/70 hover:border-basil-gold/50 hover:text-basil-gold'
                    : 'border-basil-cream/8 text-basil-cream/20'
                }`}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Horizontal scroll gallery */}
          <div className="relative">
            <div
              ref={scrollRef}
              onScroll={updateScrollState}
              className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 pl-1 pr-6 [scrollbar-width:thin] [scrollbar-color:var(--basil-mid)_transparent] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-basil-mid/60"
            >
              {activeCategory.dishes.map((dish, i) => (
                <DishCard key={dish.id} dish={dish} index={i} />
              ))}

              {/* End spacer */}
              <div className="w-1 shrink-0" />
            </div>

            {/* Edge fade indicators */}
            {canScrollLeft && (
              <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-basil-graphite to-transparent" />
            )}
            {canScrollRight && (
              <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-basil-graphite to-transparent" />
            )}
          </div>
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
