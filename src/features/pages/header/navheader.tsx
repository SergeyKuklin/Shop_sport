import { useState } from 'react';
import s from './navheader.module.css';


export const NavClotherHeader = () => {


    return (
        <div>
            <div className={s.marginBot}>
                <ul className={s.clothersList}>
                    <li><a href="">Кроссовки</a></li>
                    <li><a href="">Тапочки</a></li>
                    <li><a href="">Куртки</a></li>
                    <li><a href="">Футболки</a></li>
                    <li><a href="">Штаны</a></li>
                    <li><a href="">Шорты</a></li>
                    <li><a href="">Толстовки</a></li>
                    <li><a href="">Аксессуары</a></li>
                </ul>
                <ul className={s.clothersList_top}>
                    <li><a href="#">Оплата и доставка</a></li>
                    <li><a href="#">Обмен и возврат</a></li>
                    <li><a href="#">О компании</a></li>
                    <li><a href="#">Контакты</a></li>
                    <li><a href="#">Оригинал 100%</a></li>
                </ul>
            </div>
        </div>
    )
}