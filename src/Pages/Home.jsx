import React from 'react'
import CrouselBanner from '../Inc/CarouselBanner'
import HomeFeatured from './Inc/HomeFeatured'
import BestDeal from './Inc/BestDeal'
import Gallery from './Inc/Gallery'
import SubGallery from './Inc/SubGallery'
import FunFact from './Inc/FunFact'

export default function Home() {
  return (
    <>
    <CrouselBanner />
    <HomeFeatured />
    <BestDeal />
    <Gallery />
    <SubGallery />
    <FunFact />
    </>
  )
}
