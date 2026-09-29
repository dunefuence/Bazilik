import { RESTAURANT, NAV_LINKS } from '@/data/site';

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-basil-deep text-basil-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="font-serif text-3xl font-semibold tracking-[0.15em]">
              {RESTAURANT.name}
            </div>
            <p className="mt-3 text-sm text-basil-cream/60">
              {RESTAURANT.tagline} в Тамбове
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-basil-cream/50">
              Навигация
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm text-basil-cream/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-basil-cream/50">
              Контакты
            </h4>
            <ul className="space-y-3 text-sm text-basil-cream/75">
              <li>
                <a href={RESTAURANT.phoneHref} className="hover:text-white">
                  {RESTAURANT.phone}
                </a>
              </li>
              <li>{RESTAURANT.address}, {RESTAURANT.city}</li>
              {RESTAURANT.hours.map((h) => (
                <li key={h.days}>{h.days} {h.time}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-basil-cream/50">
              Соцсети
            </h4>
            <div className="flex gap-3">
              {RESTAURANT.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="rounded-full border border-basil-cream/20 px-5 py-2 text-sm text-basil-cream/75 transition-colors hover:border-basil-herb hover:text-white"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-basil-cream/10 pt-8 text-xs text-basil-cream/40 sm:flex-row">
          <p>© {new Date().getFullYear()} {RESTAURANT.name}. Все права защищены.</p>
          <a href="#" className="hover:text-basil-cream/70">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}
