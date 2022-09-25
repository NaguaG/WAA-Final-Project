import axios from "axios";
import { getToken } from "../modules/auth";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8081",
});

const post = (url, body, headers) => {
  const token = getToken();
  return axiosInstance.post(
    url,
    { ...body },
    { headers: { ...headers, Authorization: `Bearer ${token}` } }
  );
};

export { post };
