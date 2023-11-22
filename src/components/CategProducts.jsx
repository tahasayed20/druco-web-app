import React from 'react'
import Link from 'next/link'

function CategProducts() {
  return (
    <div className='max-w-[1240px] mx-auto px-5 md:py-7' id='product'>
        <div className='flex justify-center w-full py-11'>
          <h1 className='text-2xl font-bold md:text-4xl mr-5 cursor-pointer text-yellow-500'>Bestsellers</h1>
          <h1 className='text-2xl font-bold md:text-4xl hover:text-yellow-500 cursor-pointer'>Popular items</h1>
        </div>
    </div>
  )
}

export default CategProducts