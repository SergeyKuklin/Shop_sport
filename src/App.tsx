import { PayDeliveryPage } from 'features/pages/payDelivery/payDelivery';
import './global.css';
import { MainPage } from 'features/pages/mainPage/template';
import { RouterProvider } from 'react-router-dom';
import { router } from 'features/pages/router';
import { Cards } from 'features/Cards/Cards';

export const App = () => {
  return (
    <RouterProvider router={router} />

    // <Cards />

      // <div>
      //   <MainPage />
      //   {/* <PayDeliveryPage /> */}
      // </div>
  )
}