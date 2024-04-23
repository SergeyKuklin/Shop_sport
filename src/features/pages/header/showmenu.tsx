import { useState } from "react";
import { NavClotherHeader } from "./navheader";
import s from './showmenu.module.css';

export const ShowMenu = () => {

    const [showMenu, setShowMenu] = useState(false);
    function handleMenuClick () {
        setShowMenu(!showMenu);
    }

    return (
        <div>
            <button onClick={handleMenuClick} className={s.btnShow}>
                {/* {showMenu ? 'Hide' : 'Show'} */}
            </button>
            {showMenu && <NavClotherHeader />}
        </div>
    )
}