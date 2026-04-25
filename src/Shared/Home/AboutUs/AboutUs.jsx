import React from "react";
import img1 from "../../../assets/live-tracking.png";
import img2 from "../../../assets/safe-delivery.png";

export default function AboutUs() {
  return (
    <div className="my-10">
      <div className="h-1  w-full border-t border-dashed border-gray-700"></div>
      {/* main content start */}
      <div className="my-10">
        {/* about-1 start*/}
        <div className="border bg-[#D9D9D9] border-[#D9D9D9] rounded-md grid grid-cols-3 gap-4 justify-center items-center p-8">
          <div className="  col-span-3 lg:col-span-1">
            <img className=" " src={img1} alt="" />
           
          </div>
          <div className=" col-span-3 lg:col-span-2">
            <h1 className="text-[#03373D] text-3xl font-semibold">
              Live Parcel Tracking
            </h1>
            <p className="w-[75%] mt-6">
              Stay updated in real-time with our live parcel tracking feature.
              From pick-up to delivery, monitor your shipment's journey and get
              instant status updates for complete peace of mind.
            </p>
          </div>
        </div>
        {/* about-1 end*/}
      </div>
      {/* main content end*/}
      <div className="h-1  w-full border-t border-dashed border-gray-700"></div>
    </div>
  );
}
