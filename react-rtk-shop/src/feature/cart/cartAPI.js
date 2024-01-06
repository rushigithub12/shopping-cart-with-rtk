import axios from "axios"

export const fetchItem = () => {
    return axios.get(`http://localhost:8081/cart`)
}

export const addItem = (item) => {
    return axios.post(`http://localhost:8081/cart`, item)
}

export const updateItem = (item, id) => {
    return axios.put(`http://localhost:8081/cart/${id}`, item)
}

export const deleteItem = (id) => {
    return axios.delete(`http://localhost:8081/cart/${id}`)
}