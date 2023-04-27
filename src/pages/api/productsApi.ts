// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper';

// interface Iproducts {
//   title: string;
//   price: string;
//   image: string
// }

export const productsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/"
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: (builder) => ({
    products: builder.query<{title:string, price: string, image:string }, void>({
      query: () => ({
        url: `products`
      })
    }),
    getCategories: builder.query<any, void>({
      query: () => ({
        url: `products/categories`
      })
    }),
    categories: builder.query({
      query: ({category}) => ({
        url: `products/category/${category}`,
        method: "get"
      })
    })
  })
})

export const { useProductsQuery, useGetCategoriesQuery, useCategoriesQuery } = productsApi;