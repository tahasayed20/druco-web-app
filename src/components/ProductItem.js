import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ProductRate from './ProductRate'
import AddToCart from './AddToCart'


import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";



export default function ProductItem({ product }) {
  return (
    <div className="w-[300px] max-w-[1240px] mx-auto px-5 py-7 md:w-[300px] group ease-in-out duration-500 md:h-[450px]" >
      <div className='relative text-center border border-slate-100 px-2'>
        <span className=' bg-red-700 text-white font-bold rounded-3xl px-2 text-sm absolute left-0'>{product.percent}%</span>
        <AiOutlineSearch className=' absolute right-0 bg-slate-100 rounded-md hover:bg-yellow-500 hover:text-white cursor-pointer md:hidden group-hover:block' size={20}/>
        <AiOutlineHeart className=' absolute right-0 bg-slate-100 rounded-md hover:bg-yellow-500 hover:text-white cursor-pointer top-8 md:hidden group-hover:block' size={20}/>
        <Link href={`/product/${product.id}`}>
        <Image
          src={product.image}
          width={400}
          height={400}
          alt={product.name}
          className="w-[100%] cursor-pointer"
        />
        </Link>
        <div className="flex flex-col items-center justify-center p-5">
            <Link href={`/product/${product.id}`}>
            <h2 className="text-sm md:text-md font-semibold group-hover:text-yellow-500">{product.name}</h2>
            </Link>
            <ProductRate rate={product.rating} count={product.numReviews} />

            <p className="mb-2">{product.brand}</p>
            <span className='text-lg font-bold text-blue-600'>${product.price}</span>
            <span className='text-sm  text-gray-400 line-through'>${product.oldPrice}</span>
            <AddToCart
              showQty={false}
              product={product}
              increasePerClick={true}
              redirect={false}
            />
        </div>
      </div>
    </div>
  )
}