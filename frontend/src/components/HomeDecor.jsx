import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem.jsx';

const HomeDecor = () => {

    const { products } = useContext(ShopContext);
    const [homeDecorProducts, setHomeDecorProducts] = useState([]);

    useEffect(()=>{
        const homeDecor = products.filter((item)=>(item.category === 'Home Decor'));
        console.log('Home Decor filtered:', homeDecor);
        setHomeDecorProducts(homeDecor.slice(0,5));
    },[products])

  return (
    <div className='my-10'>

        <div className='text-center text-3xl py-8'>
            <Title text1={'HOME'} text2={'DECOR'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Transform your space with our beautiful home decor collection
            </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                homeDecorProducts.length > 0 ? (
                    homeDecorProducts.map((item, index)=>(
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

export default HomeDecor
