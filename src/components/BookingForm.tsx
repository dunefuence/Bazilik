import { useState, type FormEvent } from 'react';
import { Loader2, Check } from 'lucide-react';
import { supabase, type TableReservation } from '@/lib/supabase';
import { useReveal } from '@/hooks/useReveal';

const TIMES = [
  '11:00', '12:00', '13:00', '14:00', '15:00', '16:00',
  '17:00', '18:00', '19:00', '20:00', '21:00', '22:00',
];

export default function BookingForm() {
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
    const data: TableReservation = {
      name: String(formData.get('name')),
      phone: String(formData.get('phone')),
      date: String(formData.get('date')),
      time: String(formData.get('time')),
      guests: Number(formData.get('guests')),
      comment: String(formData.get('comment') || ''),
    };

    const { error: insertError } = await supabase
      .from('table_reservations')
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
    <section ref={ref} id="booking" className="bg-basil-graphite py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="reveal mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-basil-herb">
            Бронирование
          </p>
          <h2 className="font-serif text-4xl text-basil-cream sm:text-5xl md:text-6xl">
            Забронировать столик
          </h2>
          <p className="mt-4 text-basil-cream/60">
            Оставьте заявку — мы свяжемся для подтверждения
          </p>
        </div>

        {success ? (
          <div className="reveal reveal-delay-1 rounded-2xl bg-basil-mid/40 p-10 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-basil-herb">
              <Check size={32} className="text-white" />
            </div>
            <h3 className="font-serif text-2xl text-basil-cream">Заявка отправлена</h3>
            <p className="mt-3 text-basil-cream/70">
              Мы свяжемся с вами для подтверждения бронирования.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="mt-6 text-sm text-basil-herb underline hover:text-basil-cream"
            >
              Создать ещё одну заявку
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="reveal reveal-delay-1 grid gap-5 rounded-2xl bg-basil-deep/40 p-6 sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-basil-cream/70">Дата</label>
                <input
                  type="date"
                  name="date"
                  required
                  min={today}
                  className="w-full rounded-lg border border-basil-cream/15 bg-basil-deep/60 px-4 py-3 text-basil-cream outline-none transition-colors focus:border-basil-herb"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-basil-cream/70">Время</label>
                <select
                  name="time"
                  required
                  defaultValue=""
                  className="w-full rounded-lg border border-basil-cream/15 bg-basil-deep/60 px-4 py-3 text-basil-cream outline-none transition-colors focus:border-basil-herb"
                >
                  <option value="" disabled>Выберите время</option>
                  {TIMES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-basil-cream/70">Количество гостей</label>
              <select
                name="guests"
                required
                defaultValue="2"
                className="w-full rounded-lg border border-basil-cream/15 bg-basil-deep/60 px-4 py-3 text-basil-cream outline-none transition-colors focus:border-basil-herb"
              >
                {[1,2,3,4,5,6,7,8].map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? 'гость' : n < 5 ? 'гостя' : 'гостей'}</option>
                ))}
                <option value={10}>10+ гостей</option>
              </select>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-basil-cream/70">Имя</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Как к вам обращаться"
                  className="w-full rounded-lg border border-basil-cream/15 bg-basil-deep/60 px-4 py-3 text-basil-cream placeholder:text-basil-cream/30 outline-none transition-colors focus:border-basil-herb"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-basil-cream/70">Телефон</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+7 ..."
                  className="w-full rounded-lg border border-basil-cream/15 bg-basil-deep/60 px-4 py-3 text-basil-cream placeholder:text-basil-cream/30 outline-none transition-colors focus:border-basil-herb"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-basil-cream/70">Комментарий</label>
              <textarea
                name="comment"
                rows={3}
                placeholder="Особые пожелания, столик у окна, детский стул..."
                className="w-full resize-none rounded-lg border border-basil-cream/15 bg-basil-deep/60 px-4 py-3 text-basil-cream placeholder:text-basil-cream/30 outline-none transition-colors focus:border-basil-herb"
              />
            </div>

            {error && (
              <p className="text-sm text-red-400">{error}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="flex items-center justify-center gap-2 rounded-full bg-basil-herb px-8 py-4 text-sm font-semibold tracking-wide text-white transition-all hover:bg-basil-mid disabled:opacity-60"
            >
              {submitting && <Loader2 size={18} className="animate-spin" />}
              {submitting ? 'Отправляем...' : 'Забронировать столик'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
