import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function LoginWithGoogle() {
  return (
    <button className="btn w-full bg-[#E9ECF1] ">
      <FcGoogle className="w-10" />
      <p>Login with google</p>
    </button>
  );
}
