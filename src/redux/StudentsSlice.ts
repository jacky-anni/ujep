import { createSlice } from "@reduxjs/toolkit";
// Define a type for the slice state
interface StudentState {
  isLoading: boolean;
  currentPage: number;
  meta: any;
  students: Array<String>;
  student: any;
  errors: any;
  total: number;
}

// Define the initial state using that type
const initialState: StudentState = {
  isLoading: true,
  currentPage: 1,
  meta: [],
  students: [],
  student: null,
  errors: null,
  total: 0,
};

export const StudentSlice = createSlice({
  name: "student",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setPagination: (state, action) => {
      state.isLoading = false;
      state.students = [...action.payload.data];
      state.meta = action.payload.meta;
    },
    studentsFetch: (state, action) => {
      state.isLoading = false;
      state.students = action.payload.data;
      state.meta = action.payload.meta;
      state.total = action.payload.meta.total;
    },
    studentFetch: (state, action) => {
      state.isLoading = false;
      state.student = action.payload;
    },

    studentDelete: (state, action) => {
      state.isLoading = false;
      state.students = state.students.filter(
        (student: any) => student.personId !== action.payload.person.id
      );
      state.total = state.total - 1;
    },
    studentsFetchErrors: (state, action) => {
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
  studentsFetch,
  studentsFetchErrors,
  clearLoading,
  studentFetch,
  studentDelete,
} = StudentSlice.actions;
export default StudentSlice.reducer;
