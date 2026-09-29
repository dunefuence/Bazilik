export const RESTAURANT = {
  name: 'БАЗИЛИК',
  tagline: 'Ресторан-грилль-бар',
  city: 'Тамбов',
  address: 'ул. Селезнёвская, 2А',
  addressFull: 'г. Тамбов, ул. Селезнёвская, 2А',
  phone: '55-82-53',
  phoneHref: 'tel:+74752558253',
  hours: [
    { days: 'Вс–Чт', time: '11:00–23:00' },
    { days: 'Пт–Сб', time: '11:00–00:00' },
  ],
  socials: [
    { label: 'VK', href: '#' },
    { label: 'Telegram', href: '#' },
  ],
  mapQuery: 'Тамбов, ул. Селезнёвская, 2А',
  mapEmbed:
    'https://yandex.ru/map-widget/v1/?text=Тамбов%2C%20ул.%20Селезнёвская%2C%202А&z=16',
} as const;

export const NAV_LINKS = [
  { label: 'О ресторане', href: '#about' },
  { label: 'Меню', href: '#menu' },
  { label: 'Банкеты', href: '#banquets' },
  { label: 'Атмосфера', href: '#atmosphere' },
  { label: 'Контакты', href: '#contacts' },
] as const;
