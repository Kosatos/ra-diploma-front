import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICategory, ICategoryItem, IProductInfo, IOrder } from '../../models'

export const serverApi = createApi({
  reducerPath: 'server/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:7070/api/',
  }),
  endpoints: (build) => ({
    getHits: build.query<ICategoryItem[], void>({
      query: () => 'top-sales',
    }),
    getCategories: build.query<ICategory[], void>({
      query: () => 'categories',
    }),
    getItemInfo: build.query<IProductInfo, number>({
      query: (id) => `items/${id}`,
    }),
    sendOrder: build.mutation<IOrder, IOrder>({
      query: (order) => ({
        url: '/order',
        method: 'POST',
        body: order,
      }),
    }),
  }),
})

export const {
  useGetHitsQuery,
  useGetCategoriesQuery,
  useLazyGetItemInfoQuery,
  useSendOrderMutation,
} = serverApi
