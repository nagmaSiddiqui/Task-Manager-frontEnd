import axios from "axios";

const api = axios.create({
  baseURL: "http://https://task-manager-backend-pw50.onrender.com/api/tasks",
});

export default api;
