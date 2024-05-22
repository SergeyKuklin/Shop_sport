import { PayDeliveryPage } from 'features/pages/payDelivery/payDelivery';
import './global.css';
import { MainPage } from 'features/pages/mainPage/template';
import { RouterProvider } from 'react-router-dom';
import { router } from 'features/pages/router';

export const App = () => {
  return (
    <RouterProvider router={router} />
      // <div>
      //   <MainPage />
      //   {/* <PayDeliveryPage /> */}
      // </div>
  )
}