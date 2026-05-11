import React from "react";
import LoginWithGoogle from "../LoginwithGoogle/loginWithGoogle";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">Create an Account</h1>
        <p>Register with Profast</p>
      </div>
      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset space-y-1 mt-6 w-full">
          <div className="space-y-3">
            <label className="text-xs  font-medium">Your Name</label>
            <input
              type="text"
              className="input w-full border-2 mt-2 outline-none border-[#CBD5E1]  shadow-none"
              placeholder="Your Name"
              {...register("yourName", { required: "Name is required", maxLength: 20 })}
            />
            {errors?.yourName  && <p className="text-error">{errors?.yourName?.message}</p>  }
          </div>
          <div className="space-y-3">
            <label className="text-xs  font-medium">Your Email</label>
            <input
            type="email"
              className="input w-full border-2 mt-2 outline-none border-[#CBD5E1]  shadow-none"
              placeholder="youremail@gmail.com"
              {...register("email", { required: "Email is required" })}
            />
            {errors?.email  && <p className="text-error">{errors?.email?.message}</p>  }
          </div>
          <div className="space-y-3">
            <label className="text-xs  font-medium">Password</label>
            <input
            type="TEXT"
              className="input w-full border-2 mt-2 outline-none border-[#CBD5E1]  shadow-none"
              placeholder="Password"
              {
                ...register("password" , {required:"Password is required" , 
                  minLength :{
                    value:8 , message:"Password must be 8 character or longer."
                  },
              
                  pattern:{
                    value:/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])/,
                    message:"বড় হাতের, ছোট হাতের, নম্বর ও বিশেষ চিহ্ন থাকতে হবে"
                  }
                })
              }
               aria-invalid={errors.mail ? "true" : "false"}
            />
            {errors?.password  && <p className="text-error">{errors?.password?.message}</p>  }
          </div>
          <div className="space-y-3">
            <p className="text-s  underline">Forget Password?</p>
            <button className="btn w-full bg-[#CAEB66]">Register</button>
            <p>
              Allready have an account. 
              <Link className="underline text-blue-600" to={"/login"}>
                Login
              </Link>
            </p>
          </div>
          <p className="text-center text-xs">Or</p>
          <LoginWithGoogle />
        </fieldset>
      </form>
    </div>
  );
}
