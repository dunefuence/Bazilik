import { RESTAURANT, NAV_LINKS } from '@/data/site';

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-basil-deep text-basil-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Left — brand */}
          <div>
            <div className="font-serif text-2xl font-normal tracking-[0.15em] text-basil-cream">
              {RESTAURANT.name}
            </div>
            <p className="mt-3 text-sm text-basil-cream/50">
              {RESTAURANT.tagline} в Тамбове
            </p>
          </div>

          {/* Center — navigation */}
          <nav>
            <h4 className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-basil-cream/40">
              Навигация
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm text-basil-cream/65 transition-colors hover:text-basil-cream"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right — contacts + socials */}
          <div>
            <h4 className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-basil-cream/40">
              Контакты
            </h4>
            <ul className="space-y-3 text-sm text-basil-cream/65">
              <li>
                <a
                  href={RESTAURANT.phoneHref}
                  className="transition-colors hover:text-basil-cream"
                >
                  {RESTAURANT.phone}
                </a>
              </li>
              <li>
                {RESTAURANT.city}, {RESTAURANT.address}
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {RESTAURANT.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-basil-cream/15 px-4 py-2 text-xs font-medium text-basil-cream/65 transition-colors hover:border-basil-herb/50 hover:text-basil-cream"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 border-t border-basil-cream/8 pt-8">
          <p className="text-xs text-basil-cream/35">
            © {new Date().getFullYear()} {RESTAURANT.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
