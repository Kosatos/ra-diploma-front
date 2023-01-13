import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartState {
  items: any[]
  totalPrice: number
}
const initialState: CartState = { items: [], totalPrice: 0 }

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<any>) {
      console.log(action.payload)
      state.items = action.payload
    },
  },
})

export default cartSlice.reducer
export const { addToCart } = cartSlice.actions
