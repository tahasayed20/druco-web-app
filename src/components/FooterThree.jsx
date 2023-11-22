import React from 'react'

function FooterThree() {
  return (
    <div className='md:hidden bg-black gird grid-cols-4 gap-4 py-8 px-4'>
        <div className=' col-span-4 '>
            <h1 className='text-white font-bold py-4'>READER SERVICES</h1>
            <div className='flex ju gap-16'>
                <div>
                    <h1 className=' text-gray-300 font-normal text-sm py-2 cursor-pointer hover:text-yellow-500'>Advertising</h1>
                    <h1 className=' text-gray-300 font-normal text-sm py-2 cursor-pointer hover:text-yellow-500'>Business Development</h1>
                    <h1 className=' text-gray-300 font-normal text-sm py-2 cursor-pointer hover:text-yellow-500'>Careers</h1>
                </div>
                <div>
                    <h1 className=' text-gray-300 font-normal text-sm py-2 cursor-pointer hover:text-yellow-500'>Permissions</h1>
                    <h1 className=' text-gray-300 font-normal text-sm py-2 cursor-pointer hover:text-yellow-500'>Contact Us</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterThree