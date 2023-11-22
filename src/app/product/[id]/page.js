import AddToCart from '@/components/AddToCart'
import ProductRate from '@/components/ProductRate'
import { data } from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'


export default function ProductDetailPage({ params: { id } }) {
  const product = data.products.find((x) => x.id === id)
  if (!product) {
    return <div>Product Not Found</div>
  }
  return (
    <div className=''>
      <div className="py-2">
        <Link href="/" className=' font-bold text-xl hover:text-yellow-500 ease-in-out duration-300 px-5'>Back To Products</Link>
      </div>
      <div className="grid md:grid-cols-2 md:gap-3 items-center ">
        <div className="md:col-span-1">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
        
        
        <div className='px-4'>
          <ul>
            <li>
              <h1 className="text-lg md:text-3xl py-2">{product.name}</h1>
            </li>
            <li>
              <ProductRate rate={product.rating} count={product.numReviews} />
            </li>
            <li className='font-bold py-2'>
              <hr className="my-3" />
                Description:
              <p className=' font-normal'>{product.description}</p>
            </li>
          </ul>
          <div>
          <div className="">
            <div className="mb-2 flex justify-between">
              <div className='font-bold'>Price</div>
              <div className='font-bold'>${product.price}</div>
            </div>

            <AddToCart product={product} redirect={true} />
          </div>
        </div>
        </div>
        
        
      </div>
    </div>
  )
}