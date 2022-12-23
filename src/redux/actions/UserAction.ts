import axios from "axios";

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
