import axios from "axios"

export const fetchProducts = () => {
    return axios.get(`https://shopping-cart-service.onrender.com/products`)
}