import Layout from "./Layout/Layout";
import Splash from "./Pages/Splash/Splash";


export const Routes = [
    {
        path: "/",
        exact: true,
        layout: Layout,
        component: Splash
    },
]