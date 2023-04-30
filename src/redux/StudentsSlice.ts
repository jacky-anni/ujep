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
  filtered: any;
  activeFaculty: any;
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
  filtered: null,
  activeFaculty: { active: true, faculty: null },
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

    searchStudents: (state, action) => {
      state.isLoading = false;
      state.filtered = action.payload;
    },

    clearSearchStudents: (state) => {
      state.isLoading = false;
      state.filtered = null;
    },

    activeFacultyRegistration: (state, action) => {
      state.isLoading = false;
      state.activeFaculty = {
        active: action.payload.active,
        faculty: action.payload.faculty,
      };
    },
  },
});

export const {
  setPagination,
  searchStudents,
  clearSearchStudents,
  activeFacultyRegistration,
} = StudentSlice.actions;
export default StudentSlice.reducer;
