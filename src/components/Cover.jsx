"use client"

import React from 'react'

import Image from 'next/image'

import cover from "../../public/images/cover.jpg"

function Cover() {
    

  return (
    <div className='relative py-10 bg-black p-10 overflow-hidden ' >
      <Image src={cover} width={0} height={0} alt='background-image' className=' absolute top-0 left-0 w-full opacity-50 group-hover:scale-125 ease-in-out duration-500'/>
      <div className='block relative'>
        <h1 className='text-yellow-500 text-4xl md:text-8xl font-bold relative'>GENUINE</h1>
        <h1 className='text-yellow-500 text-4xl md:text-8xl font-bold relative'>PARTS</h1>
        <h1 className='text-white text-md relative font-semibold  mt-3'>YOU CAN NOW BENEFIT WITH <span className='text-yellow-500'>15%</span> SPECIAL DISCOUNT*</h1>
      </div>
    </div>
  )
}

export default Cover