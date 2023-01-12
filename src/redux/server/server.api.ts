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
    getItems: build.query<ICategoryItem[], { id: void | number; q: string }>({
      query: ({ id, q }) => {
        const categoryId = id === 11 ? undefined : id
        return {
          url: '/items',
          params: {
            categoryId,
            q,
          },
        }
      },
    }),
    getMoreItems: build.query<
      ICategoryItem[],
      { id: void | number; offset: void | number; q: string }
    >({
      query: ({ id, offset, q }) => {
        const categoryId = id === 11 ? undefined : id
        return {
          url: '/items',
          params: {
            categoryId,
            offset,
            q,
          },
        }
      },
    }),
  }),
})

// export const { useGetHitsQuery, useGetCategoriesQuery, getItemsByCategory } =
//   serverApi
export const {
  useGetHitsQuery,
  useGetCategoriesQuery,
  useLazyGetItemsQuery,
  useLazyGetMoreItemsQuery,
} = serverApi

export const { updateQueryData } = serverApi.util
