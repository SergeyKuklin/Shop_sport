import s from './mainheader.module.css';
import logo from './images/logo.png';
import { ShowMenu } from './showmenu';
import { NavClotherHeader } from './navheader';
import { Link, NavLink } from 'react-router-dom';
import { ROUTES } from '../router/routes';
import classes from 'classnames';

export const MainHeader = () => {


    return (
        <div>
            <div className={s.mainContent}>
                <div>
                    <Link to={ROUTES.MAINROOT}><img src={logo} alt="" /></Link>
                </div>
                <div className={s.mainMenu}>
                    <nav>
                        <ul className={s.mainMenuList}>
                            <li><NavLink to={ROUTES.PAYDELIVERY} className={({isActive}) => classes(s.nonActiveLink, {[s.activeLink]: isActive})}>Оплата и доставка</NavLink></li>
                            <li><NavLink to={ROUTES.EXCHANGERETURN} className={({isActive}) => classes(s.nonActiveLink, {[s.activeLink]: isActive})}>Обмен и возврат</NavLink></li>
                            <li><NavLink to={ROUTES.ABOUTUS} className={({isActive}) => classes(s.nonActiveLink, {[s.activeLink]: isActive})}>О компании</NavLink></li>
                            <li><NavLink to={ROUTES.CONTACT} className={({isActive}) => classes(s.nonActiveLink, {[s.activeLink]: isActive})}>Контакты</NavLink></li>
                            <li><NavLink to={ROUTES.ORIGINAL} className={({isActive}) => classes(s.nonActiveLink, {[s.activeLink]: isActive})}>Оригинал 100%</NavLink></li>
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
            <div className={s.clother}>
                <NavClotherHeader />
            </div>
        </div>
    )
}