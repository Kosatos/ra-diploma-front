import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartItem } from '../../models'

interface CartState {
  items: ICartItem[]
  totalPrice: number
}
let initialState: CartState
const storageState = localStorage.getItem('cart')
if (storageState !== null) {
  initialState = JSON.parse(storageState)
} else {
  initialState = { items: [], totalPrice: 0 }
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ICartItem>) {
      let isEdit = false
      state.items.forEach((product) => {
        if (
          product.id === action.payload.id &&
          product.size === action.payload.size
        ) {
          product.count += action.payload.count
          product.total = product.count * product.price
          isEdit = true
        }
      })
      if (!isEdit)
        state.items.push({
          ...action.payload,
          total: action.payload.price * action.payload.count,
        })

      state.totalPrice = state.items.reduce((sum, item) => {
        return sum + item.price * item.count
      }, 0)

      localStorage.setItem('cart', JSON.stringify(state))
    },
    removeItem(state, action: PayloadAction<ICartItem>) {
      state.items = state.items.filter((item) => {
        if (item.id === action.payload.id) {
          return item.size !== action.payload.size
        } else {
          return true
        }
      })
      state.totalPrice = state.items.reduce((sum, item) => {
        return item.total !== undefined ? sum + item.total : 0
      }, 0)

      localStorage.setItem('cart', JSON.stringify(state))
    },
    clearCart(state) {
      state.items = []
      state.totalPrice = 0
      localStorage.clear()
    },
  },
})

export default cartSlice.reducer
export const { addToCart, removeItem, clearCart } = cartSlice.actions
