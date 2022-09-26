import axios from "axios";
import { getToken } from "../modules/auth";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8081",
});

const post = (url, body, headers) => {
  const token = getToken();
  let authHeader = {};
  if (token) {
    authHeader["Authorization"] = `Bearer ${token}`;
  }
  return axiosInstance.post(
    url,
    { ...body },
    { headers: { ...headers, ...authHeader } }
  );
};

const get=(url,headers)=>{

}

export { post };
