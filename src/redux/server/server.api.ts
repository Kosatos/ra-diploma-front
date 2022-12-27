import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICategory, ICategoryItem } from '../../models'

export const serverApi = createApi({
  reducerPath: 'server/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:7070/api/',
  }),
  endpoints: (build) => ({
    getData: build.query<ICategoryItem[], string>({
      query: (path: string) => path,
    }),
    getCategories: build.query<ICategory[], any>({
      query: () => 'categories',
    }),
  }),
})

export const { useGetDataQuery, useGetCategoriesQuery } = serverApi
