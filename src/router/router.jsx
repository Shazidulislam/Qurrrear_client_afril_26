import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayouts/RootLayout";
import Home from "../Shared/Home/Home/Home";
import BeaRider from "../Pageses/BeaRider/BeaRider";
import PricingCalcilator from "../Pageses/PricingCalculator/PricingCalcilator";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import Login from "../Pageses/Auth/Login/Login";
import Signup from "../Pageses/Auth/Signup/Signup";
import Coverage from "../Pageses/Coverage/Coverage";
import PrivateRoute from "../routes/PrivateRoute";
import SendaParcel from "../Pageses/SendAParcel/SendaParcel";

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
            },
            {
               path:"/priceCalculate",
               Component:PricingCalcilator,    
            },
            {
                path:"/coverage",
                Component:Coverage,
                loader:async()=>{
                    const response = await fetch("data/data.json")
                    return response.json()
                }
            },
            {
                path:"/sendParcel",
                element:<PrivateRoute><SendaParcel></SendaParcel> </PrivateRoute>
            }
        ]
    },
    {
        path:"/",
        Component:AuthLayout,
        children:[
            {
                path:"/login",
                Component:Login
            },
            {
                path:"/signup",
                Component:Signup
            }
        ]
    }
])