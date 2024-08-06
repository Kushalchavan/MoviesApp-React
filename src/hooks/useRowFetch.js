import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMovieRow } from "../redux/movieRowSlice";

const useRowFetch = (url, category) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRow = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        dispatch(setMovieRow({ category, movies: data.results }));
      } catch (error) {
        console.error("Failed to fetch movies", error);
      }
    };

    fetchRow();
  }, [dispatch, url, category]);
};

export default useRowFetch;
