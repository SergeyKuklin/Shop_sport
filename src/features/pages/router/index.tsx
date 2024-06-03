import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../mainPage/template";
import { ROUTES } from "./routes";
import { PayDeliveryPage } from "../payDelivery/payDelivery";
import { ExchangeReturn } from "../exchangeReturn/exchangeReturn";
import { AboutPage } from "../aboutUs/aboutpage";
import { ContactPage } from "../contact/contact";
import { OriginalPage } from "../original/original";

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
    },

    {
        path: ROUTES.ABOUTUS,
        element: <AboutPage />,
    },

    {
        path: ROUTES.CONTACT,
        element: <ContactPage />,
    },

    {
        path: ROUTES.ORIGINAL,
        element: <OriginalPage />,
    }
])