import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import Splash from "./Pages/Splash/Splash";


export default Routing = [
    {
        path: "/",
        exact: true,
        layout: Layout,
        component: Splash
    },
    {
        path: "/home",
        layout: Layout,
        component: Home
    }
]