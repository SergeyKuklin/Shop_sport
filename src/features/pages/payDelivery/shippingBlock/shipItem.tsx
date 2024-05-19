import { ShipData } from "./shipData";
import s from './shipping.module.css';
import coverImg from './image/model-wearing-purple-sneakers-women-s-apparel 1.png';
import { ButtonGrey } from "features/shared/components/button/btn";

export const ShipItem = () => {

    const shipping = ShipData.map((index) => (
        <>
            <p className={s.titleShip}>{index.titleShip}</p>
            <p className={s.textShip}>{index.text}</p>
        </>
    ));

    return (
        <div>
            <div className={s.contentShip}>
                
                <div className={s.flexShip}>
                    <div>
                        <div className={s.titleShipBlock}>
                        <h2>Условия доставки</h2>
                        <p>Мы передаем заказы в курьерские службы только по будням. Если ваш заказ собран в пятницу после 11:00, мы отправим его в понедельник.</p>
                        </div>
                        {shipping}
                    </div>
                    <div className={s.shipBanner}>
                        <img src={coverImg} alt="" />
                        <p>Оригинальные вещи с доставкой на дом!</p>
                        <div className={s.btnShip}>
                            <ButtonGrey text="Выбрать"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}