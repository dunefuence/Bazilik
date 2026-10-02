export type Dish = {
  id: string;
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
        id: 'wine-set',
        name: 'Винный гастрономический сет',
        description:
          'Ростбиф из говядины, вяленое утиное магре, гигантские оливки и маслины, фермерский жареный сыр, жареный камамбер, карамель из инжира, вяленые томаты, кешью, дорблю, гель манго-маракуйя, хлеб с оливками и вяленым томатом',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'beer-set',
        name: 'Пивной гастрономический сет',
        description:
          'Сырные шарики, ростбиф из говядины, вяленая куриная грудка, корнишоны, вяленые томаты, соус айоли, крем из кинзы, пшеничные гренки, бородинские гренки, кешью, арахис, кукурузные чипсы, чили кон карне',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'vodka-set',
        name: 'Сет под водку',
        description:
          'Ароматное сало, бородинские гренки, маринованный лук, сливочный хрен, маринованный перец, каперсы, огурцы в бурбоне, молодой картофель с розмарином, брускетты с брискетом и огурцами в бурбоне',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'tuna-tartare',
        name: 'Тартар из тунца с освежающим соусом из огурца и хрена',
        description: 'Тунец, красный лук, чиабатта гриль, соус, зелёное масло, лайм',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'beef-tartare',
        name: 'Тартар из мраморной говядины с каперсами и бататом фри',
        description:
          'Маринованная говядина, красный лук, ароматное масло, каперсы, корнишоны, трюфельное масло, пармезан, батат фри',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'salmon-tartare',
        name: 'Тартар из лосося с авокадо на бриоши с икрой масаго',
        description:
          'Филе лосося, авокадо, красный лук, сливки, сыр страчателла, бриошь, икра тобико',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'crab-tartare',
        name: 'Тартар из краба с авокадо, жареной бриошью, икрой и спайси-соусом',
        description:
          'Мясо камчатского краба, авокадо, ароматное масло, бриошь гриль, икра тобико, спайси-соус, зелёное масло',
        weight: '',
        price: '790 ₽',
        image: '',
      },
      {
        id: 'salmon-carpaccio',
        name: 'Карпаччо из лосося с гелем манго-маракуйя',
        description:
          'Филе лосося с нори, пармезан, оливки, салат-микс, кедровый орех, соус манго-маракуйя, каперсы на ветке',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'beef-carpaccio',
        name: 'Карпаччо из говядины с трюфельным кремом',
        description:
          'Маринованная мраморная говядина, трюфельный крем, пармезан, кедровые орехи, оливковое масло, салат-микс, соус айоли',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'herring-carpaccio',
        name: 'Карпаччо из сельди с бородинскими гренками и молодым картофелем',
        description:
          'Филе сельди, молодой картофель, гренки из бородинского хлеба, соус из огурца и сливочного хрена, салат-микс, каперсы на ветке, зелёное масло',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'cheese-balls',
        name: 'Сырные шарики с клюквенным гелем',
        description: 'Сырные шарики из сулугуни и моцареллы, клюквенный соус',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'fried-camembert',
        name: 'Жареный камамбер с карамелью из инжира',
        description: 'Камамбер в панировке, карамель из инжира, голубика',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'bruscetta-roastbeef',
        name: 'Брускетты с ростбифом и горчичной заправкой',
        description: '',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'bruscetta-shrimp',
        name: 'Брускетты с тигровой креветкой, авокадо, маринованным перепелиным яйцом и сливочным соусом',
        description: '',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'fried-shrimp-beer',
        name: 'Жареные креветки в пивном кляре с соусом сливочный чили',
        description: 'Креветки в кляре, сливочно-чили соус, жареная фунчоза',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'borodino-croutons',
        name: 'Бородинские гренки с сырным соусом и пармезаном',
        description: '',
        weight: '',
        price: '',
        image: '',
      },
    ],
  },
  {
    id: 'salads',
    label: 'Салаты',
    dishes: [
      {
        id: 'vegetable-salad',
        name: 'Салат из свежих овощей с рассольным сыром, пшеничными гренками и каперсами',
        description:
          'Черри, перец, маринованный лук, огурец, фетакса, пшеничные гренки, ароматная заправка, оливки, салат-микс, фисташки',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'green-salad',
        name: 'Большой зелёный салат с бобами эдамаме, авокадо, брокколи гриль и горчичным маслом',
        description:
          'Авокадо, брокколи гриль, салат-микс, семечки подсолнуха, тыквенные семечки, кедровые орехи, ароматная заправка на горчичном масле, огурец, маринованные эдамаме',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'duck-salad',
        name: 'Салат с утиной грудкой и печёной грушей с соусом манго-маракуйя',
        description:
          'Утиное филе, сельдерей, сыр горгонзола, брокколи гриль, печёная груша, салат-микс, гель манго-маракуйя, апельсин',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'seafood-salad',
        name: 'Салат с морепродуктами в сливочном соусе',
        description:
          'Мясо мидий, кальмар, креветки, сливочный соус, салат-микс, томаты черри, авокадо, красный лук, чипсы нори',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'veal-salad',
        name: 'Салат с телятиной под азиатской заправкой с обжаренными баклажанами',
        description:
          'Ростбиф из говядины, баклажан фри, салат-микс, арахис, огурец, азиатский соус, сыр страчателла, томаты черри, красный лук',
        weight: '',
        price: '690 ₽',
        image: '',
      },
      {
        id: 'roastbeef-salad',
        name: 'Салат с ростбифом',
        description:
          'Ростбиф из говядины, вяленые томаты, жареные шампиньоны, битые огурцы, салат-микс, ореховая заправка, томаты черри, ахарис',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'shrimp-mandarin-salad',
        name: 'Салат с креветками, йогуртовым соусом и мандаринами',
        description:
          'Креветки в ароматном масле, йогуртовая заправка, салат-микс, авокадо, спаржа, сегменты мандарина, ароматное масло, соус манго-маракуйя',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'tuna-salad',
        name: 'Салат с жареным тунцом и спаржей',
        description:
          'Филе тунца в кунжуте, заправка из вяленого томата и огурца, перепелиное яйцо, салат-микс, спаржа, томаты черри, арахис',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'chicken-salad',
        name: 'Салат с цыплёнком, молодым картофелем и горчичной заправкой',
        description:
          'Салат-микс, филе цыплёнка, молодой картофель, горчичная заправка, авокадо, красный лук, перепелиное яйцо',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'shrimp-liver-salad',
        name: 'Салат с креветками и печенью трески с обожжённым авокадо',
        description:
          'Креветки в азиатском соусе, печень трески, яйцо пашот, авокадо гриль, красный лук, салат-микс',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'eggplant-salad',
        name: 'Салат с обжаренным баклажаном, томатом и страчателлой в азиатском соусе',
        description:
          'Обжаренные баклажаны, томаты, азиатский соус, сыр страчателла, арахис, кешью, кунжут, салат айсберг',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'crab-salad',
        name: 'Салат с камчатским крабом, томатом и брокколи гриль',
        description:
          'Мясо камчатского краба, томаты черри, брокколи гриль, спайси-соус, икра тобико, салат-микс, салат айсберг',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'scallop-salad',
        name: 'Салат с медальонами из гребешка, жареной спаржей и икорным соусом',
        description: 'Жареный медальон из гребешка, икорный соус, салат-микс, спаржа, авокадо',
        weight: '',
        price: '',
        image: '',
      },
    ],
  },
  {
    id: 'pasta',
    label: 'Паста',
    dishes: [
      {
        id: 'pasta-seafood-cream',
        name: 'Паста с морепродуктами в сливочном соусе',
        description:
          'Фетучини, мясо мидий, кальмар, креветки, сливочный соус, томаты черри, лук-порей, пармезан, чипс нори, белое вино',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'pasta-carbonara',
        name: 'Паста карбонара',
        description: 'Фетучини, бекон, чеснок, лук, белое вино, сливки, желток, пармезан',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'pasta-shrimp-bisque',
        name: 'Паста с креветками в соусе биск с морепродуктами',
        description:
          'Спагетти с чернилами каракатицы, тигровые креветки, сыр страчателла, сливки, томаты черри, чипс нори, белое вино, икра масаго',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'pasta-roastbeef',
        name: 'Паста с ростбифом и сыром страчателла',
        description:
          'Фетучини, ростбиф из говядины, лук-порей, грибы вешенки, сливки, соус демиглас, сыр страчателла',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'pasta-crab',
        name: 'Паста с камчатским крабом, томатом и икорным соусом',
        description:
          'Фетучини, филе камчатского краба, лук-порей, крабовый бульон, спаржа, сливки, икра масаго, томаты черри, икорный соус',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'pasta-brisket',
        name: 'Паста с брискетом из говядины в соусе из печёного чеснока',
        description: 'Фетучини, брискет из говядины, вешенки, лук-порей, сливки, соус из печёного чеснока',
        weight: '',
        price: '',
        image: '',
      },
    ],
  },
  {
    id: 'soups',
    label: 'Супы',
    dishes: [
      {
        id: 'pumpkin-soup',
        name: 'Крем-суп из печёной тыквы с лососем',
        description: 'Крем из печёной тыквы, лосось, тыквенные семечки, салат-микс',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'chowder',
        name: 'Чаудер с морепродуктами и кукурузой гриль',
        description:
          'Сливочный крем-суп, кукуруза гриль, мясо мидий, тигровые креветки, кальмар, зелёное масло, бриошь',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'chicken-noodle-soup',
        name: 'Суп-лапша с филе цыплёнка и перепелиным яйцом',
        description: 'Филе цыплёнка, насыщенный куриный бульон, перепелиное яйцо, бриошь, яичная лапша',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'mushroom-soup',
        name: 'Суп с лесными грибами, птитимом и бриошью',
        description: 'Лесные грибы, шампиньоны, вешенки, овощи, птитим, сметана, бриошь',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'fish-soup',
        name: 'Сливочный суп из трёх видов рыб с томатами и кус-кусом',
        description:
          'Насыщенный рыбный бульон, лосось, палтус, судак, кус-кус, морковь, лук-порей, томаты черри, картофель, бриошь',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'borscht',
        name: 'Борщ с ростбифом, бриошью и смальцем',
        description:
          'Борщ на говяжьем бульоне, ростбиф из говядины, бриошь со смальцем и луковым джемом, сметана',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'solyanka',
        name: 'Солянка мясная с копчёностями',
        description:
          'Насыщенный говяжий бульон, охотничьи колбаски, салями, бекон, вяленая куриная грудка, оливки, маслины, лук, томаты, чиабатта, сметана, перцовая настойка',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'cheese-shrimp-soup',
        name: 'Сырный суп с креветками',
        description:
          'Сливочный суп на креветочном бульоне с овощами, жареные креветки в соусе, пшеничные гренки',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'tom-yum',
        name: 'Том ям с морепродуктами',
        description:
          'Мясо мидий, тигровая креветка, кальмар, перец чили, томаты черри, вешенки, шампиньоны, насыщенный бульон, кинза, рис, кокосовое молоко, сливки',
        weight: '',
        price: '',
        image: '',
      },
    ],
  },
  {
    id: 'fish',
    label: 'Рыба и морепродукты',
    dishes: [
      {
        id: 'baked-mussels',
        name: 'Запечённые мидии',
        description:
          'Мясо мидий киви в сливочно-грибном соусе с запечённой сырной шапочкой',
        weight: '',
        price: '710 ₽',
        image: '',
      },
      {
        id: 'mussels-cream',
        name: 'Мидии в сливочном соусе с чиабаттой',
        description: 'Мясо мидий, сливочно-грибной соус с вешенками, чиабатта',
        weight: '',
        price: '740 ₽',
        image: '',
      },
      {
        id: 'dorado-mushrooms',
        name: 'Филе дорадо с грибным дюкселем, мидиями и картофельным пюре',
        description: '',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'salmon-steak',
        name: 'Стейк из лосося со спаржей гриль и сливочным соусом из вешенок и томлёного лука-порея',
        description: '',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'halibut-steak',
        name: 'Стейк из палтуса с нори, икорным соусом и картофельным пюре',
        description:
          'Томлёный стейк из палтуса, икорный соус, икра масаго, картофельное пюре, зелёное масло',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'dorado-grill',
        name: 'Дорадо на гриле с лимоном и базиликовым соусом',
        description: 'Дорадо гриль, лимон, салат-микс, базиликовый соус',
        weight: '',
        price: '',
        image: '',
      },
    ],
  },
  {
    id: 'mains',
    label: 'Горячие блюда',
    dishes: [
      {
        id: 'beef-tongue',
        name: 'Говяжий язык на гриле с молодым картофелем, розмарином и перечным соусом',
        description: '',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'veal-cheeks',
        name: 'Щёчки телёнка с картофельно-тыквенным пюре и сливочно-мясным соусом демиглас',
        description: '',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'chicken-fillet',
        name: 'Филе цыплёнка с картофельно-трюфельным пюре и соусом из шпината',
        description: '',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'pork-ribs',
        name: 'Глазированные свиные рёбра в азиатской заправке с молодым картофелем и розмарином',
        description: '',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'duck-magret',
        name: 'Утиное магре с винно-карамельным соусом и печёным бататом',
        description: '',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'denver-steak',
        name: 'Стейк денвер с медово-горчичным соусом, бататом фри и пармезаном',
        description: '',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'osso-buco',
        name: 'Оссо буко из телятины с овощным соусом демиглас и картофельным пюре',
        description: '',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'duck-confit',
        name: 'Утиная ножка конфи с пюре из батата и соусом «Жу»',
        description: '',
        weight: '',
        price: '',
        image: '',
      },
    ],
  },
  {
    id: 'desserts',
    label: 'Десерты',
    dishes: [
      {
        id: 'syrniki',
        name: 'Сырники с соусом из вишни и сливочным кремом',
        description: '',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'carrot-cake',
        name: 'Морковный торт со сливочным кремом и сезонной ягодой',
        description: '',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'honey-cake',
        name: 'Классический медовик с малиновым сорбетом и лимонным курдом',
        description: '',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'yogurt-mousse',
        name: 'Йогуртовый мусс с ягодой, матчей и фисташковым кремом',
        description: '',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'brownie',
        name: 'Шоколадный брауни с мороженым и гелем манго-маракуйя',
        description: '',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'cheesecake-mango',
        name: 'Чизкейк манго-маракуйя',
        description: '',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'basque-cheesecake',
        name: 'Баскский чизкейк с солёной карамелью и попкорном',
        description: '',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'ice-cream',
        name: 'Мороженое в ассортименте',
        description: '',
        weight: '',
        price: '',
        image: '',
      },
    ],
  },
  {
    id: 'sides',
    label: 'Гарниры',
    dishes: [
      {
        id: 'fries-parmesan',
        name: 'Картофель фри с пармезаном',
        description: '',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'young-potato',
        name: 'Молодой картофель с розмарином',
        description: '',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'potato-pumpkin-puree',
        name: 'Картофельно-тыквенное пюре',
        description: '',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'mashed-potato',
        name: 'Картофельное пюре',
        description: '',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'potato-truffle-puree',
        name: 'Картофельно-трюфельное пюре',
        description: '',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'broccoli-oil',
        name: 'Брокколи в ароматном масле',
        description: '',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'grilled-vegetables',
        name: 'Овощи на гриле с базиликовым соусом',
        description:
          'Кабачок, баклажан, болгарский перец, красный лук, томаты, базиликовый соус',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'grilled-mushrooms',
        name: 'Шампиньоны на гриле с базиликовым соусом',
        description: '',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'grilled-corn',
        name: 'Кукуруза гриль в ароматном масле с пармезаном и копчёным соусом',
        description: '',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'sweet-potato-fries',
        name: 'Батат фри с пармезаном',
        description: '',
        weight: '',
        price: '',
        image: '',
      },
    ],
  },
  {
    id: 'grill',
    label: 'Гриль',
    dishes: [
      {
        id: 'ribeye',
        name: 'Рибай',
        description:
          'Рекомендуемая прожарка — medium. Стейк подаётся с томлёным красным луком и кукурузой гриль',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'new-york',
        name: 'Нью-Йорк',
        description:
          'Рекомендуемая прожарка — medium. Стейк подаётся с томлёным красным луком и кукурузой гриль',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'filet-mignon',
        name: 'Филе миньон',
        description:
          'Рекомендуемая прожарка — medium. Стейк подаётся с томлёным красным луком и кукурузой гриль',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'chateau-brian',
        name: 'Шато-брийан',
        description:
          'Рекомендуемая прожарка — medium. Стейк подаётся с томлёным красным луком и кукурузой гриль',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'denver',
        name: 'Денвер',
        description:
          'Рекомендуемая прожарка — medium. Стейк подаётся с томлёным красным луком и кукурузой гриль',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'machete',
        name: 'Мачете',
        description:
          'Рекомендуемая прожарка — medium. Стейк подаётся с томлёным красным луком и кукурузой гриль',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'chicken-shashlik',
        name: 'Шашлык из цыплёнка',
        description:
          'Подаётся с лавашом, маринованным луком, томатным соусом и салатом коул-слоу',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'pork-shashlik',
        name: 'Шашлык из свинины',
        description:
          'Подаётся с лавашом, маринованным луком, томатным соусом и салатом коул-слоу',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'lamb-shashlik',
        name: 'Шашлык из баранины',
        description:
          'Подаётся с лавашом, маринованным луком, томатным соусом и салатом коул-слоу',
        weight: '',
        price: '',
        image: '',
      },
      {
        id: 'turkey-shashlik',
        name: 'Шашлык из филе индейки',
        description:
          'Подаётся с лавашом, маринованным луком, томатным соусом и салатом коул-слоу',
        weight: '',
        price: '',
        image: '',
      },
    ],
  },
  {
    id: 'bread',
    label: 'Хлеб',
    dishes: [
      {
        id: 'bread-basket',
        name: 'Хлебная корзина',
        description:
          'Цельнозерновой хлеб, чиабатта, заварной хлеб, бородинский хлеб. Подаётся с ароматным сливочным маслом',
        weight: '',
        price: '',
        image: '',
      },
    ],
  },
  {
    id: 'butter',
    label: 'Ароматное сливочное масло',
    dishes: [
      {
        id: 'butter-tomato',
        name: 'С вялеными томатами и травами',
        description: 'К каждому варианту масла подаются гренки из чиабатты',
        weight: '40 г',
        price: '',
        image: '',
      },
      {
        id: 'butter-provence',
        name: 'С прованскими травами, чесноком и базиликом',
        description: 'К каждому варианту масла подаются гренки из чиабатты',
        weight: '40 г',
        price: '',
        image: '',
      },
      {
        id: 'butter-truffle',
        name: 'Трюфельное',
        description: 'К каждому варианту масла подаются гренки из чиабатты',
        weight: '40 г',
        price: '',
        image: '',
      },
      {
        id: 'butter-smoked-chili',
        name: 'Копчёное с чили',
        description: 'К каждому варианту масла подаются гренки из чиабатты',
        weight: '40 г',
        price: '',
        image: '',
      },
      {
        id: 'butter-blue-cheese',
        name: 'Блю чиз с томлёным луком',
        description: 'К каждому варианту масла подаются гренки из чиабатты',
        weight: '40 г',
        price: '',
        image: '',
      },
    ],
  },
  {
    id: 'sauces',
    label: 'Соусы',
    dishes: [
      {
        id: 'sauce-mushroom',
        name: 'Сливочно-грибной',
        description: '',
        weight: '40 г',
        price: '',
        image: '',
      },
      {
        id: 'sauce-pesto',
        name: 'Песто',
        description: '',
        weight: '40 г',
        price: '',
        image: '',
      },
      {
        id: 'sauce-pepper',
        name: 'Перечный',
        description: '',
        weight: '40 г',
        price: '',
        image: '',
      },
      {
        id: 'sauce-cranberry',
        name: 'Клюквенный',
        description: '',
        weight: '40 г',
        price: '',
        image: '',
      },
      {
        id: 'sauce-tomato',
        name: 'Томатный',
        description: '',
        weight: '40 г',
        price: '',
        image: '',
      },
      {
        id: 'sauce-spinach',
        name: 'Шпинатный с улуном',
        description: '',
        weight: '40 г',
        price: '',
        image: '',
      },
      {
        id: 'sauce-wine-cherry',
        name: 'Винная вишня',
        description: '',
        weight: '40 г',
        price: '',
        image: '',
      },
      {
        id: 'sauce-demiglace',
        name: 'Демиглас',
        description: '',
        weight: '40 г',
        price: '',
        image: '',
      },
      {
        id: 'sauce-cheese',
        name: 'Сырный',
        description: '',
        weight: '40 г',
        price: '',
        image: '',
      },
      {
        id: 'sauce-aioli',
        name: 'Айоли',
        description: '',
        weight: '40 г',
        price: '',
        image: '',
      },
      {
        id: 'sauce-tartare',
        name: 'Тар-тар',
        description: '',
        weight: '40 г',
        price: '',
        image: '',
      },
      {
        id: 'sauce-sriracha',
        name: 'Шрирача',
        description: '',
        weight: '40 г',
        price: '',
        image: '',
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
