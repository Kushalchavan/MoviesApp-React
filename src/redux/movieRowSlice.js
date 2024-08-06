import { createSlice } from "@reduxjs/toolkit";

const movieRowSlice = createSlice({
  name: "movieRow",
  initialState: {
    trending: [],
    topRated: [],
    upcoming: [],
    comedy: [],
    popular: [],
  },
  reducers: {
    setMovieRow: (state, action) => {
      const { category, movies } = action.payload;
      state[category] = movies;
    },
  },
});

export const { setMovieRow } = movieRowSlice.actions;
export default movieRowSlice.reducer;
