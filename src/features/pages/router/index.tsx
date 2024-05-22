import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../mainPage/template";
import { ROUTES } from "./routes";
import { PayDeliveryPage } from "../payDelivery/payDelivery";
import { ExchangeReturn } from "../exchangeReturn/exchangeReturn";

export const router = createBrowserRouter ([
    {
        path: ROUTES.MAINROOT,
        element: <MainPage />
    },

    {
        path: ROUTES.PAYDELIVERY,
        element: <PayDeliveryPage />,
    },

    {
        path: ROUTES.EXCHANGERETURN,
        element: <ExchangeReturn />,
    }
])