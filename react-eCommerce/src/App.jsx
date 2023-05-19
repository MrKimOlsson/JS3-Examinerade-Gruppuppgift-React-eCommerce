import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from './features/products/productsSlice'
import { clearProduct, getProductById } from './features/products/singleProductSlice'
import { useParams } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import UserProfile from './pages/UserProfile'
import Userorders from './pages/Userorders'



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  // ______________________________________________________________________

  const dispatch = useDispatch()
  const { products, error, loading } = useSelector(state => state.products)


  useEffect(() => {
    dispatch(getAllProducts())
  }, [])


  { loading && <p>Loading...</p> }
  { error && <p>{error}</p> }


  // _____________________________________________________________________

  // const dispatchProductByID = () => {
  //   // const { id } = useParams()
  //   let id = '6457647e222f0c52a46addcc'

  //   const dispatch = useDispatch()


  //   useEffect(() => {
  //     dispatch(getProductById(id))

  //     return () => {
  //       dispatch(clearProduct())
  //       product
  //     }

  //   }, [])




  //   const { product, loading, error } = useSelector(state => state.singleProduct)

  //   if(error) {
  //     return (
  //       <div>
  //         <h2>{error}</h2>
  //       </div>
  //     )
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user')
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser)
      setIsLoggedIn(true)
    }
  }, [])

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

  // }
  // dispatchProductByID()
  // _____________________________________________________________________




  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <>{
            products.length > 0
              ? <Home key={products.id} products={products} />
              : <h2>No products to show</h2>
          }</>

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
          path: 'userprofile',
          element: <UserProfile />
        },
        {
          path: 'userhistory',
          element: <Userorders />
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
          element: <>{
            products.length > 0
              ? <Products key={products.id} products={products} />
              : <h2>No products to show</h2>
          }</>
        },
        {
          path: 'productDetails/:id',
          element: <ProductDetails />
        },
        {
          path: 'productDetails',
          element: <ProductDetails />
        },
        {
          path: 'forgotpassword',
          element: <ForgotPassword />
        }

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