import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from './Title';
import ProductItem from './ProductItem.jsx';

const HandcraftedTops = () => {

    const { products } = useContext(ShopContext);
    const [handcraftedTops, setHandcraftedTops] = useState([]);

    useEffect(()=>{
        const handcraftedProducts = products.filter((item)=>(item.handCraftedtops));
        console.log('Handcrafted Tops filtered:', handcraftedProducts);
        setHandcraftedTops(handcraftedProducts.slice(0,10));
    },[products])

  return (
    <div className='relative my-10'>

        <div className='relative text-center text-3xl py-8'>
            {/* Top Right Decor Image */}
            <img src={assets.decor3} className='absolute -top-8 -right-12 w-24 h-24 opacity-100 hidden md:block' alt="Decor" />
            
            {/* Flower Doodle Top Left */}
            <svg className='absolute top-8 left-32 w-12 h-12 opacity-100 hidden md:block' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="6" fill="#d4a574"/>
              <circle cx="50" cy="30" r="5" fill="#c9a961"/>
              <circle cx="70" cy="50" r="5" fill="#c9a961"/>
              <circle cx="50" cy="70" r="5" fill="#c9a961"/>
              <circle cx="30" cy="50" r="5" fill="#c9a961"/>
            </svg>
            
            <Title text1={'HANDCRAFTED'} text2={'TOPS'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Discover our exclusive collection of handcrafted tops
            </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                handcraftedTops.length > 0 ? (
                    handcraftedTops.map((item, index)=>(
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                ) : (
                    <p className='col-span-full text-center text-gray-500'>No products available</p>
                )
            }
        </div>

    </div>
  )
}

export default HandcraftedTops
