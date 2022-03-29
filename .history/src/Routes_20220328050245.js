import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import Splash from "./Pages/Splash/Splash";


export const Routes = [
    {
        path: "/",
        exact: true,
        component: Splash
    },
    {
        path: "/designs",
        layout: Layout,
        component: Home
    }
]