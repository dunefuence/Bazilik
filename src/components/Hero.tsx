import { RESTAURANT } from '@/data/site';
import { HERO_IMAGE } from '@/data/menu';

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Атмосферный интерьер ресторана Базилик"
          className="slow-zoom h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-basil-deep/70 via-basil-deep/40 to-basil-deep/80" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        <p className="hero-fade mb-4 text-sm font-medium uppercase tracking-[0.3em] text-basil-cream/70">
          {RESTAURANT.tagline} в Тамбове
        </p>
        <h1 className="hero-fade hero-fade-2 font-serif text-6xl font-semibold tracking-[0.12em] text-basil-cream sm:text-8xl md:text-9xl">
          {RESTAURANT.name}
        </h1>
        <p className="hero-fade hero-fade-3 mt-6 max-w-xl text-balance text-lg text-basil-cream/85 sm:text-xl">
          Место для хорошей еды, долгих разговоров и вечеров, которые хочется продлить.
        </p>

        <div className="hero-fade hero-fade-4 mt-10 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => scrollTo('#booking')}
            className="rounded-full bg-basil-herb px-8 py-4 text-sm font-semibold tracking-wide text-white transition-all hover:bg-basil-mid hover:shadow-xl"
          >
            Забронировать стол
          </button>
          <button
            onClick={() => scrollTo('#banquets')}
            className="rounded-full border border-basil-cream/40 px-8 py-4 text-sm font-semibold tracking-wide text-basil-cream transition-all hover:border-basil-cream hover:bg-basil-cream/10"
          >
            Банкеты и мероприятия
          </button>
        </div>

        <div className="hero-fade hero-fade-4 mt-12 text-sm text-basil-cream/60">
          <p>{RESTAURANT.city} • {RESTAURANT.address}</p>
          <p className="mt-1">
            {RESTAURANT.hours.map((h) => `${h.time} ${h.days}`).join('  ·  ')}
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="h-12 w-px animate-pulse bg-basil-cream/30" />
      </div>
    </section>
  );
}
