import { Quote } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function Reviews() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="bg-basil-beige py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-basil-herb">
            Отзывы
          </p>
          <h2 className="font-serif text-4xl text-basil-graphite sm:text-5xl md:text-6xl">
            Слова гостей
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i} rounded-2xl border border-basil-deep/10 bg-basil-cream/50 p-8 text-center`}
            >
              <Quote size={32} className="mx-auto mb-4 text-basil-herb/40" />
              <p className="text-lg leading-relaxed text-basil-graphite/50">
                Здесь будут реальные отзывы гостей
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
