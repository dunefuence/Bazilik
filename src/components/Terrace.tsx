import { TERRACE_IMAGES } from '@/data/menu';
import { useReveal } from '@/hooks/useReveal';

export default function Terrace() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="bg-basil-mid py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="reveal order-2 lg:order-1">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-basil-cream/50">
              Летняя веранда
            </p>
            <h2 className="font-serif text-4xl text-basil-cream sm:text-5xl md:text-6xl">
              Лето в Базилике
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-basil-cream/70">
              Когда погода позволяет, вечер продолжается на открытой веранде.
            </p>
          </div>

          <div className="reveal reveal-delay-2 order-1 grid grid-cols-2 gap-3 lg:order-2">
            <div className="col-span-2 overflow-hidden rounded-2xl">
              <img
                src={TERRACE_IMAGES[0].src}
                alt={TERRACE_IMAGES[0].alt}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src={TERRACE_IMAGES[1].src}
                alt={TERRACE_IMAGES[1].alt}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src={TERRACE_IMAGES[2].src}
                alt={TERRACE_IMAGES[2].alt}
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
