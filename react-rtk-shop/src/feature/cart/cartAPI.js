import axios from "axios"

export const fetchItem = () => {
    return axios.get(`https://shopping-cart-service.onrender.com/cart`)
}

export const addItem = (item) => {
    return axios.post(`https://shopping-cart-service.onrender.com/cart`, item)
}

export const updateItem = (id, item) => {
    return axios.put(`https://shopping-cart-service.onrender.com/cart/${id}`, item)
}

export const deleteItem = (id) => {
    return axios.delete(`https://shopping-cart-service.onrender.com/cart/${id}`)
}