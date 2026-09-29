import { useReveal } from '@/hooks/useReveal';

const SOCIAL_PLACEHOLDER = [
  'https://images.pexels.com/photos/1872889/pexels-photo-1872889.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/15750737/pexels-photo-15750737.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/18824031/pexels-photo-18824031.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/11923047/pexels-photo-11923047.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/1850600/pexels-photo-1850600.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/10499359/pexels-photo-10499359.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
];

export default function Social() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="bg-basil-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-basil-herb">
            Соцсети
          </p>
          <h2 className="font-serif text-4xl text-basil-graphite sm:text-5xl md:text-6xl">
            Базилик каждый день
          </h2>
        </div>

        <div className="reveal reveal-delay-1 mb-10 grid grid-cols-3 gap-2 sm:gap-3">
          {SOCIAL_PLACEHOLDER.map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-xl">
              <img
                src={src}
                alt="Контент из соцсетей"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="reveal text-center">
          <a
            href="#"
            className="inline-block rounded-full border border-basil-deep px-8 py-4 text-sm font-semibold tracking-wide text-basil-deep transition-all hover:bg-basil-deep hover:text-basil-cream"
          >
            Смотреть наши новости
          </a>
        </div>
      </div>
    </section>
  );
}
