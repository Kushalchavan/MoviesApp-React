import { useEffect } from "react";
import { useDispatch } from "react-redux";
import endpoints from "../constants/constant";
import { setMovie } from "../redux/movieSlice";

const useFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(endpoints.popular);
        const data = await response.json();
        const movies = data.results;
        const randomMovies = movies[Math.floor(Math.random() * movies.length)]
        dispatch(setMovie(randomMovies));
      } catch (error) {
        console.error("Failed to fetch movies", error);
      }
    };

    fetchMovies();
  }, [dispatch]);
};

export default useFetch;
