import axios from "axios";
axios.defaults.baseURL = "https://backend.ujeph.edu.ht/v1/api";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("wpwuab") || null;

// let refresh = false;
// axios.interceptors.response.use(
//   (rep) => rep,
//   async (error) => {
//     if (error.response.status === 401 && !refresh) {
//       const response = await axios.post("auth/refresh", {});
//       if (response.status === 200) {
//         axios.defaults.headers.common["Authorization"] = response.data.token;
//         return axios(error.config);
//       }
//     }
//     refresh = false;
//     return error;
//   }
// );
