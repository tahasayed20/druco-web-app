import React from 'react'

import Image from 'next/image'

import paymentphoto from "../../public/images/payment.png"
import tahaphoto from "../../public/images/taha.png"

function Payment() {
  return (
    <div className='bg-black border-t-2 border-gray-600 md:border-black pt-4'>
      <div className='bg-black md:flex justify-between max-w-[1240px] mx-auto block text-center items-center'>
        <h1 className='text-white text-sm '>© <span className=' text-yellow-500 '>Druco.</span> Made By <span className='hover:text-yellow-500'><a href="https://tahasayedportfolio.surge.sh/" target='_blank'>Taha</a> <a href="https://tahasayedportfolio.surge.sh/" target='_blank'><Image src={tahaphoto} className='w-[30px] inline-flex' /></a></span> .</h1>
        <Image src={paymentphoto} alt='payment' className='w-[250px] h-full py-4 mx-auto md:mx-0'/>
      </div>
    </div>
  )
}

export default Payment