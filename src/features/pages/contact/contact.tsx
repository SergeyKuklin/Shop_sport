import { PageContainer } from 'features/shared/propspage/propspage';
import s from './contact.module.css';
import imgBg from './image/0001.png';
import { ContactContent } from './content/contactcontent';
import { MainHeader } from '../header/mainheader';
import { FormBlock } from 'features/shared/components/sliderIcon/form/form';
import { Footer } from 'features/shared/components/footer/footer';

export const ContactPage = () => {
    return (
        <PageContainer>
            <MainHeader />
            <div className={s.blockContent}>
                <ContactContent />
            </div>
            <div className={s.blockContent}>
                <FormBlock />
            </div>
            <Footer />
        </PageContainer>
    )
}