import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import { assets } from '../assets/assets'
import Title from './Title.jsx';
import ProductItem from './ProductItem.jsx';

const LatestCollection = () => {

  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(()=>{
    const latest = products.filter((item)=>(item.latestCollection));
    setLatestProducts(latest.slice(0,10));
  }, [products])

  return (
    <div className='relative my-10'>

      <div className='relative text-center py-8 text-3xl'>
        {/* Top Right Decor Image */}
        <img src={assets.decor1} className='absolute -top-8 -right-12 w-24 h-24 opacity-100 hidden md:block' alt="Decor" />
        
        {/* Flower Doodle Top Left */}
        <svg className='absolute top-8 left-32 w-12 h-12 opacity-100 hidden md:block' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="6" fill="#d4a574"/>
          <circle cx="50" cy="30" r="5" fill="#c9a961"/>
          <circle cx="70" cy="50" r="5" fill="#c9a961"/>
          <circle cx="50" cy="70" r="5" fill="#c9a961"/>
          <circle cx="30" cy="50" r="5" fill="#c9a961"/>
        </svg>
        
        <Title text1={'LATEST'} text2={'COLLECTION'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      {/* Rendring Products */}

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          latestProducts.map((item, index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        }
      </div>
      
    </div>
  )
}

export default LatestCollection
