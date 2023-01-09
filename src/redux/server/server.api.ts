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
    // getItems: build.query<
    //   ICategoryItem[],
    //   { id: string | number; offset: string | number; q: string }
    // >({
    //   query: ({ id, offset, q }) => ({
    //     url: '/items',
    //     params: {
    //       categoryId: id,
    //       offset,
    //       q,
    //     },
    //   }),
    // }),
    getItemsByCategory: build.query<
      ICategoryItem[],
      { id: string | number; q: string }
    >({
      query: ({ id, q }) => ({
        url: '/items',
        params: {
          categoryId: id,
          q,
        },
      }),
    }),
    getItemsByOffset: build.query<
      ICategoryItem[],
      { id: string | number; offset: string | number; q: string }
    >({
      query: ({ id, offset, q }) => ({
        url: '/items',
        params: {
          categoryId: id,
          offset,
          q,
        },
      }),
    }),
  }),
})

// export const { useGetHitsQuery, useGetCategoriesQuery, getItemsByCategory } =
//   serverApi
export const {
  useGetHitsQuery,
  useGetCategoriesQuery,
  useLazyGetItemsByCategoryQuery,
  useLazyGetItemsByOffsetQuery,
} = serverApi

export const { updateQueryData } = serverApi.util
