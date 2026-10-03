export type TableShape = 'square' | 'rectangle' | 'circle' | 'bar';

export type RestaurantTable = {
  id: number;
  capacity: number;
  defaultDurationHours: number | null;
  reservable: boolean;
  combinableWith: number[];
  positionX: number;
  positionY: number;
  shape: TableShape;
  width: number;
  height: number;
  label?: string;
};

export type TableCombination = {
  id: string;
  tableIds: number[];
  capacityMin: number;
  capacityMax: number;
  requiresAdminConfirmation: boolean;
  label: string;
};

export type ReservationStatus = 'new' | 'pending' | 'confirmed' | 'rejected' | 'cancelled';

export type TableAvailability = 'available' | 'selected' | 'unavailable' | 'reserved' | 'pending';

export const RESTAURANT_TABLES: RestaurantTable[] = [
  { id: 1,  capacity: 6, defaultDurationHours: 4,    reservable: true,  combinableWith: [2],       positionX: 72, positionY: 78, shape: 'square',    width: 12, height: 10 },
  { id: 2,  capacity: 6, defaultDurationHours: 4,    reservable: true,  combinableWith: [1],       positionX: 72, positionY: 22, shape: 'square',    width: 12, height: 10 },
  { id: 3,  capacity: 4, defaultDurationHours: 3,    reservable: true,  combinableWith: [4, 5],    positionX: 30, positionY: 12, shape: 'square',    width: 10, height: 10 },
  { id: 4,  capacity: 4, defaultDurationHours: 3,    reservable: true,  combinableWith: [3, 5],    positionX: 48, positionY: 12, shape: 'square',    width: 10, height: 10 },
  { id: 5,  capacity: 4, defaultDurationHours: 3,    reservable: true,  combinableWith: [3, 4],    positionX: 66, positionY: 12, shape: 'square',    width: 10, height: 10 },
  { id: 6,  capacity: 2, defaultDurationHours: null, reservable: true,  combinableWith: [],        positionX: 28, positionY: 42, shape: 'square',    width: 8,  height: 8 },
  { id: 7,  capacity: 2, defaultDurationHours: null, reservable: true,  combinableWith: [],        positionX: 42, positionY: 42, shape: 'square',    width: 8,  height: 8 },
  { id: 8,  capacity: 4, defaultDurationHours: 3,    reservable: true,  combinableWith: [9],       positionX: 58, positionY: 42, shape: 'square',    width: 10, height: 10 },
  { id: 9,  capacity: 4, defaultDurationHours: 3,    reservable: true,  combinableWith: [8],       positionX: 74, positionY: 42, shape: 'square',    width: 10, height: 10 },
  { id: 10, capacity: 4, defaultDurationHours: 3,    reservable: true,  combinableWith: [11],      positionX: 28, positionY: 72, shape: 'square',    width: 10, height: 10 },
  { id: 11, capacity: 2, defaultDurationHours: null, reservable: true,  combinableWith: [10],      positionX: 44, positionY: 72, shape: 'square',    width: 8,  height: 8 },
  { id: 12, capacity: 0, defaultDurationHours: null, reservable: false, combinableWith: [],        positionX: 50, positionY: 92, shape: 'bar',       width: 60, height: 5,  label: 'Бар' },
];

export const TABLE_COMBINATIONS: TableCombination[] = [
  { id: 'combo-1-2',    tableIds: [1, 2],       capacityMin: 12, capacityMax: 13, requiresAdminConfirmation: false, label: 'Столы 1+2' },
  { id: 'combo-8-9',    tableIds: [8, 9],       capacityMin: 8,  capacityMax: 8,  requiresAdminConfirmation: false, label: 'Столы 8+9' },
  { id: 'combo-10-11',  tableIds: [10, 11],     capacityMin: 6,  capacityMax: 6,  requiresAdminConfirmation: false, label: 'Столы 10+11' },
  { id: 'combo-3-4-5',  tableIds: [3, 4, 5],    capacityMin: 14, capacityMax: 16, requiresAdminConfirmation: true,  label: 'Столы 3+4+5' },
];

export const TIME_SLOTS: string[] = [
  '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
  '20:00', '20:30', '21:00', '21:30', '22:00', '22:30',
];

export function getTablesForGuests(guests: number): { tables: RestaurantTable[]; combos: TableCombination[] } {
  const tables = RESTAURANT_TABLES.filter(
    (t) => t.reservable && t.capacity >= guests
  );
  const combos = TABLE_COMBINATIONS.filter(
    (c) => guests >= c.capacityMin && guests <= c.capacityMax
  );
  return { tables, combos };
}

export function formatTableLabel(tableIds: number[]): string {
  if (tableIds.length === 1) return `Стол №${tableIds[0]}`;
  return `Столы ${tableIds.join('+')}`;
}

export function formatDateLong(dateStr: string): string {
  const months = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
  ];
  const d = new Date(dateStr + 'T00:00:00');
  return `${d.getDate()} ${months[d.getMonth()]}`;
}
