import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const controllers = {
    products: "Products",
}

export const productsApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `${controllers.products}`,
        }),
        getProductsById: builder.query({
            query: (id) => `${controllers.products}/${id}`,
        }),
        updatePost: builder.mutation({
            query: (id) => ({
                url: `${controllers.products}/${id}`,
                method: 'DELETE',
            }),
        }),
    })
})

export const { useGetProductsByIdQuery, useGetProductsQuery, useUpdatePostMutation } = productsApi