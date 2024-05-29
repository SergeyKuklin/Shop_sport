import s from './trueSign.module.css';
import Smart from './smart.png';

export const TrueSign = () => {
    return (
        <div>
            <div className={s.serfBlock}>
                <div className={s.srefImg}>
                    <img src={Smart} alt="" />
                </div>
                <p className={s.serfText}>
                    Совершая покупки в OGstyle,  
                    <span> вы приобретаете оригинальный и сертифицированный товар.</span> Вся продукция промаркирована в соответствии с законодательством и может быть идентифицирована в системе Честный ЗНАК.
                </p>
            </div>
        </div>
    )
}