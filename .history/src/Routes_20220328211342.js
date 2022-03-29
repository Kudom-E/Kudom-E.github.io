import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import Splash from "./Pages/Splash/Splash";
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import Project from "./Pages/Project/Project";

export const Routes = [
    {
        path: "/",
        exact: true,
        layout: Layout,
        component: Splash,
        splash: true
    },
    {
        path: "/designs",
        layout: Layout,
        component: Home
    },
    {
        path: "/about",
        layout: Layout,
        component: About
    },
    {
        path: "/contact",
        layout: Layout,
        component: Contact
    },
    {
        path: "/designs/trailer-browsing-project",
        layout: Layout,
        component: Project
    }
]