import React from 'react'
import SendParcelForm from '../../Shared/Form/SendParcelForm/SendParcelForm'

const SendaParcel = () => {
  return (
    <div className='py-10 bg-[#F0F3F6] my-10 rounded-xl px-2 sm:px-10'>
        <h1 className='text-3xl sm:text-4xl font-bold text-[#03373D] pb-10' >Add Parcel</h1>
        <div className='mb-10 border-dashed border-gray-400 border-t' ></div>
        <SendParcelForm></SendParcelForm>
    </div>
  )
}

export default SendaParcel