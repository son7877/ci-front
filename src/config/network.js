import axios from "axios";

export const api = async (url, method, body) => {
  axios.defaults.baseURL = "http://35.232.110.249:8080/api/v1";
  const res = await axios({
    url,
    method,
    data: body,
    headers: {
      Authorization: localStorage.getItem("id"),
    },
  });

  return res;
};
