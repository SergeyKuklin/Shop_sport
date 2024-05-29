import { Cards } from 'features/Cards/Cards';
import { MainHeader } from 'features/pages/header/mainheader';
import s from './index.module.css';
import { MainBanner } from '../banner/banner';
import { SertificationSection } from '../seftification/sectification';
import { SaleSection } from '../sale/sale';
import { FormBlock } from 'features/shared/components/sliderIcon/form/form';
import { Footer } from 'features/shared/components/footer/footer';
import { ShowMenu } from 'features/pages/header/showmenu';

export const MainPage = () => {
  return (
      <div className={s.container}>
        <MainHeader />
        <MainBanner />
        <Cards />
        <SertificationSection />
        <SaleSection />
        <FormBlock />
        <Footer/>
      </div>
  )
}