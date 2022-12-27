import { configureStore } from '@reduxjs/toolkit'
import { serverApi } from './server/server.api'

export const store = configureStore({
  reducer: {
    [serverApi.reducerPath]: serverApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(serverApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
