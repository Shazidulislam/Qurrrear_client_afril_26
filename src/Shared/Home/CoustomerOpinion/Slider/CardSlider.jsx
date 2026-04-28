import React from "react";
import reviewQuote from "../../../../assets/reviewQuote.png";

export default function CardSlider() {
  return (
    <div className="p-10 rounded-2xl text-black ">
      <div className="w-20">
        <img className="" src={reviewQuote} alt="" />
      </div>
      <p className="text-start ">
        A posture corrector works by providing support and gentle alignment to
        your shoulders, back, and spine, encouraging you to maintain proper
        posture throughout the day.{" "}
      </p>
      <div className=" my-10 border-dashed border-[#03373D]"></div>
      <div className="flex  gap-5 justify-start items-center ">
        <div className="  ">
            <div className="w-20 h-20 border-3 rounded-full border-white bg-[#03373D]"></div>
        </div>
        <div className="text-start">
          <h1 className="text-[#03373D] font-bold text-2xl">Awlad Hossin</h1>
          <p className="text-sm">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
}
