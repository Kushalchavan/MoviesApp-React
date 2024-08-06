import { useSelector } from "react-redux";
import MovieItem from "./MovieItem";
import useRowFetch from "../hooks/useRowFetch";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const MovieRow = ({ title, url, category }) => {
  const movies = useSelector((state) => state.movieRow[category]);

  const rowId = Math.floor(Math.random() * 1000);

  useRowFetch(url, category);

  const slide = (offset) => {
    const slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + offset;
  };

  return (
    <>
      <h2 className="font-bold text-2xl capitalize text-gray-300 py-8 ml-12">
        {title}
      </h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={() => slide(-500)}
          size={35}
          className="bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-10 hidden group-hover:block"
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full ml-12 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide cursor-pointer"
        >
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
        <MdChevronRight
          onClick={() => slide(500)}
          size={35}
          className="bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"
        />
      </div>
    </>
  );
};

export default MovieRow;
