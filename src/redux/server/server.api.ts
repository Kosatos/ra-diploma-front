import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICategory, ICategoryItem } from '../../models'

export const serverApi = createApi({
  reducerPath: 'server/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:7070/api/',
  }),
  endpoints: (build) => ({
    getHits: build.query<ICategoryItem[], any>({
      query: () => 'top-sales',
    }),
    getCategories: build.query<ICategory[], any>({
      query: () => 'categories',
    }),
    getItems: build.query<ICategoryItem[], number | string>({
      query: (id: number | string) => ({
        url: 'http://localhost:7070/api/items',
        params: {
          categoryId: id,
        },
      }),
    }),
  }),
})

export const { useGetHitsQuery, useGetCategoriesQuery, useLazyGetItemsQuery } =
  serverApi
