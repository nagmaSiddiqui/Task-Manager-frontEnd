import axios from "axios";

const api = axios.create({
  baseURL: "https://task-manager-backend-pw50.onrender.com/api",
});

export default api;
