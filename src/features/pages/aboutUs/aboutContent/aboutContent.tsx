import s from './aboutContent.module.css';
import '../../../shared/index.module.css';
import coverImg from './image/3245123 1.png';

export const AboutContent = () => {
    return (
        <div>
            <div className={s.aboutBanner}>
                <div className={s.aboutBannerText}>
                    <h2>О компании</h2>
                    <p>Мультибрендовый магазин одежды, обуви, аксессуаров. 
OG Style представляет лучшие модели кроссовок, актуальную обувь, одежду в спортивном стиле и аксессуары. Ассортимент OG Style формируется из ключевых новинок известных спортивных производителей и товаров от брендов категории лайфстайл. Наша миссия: популяризация кроссовок, как неотъемлемой части гардероба современного человека. Все вещи оригинал 100%</p>
                    <div className={s.aboutExp}>
                        <div>5 лет</div>
                        <div>1000+</div>
                        <div>6+</div>
                    </div>
                </div>
                <div>
                    <img src={coverImg} alt="" />
                </div>
            </div>
        </div>
    )
}