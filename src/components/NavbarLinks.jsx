import Link from 'next/link'
import React from 'react'
import { FaHeadphonesSimple } from "react-icons/fa6";

function NavbarLinks() {
  return (
    <div className='hideen md:border-t-2 py-2 mt-2 bg-white'>
        <div className='lg:grid grid-cols-3 max-w-[1240px] mx-auto py-5 px-5 items-center'>
            <div className='col-span-2'>
                <ul className='hidden md:flex justify-around'>
                    <li className='hover:tex t-yellow-300 ease-in-out duration-500'><Link className=' font-medium text-yellow-300' href='/'>HOME</Link></li>
                    <li className='hover:text-yellow-300 ease-in-out duration-500'><Link className=' font-medium' href='/'>PAGES</Link></li>
                    <li className='hover:text-yellow-300 ease-in-out duration-500'><Link className=' font-medium' href='/'>SERVICE PARTS</Link></li>
                    <li className='hover:text-yellow-300 ease-in-out duration-500'><Link className=' font-medium' href='/'>BRAKE</Link></li>
                    <li className='hover:text-yellow-300 ease-in-out duration-500'><Link className=' font-medium' href='/'>CAR BATTERIES</Link></li>
                    <li className='hover:text-yellow-300 ease-in-out duration-500'><Link className=' font-medium' href='/'>TOOLS & GARAGE</Link></li>
                </ul>
            </div>
            <div className='hidden lg:grid relative items-center'>
                <div className=' absolute right-0 bg-yellow-400 px-2 rounded'>
                    < FaHeadphonesSimple size={47} className='inline-flex absolute left-[-50px] bg-yellow-400 rounded-full px-2'/>
                    <span className=''>Call us 24/7</span>
                    <div className=''>
                    <span className=' font-bold'>+20 0122 9866 965</span>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default NavbarLinks