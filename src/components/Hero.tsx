import { RESTAURANT } from '@/data/site';
import { HERO_IMAGE } from '@/data/menu';

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Атмосферный интерьер ресторана Базилик"
          className="slow-zoom h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        {/* Directional gradient: darker on left where text sits, fading right */}
        <div className="absolute inset-0 bg-gradient-to-r from-basil-deep/85 via-basil-deep/45 to-basil-deep/10" />
        {/* Subtle bottom gradient for scroll indicator legibility */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-basil-deep/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="max-w-lg md:max-w-xl">
          {/* Eyebrow */}
          <p className="hero-fade text-xs font-medium uppercase tracking-[0.25em] text-basil-cream/50">
            {RESTAURANT.tagline} в Тамбове
          </p>

          {/* Thin divider */}
          <div className="hero-fade hero-fade-2 mt-5 h-px w-10 bg-basil-cream/25" />

          {/* H1 */}
          <h1 className="hero-fade hero-fade-2 mt-5 font-serif text-5xl font-normal leading-[1.05] tracking-[0.08em] text-basil-cream sm:text-7xl md:text-8xl lg:text-8xl">
            {RESTAURANT.name}
          </h1>

          {/* Subtitle */}
          <p className="hero-fade hero-fade-3 mt-6 max-w-md text-balance text-lg font-light leading-relaxed text-basil-cream/80 sm:text-xl">
            Место для хорошей еды, долгих разговоров и вечеров, которые хочется продлить.
          </p>

          {/* CTAs */}
          <div className="hero-fade hero-fade-4 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={() => scrollTo('#booking')}
              className="rounded-full bg-basil-herb px-9 py-4 text-sm font-semibold tracking-wide text-white transition-all hover:bg-basil-mid hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-basil-herb/60 focus-visible:ring-offset-2 focus-visible:ring-offset-basil-deep"
            >
              Забронировать стол
            </button>
            <button
              onClick={() => scrollTo('#banquets')}
              className="rounded-full border border-basil-cream/25 bg-basil-deep/30 px-9 py-4 text-sm font-medium tracking-wide text-basil-cream/90 backdrop-blur-sm transition-all hover:border-basil-cream/50 hover:bg-basil-deep/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-basil-cream/40 focus-visible:ring-offset-2 focus-visible:ring-offset-basil-deep"
            >
              Банкеты и мероприятия
            </button>
          </div>

          {/* Hours — natural line breaks */}
          <div className="hero-fade hero-fade-4 mt-10 space-y-1.5 text-sm text-basil-cream/55">
            <p>{RESTAURANT.city} · {RESTAURANT.address}</p>
            <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
              {RESTAURANT.hours.map((h) => (
                <p key={h.days}>
                  {h.days} · {h.time}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — minimal, non-pulsing */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 sm:block">
        <div className="scroll-line h-14 w-px bg-basil-cream/15">
          <div className="scroll-line-segment" />
        </div>
      </div>
    </section>
  );
}
