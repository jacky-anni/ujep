import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// Define a type for the slice state
interface UserState {
  isLoading: boolean;
  isAuthenticated: boolean;
  users: any[];
  meta: any;
  user: null;
  errors: null;
}

// Define the initial state using that type
const initialState: UserState = {
  isLoading: true,
  isAuthenticated: false,
  users: [],
  meta: [],
  user: null,
  errors: null,
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

    getUsers: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.users = [...action.payload.data];
      state.meta = action.payload.meta;
    },

    addUsers: (state, action) => {
      state.isLoading = false;
      state.users = [...state.users, action.payload];
      // state.meta = [...state.meta, action.payload.meta];
    },

    // edit users
    editUsers: (state, action) => {
      state.isLoading = false;
      state.users = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    },

    deleteUser: (state, action) => {
      state.isLoading = false;
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    },

    clearLoading: (state) => {
      state.isLoading = true;
    },
  },
});

export const {
  loginUser,
  logoutUser,
  clearLoading,
  getCurrentUser,
  getUsers,
  addUsers,
  editUsers,
  deleteUser,
} = EmployeeSlice.actions;
export default EmployeeSlice.reducer;
