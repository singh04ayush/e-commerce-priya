import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem.jsx';

const Craft = () => {

    const { products } = useContext(ShopContext);
    const [craftProducts, setCraftProducts] = useState([]);

    useEffect(()=>{
        const craft = products.filter((item)=>(item.category === 'Craft'));
        console.log('Craft filtered:', craft);
        setCraftProducts(craft.slice(0,5));
    },[products])

  return (
    <div className='my-10'>

        <div className='text-center text-3xl py-8'>
            <Title text1={'CRAFT'} text2={'COLLECTION'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Explore our exquisite handmade craft collection
            </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                craftProducts.length > 0 ? (
                    craftProducts.map((item, index)=>(
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

export default Craft
