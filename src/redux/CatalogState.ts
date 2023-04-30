import { createSlice } from "@reduxjs/toolkit";
// Define a type for the slice state
interface CourseState {
  isLoading: boolean;
  createCatalogModalOpen: boolean;
  addCatalogModalOpen: boolean;
  faculty: any;
  filtered: any;
}

// Define the initial state using that type
const initialState: CourseState = {
  isLoading: true,
  createCatalogModalOpen: false,
  addCatalogModalOpen: false,
  faculty: null,
  filtered: null,
};

export const CatalogSlice = createSlice({
  name: "catalog",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.createCatalogModalOpen = action.payload;
    },
    addCourseModal: (state, action) => {
      state.addCatalogModalOpen = action.payload;
    },
    setFacuty: (state, action) => {
      state.isLoading = false;
      state.faculty = action.payload;
    },

    searchCourse: (state, action) => {
      state.isLoading = false;
      state.filtered = action.payload;
    },

    clearSearchCourse: (state) => {
      state.isLoading = false;
      state.filtered = null;
    },
  },
});

export const {
  openModal,
  addCourseModal,
  setFacuty,
  searchCourse,
  clearSearchCourse,
} = CatalogSlice.actions;
export default CatalogSlice.reducer;
