import { createSlice } from "@reduxjs/toolkit";
// Define a type for the slice state
interface CourseState {
  isLoading: boolean;
  createCourseModalOpen: boolean;
  editCourseModalOpen: boolean;
}

// Define the initial state using that type
const initialState: CourseState = {
  isLoading: true,
  createCourseModalOpen: false,
  editCourseModalOpen: false,
};

export const CourseSlice = createSlice({
  name: "course",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.createCourseModalOpen = action.payload;
    },
    editModal: (state, action) => {
      state.editCourseModalOpen = action.payload;
    },
  },
});

export const { openModal, editModal } = CourseSlice.actions;
export default CourseSlice.reducer;
