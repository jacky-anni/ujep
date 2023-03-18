import axios from "axios";
import { ErrorManagement } from "../ultils/errorManagement";

export const addUser = async (data: any) => {
  try {
    const res = await axios.post("users", data);
    return res.data;
  } catch (errors: any) {
    return ErrorManagement(errors);
  }
};

// edit users
export const editUser_ = async (data: any, id: string) => {
  try {
    const res = await axios.patch(`users/${id}`, data);
    return res.data;
  } catch (errors: any) {
    return ErrorManagement(errors);
  }
};

export const deleteUser_ = async (id: string) => {
  try {
    const res = await axios.delete(`users/${id}`);
    return res.data;
  } catch (errors: any) {
    return ErrorManagement(errors);
  }
};

export const getUsers_ = async () => {
  try {
    const res = await axios.get("users");
    return res.data;
  } catch (error) {
    return {
      status: 401,
      message: "Vous devez connectez pour voir cette page",
    };
  }
};

export const login = async (data: any) => {
  return axios.post("auth/login", data).then((res) => res.data);
};

// logoutUser
export const logout = async () => {
  return axios.post("auth/logout").then((res) => res.data);
};

export const getUser = async () => {
  return axios.get("auth/user").then((res) => res.data);
};
