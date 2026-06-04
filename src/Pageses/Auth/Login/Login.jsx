import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import LoginWithGoogle from "../LoginwithGoogle/loginWithGoogle";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate()
  const {signInUser} = useAuth()

  const onSubmit = async(data) => {
    console.log(data);
     try {
      const result = await signInUser(data.email, data.password);
      console.log(result.user);
      if(result?.user){
        alert("LOgin Successfull!")
        navigate("/")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold">Welcome Back</h1>
        <p>Login with profast</p>
      </div>
      {/* from */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset space-y-1 mt-6 w-full">
          <div className="space-y-3">
            <label className="text-xs  font-medium">Your Email</label>
            <input
              type="email"
              className="input w-full border-2 mt-2 outline-none border-[#CBD5E1]  shadow-none"
              placeholder="youremail@gmail.com"
              {...register("email", { required: true })}
            />
            {errors?.email?.type === "required" && (
              <p className="text-error font-bold">Email is required !</p>
            )}
          </div>
          <div className="space-y-3">
            <label className="text-xs  font-medium">Password</label>
            <input
              type="password"
              className="input w-full border-2 mt-2 outline-none border-[#CBD5E1]  shadow-none"
              placeholder="Password"
              {...register("password", {
                required: true,
              })}
            />
            {errors?.password?.type === "required" && (
              <p className="text-error font-bold">Password is required !</p>
            )}
           
          </div>
          <div className="space-y-3">
            <p className="text-s  underline">Forget Password?</p>
            <button className="btn w-full bg-[#CAEB66]">Login</button>
            <p>
              New to this site?
              <Link className="underline text-blue-600" to={"/signup"}>
                Register
              </Link>{" "}
            </p>
          </div>
          <p className="text-center text-xs">Or</p>
        </fieldset>
      </form>
      <LoginWithGoogle />
    </div>
  );
}
