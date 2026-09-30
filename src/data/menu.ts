export type Dish = {
  name: string;
  description: string;
  weight: string;
  price: string;
  image: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  dishes: Dish[];
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'starters',
    label: 'Закуски',
    dishes: [
      {
        name: 'Брускетта с тартаром',
        description: 'Поджаренный хлеб, тартар из говядины, каперсы, руккола',
        weight: '180 г',
        price: '—',
        image:
          'https://images.pexels.com/photos/12775025/pexels-photo-12775025.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      },
      {
        name: 'Карпаччо из говядины',
        description: 'Тонкие слайсы сырой говядины, пармезан, оливковое масло',
        weight: '120 г',
        price: '—',
        image:
          'https://images.pexels.com/photos/6488855/pexels-photo-6488855.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      },
      {
        name: 'Сырная тарелка',
        description: 'Подборка сыров, мёд, орехи, виноград',
        weight: '250 г',
        price: '—',
        image:
          'https://images.pexels.com/photos/39122376/pexels-photo-39122376.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      },
    ],
  },
  {
    id: 'salads',
    label: 'Салаты',
    dishes: [
      {
        name: 'Салат с тёплой говядиной',
        description: 'Говядина гриль, микс салатов, томаты, соус из горчицы',
        weight: '220 г',
        price: '—',
        image:
          'https://images.pexels.com/photos/5638515/pexels-photo-5638515.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      },
      {
        name: 'Цезарь с курицей',
        description: 'Куриное филе, романо, пармезан, гренки, цезарь-соус',
        weight: '200 г',
        price: '—',
        image:
          'https://images.pexels.com/photos/28376184/pexels-photo-28376184.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      },
    ],
  },
  {
    id: 'soups',
    label: 'Супы',
    dishes: [
      {
        name: 'Крем-суп из тыквы',
        description: 'Тыква, сливки, тыквенные семечки, масло',
        weight: '280 г',
        price: '—',
        image:
          'https://images.pexels.com/photos/27950501/pexels-photo-27950501.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      },
    ],
  },
  {
    id: 'mains',
    label: 'Горячие блюда',
    dishes: [
      {
        name: 'Мясное ассорти',
        description: 'Подача на двоих: рёбра, колбаски, медальон, соусы',
        weight: '600 г',
        price: '—',
        image:
          'https://images.pexels.com/photos/28705621/pexels-photo-28705621.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      },
      {
        name: 'Утиная грудка',
        description: 'Утиная грудка, пюре из сельдерея, вишнёвый соус',
        weight: '250 г',
        price: '—',
        image:
          'https://images.pexels.com/photos/27774175/pexels-photo-27774175.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      },
    ],
  },
  {
    id: 'grill',
    label: 'Гриль',
    dishes: [
      {
        name: 'Стейк Рибай',
        description: 'Стейк из мраморной говядины на углях, масло с травами',
        weight: '350 г',
        price: '—',
        image:
          'https://images.pexels.com/photos/36683024/pexels-photo-36683024.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      },
      {
        name: 'Свиные рёбра на гриле',
        description: 'Рёбра, маринад BBQ, свежие овощи',
        weight: '400 г',
        price: '—',
        image:
          'https://images.pexels.com/photos/18824020/pexels-photo-18824020.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      },
      {
        name: 'Стейк Флорентийский',
        description: 'Толстый стейк на кости, розмарин, морская соль',
        weight: '500 г',
        price: '—',
        image:
          'https://images.pexels.com/photos/36966089/pexels-photo-36966089.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      },
    ],
  },
  {
    id: 'pasta',
    label: 'Паста',
    dishes: [
      {
        name: 'Равиоли с сыром',
        description: 'Равиоли, томатный крем-соус, базилик, пармезан',
        weight: '280 г',
        price: '—',
        image:
          'https://images.pexels.com/photos/20545314/pexels-photo-20545314.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      },
      {
        name: 'Спагетти с базиликом',
        description: 'Спагетти, томаты, моцарелла, свежий базилик',
        weight: '250 г',
        price: '—',
        image:
          'https://images.pexels.com/photos/1087910/pexels-photo-1087910.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      },
    ],
  },
  {
    id: 'desserts',
    label: 'Десерты',
    dishes: [
      {
        name: 'Десерт дня',
        description: 'Спросите у официанта десерт от шеф-кондитера',
        weight: '150 г',
        price: '—',
        image:
          'https://images.pexels.com/photos/33033817/pexels-photo-33033817.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      },
    ],
  },
  {
    id: 'drinks',
    label: 'Напитки',
    dishes: [
      {
        name: 'Авторский лимонад',
        description: 'Базилик, цитрус, мёд — освежает в любой сезон',
        weight: '400 мл',
        price: '—',
        image:
          'https://images.pexels.com/photos/12181301/pexels-photo-12181301.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      },
    ],
  },
  {
    id: 'bar',
    label: 'Бар',
    dishes: [
      {
        name: 'Эспрессо мартини',
        description: 'Водка, кофе, сливки, кофейные зёрна',
        weight: '120 мл',
        price: '—',
        image:
          'https://images.pexels.com/photos/15750737/pexels-photo-15750737.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      },
      {
        name: 'Виски сауэр',
        description: 'Бурбон, лимон, сахар, ангостура',
        weight: '120 мл',
        price: '—',
        image:
          'https://images.pexels.com/photos/4485391/pexels-photo-4485391.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      },
      {
        name: 'Авторский коктейль',
        description: 'Спросите у бармена коктейль дня',
        weight: '150 мл',
        price: '—',
        image:
          'https://images.pexels.com/photos/10499359/pexels-photo-10499359.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      },
    ],
  },
];

export type Recommendation = {
  name: string;
  category: string;
  description: string;
  weight: string;
  price: string;
  image: string;
  featured?: boolean;
};

export const RECOMMENDATIONS: Recommendation[] = [
  {
    name: 'Мясное ассорти',
    category: 'Горячие блюда',
    description: 'Подача на двоих: рёбра, колбаски, медальон, фирменные соусы',
    weight: '600 г',
    price: '—',
    image:
      'https://images.pexels.com/photos/28705621/pexels-photo-28705621.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000',
    featured: true,
  },
  {
    name: 'Стейк Рибай',
    category: 'Гриль',
    description: 'Стейк из мраморной говядины на углях, масло с травами',
    weight: '350 г',
    price: '—',
    image:
      'https://images.pexels.com/photos/36683024/pexels-photo-36683024.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
  },
  {
    name: 'Карпаччо из говядины',
    category: 'Закуски',
    description: 'Тонкие слайсы сырой говядины, пармезан, оливковое масло',
    weight: '120 г',
    price: '—',
    image:
      'https://images.pexels.com/photos/6488855/pexels-photo-6488855.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
  },
  {
    name: 'Эспрессо мартини',
    category: 'Бар',
    description: 'Водка, кофе, сливки, кофейные зёрна',
    weight: '120 мл',
    price: '—',
    image:
      'https://images.pexels.com/photos/15750737/pexels-photo-15750737.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
  },
];

export const GALLERY_IMAGES = [
  {
    src: 'https://images.pexels.com/photos/11923047/pexels-photo-11923047.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    alt: 'Уютный интерьер ресторана с тёплым светом',
  },
  {
    src: 'https://images.pexels.com/photos/4997854/pexels-photo-4997854.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    alt: 'Тёмный зал с растениями и свечами',
  },
  {
    src: 'https://images.pexels.com/photos/18824031/pexels-photo-18824031.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    alt: 'Стейки на гриле',
  },
  {
    src: 'https://images.pexels.com/photos/15750737/pexels-photo-15750737.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    alt: 'Бармен готовит коктейль',
  },
  {
    src: 'https://images.pexels.com/photos/1872889/pexels-photo-1872889.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    alt: 'Сервировка стола с вином и свечами',
  },
  {
    src: 'https://images.pexels.com/photos/29222614/pexels-photo-29222614.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    alt: 'Современный зал ресторана',
  },
  {
    src: 'https://images.pexels.com/photos/12688995/pexels-photo-12688995.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    alt: 'Банкетный зал с декором',
  },
  {
    src: 'https://images.pexels.com/photos/18823967/pexels-photo-18823967.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    alt: 'Летняя веранда с тёплым светом',
  },
  {
    src: 'https://images.pexels.com/photos/3324441/pexels-photo-3324441.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    alt: 'Детали бара — бутылки и свет',
  },
  {
    src: 'https://images.pexels.com/photos/19300593/pexels-photo-19300593.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    alt: 'Официант в тёплом свете ресторана',
  },
];

export const TERRACE_IMAGES = [
  {
    src: 'https://images.pexels.com/photos/18823967/pexels-photo-18823967.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    alt: 'Вечер на веранде',
  },
  {
    src: 'https://images.pexels.com/photos/18823960/pexels-photo-18823960.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    alt: 'Уютные кресла на террасе',
  },
  {
    src: 'https://images.pexels.com/photos/18823963/pexels-photo-18823963.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    alt: 'Столики на летней веранде',
  },
];

export const ABOUT_IMAGES = {
  interior:
    'https://images.pexels.com/photos/11923047/pexels-photo-11923047.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000',
  food: 'https://images.pexels.com/photos/28705621/pexels-photo-28705621.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000',
  bar: 'https://images.pexels.com/photos/11828428/pexels-photo-11828428.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000',
  atmosphere:
    'https://images.pexels.com/photos/1850600/pexels-photo-1850600.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000',
};

export const HERO_IMAGE =
  'https://images.pexels.com/photos/4997854/pexels-photo-4997854.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920';

export const BANQUET_IMAGE =
  'https://images.pexels.com/photos/12688995/pexels-photo-12688995.jpeg?auto=compress&cs=tinysrgb&h=1000&w=1600';

export const BANQUET_TYPES = [
  'Свадьба',
  'День рождения',
  'Юбилей',
  'Корпоратив',
  'Фуршет',
  'Другое',
];

export const BANQUET_FEATURES = [
  { title: 'Меню мероприятия', text: 'Обсудим подбор блюд под формат и бюджет' },
  { title: 'Сервировка', text: 'Поможем подобрать оформление столов' },
  { title: 'Напитки', text: 'Составим карту напитков для гостей' },
  { title: 'Формат рассадки', text: 'Продумаем рассадку под количество гостей' },
  { title: 'Музыкальное сопровождение', text: 'Возможна организация музыкального оформления' },
  { title: 'Организация пространства', text: 'Поможем зонировать зал под сценарий вечера' },
];
