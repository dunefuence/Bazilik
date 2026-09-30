import { Phone, ArrowRight, MapPin } from 'lucide-react';
import { RESTAURANT } from '@/data/site';
import { useReveal } from '@/hooks/useReveal';

export default function Contacts() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="contacts" className="bg-basil-graphite py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left — editorial heading + contact info */}
          <div className="reveal lg:col-span-7">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-basil-herb">
              Контакты
            </p>
            <div className="mt-5 h-px w-10 bg-basil-cream/15" />
            <h2 className="mt-5 font-serif text-4xl font-normal leading-[1.1] text-basil-cream sm:text-5xl md:text-6xl">
              Будем <em className="italic font-normal">ждать вас</em>
            </h2>

            {/* Address — primary visual focus */}
            <div className="mt-10">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-basil-cream/40">
                Адрес
              </p>
              <p className="mt-2 font-serif text-2xl text-basil-cream sm:text-3xl">
                Тамбов, {RESTAURANT.address}
              </p>
            </div>

            {/* Phone — clickable, large */}
            <div className="mt-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-basil-cream/40">
                Телефон
              </p>
              <a
                href={RESTAURANT.phoneHref}
                className="mt-2 inline-block font-serif text-2xl text-basil-cream transition-colors hover:text-basil-herb sm:text-3xl"
              >
                {RESTAURANT.phone}
              </a>
            </div>

            {/* Hours */}
            <div className="mt-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-basil-cream/40">
                Режим работы
              </p>
              <div className="mt-2 space-y-1">
                {RESTAURANT.hours.map((h) => (
                  <p key={h.days} className="text-lg text-basil-cream/70">
                    {h.days} · {h.time}
                  </p>
                ))}
              </div>
            </div>

            {/* Quick actions */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={RESTAURANT.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-basil-herb px-7 py-4 text-sm font-semibold tracking-wide text-white transition-all hover:bg-basil-mid"
              >
                <Phone size={16} />
                Позвонить
              </a>
              <a
                href={RESTAURANT.maps.yandex}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-basil-cream/60 transition-colors hover:text-basil-cream"
              >
                Построить маршрут
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* Right — map navigation block */}
          <div className="reveal reveal-delay-2 lg:col-span-5">
            <div className="flex h-full flex-col rounded-2xl bg-basil-deep/50 p-6 sm:p-8">
              {/* Stylized map placeholder */}
              <div className="relative mb-8 aspect-[4/3] overflow-hidden rounded-xl border border-basil-cream/5 bg-basil-mid/20">
                <div className="absolute inset-0 bg-gradient-to-br from-basil-mid/30 via-transparent to-basil-deep/40" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-basil-herb/20">
                    <MapPin size={24} className="text-basil-herb" />
                  </div>
                </div>
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-basil-herb/10 blur-3xl" />
                <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-basil-mid/20 blur-3xl" />
                <p className="absolute bottom-4 left-4 font-serif text-lg text-basil-cream/40">
                  {RESTAURANT.name}
                </p>
              </div>

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-basil-cream/40">
                Найти нас
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href={RESTAURANT.maps.yandex}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-basil-cream/10 bg-basil-deep/40 px-5 py-4 text-sm font-medium text-basil-cream/80 transition-colors hover:border-basil-cream/25 hover:text-basil-cream"
                >
                  Яндекс Карты
                  <ArrowRight
                    size={16}
                    className="text-basil-cream/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-basil-cream/80"
                  />
                </a>
                <a
                  href={RESTAURANT.maps.gis2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-basil-cream/10 bg-basil-deep/40 px-5 py-4 text-sm font-medium text-basil-cream/80 transition-colors hover:border-basil-cream/25 hover:text-basil-cream"
                >
                  2ГИС
                  <ArrowRight
                    size={16}
                    className="text-basil-cream/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-basil-cream/80"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
