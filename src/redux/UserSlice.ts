import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// Define a type for the slice state
interface UserState {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: null;
}

// Define the initial state using that type
const initialState: UserState = {
  isLoading: true,
  isAuthenticated: false,
  user: null,
};

export const EmployeeSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // setPagination: (state, action) => {
    //   state.isLoading = false;
    //   state.employees = [...action.payload.data];
    //   state.meta = action.payload.meta;
    // },
    loginUser: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      localStorage.setItem("wpwuab", action.payload.access_token);
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + action.payload.access_token;
    },

    logoutUser: (state) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("wpwuab");
      delete axios.defaults.headers.common["Authorization"];
    },

    getCurrentUser: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload.person;
    },
    clearLoading: (state) => {
      state.isLoading = true;
    },
  },
});

export const { loginUser, logoutUser, clearLoading, getCurrentUser } =
  EmployeeSlice.actions;
export default EmployeeSlice.reducer;
