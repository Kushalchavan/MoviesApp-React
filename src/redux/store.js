import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import movieRowReducer from "./movieRowSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    movie: movieReducer,
    movieRow: movieRowReducer,
    auth: authReducer,
  },
});

export default store;
