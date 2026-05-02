import React from 'react'
import PriceForm from '../../Shared/Form/PriceForm/PriceForm'

export default function PricingCalcilator() {
  return (
    <div className='px-10 md:px-14 py-10 border-2 border-gray-200  md:mt-15 my-10 md:mb-40 rounded-2xl bg_all'>
         <h1 className=" text-2xl md:text-3xl lg:text-5xl text-[#03373D] font-bold">Pricing Calculator</h1>
         <p className="w-full md:w-[80%] lg:w-[70%] mt-4">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>

         {/*  */}
         <div>
            <PriceForm></PriceForm>
         </div>
    </div>
  )
}
