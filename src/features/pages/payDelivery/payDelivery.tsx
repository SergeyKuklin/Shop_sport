import { MainHeader } from "../header/mainheader"
import s from '../../shared/index.module.css';
import { NavClotherHeader } from "../header/navheader"
import { PayBlock } from "./payBlock/payblock";
import { PaySection } from "./payBlock/paySection";

export const PayDeliveryPage = () => {
    return (
        <div>
            <div className={s.container}>
                <MainHeader />
                <PayBlock />
            </div>
        </div>
    )
}