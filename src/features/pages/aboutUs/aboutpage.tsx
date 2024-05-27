import { Footer } from "features/shared/components/footer/footer";
import { MainHeader } from "../header/mainheader"
import s from './aboutpage.module.css';
import { AboutContent } from "./aboutContent/aboutContent";

export const AboutPage = () => {
    return (
        <div className={s.container}>
            <MainHeader />
            <AboutContent />
            <Footer />
        </div>
    )
}