import { MainHeader } from "../header/mainheader"
import s from '../../shared/index.module.css';
import { NavClotherHeader } from "../header/navheader"
import { PayBlock } from "./payBlock/payblock";
import { PaySection } from "./payBlock/paySection";
import { ShippingBlock } from "./shippingBlock/shippingBlock";
import { Footer } from "features/shared/components/footer/footer";

export const PayDeliveryPage = () => {
    return (
        <div>
            <div className={s.container}>
                <MainHeader />
                <PayBlock />
                <ShippingBlock />
                <Footer />
            </div>
        </div>
    )
}