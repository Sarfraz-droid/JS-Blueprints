import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.VITE_API || "http://localhost:5000",
});
