import React from "react";

export default function PriceForm() {
  return (
    <div className="pt-10 sm:flex">
      <div className="flex-1 flex justify-center items-center">
        <form className="w-full lg:w-[60%]">
          <fieldset className="fieldset space-y-3">
            <div className="">
              <label className="text-sm font-medium text-gray-600 ">
                Parcel Type
              </label>
              <input
                className="input w-full outline-none border-none mt-2"
                placeholder="Parcel Type"
              />
            </div>
            <div className="">
              <label className="text-sm font-medium text-gray-600 ">
                Delivery Destination
              </label>
              <input
                className="input w-full outline-none border-none mt-2"
                placeholder="Parcel Type"
              />
            </div>
            <div className="">
              <label className="text-sm font-medium text-gray-600 ">
                Weight (KG)
              </label>
              <input
                className="input w-full outline-none border-none mt-2"
                placeholder="Parcel Type"
              />
            </div>
            {/* button*/}
           
          </fieldset>
           <div className="grid pt-3 grid-cols-4 gap-2">
               <button className="bg-[#FAFDF0] btn col-span-1" >Reset</button>
               <button className="bg-[#CAEB66] btn col-span-3" > Calculate </button>
            </div>
        </form>
      </div>
      {/* of */}
      <div className="flex-1 mt-16 sm:mt-0 flex justify-center items-center">
        <h1 className="text-2xl sm:text-5xl" >50 TK</h1>
      </div>
    </div>
  );
}
