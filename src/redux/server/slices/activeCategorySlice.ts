import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ActiveCategory {
  id: number
}
const initialState: ActiveCategory = { id: 11 }

export const activeCategorySlice = createSlice({
  name: 'active category',
  initialState,
  reducers: {
    toggleActive(state, action: PayloadAction<number>) {
      state.id = action.payload
    },
  },
})

export default activeCategorySlice.reducer
export const { toggleActive } = activeCategorySlice.actions
