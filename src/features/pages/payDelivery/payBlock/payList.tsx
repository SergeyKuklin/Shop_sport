import { Pay } from "./payType";

export const payList: Pay [] = [
    {
        id: 1,
        coverImg: "payOnline",
        titlePay: "Оплата онлайн",
        textPay: "Отплата банковскими картами VISA, MasterCard, платежной системой «Мир»"
    },
    {
        id: 2,
        coverImg: "payMoney",
        titlePay: "Оплата наличными",
        textPay: "Оплатить покупки наличными можно при получении в постомате или курьером",
    },
    {
        id: 3,
        coverImg: "payMail",
        titlePay: "Наложенный платеж",
        textPay: "Оплата наложенным платежом курьеру СДЕК, либо курьеру Почты России",
    },
    {
        id: 4,
        coverImg: "payCredit",
        titlePay: "рассрочка",
        textPay: "Вы можете оплатить в рассрочку заказ на сумму от 1000 рублей",
    }
]