import React from "react";
import LoginWithGoogle from "../LoginwithGoogle/loginWithGoogle";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div>
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">Create an Account</h1>
        <p>Register with Profast</p>
      </div>
      {/* form */}
      <form>
        <fieldset className="fieldset space-y-1 mt-6 w-full">
          <div className="space-y-3">
            <label className="text-xs  font-medium">Your Name</label>
            <input
              className="input w-full border-2 mt-2 outline-none border-[#CBD5E1]  shadow-none"
              placeholder="Your Name"
            />
          </div>
          <div className="space-y-3">
            <label className="text-xs  font-medium">Your Email</label>
            <input
              className="input w-full border-2 mt-2 outline-none border-[#CBD5E1]  shadow-none"
              placeholder="youremail@gmail.com"
            />
          </div>
          <div className="space-y-3">
            <label className="text-xs  font-medium">Password</label>
            <input
              className="input w-full border-2 mt-2 outline-none border-[#CBD5E1]  shadow-none"
              placeholder="Password"
            />
          </div>
          <div className="space-y-3">
            <p className="text-s  underline">Forget Password?</p>
            <button className="btn w-full bg-[#CAEB66]">Login</button>
            <p>
              Don’t have any account?{" "}
              <Link className="underline text-blue-600" to={"/signup"}>
                Register
              </Link>{" "}
            </p>
          </div>
          <p className="text-center text-xs">Or</p>
          <LoginWithGoogle />
        </fieldset>
      </form>
    </div>
  );
}
