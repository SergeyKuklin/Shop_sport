import { Children, ReactNode } from 'react';
import s from './form.module.css';

// type FormProps = {
//     style: string
// }

export const FormBlock = () => {

    return (
        <div>
            <div className={s.formSection}>
                <div className={s.titleForm}>
                    <h2>Подпишись на рассылку</h2>
                    <p>Чтобы всегда быть вкурсе интересного</p>
                </div>
                <form action="#" className={s.formBlock} name='formSub'>
                    <input type="query" placeholder="Ваш Email" required/>
                    <button type="submit" className={s.btnSub}>Подписаться</button>
                    <label form="polity" className={s.polityAccept}>
                        <input type="checkbox" name="polity" required/>
                        <div className={s.checkboxType}></div>
                        Я согласен с политикой обработки и политикой конфиденциальности
                    </label>
                </form>
            </div>
        </div>
    )
}