import clock from "./assets/images/clock.png";

import classic from "./assets/images/classic.png";
import trade from "./assets/images/trade.png";
import vabank from "./assets/images/vabank.png";
import profile from "./assets/images/profile.png";

export const free = 100000;
export const use = 200000;

export const event = [
  {
    img: clock,
    lot: "Антикварные часы",
    product: "Классический",
    status: "Завершён",
    capital: "75 000",
    payment: "75 000",
    profit: "10 000",
  },
  {
    img: clock,
    lot: "Антикварные часы",
    product: "Трейдерский",
    status: "В работе",
    capital: "75 000",
    payment: "75 000",
    profit: "10 000",
  },
  {
    img: clock,
    lot: "Антикварные часы",
    product: "Ва-банк",
    status: "В работе",
    capital: "75 000",
    payment: "75 000",
    profit: "10 000",
  },
  {
    img: clock,
    lot: "Антикварные часы",
    product: "Классический",
    status: "В работе",
    capital: "75 000",
    payment: "75 000",
    profit: "10 000",
  },
];

export const investmentCard = [
  {
    service: "Онлайн",
    description:
      "Работа полностью онлайн. Зачисление и вывод денег онлайн. Срок вывода денег 5 дней",
  },
  {
    service: "Инвестирование с высокой доходностью",
    description:
      "Несколько продуктов позволяют учесть ваш аппетит к риску и доходности. Наши клиенты получают доходность от 2% до 40% в месяц в рублях",
  },
  {
    service: "Систематизация уникальных знаний для роста доходности",
    description:
      "Мы постоянно наращиваем экспертизу оценки с помощью ИТ-технологий, экспертов антикварного рынка и нашего опыта.",
  },
  {
    service: "Гарантии",
    description:
      "Личные гарантии учредителей фонда возврата инвестированных средств",
  },
];

export const lots = [
  {
    img: clock,
    lot: "Антикварные часы",
    product: "Классический",
    status: "Завершён",
    capital: "75 000",
    payment: 75000,
    profit: "10 000",
  },
  {
    img: clock,
    lot: "Антикварные часы",
    product: "Трейдерский",
    status: "В работе",
    capital: "75 000",
    payment: 75000,
    profit: "10 000",
  },
  {
    img: clock,
    lot: "Антикварные часы",
    product: "Ва-банк",
    status: "В работе",
    capital: "75 000",
    payment: 75000,
    profit: "10 000",
  },
  {
    img: clock,
    lot: "Антикварные часы",
    product: "Классический",
    status: "В работе",
    capital: "75 000",
    payment: 75000,
    profit: "10 000",
  },

  {
    img: clock,
    lot: "Антикварные часы",
    product: "Классический",
    status: "В работе",
    capital: "75 000",
    payment: 0,
    profit: "10 000",
  },

  {
    img: clock,
    lot: "Антикварные часы",
    product: "Классический",
    status: "В работе",
    capital: "75 000",
    payment: 0,
    profit: "10 000",
  },
];

export const productData = [
  {
    img: classic,
    notification: "Продукт Классический Фиксированный доход 2% в месяц",
    product: "Классический",
    sum: "75 000",
    profit: "10 000",
    payment: 2000,
    term: '20 дней',
  },
  {
    img: trade,
    notification:
      "Продукт Трейдерский 10% от объема инвестиции срок до 3х месяцев",
    product: "Трейдерский",
    sum: "75 000",
    profit: "10 000",
    payment: 0,
    term: '20 дней',
  },
  {
    img: vabank,
    notification: "Продукт Ва-банк Высокорисковый продукт. 40% от прибыли.",
    product: "Ва-банк",
    sum: "75 000",
    profit: "10 000",
    payment: 0,
    term: '20 дней',
  },
];

export const productCard = [
  {
    title: "Актиные лоты",
    data: 25,
  },
  {
    title: "Количество вложений",
    data: 25,
  },
  {
    title: "Инвестировано",
    data: "250 000 ₽",
  },
  {
    title: "Общая доходность",
    data: "375 000 ₽",
  },
];

/**админ**/
/**все пользователи**/

export const allusers = [
  {
    img2: profile,
    img: clock,
    name: "Иванов Иван Иванович",
    id: "id_8985421",
    role: "Администратор",
    idBriefcase: "id_8985421",
  },
  {
    img2: profile,
    img: clock,
    name: "Иванов Иван Иванович",
    id: "id_8985421",
    role: "Скаут",
    idBriefcase: "id_8985421",
  },
  {
    img2: profile,
    img: clock,
    name: "Иванов Иван Иванович",
    id: "id_8985421",
    role: "Инвестор",
    idBriefcase: "id_8985421",
  },
  {
    img2: profile,
    img: clock,
    name: "Иванов Иван Иванович",
    id: "id_8985421",
    role: "Администратор",
    idBriefcase: "id_8985421",
  },
];
