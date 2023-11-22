import React from 'react'

import { FaFacebookF , FaInstagram , FaLinkedinIn ,  } from "react-icons/fa6";


function Footer() {
  return (
    <>
    <div className='bg-black gird grid-cols-4 gap-4 py-8 px-4 md:px-12 flex justify-evenly' id='contact'>
        <div className=''>
            <h1 className='text-white font-bold py-4'>SAY HELLO</h1>
            <h1 className=' text-gray-300 font-normal text-sm py-2'>Address: 1200 El Abd Street, BBC Belbies - Cairo of Egypt</h1>
            <h1 className=' text-gray-300 font-normal text-sm py-2'>Phone: 01229866965 – 01080124128</h1>
            <h1 className=' text-gray-300 font-normal text-sm py-2'>Email: <a href="mailto:taha17temo@gmail.com" className='hover:text-yellow-500 ease-in-out duration-300'>taha17temo@gmail.com</a></h1>
            <h1 className='text-gray-300 text-4xl flex py-5 space-x-4'>
                <a href="https://www.facebook.com/tahha.17s" target='_blank'><FaFacebookF className='hover:bg-blue-700 rounded-full p-1 hover:translate-y-[-7px] ease-in-out duration-300 cursor-pointer'/></a>
                <a href="https://www.instagram.com/tahasayed__/" target='_blank'><FaInstagram className='hover:bg-red-500 rounded-full p-1 hover:translate-y-[-7px] ease-in-out duration-300 cursor-pointer'/></a>
                <a href="https://www.linkedin.com/in/taha-sayed-3852281bb/" target='_blank'><FaLinkedinIn className='hover:bg-blue-500 rounded-full p-1 hover:translate-y-[-7px] ease-in-out duration-300 cursor-pointer'/></a>
            </h1>
        </div>
        
        <div className='hidden md:block'>
            <h1 className='text-white font-bold py-4'>MY ACCOUNT</h1>
            <h1 className=' text-gray-300 font-normal text-sm py-2 cursor-pointer hover:text-yellow-500'>About</h1>
            <h1 className=' text-gray-300 font-normal text-sm py-2 cursor-pointer hover:text-yellow-500'>Advertising</h1>
            <h1 className=' text-gray-300 font-normal text-sm py-2 cursor-pointer hover:text-yellow-500'>Business Development</h1>
            <h1 className=' text-gray-300 font-normal text-sm py-2 cursor-pointer hover:text-yellow-500'>Careers</h1>
            <h1 className=' text-gray-300 font-normal text-sm py-2 cursor-pointer hover:text-yellow-500'>Permissions</h1>
            <h1 className=' text-gray-300 font-normal text-sm py-2 cursor-pointer hover:text-yellow-500'>Contact</h1>
        </div>
        
        <div className='hidden md:block'>
            <h1 className='text-white font-bold py-4'>PRODUCT</h1>
            <h1 className=' text-gray-300 font-normal text-sm py-2 cursor-pointer hover:text-yellow-500'>About</h1>
            <h1 className=' text-gray-300 font-normal text-sm py-2 cursor-pointer hover:text-yellow-500'>Advertising</h1>
            <h1 className=' text-gray-300 font-normal text-sm py-2 cursor-pointer hover:text-yellow-500'>Business Development</h1>
            <h1 className=' text-gray-300 font-normal text-sm py-2 cursor-pointer hover:text-yellow-500'>Careers</h1>
            <h1 className=' text-gray-300 font-normal text-sm py-2 cursor-pointer hover:text-yellow-500'>Permissions</h1>
            <h1 className=' text-gray-300 font-normal text-sm py-2 cursor-pointer hover:text-yellow-500'>Contact</h1>
        </div>
        
        <div className='hidden md:block'>
            <h1 className='text-white font-bold py-4'>PRODUCT</h1>
            <h1 className=' text-gray-300 font-normal text-sm py-2 cursor-pointer hover:text-yellow-500'>About</h1>
            <h1 className=' text-gray-300 font-normal text-sm py-2 cursor-pointer hover:text-yellow-500'>Advertising</h1>
            <h1 className=' text-gray-300 font-normal text-sm py-2 cursor-pointer hover:text-yellow-500'>Business Development</h1>
            <h1 className=' text-gray-300 font-normal text-sm py-2 cursor-pointer hover:text-yellow-500'>Careers</h1>
            <h1 className=' text-gray-300 font-normal text-sm py-2 cursor-pointer hover:text-yellow-500'>Permissions</h1>
            <h1 className=' text-gray-300 font-normal text-sm py-2 cursor-pointer hover:text-yellow-500'>Contact</h1>
        </div>
    </div>
    </>
  )
}

export default Footer