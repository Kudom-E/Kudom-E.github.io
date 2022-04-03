import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import Splash from "./Pages/Splash/Splash";
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import Project from "./Pages/Project/Project";
import Second from "./Pages/Project/Second";
import Third from "./Pages/Project/Third";

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
        exact: true,
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
        path: "/trailer-browsing-project",
        layout: Layout,
        component: Project
    },
    {
        path: "/responsive-school-website",
        layout: Layout,
        component: Second
    },
    {
        path: "/cross-platform-medicine-reminder",
        layout: Layout,
        component: Third
    }
]