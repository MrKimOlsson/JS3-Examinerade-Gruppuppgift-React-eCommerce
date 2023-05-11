import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
// import ShopLayout from './layouts/ShopLayout'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Register from './pages/Register'


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // const [url, setUrl] = useState('http://localhost:9999/api/product/')
  // const { data: products, loading, error } = useFetch(url, { method: 'GET' })

  // const [products, setProducts] = useState([])
  // const [url, setUrl] = useState('http://localhost:9999/api/product')

  // useEffect(() => {

  //   const getProducts = async () => {
  //     const res = await axios.get(url)
  //     console.log(res.data)
  //     console.log(products)
  //     setProducts(res.data)
  //   }

  //   getProducts()

  // }, [url])





  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'contact',
          element: <Contact />
        },
        {
          path: 'login',
          element: <Login setIsLoggedIn={setIsLoggedIn} />
        },
        {
          path: 'register',
          element: <Register />
        },
        {
          path: 'cart',
          element: <Cart />
        },
        {
          path: 'products',
          element: <Products />,
        },
        {
          path: 'productDetails/:id',
          element: <ProductDetails />
        },
        {
          path: 'productDetails',
          element: <ProductDetails />
        },

      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App