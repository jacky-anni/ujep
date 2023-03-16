import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// Define a type for the slice state
interface FacultyState {
  faculties: any[];
  modal: boolean;
}

// Define the initial state using that type
const initialState: FacultyState = {
  faculties: [],
  modal: false,
};

export const FacultySlice = createSlice({
  name: "faculty",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getFaculties: (state, action) => {
      state.faculties = action.payload;
    },

    setFacultyModal: (state, action) => {
      state.modal = action.payload;
    },

    // addFaculties: (state, action) => {
    //   state.faculties = action.payload;
    // },
  },
});

export const { getFaculties, setFacultyModal } = FacultySlice.actions;
export default FacultySlice.reducer;
