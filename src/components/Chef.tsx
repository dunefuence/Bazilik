import { useReveal } from '@/hooks/useReveal';

const CHEF_PHOTO = '';

const ACHIEVEMENTS = [
  { highlight: true,  stat: '№ 1',           title: 'Лучший кондитер России',     text: 'Первое место в номинации «Лучший по профессии».' },
  { highlight: true,  stat: '4 победы',      title: 'Профессиональные чемпионаты', text: 'Первые места на территориальных и областных соревнованиях по поварскому искусству.' },
  { highlight: false, stat: '4-е место',     title: 'Чемпионат ЦФО',              text: 'Результат на чемпионате Центрального федерального округа по поварскому искусству.' },
  { highlight: false, stat: 'Несколько лет',  title: 'В составе жюри',             text: 'Работа в жюри профессиональных чемпионатов и дегустационных комиссий.' },
  { highlight: false, stat: 'Около 10',      title: 'Опыт создания с нуля',       text: 'Участие в открытии около десяти ресторанов и баров, а также торгового центра.' },
];

export default function Chef() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="chef" className="bg-basil-cream py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Portrait — 5/12 on desktop */}
          <div className="reveal lg:col-span-5">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-basil-graphite/5">
              {CHEF_PHOTO ? (
                <img
                  src={CHEF_PHOTO}
                  alt="Александр Боярский, шеф-повар ресторана «Базилик»"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-basil-graphite/[0.04] to-basil-graphite/[0.07]">
                  <span className="font-serif text-5xl font-normal text-basil-graphite/20 sm:text-6xl">
                    АБ
                  </span>
                  <span className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-basil-graphite/15">
                    Портрет
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Content — 7/12 on desktop */}
          <div className="reveal reveal-delay-1 lg:col-span-7 lg:pt-4">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-basil-herb">
              Люди «Базилика»
            </p>

            <h2 className="mt-5 font-serif text-4xl font-normal leading-[1.1] text-basil-graphite sm:text-5xl md:text-6xl">
              Александр Боярский
            </h2>

            <p className="mt-3 text-base font-medium text-basil-graphite/50">
              Шеф-повар ресторана «Базилик»
            </p>

            <div className="mt-8 h-px w-12 bg-basil-gold/40" />

            <h3 className="mt-8 font-serif text-2xl font-normal leading-snug text-basil-graphite sm:text-3xl">
              За вкусом стоит мастерство
            </h3>

            <div className="mt-6 max-w-xl space-y-5 text-base leading-relaxed text-basil-graphite/70 sm:text-lg">
              <p>
                За каждым блюдом стоит человек, который вкладывает в своё дело опыт, характер
                и любовь к гастрономии.
              </p>
              <p>
                Александр Боярский — профессионал, прошедший путь от мастерства на кухне до
                признания на всероссийском уровне. Победы в профессиональных чемпионатах, опыт
                работы в жюри и участие в создании ресторанных проектов — всё это часть его истории.
              </p>
              <p>
                Для него кулинария — не просто ремесло, а искусство, в котором важна каждая деталь.
              </p>
            </div>

            {/* Achievements */}
            <div className="mt-12">
              <p className="text-sm font-medium uppercase tracking-wider text-basil-herb">
                Путь, которым можно гордиться
              </p>

              <div className="mt-6 space-y-0">
                {ACHIEVEMENTS.map((a, i) => (
                  <div
                    key={i}
                    className="flex items-baseline gap-5 border-b border-basil-graphite/8 py-5 first:pt-0"
                  >
                    <div className="w-28 shrink-0 sm:w-36">
                      <span
                        className={`font-serif ${
                          a.highlight
                            ? 'text-2xl text-basil-gold sm:text-3xl'
                            : 'text-lg text-basil-graphite/50 sm:text-xl'
                        }`}
                      >
                        {a.stat}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p
                        className={`text-sm font-medium sm:text-base ${
                          a.highlight ? 'text-basil-graphite' : 'text-basil-graphite/70'
                        }`}
                      >
                        {a.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-basil-graphite/45">
                        {a.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
