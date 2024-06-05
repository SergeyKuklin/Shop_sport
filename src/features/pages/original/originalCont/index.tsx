import s from './index.module.css';
import trueSignImg from '../image/true_sign.png';
import boxYellow from '../image/Yellow_Box.png';
import boxSign from '../image/phone_box.png';
import boxChek from '../image/box_chek.png';
import androinImg from '../image/google-play.png';
import iosImg from '../image/app-store.png';
import { FormBlock } from 'features/shared/components/sliderIcon/form/form';

export const OriginalContent = () => {
    return (
        <div>
            <div>
                <div className={s.bannerBlock}>
                    <h2>
                        Только оригинальная одежда и обувь
                    </h2>
                    <p>
                        Многие задаются вопросом – «Оригинал или подделка?», и это абсолютно справедливо, когда на рынке много фейкового товара, который, зачастую, стоит как оригинальный!
                    </p>
                    <div className={s.bannerPostScript}>
                        <p>Мы ручаемся за подлинность всей своей продукции и подтверждаем это вместе с Честным ЗНАКОМ. С 1 июля 2020 года вся обувь, и часть одежды, импортированные на территорию Российской Федерации, подлежат обязательной маркировке в национальной системе Честный ЗНАК.</p>
                    </div>
                </div>

                <div className={s.trueOriginalBlock}>
                    <h2>Как проверить подлинность</h2>
                    <div className={s.originalBlock}>
                        <div className={s.originalItem}>
                            <h3 className={s.h3_1}>Скачай приложение “Честный ЗНАК”</h3>
                            <p>Приложение работает на всех смартфонах.</p>
                            <div className={s.item_1}>
                                <img src={trueSignImg} alt="" />
                                <img src={androinImg} alt="" />
                                <img src={iosImg} alt="" />
                            </div>
                        </div>
                        <div className={s.originalItem}>
                            <h3 className={s.h3_2}>Найди специальный кодмаркировки Data Matrix</h3>
                            <div className={s.itemFlex}>
                                <p>Он похож на обычный QR код и чаще всего размещен на торце коробки. А некоторые бренды наносят его на ярлыки внутри кроссовок.</p>
                                <img src={boxYellow} alt="" />
                            </div>
                        </div>
                        <div className={s.originalItem}>
                            <h3 className={s.h3_3}>Отсканируй код Data Matrix</h3>
                            <div className={s.itemFlex}>
                                <p>Открой приложение, следуй инструкциям и сканируй код с его помощью. Внутри приложения есть подробная информация как проверить подлинность товара и идентифицировать его</p>
                                <img src={boxSign} alt="" />
                            </div>
                        </div>
                        <div className={s.originalItem}>
                            <h3 className={s.h3_4}>Проверь результат</h3>
                            <div className={s.itemFlex}>
                                <p>Сравни описание товара в приложении Честный ЗНАК с информацией на этикетках и лично убедись что товар является на 100% оригинальным и все данные полностью данные совпали!</p>
                                <img src={boxChek} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <FormBlock />
            </div>
        </div>
    )
}