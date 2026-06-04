import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../hooks/useAuth";

export default function LoginWithGoogle() {

  const {signInWithGoogle} = useAuth();
  const handaleGoogleSignIn=()=>{
    console.log(" signINwithGoogle " , signInWithGoogle)
    signInWithGoogle()
    .then(res=>{
      console.log(res.user)
    })
    .catch(err=>{
      console.log(err)
    })
  }

  return (
    <button onClick={handaleGoogleSignIn} className="btn w-full bg-[#E9ECF1] ">
      <FcGoogle className="w-10" />
      <p>Login with google</p>
    </button>
  );
}
