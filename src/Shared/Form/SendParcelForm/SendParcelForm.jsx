import React from "react";
import { useForm } from "react-hook-form";

const SendParcelForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const parcelType = watch("type");
  return (
    <div>
      <form>
        <h2 className="text-xl sm:text-2xl font-semibold">Enter your parcel details</h2>

        {/* parcel details section */}
        <div className="">
          <div>
            <label className="font-medium block mb-2">Parcel Type</label>

            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="document"
                  {...register("type", {
                    required: "Parcel type is required",
                  })}
                />
                Document
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="non-document"
                  {...register("type", {
                    required: "Parcel type is required",
                  })}
                />
                Non-Document
              </label>
            </div>

            {errors.type && (
              <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>
            )}
          </div>

          <div className="space-x-4 "> 
            <input
              type="text"
              placeholder="Parcel Title"
              {...register("title", {
                required: "Title is required",
              })}
              className="input w-full border-2 mt-2 outline-none border-[#CBD5E1]  shadow-none"
            />

            {parcelType === "non-document" && (
              <input
                type="number"
                placeholder="Weight (kg)"
                {...register("weight")}
                className="input w-full border-2 mt-2 outline-none border-[#CBD5E1]  shadow-none"
              />
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SendParcelForm;
