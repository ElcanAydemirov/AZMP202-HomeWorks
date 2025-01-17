import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { productsApi } from '../service'
import basketReducer from '../features/basketslice'
import wishlistReducer from '../features/wishlistslice'

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        wishlist: wishlistReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
})

setupListeners(store.dispatch)