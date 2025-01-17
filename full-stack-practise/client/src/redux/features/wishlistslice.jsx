import { createSlice } from '@reduxjs/toolkit'

export const wishlistSlice = createSlice({
    name: "wishlist_slice",
    initialState: { wishlist: [] },
    reducers: {
        checkWishlist(state, action) {
            console.log(action);

            const found = state.wishlist.find((b) => b._id == action.payload._id)

            if (found) {
                state.wishlist = state.wishlist.filter((w) => w._id != action.payload._id)
                return
            }

            state.wishlist.push({ ...action.payload })


        },
        clearWishlist(state) {
            state.wishlist = []
        }
    }
})

export const { checkWishlist, clearWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer