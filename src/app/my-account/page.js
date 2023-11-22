import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <>
    <div className='w-full bg-gray-200 '>
      <div className=' max-w-[1240px] mx-auto p-5 '>
        <div className=''>
        <Link href='/'>
          <h1 className=' text-gray-500 hover:underline font-medium inline-flex mr-2'>Home</h1>
        </Link>
        <span className='mr-2'>/</span>
        <span className='font-medium'>My Account</span>
        </div>
      </div>
    </div> 
    
    
    <div className='w-full  md:p-[100px]'>
      <div className=' max-w-[1240px] mx-auto md:p-5 '>
        <div className='grid md:grid-cols-2'>
          
          <div className=' rounded-l-lg border border-gray-300 p-10'>
            <h1 className=' text-4xl font-extrabold pb-7'>Login</h1>
            
              <label className='block pb-3 text-sm text-gray-500'>Username or email address <span className='text-[#ff0000]'>*</span></label>
              <input className='block p-3 w-full rounded-full outline-none border border-gray-300' type='email' required />
              
              <label className='block pb-3 pt-5 text-sm text-gray-500'>Password <span className='text-[#ff0000]'>*</span></label>
              <input className='block p-3 w-full rounded-full outline-none border border-gray-30' type='password' required />
              
              <input type='submit' value='LOG IN' className='mt-5 text-sm font-semibold bg-yellow-500 text-black py-4 px-12 rounded-full mr-4 cursor-pointer hover:bg-black hover:text-yellow-500 ease-in-out duration-500' />
              <input type="checkbox"  className='mr-2'/>
              <label  className='text-gray-500 font-medium text-sm'>REMEMBER ME</label>
            
          </div>
          
          <div className=' rounded-r-lg border border-gray-300 p-10'>
            <h1 className=' text-4xl font-extrabold pb-7'>Register</h1>
            
              <label className='block pb-3 text-sm text-gray-500'>Username <span className='text-[#ff0000]'>*</span> </label>
              <input className='block p-3 w-full rounded-full outline-none border border-gray-30' type='email' required />
              
              <label className='block pb-3 pt-5 text-sm text-gray-500'>Email address <span className='text-[#ff0000]'>*</span></label>
              <input className='block p-3 w-full rounded-full outline-none border border-gray-30' type='password' required />
              
              <label className='block pb-3 pt-5 text-sm text-gray-500'>Password <span className='text-[#ff0000]'>*</span></label>
              <input className='block p-3 w-full rounded-full outline-none border border-gray-30' type='password' required />
              
              <input type='submit' value='REGEISTER' className='mt-5 text-sm font-semibold bg-yellow-500 text-black py-4 px-12 rounded-full mr-4 cursor-pointer hover:bg-black hover:text-yellow-500 ease-in-out duration-500' />
              
            
          </div>  
          
        </div>
      </div>
    </div>
    </>  
  )
}
