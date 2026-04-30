import React from "react";
import img1 from "../../../assets/agent-pending.png"

export default function BeaRiderForm() {
  return (
    <div className="pt-10 grid grid-cols-2">
      {/* from */}
      <div className="col-span-2 md:col-span-1">
        <form>
          <fieldset className="fieldset">
            <div className="space-y-4 sm:grid grid-cols-2 gap-3">
              <div className="col-span-1">
                <label className="text-sm font-bold text-gray-600 ">
                  Your Name
                </label>
                <input
                  className="input w-full outline-none border-none mt-2"
                  placeholder="Your Name"
                />
              </div>
              <div className="col-span-1">
                <label className="text-sm font-bold text-gray-600 ">
                  Your Age
                </label>
                <input
                  className="input w-full outline-none border-none mt-2"
                  placeholder="Your Age"
                />
              </div>
            </div>
            {/* 2 */}
            <div className="space-y-4 sm:grid grid-cols-2 gap-3">
              <div className="col-span-1">
                <label className="text-sm font-bold text-gray-600 ">
                  Your Email
                </label>
                <input
                  className="input w-full outline-none border-none mt-2"
                  placeholder="Your Email"
                />
              </div>
              <div className="col-span-1">
                <label className="text-sm font-bold text-gray-600 ">
                  Your Region
                </label>
                <input
                  className="input w-full outline-none border-none mt-2"
                  placeholder="Your Region"
                />
              </div>
            </div>
            {/* 3 */}
            <div className="space-y-4 sm:grid grid-cols-2 gap-3">
              <div className="col-span-1">
                <label className="text-sm font-bold text-gray-600 ">
                  Your NID
                </label>
                <input
                  className="input w-full outline-none border-none mt-2"
                  placeholder="Your NID"
                />
              </div>
              <div className="col-span-1">
                <label className="text-sm font-bold text-gray-600 ">
                  Your Contact Number
                </label>
                <input
                  className="input w-full outline-none border-none mt-2"
                  placeholder="Your Contact Number"
                />
              </div>
            </div>
            {/* 4 */}
            <div className="">
                <label className="text-sm font-bold text-gray-600 ">
                 Which wire-house you want to work?
                </label>
                <input
                  className="input w-full outline-none border-none mt-2"
                  placeholder="Which wire-house you want to work?"
                />
              </div>
              <div>
                <button className="bg-[#CAEB66] btn w-full my-3" >Submit</button>
              </div>
          </fieldset>
        </form>
      </div>
      {/* img */}
      <div className="col-span-2 md:col-span-1 flex justify-center items-center">
        <img src={img1} alt="" />
      </div>
    </div>
  );
}
