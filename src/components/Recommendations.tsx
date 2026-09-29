import { RECOMMENDATIONS } from '@/data/menu';
import { useReveal } from '@/hooks/useReveal';

export default function Recommendations() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="bg-basil-deep py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-basil-herb">
            Выбор команды Базилика
          </p>
          <h2 className="font-serif text-4xl text-basil-cream sm:text-5xl md:text-6xl">
            С чего начать?
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {RECOMMENDATIONS.map((item, i) => (
            <div
              key={item.title}
              className={`reveal reveal-delay-${i + 1} group relative overflow-hidden rounded-2xl`}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-basil-deep/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-serif text-xl text-basil-cream sm:text-2xl">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
