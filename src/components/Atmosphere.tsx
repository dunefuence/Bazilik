import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_IMAGES } from '@/data/menu';
import { useReveal } from '@/hooks/useReveal';

export default function Atmosphere() {
  const ref = useReveal<HTMLElement>();
  const [lightbox, setLightbox] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const next = useCallback(() => {
    setLightbox((prev) => (prev === null ? null : (prev + 1) % GALLERY_IMAGES.length));
  }, []);
  const prevImage = useCallback(() => {
    setLightbox((prev) =>
      prev === null ? null : (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
    );
  }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, closeLightbox, next, prevImage]);

  // Masonry-like layout with varied spans
  const spans = [
    'sm:col-span-2 sm:row-span-2',
    '',
    '',
    'sm:row-span-2',
    '',
    '',
    'sm:col-span-2',
    '',
    '',
    'sm:col-span-2 sm:row-span-2',
  ];

  return (
    <section ref={ref} id="atmosphere" className="bg-basil-deep py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-basil-herb">
            Атмосфера
          </p>
          <h2 className="font-serif text-4xl text-basil-cream sm:text-5xl md:text-6xl">
            Загляните внутрь
          </h2>
        </div>

        <div className="reveal reveal-delay-1 grid auto-rows-[200px] grid-cols-2 gap-3 sm:auto-rows-[240px] sm:grid-cols-4 sm:gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className={`group relative overflow-hidden rounded-xl ${spans[i] || ''}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-basil-deep/0 transition-colors duration-300 group-hover:bg-basil-deep/20" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-basil-deep/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute right-5 top-5 text-basil-cream/80 hover:text-white"
            aria-label="Закрыть"
          >
            <X size={32} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 text-basil-cream/80 hover:text-white sm:left-8"
            aria-label="Предыдущее"
          >
            <ChevronLeft size={40} />
          </button>
          <img
            src={GALLERY_IMAGES[lightbox].src}
            alt={GALLERY_IMAGES[lightbox].alt}
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 text-basil-cream/80 hover:text-white sm:right-8"
            aria-label="Следующее"
          >
            <ChevronRight size={40} />
          </button>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-basil-cream/50">
            {lightbox + 1} / {GALLERY_IMAGES.length}
          </p>
        </div>
      )}
    </section>
  );
}
