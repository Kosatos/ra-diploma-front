import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICategoryItem, IQuery } from '../../models'

interface ProductsState {
  items: ICategoryItem[]
  isLoading: boolean
  isLoadingMore: boolean
  isError: boolean
  isErrorMore: boolean
  allLoaded: boolean
}
const initialState: ProductsState = {
  items: [],
  isLoading: false,
  isLoadingMore: false,
  isError: false,
  isErrorMore: false,
  allLoaded: false,
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getItemsRequest(state, action: PayloadAction<IQuery>) {
      state.isLoading = true
      state.isError = false
    },
    getItemsFailure(state, action: PayloadAction<boolean>) {
      state.isLoading = false
      state.isError = action.payload
    },
    getItemsSuccess(state, action: PayloadAction<ICategoryItem[]>) {
      state.isLoading = false
      state.allLoaded = action.payload.length < 6
      state.items = action.payload
    },
    addItemsRequest(state, action: PayloadAction<IQuery>) {
      state.isLoadingMore = true
      state.isErrorMore = false
    },
    addItemsFailure(state, action: PayloadAction<boolean>) {
      state.isLoadingMore = false
      state.isErrorMore = action.payload
    },
    addItemsSuccess(state, action: PayloadAction<ICategoryItem[]>) {
      state.isLoadingMore = false
      state.allLoaded = action.payload.length < 6
      state.items = [...state.items, ...action.payload]
    },
  },
})

export default productsSlice.reducer
export const {
  getItemsRequest,
  getItemsFailure,
  getItemsSuccess,
  addItemsRequest,
  addItemsFailure,
  addItemsSuccess,
} = productsSlice.actions
