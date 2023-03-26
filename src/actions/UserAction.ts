import axios from "axios";

export const getUsers = () => {
  return axios.get("users").then((res) => res.data);
};

export const showUser = (id: string) => {
  return axios.get(`users/${id}`).then((res) => res.data);
};

export const addUser = (data: any) => {
  return axios.post("users", data).then((res) => res.data);
};

// edit users
export const editUser = (data: any, id: string) => {
  return axios.patch(`users/${id}`, data).then((res) => res.data);
};

export const deleteUser_ = (id: string) => {
  return axios.delete(`users/${id}`).then((res) => res.data);
};

export const login = (data: any) => {
  return axios.post("auth/login", data).then((res) => res.data);
};

// logoutUser
export const logout = () => {
  return axios.post("auth/logout").then((res) => res.data);
};

export const getUser = () => {
  return axios.get("auth/user").then((res) => res.data);
};
