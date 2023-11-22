import React from 'react'
import Image from 'next/image'

import oneWheel from '../../public/images/onewheel.png'

export default function Blog() {
  return (
    <div className='text-center py-12' id='blog'>
        <div className='text-3xl md:text-5xl font-bold '>From <Image className=' inline-flex' src={oneWheel} width={40} height={40} alt='wheel'/>ur Blog</div>
    </div>
  )
}

