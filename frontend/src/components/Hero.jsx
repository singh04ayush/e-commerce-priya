import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets.js'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const loopImages = [assets.loop1, assets.loop2, assets.loop3, assets.loop4, assets.loop5]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % loopImages.length)
    }, 4000) // Change image every 4 seconds
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 relative h-96 sm:h-96'>

        {/* Hero Left Side */ }
        <div className='w-full sm:w-3/10 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                    <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                </div>
            </div>
        </div>

        {/* Hero Right Side - Carousel */ }
        <div className='w-full sm:w-7/10 relative overflow-hidden h-full'>
          <div className='relative w-full h-full'>
            {loopImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img className='w-full h-full object-cover' src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>

          {/* Progress Indicator Strip */}
          <div className='absolute bottom-0 left-0 right-0 h-1 bg-gray-300 flex'>
            {loopImages.map((_, index) => (
              <div
                key={index}
                className={`flex-1 transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

    </div>
  )
}

export default Hero
