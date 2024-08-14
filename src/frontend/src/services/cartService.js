import axios from 'axios';

const API_URL = 'http://localhost:8080/comiccity/cart'; // Adjust the base URL as needed

export const createCart = (cart) => {
    return axios.post(`${API_URL}/create`, cart);
};

export const getCart = (cartId) => {
    return axios.get(`${API_URL}/read/${cartId}`);
};

export const updateCart = (cart) => {
    return axios.post(`${API_URL}/update`, cart);
};

export const deleteCart = (cartId) => {
    return axios.delete(`${API_URL}/delete/${cartId}`);
};

export const getall = () => {
    return axios.get(`${API_URL}/getall`);
};