import { createSlice } from "@reduxjs/toolkit";
// Define a type for the slice state
interface EmployeeState {
  isLoading: boolean;
  currentPage: number;
  meta: any;
  employees: Array<String>;
  employee: any;
  errors: any;
  isSave: boolean;
  isEdit: boolean;
  total: number;
}

// Define the initial state using that type
const initialState: EmployeeState = {
  isLoading: true,
  currentPage: 1,
  meta: [],
  employees: [],
  employee: null,
  errors: null,
  isSave: false,
  isEdit: false,
  total: 0,
};

export const EmployeeSlice = createSlice({
  name: "employee",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setPagination: (state, action) => {
      state.isLoading = false;
      state.employees = [...action.payload.data];
      state.meta = action.payload.meta;
    },
    EmployeesFetch: (state, action) => {
      state.isLoading = false;
      state.employees = action.payload.data;
      state.meta = action.payload.meta;
      state.total = action.payload.meta.total;
    },
    EmployeeFetch: (state, action) => {
      state.isLoading = false;
      state.employee = action.payload;
    },

    EmployeeDelete: (state, action) => {
      state.isLoading = false;
      state.employees = state.employees.filter(
        (empl: any) => empl.personId !== action.payload.person.id
      );
      state.total = action.payload.meta.total - 1;
    },
    EmployeesFetchErrors: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
    clearLoading: (state) => {
      state.isLoading = true;
    },
  },
});

export const {
  setPagination,
  EmployeesFetch,
  EmployeesFetchErrors,
  clearLoading,
  EmployeeFetch,
  EmployeeDelete,
} = EmployeeSlice.actions;
export default EmployeeSlice.reducer;
