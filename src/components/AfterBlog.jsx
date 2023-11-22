import React from 'react'

import Image from 'next/image'

import Wheels from "../../public/images/Wheels.png"

function AfterBlog() {
  return (
    <div className='max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center px-5 pb-7'>
        <div className=''>
            <Image src={Wheels} width={500} height={500} alt='Wheels'/>
        </div>
        <div className=''>
            <div className='border-b-2 border-gray-200 py-5'>
                <span className=' font-bold text-sm text-gray-600'>JAN 22, 2021 </span><span className='font-bold ml-2'>BY</span> <span className='font-bold text-yellow-500'>ADMIN</span> <span className='font-bold'>IN</span> <span className='font-bold text-sm text-gray-600'>AUTO PARTS, BRAKING, MIRROR</span>
                <h1 className='mt-2 font-bold text-xl'>What Is Car Suspension?</h1>
                <h1 className='mt-2 text-sm font-medium text-gray-700'>The small round table in the dinette may be great for casual meals</h1>
                <button className='mt-4 bg-yellow-500 text-black py-2 px-4 rounded-full font-semibold'>READ MORE</button>
            </div>
            <div className='py-7'>
                <span className=' font-bold text-sm text-gray-600'>JAN 22, 2021 </span><span className='font-bold ml-2'>BY</span> <span className='font-bold text-yellow-500'>ADMIN</span> <span className='font-bold'>IN</span> <span className='font-bold text-sm text-gray-600'> BRAKING, HEADLIGHT, INTERIORS</span>
                <h1 className='mt-2 font-bold text-xl'>What Does A Car Service Include?</h1>
                <h1 className='mt-2 text-sm font-medium text-gray-700'>The small round table in the dinette may be great for casual meals</h1>
                <button className='mt-4 bg-yellow-500 text-black py-2 px-4 rounded-full font-semibold'>READ MORE</button>
            </div>
        </div>
    </div>
  )
}

export default AfterBlog