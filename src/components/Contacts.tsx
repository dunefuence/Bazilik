import { Phone, MapPin, Clock, Navigation } from 'lucide-react';
import { RESTAURANT } from '@/data/site';
import { useReveal } from '@/hooks/useReveal';

export default function Contacts() {
  const ref = useReveal<HTMLElement>();

  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const routeUrl = `https://yandex.ru/maps/?rtext=~${encodeURIComponent(RESTAURANT.mapQuery)}`;

  return (
    <section ref={ref} id="contacts" className="bg-basil-deep py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Info */}
          <div className="reveal">
            <h2 className="font-serif text-5xl text-basil-cream sm:text-6xl md:text-7xl">
              {RESTAURANT.name}
            </h2>
            <p className="mt-3 text-basil-cream/60">{RESTAURANT.tagline}</p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={22} className="mt-1 shrink-0 text-basil-herb" />
                <div>
                  <p className="text-sm text-basil-cream/50">Адрес</p>
                  <p className="text-lg text-basil-cream">{RESTAURANT.city}, {RESTAURANT.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={22} className="mt-1 shrink-0 text-basil-herb" />
                <div>
                  <p className="text-sm text-basil-cream/50">Телефон</p>
                  <a
                    href={RESTAURANT.phoneHref}
                    className="text-lg text-basil-cream hover:text-white"
                  >
                    {RESTAURANT.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock size={22} className="mt-1 shrink-0 text-basil-herb" />
                <div>
                  <p className="text-sm text-basil-cream/50">Режим работы</p>
                  {RESTAURANT.hours.map((h) => (
                    <p key={h.days} className="text-lg text-basil-cream">
                      {h.days} {h.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={RESTAURANT.phoneHref}
                className="rounded-full bg-basil-herb px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-basil-mid"
              >
                Позвонить
              </a>
              <a
                href={routeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-basil-cream/30 px-7 py-3.5 text-sm font-semibold text-basil-cream transition-colors hover:border-basil-cream hover:bg-basil-cream/10"
              >
                <Navigation size={16} />
                Построить маршрут
              </a>
              <button
                onClick={scrollToBooking}
                className="rounded-full border border-basil-cream/30 px-7 py-3.5 text-sm font-semibold text-basil-cream transition-colors hover:border-basil-cream hover:bg-basil-cream/10"
              >
                Забронировать стол
              </button>
            </div>
          </div>

          {/* Map */}
          <div className="reveal reveal-delay-2 overflow-hidden rounded-2xl">
            <iframe
              src={RESTAURANT.mapEmbed}
              className="h-full min-h-[400px] w-full"
              style={{ border: 0, filter: 'grayscale(0.3) invert(0.9) hue-rotate(120deg)' }}
              loading="lazy"
              title="Карта — Базилик, Тамбов"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
