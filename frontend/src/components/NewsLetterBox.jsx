import React from 'react'
import { assets } from '../assets/assets'

const NewsLetterBox = () => {

    const onSubmitHandler = (event) =>{
        event.preventDefault();
    }
    
  return (
    <div className='text-center'>
      <img src={assets.decor7} className='w-32 h-32 opacity-60 mx-auto mb-4' alt="Decor" />
      
      <p className='text-2xl font-medium text-gray-800'>Subscribe Now & Get Exclusive Offers</p>
      <p className='text-gray-400 mt-3'>Enter your email to unlock savings and surprises!</p>
      <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input type="email" placeholder='Enter your email' className='w-full sm:flex-1 outline-none' required />
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsLetterBox
