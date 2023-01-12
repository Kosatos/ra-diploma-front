import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICategory, ICategoryItem } from '../../models'

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
  }),
})

export const { useGetHitsQuery, useGetCategoriesQuery } = serverApi

export const { updateQueryData } = serverApi.util
