import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

export const http = {
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  get: axios.get,
};
