import React from "react";
import img1 from "../../../assets/customer-top.png";
import Slider from "./Slider/Slider";

export default function CoustomerOpinion() {
  return (
    <div className="my-10">
      <div className="flex justify-center ">
        <img className="md:w-[20%] " src={img1} alt="" />
      </div>
      <div className="text-center space-y-3">
        <h1 className="text-3xl text-[#03373D] md:text-4xl  font-bold">
          What our customers are sayings
        </h1>
        <p className="text-black">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <div className="my-5 md:max-w-3xl mx-auto">
        <Slider />
      </div>
    </div>
  );
}
