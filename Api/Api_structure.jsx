import axios from "axios";

// Auth
export const BaseUrl = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true,
});

