import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import ShopLayout from './layouts/ShopLayout'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
// import Navbar from './components/navbar/Navbar'


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