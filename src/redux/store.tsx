import { configureStore } from '@reduxjs/toolkit'
import { serverApi } from './server/server.api'
import createSagaMiddleware from '@redux-saga/core'
import productsReducer from './slices/productsSlice'
import activeCategoryReducer from './slices/activeCategorySlice'
import searchReducer from './slices/searchSlice'
import cartReducer from './slices/cartSlice'
import saga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    [serverApi.reducerPath]: serverApi.reducer,
    products: productsReducer,
    active_category: activeCategoryReducer,
    search: searchReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(serverApi.middleware, sagaMiddleware),

  devTools: process.env.NODE_ENV !== 'production',
})

sagaMiddleware.run(saga)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
