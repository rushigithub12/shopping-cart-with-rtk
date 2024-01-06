import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "../feature/products/productsSlice"
import productsSlice from "../feature/products/productsSlice"
import cartSlice from "../feature/cart/cartSlice"

export const store = configureStore({
    reducer: {
       products: productsSlice,
       cart: cartSlice
    }
})