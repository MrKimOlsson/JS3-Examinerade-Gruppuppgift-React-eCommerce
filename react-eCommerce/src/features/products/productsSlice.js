import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import productsService from ".//productService"

const initialState = {
  products: [],
  error: null,
  loading: false
}

// det första argumenet i async funktionen är våran payload. har vi ingen payload
// så kan vi lägga in _
export const getAllProducts = createAsyncThunk('products/getAll', async (_, thunkAPI) => {
  try {
    return await productsService.getAllAsync()
  } catch (err) {
    console.log(err.message)
    return thunkAPI.rejectWithValue(err.message)
  }
})


export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
        state.error = null
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false
        state.products = []
        state.error = action.payload
      })
  }
})


export default productsSlice.reducer