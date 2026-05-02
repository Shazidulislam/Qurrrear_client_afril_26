import React from "react";
import BeaRiderForm from "../../Shared/Form/BeaRiderForm/BeaRiderForm";

export default function BeaRider() {
  return (
    <div className="px-10 md:px-14 py-10 border-2 border-gray-200  md:mt-15 my-10 md:mb-40 rounded-2xl bg_all">
      <div className="space-y-4">
        <h1 className=" text-2xl md:text-3xl lg:text-5xl text-[#03373D] font-bold ">Be a Rider</h1>
        <p className="w-full md:w-[80%] lg:w-[70%]">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      <div className="border-t-2 border-dashed w-full mt-10 border-gray-400 " ></div>
      {/* be a rider from */}
      <div>
        <BeaRiderForm></BeaRiderForm>
      </div>
      {/* be a rider from */}
    </div>
  );
}
