import s from '../contact.module.css';
import imgBg from '../image/0001.png';

export const ContactContent = () => {
    return (
        <div className={s.contactBlock}>
                <div>
                    <h2>Контакты</h2>
                    <div className={s.contactInfoBlock}>
                        <div className={s.contactSpace}>
                            <p>Балашиха</p>
                            <p>420000, Россия, город Балашиха , ул. Кожедуба 8</p>
                        </div>
                        <div className={s.contactItemBlock}>
                            <div>
                                <p>Телефон</p>
                                <p>E-mail</p>
                                <p>Режим работы</p>
                            </div>
                            <div>
                                <p>+7 (902) 041-63-39</p>
                                <p>info@ogstyle.ru.</p>
                                <p>Мы ждем вас ежедневно с 08:00 до 20:00 без перерывов и выходных</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.imageBlock}>
                    <img src={`${imgBg}`} alt="" />
                </div>
            </div>
    )
}