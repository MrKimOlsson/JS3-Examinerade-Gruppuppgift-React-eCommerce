import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import ShopLayout from './layouts/ShopLayout'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Cart from './pages/Cart'


const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
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
          element: <Login />
        },
        {
          path: 'cart',
          element: <Cart />
        },
        {
          path: 'shop',
          element: <ShopLayout />,
          // errorElement: <ShopError />,     ((insert later.))
          children: [
            {
              index: true,
              element: <Shop />,
              // loader: ShopLoader          ((insert later.))
            },
            {
              path: ':id',
              element: <ProductDetails />,
              // loader: DetailsLoader        ((insert later.))
            }
          ]
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