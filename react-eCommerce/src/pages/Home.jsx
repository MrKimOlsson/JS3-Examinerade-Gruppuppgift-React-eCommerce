import React from 'react'
import Hero from '../components/home/hero/Hero'
import GridMenu from '../components/products/productGrid/gridMenu/GridMenu'
import Grid from '../components/products/productGrid/Grid'
import GridButton from '../components/products/productGrid/gridButton/GridButton'
import SpecialOffers from '../components/products/specialOffers/SpecialOffers'
import ProductCarousell from '../components/home/productCarousell/ProductCarousell'
import AdminPost from '../components/home/adminPosts/AdminPost'
import NewsletterSub from '../components/home/newsletter/NewsletterSub'

const Home = ({ products }) => {

  // filter products
  // Get a list of 8 products
  // Get 3 separate products for special offers
  // on click grid button increase the list by 12 more
  

  let partialObjects = products.map(item => {
    return { category: item };
 });

  // function filterItems(arr, query) {
  //   return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
  // }
  
  // console.log(filterItems(products, "foot"));

  return (
    <>
  
      {/* { 
      console.log(filterItems(products.category, "foot"))} */}
  
    
      <Hero />
      <GridMenu />
      {console.log(partialObjects)}
      { 
        products.length > 0
        ? <Grid key={products.id} products={products} />
        : <h2>No products to show</h2>
      }
      <GridButton />
      <SpecialOffers />
      <ProductCarousell />
      <AdminPost />
      <NewsletterSub />
      
    </>
  )
}

export default Home