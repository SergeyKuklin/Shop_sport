import { PageContainer } from "features/shared/propspage/propspage"
import { MainHeader } from "../header/mainheader"
import { OriginalContent } from "./originalCont"
import { Footer } from "features/shared/components/footer/footer"

export const OriginalPage = () => {
    return (
        <PageContainer>
            <MainHeader />
            <OriginalContent />
            <Footer />
        </PageContainer>
    )
}