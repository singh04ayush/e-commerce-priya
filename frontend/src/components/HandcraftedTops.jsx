import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem.jsx';

const HandcraftedTops = () => {

    const { products } = useContext(ShopContext);
    const [handcraftedTops, setHandcraftedTops] = useState([]);

    useEffect(()=>{
        const handcraftedProducts = products.filter((item)=>(item.category === 'Handcrafted Tops'));
        console.log('Handcrafted Tops filtered:', handcraftedProducts);
        setHandcraftedTops(handcraftedProducts.slice(0,5));
    },[products])

  return (
    <div className='my-10'>

        <div className='text-center text-3xl py-8'>
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
