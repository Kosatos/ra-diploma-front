import { configureStore } from '@reduxjs/toolkit'
import { serverApi } from './server/server.api'
import activeCategoryReducer from './server/slices/activeCategorySlice'
import searchReducer from './server/slices/searchSlice'

export const store = configureStore({
  reducer: {
    [serverApi.reducerPath]: serverApi.reducer,
    active_category: activeCategoryReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(serverApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
