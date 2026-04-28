import React from "react";
import Question from "./Question";

export default function FaqQuection() {
  return (
    <div className="my-10">
      <div className="text-center space-y-5">
        <h1 className="text-[#03373D] text-2xl md:text-4xl font-bold">
          Frequently Asked Question (FAQ)
        </h1>
        <p className="w-[80%] mx-auto">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      {/* faq  ask question */}
      <div>
        <Question/>
      </div>
    </div>
  );
}
