import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { createImageUrl } from "../constants/constant";

const Hero = () => {
  useFetch();

  const truncate = (str, length) => {
    if (!str) return "";
    return str.length > length ? str.slice(0, length) + "..." : str;
  };

  const movie = useSelector((state) => state.movie);

  if (!movie) {
    return <p>Fetching movies..</p>;
  }

  const { title, backdrop_path, release_date, overview } = movie;

  return (
    <div className="relative w-full h-[35rem] ">
      <div className="w-full h-full">
        <div className="absolute w-[60%] h-full bg-gradient-to-r from-black" />
        <img
          src={createImageUrl(backdrop_path)}
          alt={title}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute top-[45%] max-w-[45rem] left-[3%] text-white">
          <h1 className="lg:text-6xl md:text-5xl max-sm:text-4xl font-extrabold ">{title}</h1>
          <p className="text-gray-300 font-semibold  leading-5 mt-4 mb-4 max-sm:text-sm">{truncate(overview, 165)}</p>
          <span className="text-sm text-gray-400 font-bold ">{release_date}</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
