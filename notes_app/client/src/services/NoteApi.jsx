import axios from "axios"
const API = 'http://localhost:8080';

export const getNotes = (() => {
     return axios.get(`${API}/`);
});
export const createNote = ((data) => {
     return axios.post(`${API}/notes`, data);
});
export const updateNote = ((id, data) => {
     return axios.put(`${API}/notes/${id}`, data);
});
export const deleteNote = ((id) => {
     return axios.delete(`${API}/notes/${id}`);
});

