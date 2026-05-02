import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayouts/RootLayout";
import Home from "../Shared/Home/Home/Home";
import BeaRider from "../Pageses/BeaRider/BeaRider";
import PricingCalcilator from "../Pageses/PricingCalculator/PricingCalcilator";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import Login from "../Pageses/Auth/Login/Login";
import Signup from "../Pageses/Auth/Signup/Signup";

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
                path:"/beaslider",
                Component:BeaRider,
            },
            {
               path:"/priceCalculate",
               Component:PricingCalcilator,    
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