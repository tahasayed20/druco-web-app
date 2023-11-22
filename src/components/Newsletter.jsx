import React from 'react'

function Newsletter() {
  return (
    <div className='bg-yellow-500'>
        <div className=' max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 py-10 px-4 items-center'>
            <div className='px-2 md:mt-4'>
                <h1 className='font-bold text-3xl md:text-4xl'>Newsletter</h1>
                <h1 className=' text-xs  md:text-base font-medium'>Subscribe to our Newsletter get 10% discount code</h1>
            </div>
            <div className=' mt-5 p-2 border-solid border-2 border-black rounded-full '>
                <form action="">
                    <input type="email" placeholder='Your e-mail address'  className='bg-yellow-500 placeholder:text-black px-4 w-[70%] md:w-[80%] outline-none '/>
                    <input type="submit" value='SUBSCRIBE' className='bg-black text-white rounded-full p-2 font-bold text-md cursor-pointer'/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Newsletter