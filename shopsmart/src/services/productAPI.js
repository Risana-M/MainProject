
import axios from "axios"

const API = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api/products`
});




export const getProducts = () => API.get("/")

export const addProduct = (data) => API.post("/admin/add", data)

export const deleteProduct = (id) => API.delete(`/admin/delete/${id}`)

export const updateProduct = (id, data) => API.put(`/admin/update/${id}`, data)

export const restockProduct = (id, data) => API.put(`/admin/restock/${id}`, data)