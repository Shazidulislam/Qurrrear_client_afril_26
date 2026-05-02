import React from "react";
import { Link, Outlet } from "react-router-dom";
import img1 from "../../assets/authimage.png";
import ProFastLogo from "../../Shared/ProfastLogo/ProfastLogo";
export default function AuthLayout() {
  return (
    <div className="">
      {/* button */}

      {/* main content */}
      <div className="grid sm:grid-cols-2 min-h-screen   ">
        <div className="grid items-center sm:w-[70%] mx-auto   col-span-2 sm:col-span-1">
          <div className=" ">
            <Link to={"/"}>
              <ProFastLogo></ProFastLogo>
            </Link>
          </div>
          <div className="my-10 sm:my-0">
            <Outlet />
          </div>
        </div>
        <div className="bg-[#FAFDF0] flex col-span-2 sm:col-span-1 justify-center items-center">
          <img src={img1} className="" />
        </div>
      </div>
    </div>
  );
}
