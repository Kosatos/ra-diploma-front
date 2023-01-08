import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SearchState {
  value: string
  isSubmit: boolean
  isOpen: boolean
}
const initialState: SearchState = { value: '', isSubmit: false, isOpen: false }

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeSearch(state, action: PayloadAction<string>) {
      state.value = action.payload
    },
    submitValue(state, action: PayloadAction<boolean>) {
      state.isSubmit = action.payload
    },
    openSearch(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload
    },
  },
})

export default searchSlice.reducer
export const { changeSearch, submitValue, openSearch } = searchSlice.actions
