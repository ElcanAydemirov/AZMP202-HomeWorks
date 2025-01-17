import { createSlice } from '@reduxjs/toolkit'

export const basketSlice = createSlice({
    name: "basket slice",
    initialState: { basket: [] },
    reducers: {
        checkBasket(state, action) {
            const found = state.basket.find((b) => {
                return b._id == action.payload._id
            })
            console.log(found);

            if (found) {
                found.quantity++
                return
            }
            state.basket.push({ ...action.payload, quantity: 1 })
        },

        clearBasket(state) {
            state.basket = []
        },
        increment(state,action){
            const found = state.basket.find((b) => b._id == action.payload)
            if (found) {
                found.quantity++
                return
            }
        },
        decrement(state,action){
            
            const found = state.basket.find((b) => b._id == action.payload)
            console.log(found);
            
            if (found && found.quantity>1)  {
                found.quantity--
                return
            }
        }
    }
})

export const { checkBasket, clearBasket, increment, decrement } = basketSlice.actions
export default basketSlice.reducer