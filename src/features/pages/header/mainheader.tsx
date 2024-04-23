import s from './mainheader.module.css';
import logo from './images/logo.png';
import { ShowMenu } from './showmenu';

export const MainHeader = () => {


    return (
        <div>
            <div className={s.mainContent}>
                <div>
                    <a href="#"><img src={logo} alt="" /></a>
                </div>
                <div className={s.mainMenu}>
                    <nav>
                        <ul className={s.mainMenuList}>
                            <li><a href="#">Оплата и доставка</a></li>
                            <li><a href="#">Обмен и возврат</a></li>
                            <li><a href="#">О компании</a></li>
                            <li><a href="#">Контакты</a></li>
                            <li><a href="#">Оригинал 100%</a></li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <div><img src="" alt="" /></div>
                    <div><img src="" alt="" /></div>
                    <div><img src="" alt="" /></div>
                    <div><img src="" alt="" /></div>
                </div>
            </div>
            <div className={s.showMenuBlock}>
                {/* <NavClotherHeader /> */}
                <ShowMenu />
            </div>
        </div>
    )
}