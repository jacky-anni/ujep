import { createSlice } from "@reduxjs/toolkit";
// Define a type for the slice state
interface HomeState {
  userId: number;
  isLoading: boolean;
}

// Define the initial state using that type
const initialState: HomeState = {
  userId: 0,
  isLoading: true,
};

export const HomeSlice = createSlice({
  name: "home",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLoding: (state, action) => {
      state.userId = action.payload;
      state.isLoading = action.payload;
    },
  },
});

export const { setLoding } = HomeSlice.actions;
export default HomeSlice.reducer;
