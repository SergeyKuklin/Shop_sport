import s from './payblock.module.css';
import payOnline from '../image/pay_online.png';
import payMoney from '../image/pay_money.png';
import payMail from '../image/pay_mail.png';
import payCredit from '../image/pay_credit.png';

export const PayBlock = () => {
    return (
        <div>
            <div>
                <h1>Оплата</h1>
                <div className={s.payList}>
                    <div>
                        <img src={payOnline} alt="" />
                        <p>Оплата онлайн</p>
                        <p>Отплата банковскими картами VISA, MasterCard, платежной системой «Мир»</p>
                    </div>
                    <div>
                        <img src={payMoney} alt="" />
                        <p>Оплата наличными</p>
                        <p>Оплатить покупки наличными можно при получении в постомате или курьером</p>
                    </div>
                    <div>
                        <img src={payMail} alt="" />
                        <p>Наложенный платеж</p>
                        <p>Оплата наложенным платежом курьеру СДЕК, либо курьеру Почты России</p>
                    </div>
                    <div>
                        <img src={payCredit} alt="" />
                        <p>Рассрочка</p>
                        <p>Вы можете оплатить в рассрочку заказ на сумму от 1000 рублей</p>
                    </div>
                </div>
            </div>
        </div>
    )
}