import { useNavigate } from "react-router-dom";
import { createImageUrl } from "../constants/constant";

const MovieItem = ({ movie }) => {
  const { id, title, backdrop_path, poster_path, release_date } = movie;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <div
      className="w-[14rem] h-[27rem] max-md:w-[10rem] max-md:h-[22rem] rounded-lg overflow-hidden inline-block text-white cursor-pointer mr-3"
      onClick={handleClick}
    >
      <div className="w-full h-[75%] overflow-hidden rounded-lg">
        <img
          src={createImageUrl(poster_path ?? backdrop_path)}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-all"
        />
      </div>
      <h5 className="font-bold  text-wrap mt-4 mb-2">{title}</h5>
      <p className="text-xs font-semibold text-gray-400">{release_date}</p>
    </div>
  );
};

export default MovieItem;
