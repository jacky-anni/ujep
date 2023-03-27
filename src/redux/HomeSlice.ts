import { createSlice } from "@reduxjs/toolkit";
// Define a type for the slice state
interface HomeState {
  isLoading: boolean;
}

// Define the initial state using that type
const initialState: HomeState = {
  isLoading: true,
};

export const HomeSlice = createSlice({
  name: "home",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    loadPage: (state) => {
      state.isLoading = true;
    },
  },
});

export const { loadPage } = HomeSlice.actions;
export default HomeSlice.reducer;
