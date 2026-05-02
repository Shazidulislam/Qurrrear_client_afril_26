import React from "react";
import { Link } from "react-router-dom";
import LoginWithGoogle from "../LoginwithGoogle/loginWithGoogle";

export default function Login() {
  return (
    <div>
      <div className="space-y-3" >
        <h1 className="text-3xl sm:text-4xl font-bold">Welcome Back</h1>
        <p>Login with profast</p>
      </div>
      {/* from */}
      <form >
        <fieldset className="fieldset space-y-1 mt-6 w-full" >  
            <div className="space-y-3">
              <label className="text-xs  font-medium">
               Your Email
              </label >
              <input
                className="input w-full border-2 mt-2 outline-none border-[#CBD5E1]  shadow-none"
                placeholder="youremail@gmail.com"
              />
            </div>
            <div className="space-y-3">
              <label className="text-xs  font-medium">
              Password
              </label>
              <input
                className="input w-full border-2 mt-2 outline-none border-[#CBD5E1]  shadow-none"
                placeholder="Password"
              />
            </div>
            <div className="space-y-3" >
              <p className="text-s  underline" >Forget Password?</p>
              <button className="btn w-full bg-[#CAEB66]" >Login</button>
              <p>Don’t have any account? <Link className="underline text-blue-600" to={"/signup"} >Register</Link>  </p>
            </div>
            <p className="text-center text-xs" >Or</p>
            <LoginWithGoogle/>
        </fieldset>
      </form>
    </div>
  );
}
