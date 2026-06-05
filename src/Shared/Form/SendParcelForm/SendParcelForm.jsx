import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
  import Swal from "sweetalert2";

const SendParcelForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { user, data } = useAuth();

  const regions = [...new Set(data.map((i) => i.region))];
  const getDistrrictsByRegion = (region) => {
    return data.filter((i) => i.region === region).map((w) => w.district);
  };
  const parcelType = watch("type");
  const senderRegion = watch("senderRegion");
  const receiverRegion = watch("receiverRegion");

const onsubmit = async (data) => {
  const weight = Number(data.weight || 0);

  const isSameCity =
    data.senderServiceCenter === data.recevierServiceCenter;

  const deliveryCost = calculateCost({
    type: data.type,
    weight,
    senderServiceCenter: data.senderServiceCenter,
    receiverServiceCenter: data.recevierServiceCenter,
  });

  let breakdown = "";

  // DOCUMENT
  if (data.type === "document") {
    breakdown = `
      <div style="text-align:left">
        <h3>📦 Parcel Pricing Breakdown</h3>

        <p><strong>Parcel Type:</strong> Document</p>
        <p><strong>Delivery Area:</strong> ${
          isSameCity ? "Within City" : "Outside City/District"
        }</p>

        <hr>

        <p>
          Base Charge for Document Delivery:
          <strong>
            ৳${isSameCity ? 60 : 80}
          </strong>
        </p>

        <hr>

        <h3>Total Charge: ৳${deliveryCost}</h3>
      </div>
    `;
  }

  // NON DOCUMENT
  else {
    if (weight <= 3) {
      breakdown = `
        <div style="text-align:left">
          <h3>📦 Parcel Pricing Breakdown</h3>

          <p><strong>Parcel Type:</strong> Non-Document</p>

          <p><strong>Weight:</strong> ${weight} KG</p>

          <p><strong>Delivery Area:</strong> ${
            isSameCity ? "Within City" : "Outside City/District"
          }</p>

          <hr>

          <p>
            Base Charge (Up to 3 KG):
            <strong>
              ৳${isSameCity ? 110 : 150}
            </strong>
          </p>

          <hr>

          <h3>Total Charge: ৳${deliveryCost}</h3>
        </div>
      `;
    } else {
      const extraKg = weight - 3;

      const baseCharge = isSameCity ? 110 : 150;

      const extraWeightCharge = extraKg * 40;

      const outsideDistrictFee = isSameCity ? 0 : 40;

      breakdown = `
        <div style="text-align:left">
          <h3>📦 Parcel Pricing Breakdown</h3>

          <p><strong>Parcel Type:</strong> Non-Document</p>

          <p><strong>Weight:</strong> ${weight} KG</p>

          <p><strong>Delivery Area:</strong> ${
            isSameCity ? "Within City" : "Outside City/District"
          }</p>

          <hr>

          <p>
            Base Charge (First 3 KG):
            <strong>৳${baseCharge}</strong>
          </p>

          <p>
            Extra Weight:
            ${extraKg} KG × ৳40
            =
            <strong>৳${extraWeightCharge}</strong>
          </p>

          ${
            !isSameCity
              ? `
            <p>
              Outside District Surcharge:
              <strong>৳40</strong>
            </p>
          `
              : ""
          }

          <hr>

          <h2>
            Total Delivery Charge:
            ৳${deliveryCost}
          </h2>
        </div>
      `;
    }
  }

  const result = await Swal.fire({
    title: "Delivery Charge Summary",
    html: breakdown,
    icon: "info",
    showCancelButton: true,
    confirmButtonText: "Confirm Booking",
    cancelButtonText: "Edit Information",
  });

  if (result.isConfirmed) {
    const parcelData = {
      ...data,
      deliveryCost,
      status: "Pending",
      paymentStatus: "Unpaid",
      trackingId: `TRK-${Date.now()}`,
      creationDate: new Date(),
    };

    console.log(parcelData);

    // await axiosSecure.post("/parcels", parcelData);

    Swal.fire({
      title: "Booking Confirmed",
      text: "Your parcel has been submitted successfully.",
      icon: "success",
    });
  }
};
  const calculateCost = ({
    type,
    weight = 0,
    senderServiceCenter,
    receiverServiceCenter,
  }) => {
    const isSameCity = senderServiceCenter === receiverServiceCenter;

    // DOCUMENT
    if (type === "document") {
      return isSameCity ? 60 : 80;
    }

    // NON DOCUMENT <= 3 KG
    if (weight <= 3) {
      return isSameCity ? 110 : 150;
    }

    // NON DOCUMENT > 3 KG
    const extraWeight = weight - 3;

    if (isSameCity) {
      return 110 + extraWeight * 40;
    }

    return 150 + extraWeight * 40 + 40;
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onsubmit, (errors) =>
          console.log("Form Errors:", errors),
        )}
      >
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

              <select
                {...register("senderRegion", {
                  required: true,
                })}
                className="select w-full border-2 mt-2 outline-none border-[#CBD5E1]  shadow-none"
              >
                <option value="">Select Region</option>
                {regions.map((region) => (
                  <option key={region}>{region}</option>
                ))}
              </select>
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
            {/* region */}
            <select
              placeholder="Select Warehouse"
              {...register("senderServiceCenter", {
                required: true,
              })}
              className="input w-full border-2 mt-2 outline-none border-[#CBD5E1]  shadow-none"
            >
              <option value="">Select Pickup Warehouse</option>
              {getDistrrictsByRegion(senderRegion)?.map((district) => (
                <option>{district}</option>
              ))}
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

              <select
                {...register("receiverRegion", {
                  required: true,
                })}
                className="select w-full border-2 mt-2 outline-none border-[#CBD5E1]  shadow-none"
              >
                <option value="">Select Region</option>
                {regions.map((region) => (
                  <option key={region}>{region}</option>
                ))}
              </select>
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
              placeholder="Delivery Warehouse"
              {...register("recevierServiceCenter", {
                required: true,
              })}
              className="input w-full border-2 mt-2 outline-none border-[#CBD5E1]  shadow-none"
            >
              <option value="">Select Delivery Warehouse</option>
              {getDistrrictsByRegion(receiverRegion)?.map((district) => (
                <option>{district}</option>
              ))}
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
