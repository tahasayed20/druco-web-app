import ProductItem from '@/components/ProductItem'
import { data } from '@/utils/data'

import Slider from '@/components/Slider'
import NavbarSearch from '@/components/NavbarSearch'
import Search from '@/components/Search'
import NavbarLinks from '@/components/NavbarLinks'
import Categories from '@/components/Categories'
import CategProducts from '@/components/CategProducts'
import Shopping from '@/components/Shopping'
import Cover from '@/components/Cover'
import Blog from '@/components/Blog'
import AfterBlog from '@/components/AfterBlog'
import Customer from '@/components/Customer'
import Brand from '@/components/Brand'
import SliderBrand from '@/components/SliderBrand'
import SmallSliderBrand from '@/components/SmallSliderBrand'
import UpToTop from '@/components/UpToTop'

export default function Home() {
  const { products } = data 
  return (
    <div className='overflow-hidden'>
      <UpToTop />
      <NavbarLinks />
      <Slider />
      <Search />
      <Categories />
      <CategProducts />
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </section>
      <Shopping />
      <Cover />
      <Blog />
      <AfterBlog />
      <Customer />
      <Brand />
      <SliderBrand />
      <SmallSliderBrand />
    </div>
  )
}
