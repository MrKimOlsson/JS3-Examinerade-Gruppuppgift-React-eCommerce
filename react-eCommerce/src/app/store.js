import { configureStore } from '@reduxjs/toolkit'

import productsReducer from '../features/products/productsSlice'
import singleProductReducer from '../features/products/singleProductSlice'
import authReducer from './reducers'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    singleProduct: singleProductReducer,
    auth: authReducer
  }
})