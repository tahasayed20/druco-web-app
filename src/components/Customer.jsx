import React from 'react'

import Image from 'next/image'

import customerPhoto from '../../public/images/home-about.jpg'

import { FaTruck , FaHandshake , FaHeadset } from "react-icons/fa6";





function Customer() {
  return (
    <div className='relative py-10 bg-black  overflow-hidden text-center' id='about-us'>
        <Image src={customerPhoto} width={500} height={500} alt='background-image' className=' absolute top-0 left-0 w-full opacity-50'/>
    <div>
        <h1 className=' text-white text-xs md:text-xl font-bold relative py-4'>PROFESSIONAL TEAM SUPPORT</h1>
        <h1 className=' text-white text-2xl md:text-6xl font-bold relative'>Why should the customer</h1>
        <h1 className=' text-white text-2xl md:text-6xl font-bold relative pt-2'>choose us?</h1>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 relative justify-items-center content-cente py-8'>
            <div className=' relative'>
                <FaHandshake size={40} className='text-white relative left-[50%] translate-x-[-50%]'/>
                <h1 className='text-yellow-500 font-bold md:text-3xl relative'>Best quality</h1>
                <h1 className='text-white text-sm font-medium'>Best quality is a must at organic</h1>
            </div>
            <div className='relative'>
                <FaTruck size={40} className='text-white relative left-[50%] translate-x-[-50%]'/>
                <h1 className='text-yellow-500 font-bold md:text-3xl relative'>Shipping</h1>
                <h1 className='text-white text-sm font-medium'>Deliver within 24 hours</h1>
            </div>
            <div className='relative'>
                <FaHeadset size={40} className='text-white relative left-[50%] translate-x-[-50%]'/>
                <h1 className='text-yellow-500 font-bold md:text-3xl relative'>Support 24/7</h1>
                <h1 className='text-white text-sm font-medium'>Contact us 24 hours a day</h1>
            </div>
        </div>
    </div>
  )
}

export default Customer