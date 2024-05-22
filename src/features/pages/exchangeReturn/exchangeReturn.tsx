import { PageWrapper } from "features/shared/indexWrapper";
import { MainHeader } from "../header/mainheader";
import s from './exchangeReturn.module.css';
import { ExchangeReturnContent } from "./excahngeRetContent";

export const ExchangeReturn = () => {
    return (
        <div>

            <PageWrapper>
                <MainHeader />
                <ExchangeReturnContent />
            </PageWrapper>
                
        </div>
    )
}