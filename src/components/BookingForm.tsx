import { useState, type FormEvent } from 'react';
import { Loader2, Check, ArrowRight, ArrowLeft, Minus, Plus, AlertTriangle } from 'lucide-react';
import { supabase, type Reservation } from '@/lib/supabase';
import { useReveal } from '@/hooks/useReveal';
import FloorPlan from '@/components/FloorPlan';
import {
  RESTAURANT_TABLES,
  TABLE_COMBINATIONS,
  TIME_SLOTS,
  getTablesForGuests,
  formatTableLabel,
  formatDateLong,
} from '@/data/booking';
import type { RestaurantTable, TableCombination } from '@/data/booking';

const STEPS = ['Гости', 'Дата', 'Время', 'Стол', 'Контакты'] as const;
const MAX_GUESTS = 16;

export default function BookingForm() {
  const ref = useReveal<HTMLElement>();

  const [step, setStep] = useState(0);
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [selectedTableIds, setSelectedTableIds] = useState<number[]>([]);
  const [selectedComboId, setSelectedComboId] = useState<string | null>(null);
  const [requiresAdminConfirm, setRequiresAdminConfirm] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const today = new Date().toISOString().split('T')[0];

  const { tables: matchingTables, combos: matchingCombos } = getTablesForGuests(guests);

  const availableTableIds = new Set(matchingTables.map((t) => t.id));
  const availableComboIds = new Set(matchingCombos.map((c) => c.id));

  const selectedCombo: TableCombination | null = selectedComboId
    ? TABLE_COMBINATIONS.find((c) => c.id === selectedComboId) ?? null
    : null;

  const selectedTable: RestaurantTable | null = selectedTableIds.length === 1
    ? RESTAURANT_TABLES.find((t) => t.id === selectedTableIds[0]) ?? null
    : null;

  const canProceed = () => {
    if (step === 0) return guests >= 1;
    if (step === 1) return date !== '';
    if (step === 2) return time !== '';
    if (step === 3) return selectedTableIds.length > 0;
    if (step === 4) return name.trim() !== '' && phone.trim() !== '';
    return false;
  };

  const handleSelectTable = (table: RestaurantTable) => {
    setSelectedTableIds([table.id]);
    setSelectedComboId(null);
    setRequiresAdminConfirm(false);
  };

  const handleSelectCombo = (comboId: string) => {
    const combo = TABLE_COMBINATIONS.find((c) => c.id === comboId);
    if (!combo) return;
    setSelectedComboId(comboId);
    setSelectedTableIds(combo.tableIds);
    setRequiresAdminConfirm(combo.requiresAdminConfirmation);
  };

  const computeEndTime = (): string | null => {
    if (selectedCombo) return null;
    if (!selectedTable) return null;
    if (!selectedTable.defaultDurationHours) return null;
    if (!time) return null;
    const [h, m] = time.split(':').map(Number);
    const endH = h + selectedTable.defaultDurationHours;
    return `${String(endH).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const reservation: Reservation = {
      date,
      start_time: time,
      end_time: computeEndTime(),
      guest_count: guests,
      table_ids: selectedTableIds,
      combination_id: selectedComboId,
      customer_name: name.trim(),
      phone: phone.trim(),
      comment: comment.trim() || undefined,
      status: requiresAdminConfirm ? 'pending' : 'new',
    };

    const { error: insertError } = await supabase
      .from('reservations')
      .insert(reservation);

    setSubmitting(false);

    if (insertError) {
      setError('Не удалось отправить заявку. Попробуйте позвонить нам.');
      return;
    }

    setSuccess(true);
  };

  const resetForm = () => {
    setStep(0);
    setGuests(2);
    setDate('');
    setTime('');
    setSelectedTableIds([]);
    setSelectedComboId(null);
    setRequiresAdminConfirm(false);
    setName('');
    setPhone('');
    setComment('');
    setSuccess(false);
    setError(null);
  };

  const nextStep = () => {
    if (canProceed() && step < STEPS.length - 1) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <section ref={ref} id="booking" className="bg-basil-graphite py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        {/* Header */}
        <div className="reveal mb-10 text-center sm:mb-14">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-basil-herb">
            Бронирование
          </p>
          <h2 className="font-serif text-4xl font-normal text-basil-cream sm:text-5xl md:text-6xl">
            Забронировать столик
          </h2>
          <p className="mt-4 text-sm text-basil-cream/50 sm:text-base">
            Выберите дату, время и стол — мы свяжемся для подтверждения
          </p>
        </div>

        {success ? (
          /* ===== Success screen ===== */
          <div className="reveal reveal-delay-1 rounded-2xl bg-basil-mid/30 p-8 text-center sm:p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-basil-herb">
              <Check size={32} className="text-white" />
            </div>
            <h3 className="font-serif text-2xl font-normal text-basil-cream sm:text-3xl">
              Заявка отправлена
            </h3>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-basil-cream/60 sm:text-base">
              Спасибо! Мы получили вашу заявку на бронирование.
              <br />
              Администратор свяжется с вами в течение нескольких минут для подтверждения.
            </p>

            {/* Summary */}
            <div className="mx-auto mt-8 max-w-sm space-y-3 rounded-xl border border-basil-cream/8 bg-basil-deep/40 p-6 text-left">
              <div className="flex justify-between text-sm">
                <span className="text-basil-cream/40">Дата</span>
                <span className="text-basil-cream/90">{formatDateLong(date)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-basil-cream/40">Время</span>
                <span className="text-basil-cream/90">{time}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-basil-cream/40">Гости</span>
                <span className="text-basil-cream/90">{guests}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-basil-cream/40">Стол</span>
                <span className="text-basil-cream/90">{formatTableLabel(selectedTableIds)}</span>
              </div>
              {requiresAdminConfirm && (
                <div className="mt-4 flex items-start gap-2 rounded-lg bg-basil-gold/10 p-3 text-xs text-basil-gold/80">
                  <AlertTriangle size={14} className="mt-0.5 shrink-0" />
                  <span>Эта посадка требует подтверждения администратора.</span>
                </div>
              )}
            </div>

            <button
              onClick={resetForm}
              className="mt-8 text-sm font-medium text-basil-herb underline hover:text-basil-cream"
            >
              Создать ещё одну заявку
            </button>
          </div>
        ) : (
          /* ===== Multi-step booking flow ===== */
          <div className="reveal reveal-delay-1">
            {/* Progress indicator */}
            <div className="mb-10 flex items-center justify-center gap-1 sm:gap-3">
              {STEPS.map((label, i) => (
                <div key={label} className="flex items-center">
                  <div className="flex flex-col items-center gap-1.5">
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium transition-all sm:h-8 sm:w-8 ${
                        i === step
                          ? 'bg-basil-gold text-basil-deep'
                          : i < step
                          ? 'bg-basil-herb text-white'
                          : 'bg-basil-cream/8 text-basil-cream/30'
                      }`}
                    >
                      {i < step ? <Check size={14} /> : i + 1}
                    </div>
                    <span className={`hidden text-xs sm:block ${
                      i === step ? 'text-basil-cream/80' : 'text-basil-cream/30'
                    }`}>
                      {label}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className={`mx-1 h-px w-4 sm:w-8 ${
                      i < step ? 'bg-basil-herb' : 'bg-basil-cream/10'
                    }`} />
                  )}
                </div>
              ))}
            </div>

            {/* Step content */}
            <div className="rounded-2xl bg-basil-deep/30 p-6 sm:p-10">
              {/* Step 0: Guests */}
              {step === 0 && (
                <div className="text-center">
                  <h3 className="font-serif text-2xl font-normal text-basil-cream sm:text-3xl">
                    Сколько гостей?
                  </h3>
                  <div className="mt-8 flex items-center justify-center gap-6">
                    <button
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-basil-cream/15 text-basil-cream transition-colors hover:border-basil-cream/40 hover:bg-basil-cream/5"
                      aria-label="Уменьшить"
                    >
                      <Minus size={20} />
                    </button>
                    <span className="min-w-[80px] font-serif text-4xl font-normal text-basil-cream sm:text-5xl">
                      {guests}
                    </span>
                    <button
                      onClick={() => setGuests(Math.min(MAX_GUESTS, guests + 1))}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-basil-cream/15 text-basil-cream transition-colors hover:border-basil-cream/40 hover:bg-basil-cream/5"
                      aria-label="Увеличить"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                  {/* Quick options */}
                  <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {[2, 3, 4, 6, 8, 12, 14].map((n) => (
                      <button
                        key={n}
                        onClick={() => setGuests(n)}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                          guests === n
                            ? 'bg-basil-gold text-basil-deep'
                            : 'border border-basil-cream/10 text-basil-cream/40 hover:border-basil-cream/25 hover:text-basil-cream/70'
                        }`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 1: Date */}
              {step === 1 && (
                <div className="text-center">
                  <h3 className="font-serif text-2xl font-normal text-basil-cream sm:text-3xl">
                    Выберите дату
                  </h3>
                  <div className="mt-8 flex justify-center">
                    <input
                      type="date"
                      value={date}
                      min={today}
                      onChange={(e) => setDate(e.target.value)}
                      className="rounded-lg border border-basil-cream/15 bg-basil-deep/60 px-6 py-4 text-center text-lg text-basil-cream outline-none transition-colors focus:border-basil-gold [color-scheme:dark]"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Time */}
              {step === 2 && (
                <div>
                  <h3 className="text-center font-serif text-2xl font-normal text-basil-cream sm:text-3xl">
                    Выберите время
                  </h3>
                  <p className="mt-2 text-center text-xs text-basil-cream/40">
                    {formatDateLong(date)}
                  </p>
                  <div className="mt-6 grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-8">
                    {TIME_SLOTS.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setTime(slot)}
                        className={`rounded-lg py-3 text-sm font-medium transition-all ${
                          time === slot
                            ? 'bg-basil-gold text-basil-deep'
                            : 'border border-basil-cream/10 text-basil-cream/40 hover:border-basil-cream/25 hover:text-basil-cream/70'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                  <p className="mt-4 text-center text-xs text-basil-cream/30">
                    Бронирование с шагом 30 минут
                  </p>
                </div>
              )}

              {/* Step 3: Table selection */}
              {step === 3 && (
                <div>
                  <h3 className="text-center font-serif text-2xl font-normal text-basil-cream sm:text-3xl">
                    Выберите стол
                  </h3>
                  <p className="mt-2 text-center text-xs text-basil-cream/40">
                    {guests} {guests === 1 ? 'гость' : guests < 5 ? 'гостя' : 'гостей'} · {formatDateLong(date)} · {time}
                  </p>

                  {/* Admin confirmation warning */}
                  {requiresAdminConfirm && (
                    <div className="mx-auto mt-4 flex max-w-md items-start gap-2 rounded-lg bg-basil-gold/10 p-3 text-xs text-basil-gold/80">
                      <AlertTriangle size={14} className="mt-0.5 shrink-0" />
                      <span>Эта посадка требует подтверждения администратора. Мы свяжемся с вами дополнительно.</span>
                    </div>
                  )}

                  {/* Combination chips */}
                  {matchingCombos.length > 0 && (
                    <div className="mt-6 flex flex-wrap justify-center gap-2">
                      {matchingCombos.map((combo) => (
                        <button
                          key={combo.id}
                          onClick={() => handleSelectCombo(combo.id)}
                          className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                            selectedComboId === combo.id
                              ? 'bg-basil-gold text-basil-deep'
                              : 'border border-basil-cream/10 text-basil-cream/40 hover:border-basil-gold/40 hover:text-basil-cream/70'
                          }`}
                        >
                          {combo.label}
                          <span className="ml-1.5 text-xs opacity-60">
                            до {combo.capacityMax}
                          </span>
                          {combo.requiresAdminConfirmation && (
                            <span className="ml-1 text-xs text-basil-gold/60">*</span>
                          )}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Floor plan */}
                  <div className="mt-6">
                    <FloorPlan
                      selectedTableIds={selectedTableIds}
                      selectedComboId={selectedComboId}
                      onSelectTable={handleSelectTable}
                      onSelectCombo={handleSelectCombo}
                      availableTableIds={availableTableIds}
                      availableComboIds={availableComboIds}
                      disabled={false}
                    />
                  </div>

                  {/* Selected info */}
                  {(selectedTable || selectedCombo) && (
                    <div className="mt-6 text-center">
                      <p className="text-sm text-basil-cream/60">
                        Выбрано: <span className="text-basil-cream">{formatTableLabel(selectedTableIds)}</span>
                        {selectedTable && selectedTable.defaultDurationHours && (
                          <span className="ml-2 text-basil-cream/40">
                            · {selectedTable.defaultDurationHours} ч
                          </span>
                        )}
                      </p>
                    </div>
                  )}

                  <p className="mt-4 text-center text-xs text-basil-cream/30">
                    Доступность столов уточняется администратором при подтверждении заявки
                  </p>
                </div>
              )}

              {/* Step 4: Contact form */}
              {step === 4 && (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-center font-serif text-2xl font-normal text-basil-cream sm:text-3xl">
                    Ваши данные
                  </h3>

                  {/* Summary */}
                  <div className="mx-auto mt-6 max-w-md space-y-2 rounded-xl border border-basil-cream/8 bg-basil-deep/40 p-5 text-sm">
                    <div className="flex justify-between">
                      <span className="text-basil-cream/40">Дата</span>
                      <span className="text-basil-cream/90">{formatDateLong(date)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-basil-cream/40">Время</span>
                      <span className="text-basil-cream/90">{time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-basil-cream/40">Гости</span>
                      <span className="text-basil-cream/90">{guests}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-basil-cream/40">Стол</span>
                      <span className="text-basil-cream/90">{formatTableLabel(selectedTableIds)}</span>
                    </div>
                  </div>

                  <div className="mx-auto mt-6 max-w-md space-y-4">
                    <div>
                      <label htmlFor="bk-name" className="mb-2 block text-sm text-basil-cream/60">Имя</label>
                      <input
                        id="bk-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Как к вам обращаться"
                        className="w-full rounded-lg border border-basil-cream/15 bg-basil-deep/60 px-4 py-3 text-basil-cream placeholder:text-basil-cream/25 outline-none transition-colors focus:border-basil-gold"
                      />
                    </div>
                    <div>
                      <label htmlFor="bk-phone" className="mb-2 block text-sm text-basil-cream/60">Телефон</label>
                      <input
                        id="bk-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        placeholder="+7 ..."
                        className="w-full rounded-lg border border-basil-cream/15 bg-basil-deep/60 px-4 py-3 text-basil-cream placeholder:text-basil-cream/25 outline-none transition-colors focus:border-basil-gold"
                      />
                    </div>
                    <div>
                      <label htmlFor="bk-comment" className="mb-2 block text-sm text-basil-cream/60">
                        Комментарий <span className="text-basil-cream/30">(необязательно)</span>
                      </label>
                      <textarea
                        id="bk-comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        rows={3}
                        placeholder="Особые пожелания..."
                        className="w-full resize-none rounded-lg border border-basil-cream/15 bg-basil-deep/60 px-4 py-3 text-basil-cream placeholder:text-basil-cream/25 outline-none transition-colors focus:border-basil-gold"
                      />
                    </div>
                  </div>

                  {error && (
                    <p className="mt-4 text-center text-sm text-red-400">{error}</p>
                  )}

                  <div className="mt-6 text-center">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 rounded-full bg-basil-herb px-8 py-4 text-sm font-semibold tracking-wide text-white transition-all hover:bg-basil-mid disabled:opacity-60"
                    >
                      {submitting && <Loader2 size={18} className="animate-spin" />}
                      {submitting ? 'Отправляем...' : 'Отправить заявку'}
                    </button>
                  </div>
                </form>
              )}

              {/* Navigation buttons (hidden on last step — submit is there) */}
              {step < 4 && (
                <div className="mt-8 flex items-center justify-between">
                  <button
                    onClick={prevStep}
                    disabled={step === 0}
                    className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                      step === 0 ? 'invisible' : 'text-basil-cream/50 hover:text-basil-cream'
                    }`}
                  >
                    <ArrowLeft size={16} />
                    Назад
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={!canProceed()}
                    className="inline-flex items-center gap-1.5 rounded-full bg-basil-herb px-6 py-3 text-sm font-semibold tracking-wide text-white transition-all hover:bg-basil-mid disabled:opacity-40"
                  >
                    Далее
                    <ArrowRight size={16} />
                  </button>
                </div>
              )}

              {step === 4 && (
                <div className="mt-6 text-center">
                  <button
                    onClick={prevStep}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-basil-cream/50 transition-colors hover:text-basil-cream"
                  >
                    <ArrowLeft size={16} />
                    Назад
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
