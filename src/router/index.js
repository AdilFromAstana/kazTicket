import { BASKET_ROUTE, EVENT_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts"
import Auth from '../pages/Auth';
import Basket from '../pages/Basket';
import Shop from '../pages/Shop';
import EventPage from "../pages/EventPage";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: <Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth/>
    },
    {
        path: SHOP_ROUTE,
        Component: <Shop/>
    },
    {
        path: EVENT_ROUTE + '/:id',
        Component: <EventPage/>
    },
]   

export const privateRoutes = [
    {
        path: BASKET_ROUTE,
        Component: <Basket/>
    },
]