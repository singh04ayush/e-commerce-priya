import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from './Title';
import ProductItem from './ProductItem.jsx';

const ClutchesAndPotlis = () => {

    const { products } = useContext(ShopContext);
    const [clutchesAndPotlis, setClutchesAndPotlis] = useState([]);

    useEffect(()=>{
        const items = products.filter((item)=>(item.clutchesAndPotlis));
        console.log('Clutches and Potlis filtered:', items);
        setClutchesAndPotlis(items.slice(0,10));
    },[products])

  return (
    <div className='relative my-10'>

        <div className='relative text-center text-3xl py-8'>
            {/* Bottom Left Decor Image */}
            <img src={assets.decor6} className='absolute -bottom-8 -left-12 w-24 h-24 opacity-100 hidden md:block' alt="Decor" />
            
            {/* Leaf Doodle Bottom Right */}
            <svg className='absolute -bottom-16 right-32 w-12 h-12 opacity-100 hidden md:block' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 10 Q70 30 60 70 Q50 80 40 70 Q30 30 50 10" stroke="#8b9d6f" strokeWidth="2" fill="none"/>
              <path d="M50 20 Q55 40 50 70" stroke="#8b9d6f" strokeWidth="1.5" fill="none"/>
            </svg>
            
            <Title text1={'CLUTCHES'} text2={'& POTLIS'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Stylish clutches and traditional potlis for every occasion
            </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                clutchesAndPotlis.length > 0 ? (
                    clutchesAndPotlis.map((item, index)=>(
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

export default ClutchesAndPotlis
