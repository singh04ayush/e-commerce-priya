import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='relative flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      {/* Top Right Decor Image */}
      <img src={assets.decor9} className='absolute -top-8 -right-12 w-24 h-24 opacity-100 hidden md:block' alt="Decor" />
      
      {/* Flower Doodle Top Left */}
      <svg className='absolute top-8 left-32 w-12 h-12 opacity-100 hidden md:block' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="6" fill="#d4a574"/>
        <circle cx="50" cy="30" r="5" fill="#c9a961"/>
        <circle cx="70" cy="50" r="5" fill="#c9a961"/>
        <circle cx="50" cy="70" r="5" fill="#c9a961"/>
        <circle cx="30" cy="50" r="5" fill="#c9a961"/>
      </svg>

        <div>
            <img src={assets.women} className='w-16 h-16 m-auto mb-5 object-contain' alt="Women Empowerment" />
            <p className='font-semibold'>Women Empowerment</p>
            <p className='text-gray-400'>Supporting women artisans and entrepreneurs</p>
        </div>

        <div>
            <img src={assets.circularfashion} className='w-16 h-16 m-auto mb-5 object-contain' alt="Circular Fashion" />
            <p className='font-semibold'>Circular Fashion</p>
            <p className='text-gray-400'>Sustainable and eco-friendly practices</p>
        </div>

        <div>
            <img src={assets.sustainable} className='w-16 h-16 m-auto mb-5 object-contain' alt="Sustainable" />
            <p className='font-semibold'>Sustainable</p>
            <p className='text-gray-400'>Environmentally conscious production</p>
        </div>

        <div>
            <svg className='w-12 h-12 m-auto mb-5' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Heirloom Crafts - Geometric pattern */}
                <path d="M 50 20 L 60 35 L 50 50 L 40 35 Z" stroke="#4A5F7F" strokeWidth="2" fill="none"/>
                <path d="M 50 50 L 60 65 L 50 80 L 40 65 Z" stroke="#4A5F7F" strokeWidth="2" fill="none"/>
                <path d="M 30 35 L 40 45 L 30 55 L 20 45 Z" stroke="#4A5F7F" strokeWidth="2" fill="none"/>
                <path d="M 70 35 L 80 45 L 70 55 L 60 45 Z" stroke="#4A5F7F" strokeWidth="2" fill="none"/>
            </svg>
            <p className='font-semibold'>Heirloom Crafts</p>
            <p className='text-gray-400'>Preserving traditional artisan techniques</p>
        </div>

        <div>
            <svg className='w-12 h-12 m-auto mb-5' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Easy Returns - Box with arrow */}
                <rect x="30" y="35" width="40" height="35" stroke="#B8956A" strokeWidth="2" fill="none" rx="3"/>
                <path d="M 50 30 L 50 50" stroke="#B8956A" strokeWidth="2"/>
                <path d="M 45 45 L 50 50 L 55 45" stroke="#B8956A" strokeWidth="2" fill="none"/>
                <line x1="35" y1="42" x2="65" y2="42" stroke="#B8956A" strokeWidth="1.5"/>
            </svg>
            <p className='font-semibold'>Easy Returns</p>
            <p className='text-gray-400'>Hassle-free return and exchange policy</p>
        </div>

    </div>
  )
}

export default OurPolicy
