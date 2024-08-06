import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: null,
  reducers: {
    setMovie: (state, action) => action.payload,
  },
});

export const { setMovie } = movieSlice.actions;
export default movieSlice.reducer;
