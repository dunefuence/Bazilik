import { useReveal } from '@/hooks/useReveal';
import { ArrowRight } from 'lucide-react';

function Placeholder({ className }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-basil-cream/5 bg-basil-mid/20 ${
        className ?? ''
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-basil-mid/30 via-transparent to-basil-deep/40" />
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-basil-herb/10 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-basil-mid/20 blur-3xl" />
    </div>
  );
}

export default function Atmosphere() {
  const ref = useReveal<HTMLElement>();

  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} id="atmosphere" className="bg-basil-deep py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8 lg:grid-rows-2">
          {/* Text block — first on mobile, top-right on desktop */}
          <div className="reveal order-1 lg:order-2 lg:col-span-5 lg:pt-8">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-basil-herb">
              Атмосфера
            </p>
            <div className="mt-5 h-px w-10 bg-basil-cream/15" />
            <h2 className="mt-5 font-serif text-4xl font-normal leading-[1.1] text-basil-cream sm:text-5xl md:text-6xl">
              Загляните <em className="italic font-normal">внутрь</em>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-basil-cream/60">
              Тёплый свет, запах гриля, звон бокалов. Вечер, который не хочется заканчивать.
            </p>
          </div>

          {/* Large placeholder — second on mobile, left on desktop, spans 2 rows */}
          <div className="reveal reveal-delay-1 order-2 lg:order-1 lg:col-span-7 lg:row-span-2">
            <Placeholder className="aspect-[4/5] sm:aspect-[3/4] lg:h-full lg:min-h-[560px]" />
          </div>

          {/* Two small placeholders — bottom-right on desktop */}
          <div className="reveal reveal-delay-2 order-3 grid grid-cols-2 gap-4 sm:gap-6 lg:col-span-5">
            <Placeholder className="aspect-[3/4]" />
            <Placeholder className="aspect-[3/4]" />
          </div>
        </div>

        {/* Subtle CTA */}
        <div className="reveal mt-14 sm:mt-20">
          <button
            onClick={scrollToBooking}
            className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-basil-cream/50 transition-colors hover:text-basil-cream"
          >
            Забронировать стол
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
