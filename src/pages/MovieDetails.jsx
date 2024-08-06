import { useParams } from "react-router-dom";
import useSingleMovie from "../hooks/useSingleMovie";
import { createImageUrl } from "../constants/constant";

const MovieDetails = () => {
  const { id } = useParams();
  const { movie, loading, error } = useSingleMovie(id);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!movie) return <p>No movie details available</p>;

  return (
    <div className="w-full h-auto flex max-md:flex-col justify-between items-start gap-4 text-white px-12 py-20">
      <div className="w-[40%] max-md:w-full h-[40rem] rounded-xl overflow-hidden p-10">
        <img
          src={createImageUrl(movie.backdrop_path)}
          alt={movie.title}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="w-[60%] max-md:w-full p-12">
        <h1 className="text-6xl max-md:text-4xl max-sm:text-2xl font-extrabold">{movie.title}</h1>
        <p className="mt-4 mb-4 text-gray-400">{movie.overview}</p>
        <p className="font-bold text-gray-300">
          Popularity: {movie.popularity}
        </p>
        <p className="font-bold text-gray-300">
          Language: {movie.original_language}
        </p>
        <p className="font-bold text-gray-300">
          Rating: {Math.floor(movie.vote_average)}/10
        </p>
        <p className="font-bold text-gray-300">Votes: {movie.vote_count}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
