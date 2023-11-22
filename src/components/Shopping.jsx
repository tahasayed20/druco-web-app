import React from 'react'
import Image from 'next/image'

import back1 from "../../public/images/back1.jpg"
import back2 from "../../public/images/background-image1.jpg"

function Shopping() {
  return (
    <div className='flex flex-col md:grid grid-cols-2 gap-8 py-5 relative' >
          <div className='bg-black p-10 relative overflow-hidden h-72 group' >
            <Image src={back2} width={0} height={0} alt='background-image' className=' absolute top-0 left-0 w-full h-full opacity-50 group-hover:scale-125 ease-in-out duration-500'/>
            <div className=' absolute'>
              <h1 className='text-white text-3xl md:text-5xl font-bold pb-3'>Car & Truck</h1>
              <h1 className='text-white text-3xl md:text-5xl font-bold pb-3'>Exhaust Pipes</h1>
              <h1 className='text-white text-sm md:text-lg font-medium tracking-wider pb-7'>Exhaust Pipes - Now <span className=' text-yellow-500'>15%</span> Savings</h1>
              <button className='text-black font-medium bg-yellow-500 py-3 px-5 rounded-3xl hover:text-yellow-500 group-hover:bg-white ease-in-out duration-500'>Shop Now</button>
            </div>
        </div>
        <div className='bg-black p-10 mt-5 md:mt-0 relative overflow-hidden h-72 group'>
            <Image src={back1} width={0} height={0} alt='background-image' className=' absolute top-0 left-0 w-full h-full opacity-50 group-hover:scale-125 ease-in-out duration-500'/>
            <div className=' absolute'>
              <h1 className='text-white text-3xl md:text-5xl font-bold pb-3'>Brakes & Rotors</h1>
              <h1 className='text-white text-3xl md:text-5xl font-bold pb-3'>For Sale</h1>
              <h1 className='text-white text-sm md:text-lg font-medium tracking-wider pb-7'>Take an Extra <span className=' text-yellow-500'>$5</span> Off Every Monday</h1>
              <button className='text-black font-medium bg-yellow-500 py-3 px-5 rounded-3xl hover:text-yellow-500 group-hover:bg-white ease-in-out duration-500'>Shop Now</button>
            </div>
        </div>
    </div>
  )
}

export default Shopping