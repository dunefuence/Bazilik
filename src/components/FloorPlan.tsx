import { RESTAURANT_TABLES, TABLE_COMBINATIONS } from '@/data/booking';
import type { RestaurantTable, TableAvailability } from '@/data/booking';

type FloorPlanProps = {
  selectedTableIds: number[];
  selectedComboId: string | null;
  onSelectTable: (table: RestaurantTable) => void;
  onSelectCombo: (comboId: string) => void;
  availableTableIds: Set<number>;
  availableComboIds: Set<string>;
  disabled: boolean;
};

export default function FloorPlan({
  selectedTableIds,
  selectedComboId,
  onSelectTable,
  onSelectCombo,
  availableTableIds,
  availableComboIds,
  disabled,
}: FloorPlanProps) {
  const isTableSelected = (id: number) => selectedTableIds.includes(id);
  const isTableInCombo = (id: number) => {
    const combo = TABLE_COMBINATIONS.find((c) => c.id === selectedComboId);
    return combo ? combo.tableIds.includes(id) : false;
  };

  const getTableState = (table: RestaurantTable): TableAvailability => {
    if (!table.reservable) return 'unavailable';
    if (isTableSelected(table.id) || isTableInCombo(table.id)) return 'selected';
    if (!availableTableIds.has(table.id)) return 'unavailable';
    return 'available';
  };

  const tableColors: Record<TableAvailability, string> = {
    available: 'border-basil-cream/20 bg-basil-cream/5 hover:border-basil-gold/50 hover:bg-basil-cream/10 cursor-pointer',
    selected: 'border-basil-gold bg-basil-gold/20 cursor-pointer',
    unavailable: 'border-basil-cream/10 bg-basil-cream/[0.03] opacity-40 cursor-not-allowed',
    reserved: 'border-basil-herb/30 bg-basil-herb/10 opacity-50 cursor-not-allowed',
    pending: 'border-basil-gold/30 bg-basil-gold/5 opacity-60 cursor-not-allowed',
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-basil-cream/8 bg-basil-deep/30 p-4 sm:p-6">
      {/* Floor plan canvas */}
      <div className="relative mx-auto aspect-[4/3] w-full max-w-2xl">
        <div className="absolute inset-0 rounded-xl border border-basil-cream/5 bg-basil-deep/20" />

        {/* Tables */}
        {RESTAURANT_TABLES.map((table) => {
          const state = getTableState(table);
          const isBar = table.shape === 'bar';
          const isInCombo = isTableInCombo(table.id);

          return (
            <button
              key={table.id}
              disabled={disabled || !table.reservable || (!availableTableIds.has(table.id) && !isTableSelected(table.id) && !isInCombo)}
              onClick={() => {
                if (isInCombo) {
                  onSelectCombo(selectedComboId!);
                } else {
                  onSelectTable(table);
                }
              }}
              className={`absolute flex flex-col items-center justify-center rounded-lg border-2 transition-all duration-200 ${
                tableColors[state]
              } ${isBar ? 'rounded-full' : ''} ${
                isTableSelected(table.id) || isInCombo ? 'shadow-lg shadow-basil-gold/20' : ''
              }`}
              style={{
                left: `${table.positionX}%`,
                top: `${table.positionY}%`,
                width: `${table.width}%`,
                height: `${table.height}%`,
                transform: 'translate(-50%, -50%)',
              }}
              aria-label={isBar ? 'Бар' : `Стол №${table.id}, ${table.capacity} гостей`}
            >
              {!isBar && (
                <>
                  <span className={`font-serif text-sm font-medium sm:text-base ${
                    state === 'selected' ? 'text-basil-gold' : 'text-basil-cream/70'
                  }`}>
                    {table.id}
                  </span>
                  <span className={`text-[10px] sm:text-xs ${
                    state === 'selected' ? 'text-basil-gold/80' : 'text-basil-cream/35'
                  }`}>
                    {table.capacity} мест
                  </span>
                </>
              )}
              {isBar && (
                <span className="text-xs font-medium tracking-wider text-basil-cream/30">
                  {table.label}
                </span>
              )}
            </button>
          );
        })}

        {/* Combination connector lines */}
        {selectedComboId && (() => {
          const combo = TABLE_COMBINATIONS.find((c) => c.id === selectedComboId);
          if (!combo) return null;
          const tables = combo.tableIds
            .map((id) => RESTAURANT_TABLES.find((t) => t.id === id))
            .filter((t): t is RestaurantTable => t !== undefined);
          if (tables.length < 2) return null;

          return (
            <svg className="pointer-events-none absolute inset-0 h-full w-full">
              {tables.map((t, i) => {
                if (i === 0) return null;
                const prev = tables[i - 1];
                return (
                  <line
                    key={`${prev.id}-${t.id}`}
                    x1={`${prev.positionX}%`}
                    y1={`${prev.positionY}%`}
                    x2={`${t.positionX}%`}
                    y2={`${t.positionY}%`}
                    stroke="#b8995a"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    opacity="0.5"
                  />
                );
              })}
            </svg>
          );
        })()}
      </div>

      {/* Legend */}
      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-basil-cream/40">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded border-2 border-basil-cream/20 bg-basil-cream/5" />
          Свободен
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded border-2 border-basil-gold bg-basil-gold/20" />
          Выбран
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded border-2 border-basil-cream/10 bg-basil-cream/[0.03] opacity-40" />
          Недоступен
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-5 rounded-full border-2 border-basil-cream/10 bg-basil-cream/[0.03] opacity-40" />
          Бар
        </div>
      </div>
    </div>
  );
}
