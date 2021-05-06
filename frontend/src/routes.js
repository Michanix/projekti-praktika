import About from "./components/pages/About";
import Books from "./components/pages/Books";
import Home from "./components/pages/Home";
import Bookpage from "./components/pages/Bookpage"
import { ABOUT_ROUTE, HOMEPAGE_ROUTE,BOOKS_ROUTE, BOOKPAGE_ROUTE } from "./utils/consts";

export const publicRoutes = [
    {
        path:  HOMEPAGE_ROUTE,
        Component: Home

    }, {
        path:  ABOUT_ROUTE,
        Component: About

    }, {
        path:  BOOKS_ROUTE,
        Component: Books

    }, {
        path:  BOOKPAGE_ROUTE,
        Component: Bookpage

    }
    
    
]