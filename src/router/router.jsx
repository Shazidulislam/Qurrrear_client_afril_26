import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayouts/RootLayout";
import Home from "../Shared/Home/Home/Home";
import BeaRider from "../Shared/BeaRider/BeaRider";

export const router = createBrowserRouter([
    {
        path:"/",
        Component:RootLayout,
        children:[
            {
                index:true,
                Component:Home,
            },
            {
                path:"/bearider",
                Component:BeaRider,
            }
        ]
    }
])