import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='relative flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          {/* Leaf near first paragraph */}
          <svg className='absolute -left-8 top-0 w-10 h-10 opacity-40 hidden md:block' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="50" cy="50" rx="15" ry="30" fill="none" stroke="#8b9d6f" strokeWidth="2" transform="rotate(-45 50 50)"/>
            <path d="M50 25 Q52 50 50 75" stroke="#8b9d6f" strokeWidth="1.5" fill="none"/>
          </svg>

          {/* Flower near second paragraph */}
          <svg className='absolute -right-8 top-24 w-10 h-10 opacity-40 hidden md:block' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="5" fill="#d4a574"/>
            <circle cx="50" cy="30" r="4" fill="#c9a961"/>
            <circle cx="70" cy="50" r="4" fill="#c9a961"/>
            <circle cx="50" cy="70" r="4" fill="#c9a961"/>
            <circle cx="30" cy="50" r="4" fill="#c9a961"/>
          </svg>

          {/* Leaf near Our Mission */}
          <svg className='absolute -left-6 top-56 w-8 h-8 opacity-40 hidden md:block' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10 Q70 30 60 70 Q50 80 40 70 Q30 30 50 10" stroke="#8b9d6f" strokeWidth="2" fill="none"/>
            <path d="M50 20 Q55 40 50 70" stroke="#8b9d6f" strokeWidth="1.5" fill="none"/>
          </svg>

          {/* Small flower near mission text */}
          <svg className='absolute -right-6 bottom-8 w-8 h-8 opacity-40 hidden md:block' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="4" fill="#d4a574"/>
            <circle cx="50" cy="35" r="3" fill="#c9a961"/>
            <circle cx="65" cy="50" r="3" fill="#c9a961"/>
            <circle cx="50" cy="65" r="3" fill="#c9a961"/>
            <circle cx="35" cy="50" r="3" fill="#c9a961"/>
          </svg>

          <p>We're not just another marketplace—we’re your secret passage to timeless craftsmanship, vibrant culture, and treasures handmade with heart.</p>
          <p>From heritage textiles to undiscovered artisanal gems, our collection is your one-stop portal to elevate every space, every gift, and every moment. No haggling required—just browse, support, and celebrate!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>To bring craft lovers the best finds, instant access, and the joy of discovering handmade wonders—because waiting for tradition to knock on your door is so last century..</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='relative grid grid-cols-1 md:grid-cols-3 gap-6 mb-20'>
        {/* Top Right Decor Image */}
        <img src={assets.decor1} className='absolute -top-12 -right-12 w-32 h-32 opacity-60 hidden md:block' alt="Decor" />
        
        {/* Bottom Left Decor Image */}
        <img src={assets.decor2} className='absolute -bottom-12 -left-12 w-32 h-32 opacity-60 hidden md:block' alt="Decor" />

        {/* Quality Assurance Card - Neon Blue */}
        <div className='rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl'>
          <div className='bg-gradient-to-r from-blue-500 to-cyan-400 h-2'></div>
          <div className='p-8 border border-t-0 flex flex-col gap-5 h-full'>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className='text-lg font-bold text-gray-800'>Quality Assurance</h3>
            </div>
            <p className='text-gray-600'>No guesswork here—every handcrafted piece is authentic, quality-checked, and crafted to last longer than your fondest festival memories.</p>
            <div className='mt-auto pt-4'>
              <div className='w-12 h-1 bg-blue-400'></div>
            </div>
          </div>
        </div>

        {/* Convenience Card - Neon Green */}
        <div className='rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl'>
          <div className='bg-gradient-to-r from-green-400 to-emerald-500 h-2'></div>
          <div className='p-8 border border-t-0 flex flex-col gap-5 h-full'>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 rounded-full bg-green-100 flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className='text-lg font-bold text-gray-800'>Convenience</h3>
            </div>
            <p className='text-gray-600'>Instant delivery means no more waiting around—your next adventure begins the moment you hit 'buy'.</p>
            <div className='mt-auto pt-4'>
              <div className='w-12 h-1 bg-green-400'></div>
            </div>
          </div>
        </div>

        {/* Customer Service Card - Neon Purple */}
        <div className='rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl'>
          <div className='bg-gradient-to-r from-purple-500 to-pink-500 h-2'></div>
          <div className='p-8 border border-t-0 flex flex-col gap-5 h-full'>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className='text-lg font-bold text-gray-800'>Exceptional Support</h3>
            </div>
            <p className='text-gray-600'>Got questions? We've got answers—unless you're asking for cheat codes. Those, you'll have to find on your own.</p>
            <div className='mt-auto pt-4'>
              <div className='w-12 h-1 bg-purple-400'></div>
            </div>
          </div>
        </div>

      </div>

      <div className='relative my-20 flex flex-col md:flex-row gap-16 items-center'>
        {/* Bottom Right Decor Image */}
        <img src={assets.decor3} className='absolute -bottom-12 -right-12 w-32 h-32 opacity-60 hidden md:block' alt="Decor" />
        
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <div className='text-2xl'>
            <Title text1={'ART & THE'} text2={'ARTISANS'} />
          </div>
          <p>We believe in supporting our artisans from rural areas by providing the skill and confidence they need to earn by their own industry. Our artisans and designers work on themes that span across architectural monuments to abstract forms as an inspiration for their artistic expression. These themes help in designing and creating the key to the craft and embroidery that is required to fulfil the collections.</p>
          <p>Strategically, our aim has always been to provide artistic growth by providing artisans enough work, upskilling their training, bringing forward newer forms of art and helping the artisans gain visibility while working on reviving traditional crafts and bringing them to the world in contemporary forms.</p>
          <p>Our decentralised process enables women to decide whether they want to work from the comfort of their homes while focusing on their family and fields or come to the centre. This approach is sustainable and provides work to women far and wide including those who are unable to travel.</p>
        </div>
        <img src={assets.art} className='w-full md:max-w-[450px]' alt="Art and Artisans" />
      </div>

      <div className='relative my-20 flex flex-col md:flex-row gap-16 items-center'>
        {/* Top Left Decor Image */}
        <img src={assets.decor4} className='absolute -top-12 -left-12 w-32 h-32 opacity-60 hidden md:block' alt="Decor" />
        
        <img src={assets.craft} className='w-full md:max-w-[450px]' alt="Crafts" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <div className='text-2xl'>
            <Title text1={'CRAFTS'} text2={''} />
          </div>
          <p>We have helped build a tribe of over 300 artisans who are skilled in crafts that were passed down from generations to them. At nyima, you will find a host of skilled crafts that are brought to life with the help of industry professionals and designers who through their workshops, assist the artisans to learn market literacy, product innovation, overall growth and enhance their design acumen leading to a shift in their entrepreneurial skills and developing themselves as craft entrepreneurs.</p>
          <p className='italic text-gray-700 font-semibold'>"When you shop on nyima, you become the owner of a beautiful handmade piece and enable its maker to have social equity and send their children to school"</p>
        </div>
      </div>

      <div className='relative my-20 py-16 text-center'>
        {/* Top Right Decor Image */}
        <img src={assets.decor5} className='absolute -top-12 -right-12 w-32 h-32 opacity-60 hidden md:block' alt="Decor" />
        
        {/* Bottom Left Decor Image */}
        <img src={assets.decor6} className='absolute -bottom-12 -left-12 w-32 h-32 opacity-60 hidden md:block' alt="Decor" />
        
        {/* Flower Doodles */}
        <svg className='absolute top-20 left-10 w-16 h-16 opacity-40 hidden md:block' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="8" fill="#d4a574"/>
          <circle cx="50" cy="30" r="6" fill="#c9a961"/>
          <circle cx="70" cy="45" r="6" fill="#c9a961"/>
          <circle cx="65" cy="65" r="6" fill="#c9a961"/>
          <circle cx="35" cy="65" r="6" fill="#c9a961"/>
          <circle cx="30" cy="45" r="6" fill="#c9a961"/>
        </svg>

        {/* Leaf Doodle */}
        <svg className='absolute top-40 right-20 w-12 h-12 opacity-40 hidden md:block' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 10 Q70 30 60 70 Q50 80 40 70 Q30 30 50 10" stroke="#8b9d6f" strokeWidth="2" fill="none"/>
          <path d="M50 20 Q55 40 50 70" stroke="#8b9d6f" strokeWidth="1.5" fill="none"/>
        </svg>

        {/* Flower Doodle 2 */}
        <svg className='absolute bottom-32 left-16 w-14 h-14 opacity-40 hidden md:block' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="6" fill="#d4a574"/>
          <circle cx="50" cy="25" r="5" fill="#c9a961"/>
          <circle cx="75" cy="50" r="5" fill="#c9a961"/>
          <circle cx="50" cy="75" r="5" fill="#c9a961"/>
          <circle cx="25" cy="50" r="5" fill="#c9a961"/>
        </svg>

        {/* Leaf Doodle 2 */}
        <svg className='absolute bottom-20 right-12 w-10 h-10 opacity-40 hidden md:block' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="50" cy="50" rx="20" ry="35" fill="none" stroke="#8b9d6f" strokeWidth="2" transform="rotate(-30 50 50)"/>
          <path d="M50 20 Q55 50 50 80" stroke="#8b9d6f" strokeWidth="1.5" fill="none"/>
        </svg>
        
        <div className='text-2xl mb-8 relative inline-block w-full'>
          {/* Small leaf near title */}
          <svg className='absolute -left-8 top-0 w-8 h-8 opacity-40 hidden md:block' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="50" cy="50" rx="15" ry="30" fill="none" stroke="#8b9d6f" strokeWidth="2" transform="rotate(-45 50 50)"/>
            <path d="M50 25 Q52 50 50 75" stroke="#8b9d6f" strokeWidth="1.5" fill="none"/>
          </svg>
          
          {/* Small flower near title */}
          <svg className='absolute -right-8 top-0 w-8 h-8 opacity-40 hidden md:block' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="4" fill="#d4a574"/>
            <circle cx="50" cy="35" r="3" fill="#c9a961"/>
            <circle cx="65" cy="50" r="3" fill="#c9a961"/>
            <circle cx="50" cy="65" r="3" fill="#c9a961"/>
            <circle cx="35" cy="50" r="3" fill="#c9a961"/>
          </svg>
          
          <h1> JOIN OUR TRIBE</h1>
        </div>
        
        <div className='max-w-2xl mx-auto relative'>
          {/* Leaf on left of text */}
          <svg className='absolute -left-12 top-4 w-10 h-10 opacity-40 hidden md:block' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10 Q70 30 60 70 Q50 80 40 70 Q30 30 50 10" stroke="#8b9d6f" strokeWidth="2" fill="none"/>
            <path d="M50 20 Q55 40 50 70" stroke="#8b9d6f" strokeWidth="1.5" fill="none"/>
          </svg>
          
          {/* Flower on right of text */}
          <svg className='absolute -right-12 top-4 w-10 h-10 opacity-40 hidden md:block' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="5" fill="#d4a574"/>
            <circle cx="50" cy="30" r="4" fill="#c9a961"/>
            <circle cx="70" cy="50" r="4" fill="#c9a961"/>
            <circle cx="50" cy="70" r="4" fill="#c9a961"/>
            <circle cx="30" cy="50" r="4" fill="#c9a961"/>
          </svg>
          
          <p className='text-gray-600 text-lg leading-relaxed'>Every purchase helps us move closer to making fashion ethical, circular and reviving centuries-old crafts that are on the verge of extinction.</p>
        </div>
      </div>

      <NewsLetterBox />

    </div>
  )
}

export default About
