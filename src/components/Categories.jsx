"use client"

import React from 'react'
import Image from 'next/image'

import Photo1 from '../../public/images/1.jpg'
import Photo2 from '../../public/images/2.jpg'
import Photo3 from '../../public/images/3.jpg'
import Photo4 from '../../public/images/4.jpg'
import Photo5 from '../../public/images/5.jpg'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function Categories() {

    const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

  return (
    <div className=' bg-yellow-500'>
        <div className=' block max-w-[1240px] mx-auto py-4 px-4 md:grid grid-cols-4 gap-2 items-center text-center'>
            <div className='text-center mb-2 md:text-start'>
                <h1 className=' font-bold text-4xl'>Categories</h1>
                <h6 className=' font-mono text-lg tracking-widest ml-2'>MARCH FAVORITES</h6>
            </div>
            <div className='col-span-3 relative'>
                <Carousel  
                    responsive={responsive}
                    infinite={true}
                >
                    <div className='group mx-[30%] md:mx[0%]'>
                        <div className='rounded-lg w-[150px] h-[150px]'>
                        <Image className='w-[150px] h-[150px] rounded-lg group-hover:scale-110   ease-in-out duration-500 cursor-pointer' src={Photo1} alt="drugo" />
                        </div>
                        <h1 className='md:ml-10 pt-2 font-sans text-lg group-hover:text-white'>Exteriors</h1>
                    </div>
                    <div className='group '>
                        <div className='rounded-lg w-[150px] h-[150px] mx-[30%] md:mx[0%]'>
                        <Image className='w-[150px] h-[150px] rounded-lg group-hover:scale-110 ease-in-out duration-500 cursor-pointer' src={Photo2} alt="drugo" />
                        </div>
                        <h1 className='md:ml-14 pt-2 font-sans text-lg group-hover:text-white'>Wheels & Tires</h1>
                    </div>
                    <div className='group mx-[30%] md:mx[0%]'>
                        <div className='rounded-lg w-[150px] h-[150px]'>
                        <Image className='w-[150px] h-[150px] rounded-lg group-hover:scale-110 ease-in-out duration-500 cursor-pointer' src={Photo3} alt="drugo" />
                        </div>
                        <h1 className='md:ml-10 pt-2 font-sans text-lg group-hover:text-white'>Interiors</h1>
                    </div>
                    <div className='group mx-[30%] md:mx[0%]'>
                        <div className='rounded-lg w-[150px] h-[150px]'>
                        <Image className='w-[150px] h-[150px] rounded-lg group-hover:scale-110 ease-in-out duration-500 cursor-pointer' src={Photo4} alt="drugo" />
                        </div>
                        <h1 className='md:ml-5 pt-2 font-sans text-lg group-hover:text-white'>Entertainments</h1>
                    </div>
                    <div className='group mx-[30%] md:mx[0%]'>
                        <div className='rounded-lg w-[150px] h-[150px]'>
                        <Image className='w-[150px] h-[150px] rounded-lg group-hover:scale-110 ease-in-out duration-500 cursor-pointer' src={Photo5} alt="drugo" />
                        </div>
                        <h1 className='md:ml-7 pt-2 font-sans text-md md:text-lg group-hover:text-white'>Checmicals</h1>
                    </div>
                </Carousel>
            </div>
        </div>
    </div>
  )
}

export default Categories;