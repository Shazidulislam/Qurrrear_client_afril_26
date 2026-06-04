import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const SendParcelForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();


  const parcelType = watch("type");

  const onsubmit = async (data) => {
   console.log(data , "Data from sendparcelfrom")
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit ,  (errors) => console.log("Form Errors:", errors))} >
        <h2 className="text-xl pb-5 sm:pb-10 sm:text-2xl font-semibold">
          Enter your parcel details
        </h2>

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

          <div className="space-x-4 sm:grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Parcel Title"
              {...register("title", {
                required: "Title is required",
              })}
              className="input w-full border-2 mt-2 outline-none border-[#CBD5E1]  shadow-none "
            />

            <input
              type="number"
              placeholder="Weight (kg)"
              {...register("weight")}
              disabled={parcelType === "document"}
              className="input w-full  border-2 mt-2 outline-none border-[#CBD5E1] shadow-none disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>
        </div>
        {/* section - 2*/}
        <div className="grid md:grid-cols-2 gap-10 md:gap-5 ">
          {/* sender from or details */}
          <div className="space-y-4 pt-5">
            <h2 className="text-xl font-semibold">Sender Details</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                value={user?.displayName}
                readOnly
                {...register("senderName", {
                  required: true,
                })}
                className="input w-full border-2 mt-2 outline-none border-[#CBD5E1]  shadow-none"
              />

              <input
                placeholder="Pickup Warehouse"
                {...register("senderServiceCenter", {
                  required: true,
                })}
                className="input w-full border-2 mt-2 outline-none border-[#CBD5E1]  shadow-none"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                placeholder="Address"
                {...register("senderAddress", {
                  required: true,
                })}
                className="input w-full border-2 mt-2 outline-none border-[#CBD5E1]  shadow-none"
              />

              <input
                placeholder="Contact Number"
                {...register("senderContact", {
                  required: true,
                })}
                className="input w-full border-2 mt-2 outline-none border-[#CBD5E1]  shadow-none"
              />
            </div>

            <select
              {...register("senderRegion", {
                // required: true,
              })}
              className="select w-full border-2 mt-2 outline-none border-[#CBD5E1]  shadow-none"
            >
              <option value="">Select Region</option>
              <option value="">Select Region</option>
              <option value="">Select Region</option>
              <option value="">Select Region</option>
            </select>

            <textarea
              rows={4}
              placeholder="Pickup Instruction"
              {...register("pickupInstruction", {
                required: true,
              })}
              className="textarea  w-full border-2 mt-2 outline-none border-[#CBD5E1]  shadow-none"
            />
          </div>
          {/*  Receiver Section*/}
          <div className="space-y-4 pt-5">
            <h2 className="text-xl font-semibold">Receiver Details</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
              type="text"
                placeholder="Receiver Name"
                {...register("receiverName", {
                  required: true,
                })}
                className="input w-full border-2 mt-2 outline-none border-[#CBD5E1]  shadow-none"
              />

              <input
              type="text"
                placeholder="Delivery Warehouse"
                {...register("receiverServiceCenter", {
                  required: true,
                })}
                className="input w-full border-2 mt-2 outline-none border-[#CBD5E1]  shadow-none"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Receiver Address"
                {...register("receiverAddress", {
                  required: true,
                })}
                className="input w-full border-2 mt-2 outline-none border-[#CBD5E1]  shadow-none"
              />

              <input
               type="text"
                placeholder="Receiver Contact"
                {...register("receiverContact", {
                  required: true,
                })}
                className="input w-full border-2 mt-2 outline-none border-[#CBD5E1]  shadow-none"
              />
            </div>

            <select
              {...register("receiverRegion", {
                // required: true,
              })}
              className="select w-full border-2 mt-2 outline-none border-[#CBD5E1]  shadow-none"
            >
              <option value="">Select Region</option>
              <option value="">Select Region</option>
              <option value="">Select Region</option>
              <option value="">Select Region</option>
              <option value="">Select Region</option>
            </select>

            <textarea
              rows={4}
              placeholder="Delivery Instruction"
              {...register("deliveryInstruction", {
                required: true,
              })}
              className="textarea  w-full border-2 mt-2 outline-none border-[#CBD5E1]  shadow-none"
            />
          </div>
        </div>
         <button className="btn w-full bg-[#CAEB66] mt-10">Submit</button>
      </form>
    </div>
  );
};

export default SendParcelForm;
