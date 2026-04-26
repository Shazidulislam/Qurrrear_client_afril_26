import React from "react";
import narcent_bg from "../../../assets/be-a-merchant-bg.png"
import img2 from "../../../assets/location-merchant.png"
export default function Marcent() {
  return (
    <div className="max-w-5xl mx-auto mb-10">
      <div className="bg-[#03373D] rounded-2xl relative">
        <img className="absolute" src={narcent_bg} alt="" />
        <div className="px-10 py-10 md:py-16 grid grid-cols-3 ">
            {/* div-1 */}
            <div className="col-span-3 md:col-span-2 text-white space-y-3 md:space-y-6">
                <h1 className="text-2xl md:text-4xl font-bold">Merchant and Customer Satisfaction is Our First Priority</h1>
                <p className="w-[90%]">We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
                <div className="flex flex-col md:flex-row gap-4">
                    <button className="px-6 sm:w-[60%] md:w-auto py-2 cursor-pointer rounded-full text-black bg-[#CAEB66]">Become a Merchant</button>
                    <button className="px-6 sm:w-[60%] md:w-auto py-2 cursor-pointer rounded-full border border-[#CAEB66] text-[#CAEB66]">Earn with Profast Courier</button>
                </div>
            </div>
            {/* div-2 */}
            <div className=" col-span-3 md:col-span-1 my-3 md:my-0">
                <img src={img2} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
}
