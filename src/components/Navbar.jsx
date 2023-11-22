import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import Palestine from  '../../public/images/Palestine.png'

export default function Navbar() {
  return (
    <div className='w-full text-center bg-[#233F92;]' id='home'>
      <div className='max-w-[1240px] mx-auto flex justify-between items-center'>
        <p className='hidden md:flex text-white md:text-sm'>FREE DELIVERY on all orders</p>
        <p className=' text-white text-xs py-3 md:text-sm font-bold mx-auto'><span className=' md:text-xl'><Image src={Palestine} alt='Palestine' width={40} height={40} className=' inline-flex mr-1' />Support <span className=' text-[#ff0000]'>Pa</span><span className=' text-black'>le</span><span className='text-white'>st</span><span className=' text-green-500'>ine</span> </span> Help Provide Humanitarian Aid to <span >Palestine. </span> </p>
        <ul className='hidden lg:flex'>
          <li className='ml-4 text-sm  text-white hover:text-[#FFB91F]'>
            <Link href='/'>Home</Link>
          </li>
          <li className='ml-4 text-sm  text-white hover:text-[#FFB91F]'>
            <Link href='/'>Blog</Link>
          </li>
          <li className='ml-4 text-sm  text-white hover:text-[#FFB91F]'>
            <Link href='/'>Choose us</Link>
          </li>
          <li className='ml-4 text-sm  text-white hover:text-[#FFB91F]'>
            <Link href='/'>Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

