import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, RESTAURANT } from '@/data/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-basil-deep/95 backdrop-blur-md py-3 shadow-lg shadow-black/20'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-serif text-2xl font-semibold tracking-[0.15em] text-basil-cream transition-colors hover:text-white"
          >
            {RESTAURANT.name}
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-sm font-medium tracking-wide text-basil-cream/80 transition-colors hover:text-white"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNav('#booking')}
              className="hidden rounded-full border border-basil-herb/60 px-6 py-2.5 text-sm font-medium tracking-wide text-basil-cream transition-all hover:bg-basil-herb hover:text-white sm:block"
            >
              Забронировать стол
            </button>
            <button
              onClick={() => setOpen(true)}
              className="text-basil-cream transition-colors hover:text-white md:hidden"
              aria-label="Открыть меню"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-basil-deep transition-all duration-500 md:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <span className="font-serif text-2xl font-semibold tracking-[0.15em] text-basil-cream">
            {RESTAURANT.name}
          </span>
          <button
            onClick={() => setOpen(false)}
            className="text-basil-cream"
            aria-label="Закрыть меню"
          >
            <X size={28} />
          </button>
        </div>
        <nav className="mt-12 flex flex-col items-center gap-7">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="font-serif text-3xl text-basil-cream transition-colors hover:text-white"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#booking')}
            className="mt-6 rounded-full bg-basil-herb px-10 py-4 text-base font-medium tracking-wide text-white transition-colors hover:bg-basil-mid"
          >
            Забронировать стол
          </button>
          <a
            href={RESTAURANT.phoneHref}
            className="mt-2 text-lg text-basil-cream/70"
          >
            {RESTAURANT.phone}
          </a>
        </nav>
      </div>
    </>
  );
}
