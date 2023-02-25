import axios from "axios";
import { ErrorManagement } from "./../../components/ultils/errorManagement";

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
  try {
    const res = await axios.post("auth/login", data);
    return res.data;
  } catch (error) {
    return {
      status: 404,
      message: "Email ou mot de passe est incorrect",
    };
  }
};

// logoutUser
export const logout = async () => {
  try {
    const res = await axios.post("auth/logout", {});
    return res.data;
  } catch (error) {
    return {
      status: 401,
      message: "Vous devez connectez pour voir cette page",
    };
  }
};

export const setCurrentUser = async () => {
  try {
    const res = await axios.get("auth/user");
    return res.data;
  } catch (error) {
    return {
      status: 401,
      message: "Vous devez connectez pour voir cette page",
    };
  }
};
