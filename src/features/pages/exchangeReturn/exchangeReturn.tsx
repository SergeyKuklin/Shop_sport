import { PageWrapper } from "features/shared/indexWrapper";
import { MainHeader } from "../header/mainheader";
import s from './exchangeReturn.module.css';
import { ExchangeReturnContent } from "./excahngeRetContent";
import { FormBlock } from "features/shared/components/sliderIcon/form/form";
import { Footer } from "features/shared/components/footer/footer";

export const ExchangeReturn = () => {
    return (
        <div>

            <PageWrapper>
                <MainHeader />
                <ExchangeReturnContent />
                <FormBlock style={s.formBlock} />
                <Footer />
            </PageWrapper>
                
        </div>
    )
}