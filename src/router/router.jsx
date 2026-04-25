import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayouts/RootLayout";
import Home from "../Shared/Home/Home/Home";

export const router = createBrowserRouter([
    {
        path:"/",
        Component:RootLayout,
        children:[
            {
                index:true,
                Component:Home,
            }
        ]
    }
])