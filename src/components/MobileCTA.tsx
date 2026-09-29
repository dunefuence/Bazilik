import { Phone } from 'lucide-react';
import { RESTAURANT } from '@/data/site';

export default function MobileCTA() {
  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden">
      <div className="flex gap-2 bg-basil-deep/95 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom)] backdrop-blur-md">
        <button
          onClick={scrollToBooking}
          className="flex-1 rounded-full bg-basil-herb py-3.5 text-sm font-semibold tracking-wide text-white"
        >
          Забронировать
        </button>
        <a
          href={RESTAURANT.phoneHref}
          className="flex items-center justify-center rounded-full border border-basil-herb/50 px-5 text-basil-cream"
          aria-label="Позвонить"
        >
          <Phone size={20} />
        </a>
      </div>
    </div>
  );
}
