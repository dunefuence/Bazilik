import { useState, type FormEvent } from 'react';
import { Loader2, Check, Phone } from 'lucide-react';
import { supabase, type EventRequest } from '@/lib/supabase';
import { RESTAURANT } from '@/data/site';
import { BANQUET_IMAGE, BANQUET_TYPES, BANQUET_FEATURES } from '@/data/menu';
import { useReveal } from '@/hooks/useReveal';

const EVENT_TYPES = ['Свадьба', 'День рождения', 'Юбилей', 'Корпоратив', 'Фуршет', 'Другое'];

export default function Banquets() {
  const ref = useReveal<HTMLElement>();
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: EventRequest = {
      name: String(formData.get('name')),
      phone: String(formData.get('phone')),
      event_date: String(formData.get('event_date') || ''),
      guests: Number(formData.get('guests')) || undefined,
      event_type: String(formData.get('event_type')),
      comment: String(formData.get('comment') || ''),
    };

    const { error: insertError } = await supabase
      .from('event_requests')
      .insert(data);

    setSubmitting(false);

    if (insertError) {
      setError('Не удалось отправить заявку. Попробуйте позвонить нам.');
      return;
    }

    setSuccess(true);
    form.reset();
  };

  return (
    <section ref={ref} id="banquets" className="bg-basil-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Hero block */}
        <div className="reveal mb-16 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-basil-herb">
            Банкеты
          </p>
          <h2 className="text-balance font-serif text-4xl leading-tight text-basil-graphite sm:text-5xl md:text-6xl">
            Праздник, о котором<br />позаботятся за вас.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-basil-graphite/70">
            Свадьба, день рождения, корпоратив, семейный праздник или важная встреча —
            расскажите нам о событии, а мы поможем организовать вечер.
          </p>
        </div>

        {/* Banquet image */}
        <div className="reveal reveal-delay-1 mb-16 overflow-hidden rounded-3xl">
          <img
            src={BANQUET_IMAGE}
            alt="Банкетный зал ресторана Базилик"
            className="h-[300px] w-full object-cover sm:h-[480px]"
            loading="lazy"
          />
        </div>

        {/* Event types */}
        <div className="reveal reveal-delay-2 mb-20">
          <div className="flex flex-wrap gap-3">
            {BANQUET_TYPES.map((type) => (
              <span
                key={type}
                className="rounded-full border border-basil-deep/15 bg-white px-6 py-3 text-sm font-medium text-basil-graphite"
              >
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* "Мы поможем продумать вечер" */}
        <div className="reveal mb-20">
          <h3 className="mb-8 font-serif text-3xl text-basil-graphite sm:text-4xl">
            Мы поможем продумать вечер
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BANQUET_FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-basil-deep/10 bg-white p-6"
              >
                <h4 className="font-serif text-xl text-basil-deep">{f.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-basil-graphite/60">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Booking form */}
        <div className="mx-auto max-w-2xl">
          <div className="reveal mb-8 text-center">
            <h3 className="font-serif text-3xl text-basil-graphite sm:text-4xl">
              Заявка на мероприятие
            </h3>
          </div>

          {success ? (
            <div className="reveal reveal-delay-1 rounded-2xl bg-basil-mid/10 p-10 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-basil-herb">
                <Check size={32} className="text-white" />
              </div>
              <h4 className="font-serif text-2xl text-basil-graphite">Спасибо!</h4>
              <p className="mt-3 text-basil-graphite/70">
                Мы получили заявку и свяжемся с вами, чтобы обсудить детали.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="mt-6 text-sm text-basil-herb underline hover:text-basil-deep"
              >
                Создать ещё одну заявку
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="reveal reveal-delay-1 grid gap-5 rounded-2xl bg-white p-6 shadow-sm sm:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="event-date" className="mb-2 block text-sm text-basil-graphite/70">Дата мероприятия</label>
                  <input
                    id="event-date"
                    type="date"
                    name="event_date"
                    min={today}
                    className="w-full rounded-lg border border-basil-graphite/15 bg-basil-cream/30 px-4 py-3 text-basil-graphite outline-none transition-colors focus:border-basil-herb"
                  />
                </div>
                <div>
                  <label htmlFor="event-guests" className="mb-2 block text-sm text-basil-graphite/70">Количество гостей</label>
                  <input
                    id="event-guests"
                    type="number"
                    name="guests"
                    min="1"
                    placeholder="Например, 30"
                    className="w-full rounded-lg border border-basil-graphite/15 bg-basil-cream/30 px-4 py-3 text-basil-graphite placeholder:text-basil-graphite/30 outline-none transition-colors focus:border-basil-herb"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="event-type" className="mb-2 block text-sm text-basil-graphite/70">Тип мероприятия</label>
                <select
                  id="event-type"
                  name="event_type"
                  required
                  defaultValue=""
                  className="w-full rounded-lg border border-basil-graphite/15 bg-basil-cream/30 px-4 py-3 text-basil-graphite outline-none transition-colors focus:border-basil-herb"
                >
                  <option value="" disabled>Выберите тип</option>
                  {EVENT_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="event-name" className="mb-2 block text-sm text-basil-graphite/70">Имя</label>
                  <input
                    id="event-name"
                    type="text"
                    name="name"
                    required
                    placeholder="Как к вам обращаться"
                    className="w-full rounded-lg border border-basil-graphite/15 bg-basil-cream/30 px-4 py-3 text-basil-graphite placeholder:text-basil-graphite/30 outline-none transition-colors focus:border-basil-herb"
                  />
                </div>
                <div>
                  <label htmlFor="event-phone" className="mb-2 block text-sm text-basil-graphite/70">Телефон</label>
                  <input
                    id="event-phone"
                    type="tel"
                    name="phone"
                    required
                    placeholder="+7 ..."
                    className="w-full rounded-lg border border-basil-graphite/15 bg-basil-cream/30 px-4 py-3 text-basil-graphite placeholder:text-basil-graphite/30 outline-none transition-colors focus:border-basil-herb"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="event-comment" className="mb-2 block text-sm text-basil-graphite/70">Комментарий</label>
                <textarea
                  id="event-comment"
                  name="comment"
                  rows={3}
                  placeholder="Расскажите о вашем событии..."
                  className="w-full resize-none rounded-lg border border-basil-graphite/15 bg-basil-cream/30 px-4 py-3 text-basil-graphite placeholder:text-basil-graphite/30 outline-none transition-colors focus:border-basil-herb"
                />
              </div>

              {error && (
                <p className="text-sm text-red-500">{error}</p>
              )}

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-basil-deep px-8 py-4 text-sm font-semibold tracking-wide text-basil-cream transition-all hover:bg-basil-mid disabled:opacity-60"
                >
                  {submitting && <Loader2 size={18} className="animate-spin" />}
                  {submitting ? 'Отправляем...' : 'Обсудить мероприятие'}
                </button>
                <a
                  href={RESTAURANT.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-full border border-basil-deep px-6 py-4 text-sm font-semibold text-basil-deep transition-colors hover:bg-basil-deep/5"
                >
                  <Phone size={16} />
                  {RESTAURANT.phone}
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
