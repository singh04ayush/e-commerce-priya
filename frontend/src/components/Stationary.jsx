import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem.jsx';

const Stationary = () => {

    const { products } = useContext(ShopContext);
    const [stationaryProducts, setStationaryProducts] = useState([]);

    useEffect(()=>{
        const stationary = products.filter((item)=>(item.category === 'Stationary'));
        console.log('Stationary filtered:', stationary);
        setStationaryProducts(stationary.slice(0,5));
    },[products])

  return (
    <div className='my-10'>

        <div className='text-center text-3xl py-8'>
            <Title text1={'STATIONARY'} text2={'COLLECTION'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Premium stationary items for your everyday needs
            </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                stationaryProducts.length > 0 ? (
                    stationaryProducts.map((item, index)=>(
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

export default Stationary
