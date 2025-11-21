import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import HandcraftedTops from '../components/HandcraftedTops'
import BestSeller from '../components/BestSeller'
import Craft from '../components/Craft'
import ClutchesAndPotlis from '../components/ClutchesAndPotlis'
import Stationary from '../components/Stationary'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'
import HomeDecor from '../components/HomeDecor'
import HandcraftedSarees from '../components/HandcraftedSarees'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <HandcraftedTops />
      <HandcraftedSarees />
      <OurPolicy />
      <Craft />
      <ClutchesAndPotlis />
      <Stationary />
      <HomeDecor />
      <NewsLetterBox />
    </div>
  )
}

export default Home
