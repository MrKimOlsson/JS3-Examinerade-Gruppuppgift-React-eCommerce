import React from 'react'
import Hero from '../components/home/hero/Hero'
import GridMenu from '../components/universal/productGrid/gridMenu/GridMenu'
import Grid from '../components/universal/productGrid/Grid'
import GridButton from '../components/universal/productGrid/gridButton/GridButton'
import SpecialOffers from '../components/products/specialOffers/SpecialOffers'
import ProductCarousell from '../components/home/productCarousell/ProductCarousell'
import AdminPost from '../components/home/adminPosts/AdminPost'
import NewsletterSub from '../components/home/newsletter/NewsletterSub'

const Home = () => {
  return (
    <>
      <Hero />
      <GridMenu />
      <Grid />
      <GridButton />
      <SpecialOffers />
      <ProductCarousell />
      <AdminPost />
      <NewsletterSub />
      
    </>
  )
}

export default Home