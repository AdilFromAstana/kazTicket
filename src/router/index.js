import { PROFILE_ROUTE, EVENT_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, TEST_ROUTE } from "../utils/consts"
import Auth from '../pages/Auth';
import Profile from '../pages/Profile';
import Shop from '../pages/Shop';
import Test from '../pages/Test';
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
    {
        path: TEST_ROUTE,
        Component: <Test/>
    },
]   

export const privateRoutes = [
    {
        path: PROFILE_ROUTE,
        Component: <Profile/>
    },
]
