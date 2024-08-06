import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
import endpoints from "../constants/constant";

const Home = () => {
  return (
    <>
      <Hero />
      <MovieRow title="trending" url={endpoints.trending} category="trending" />
      <MovieRow title="popular" url={endpoints.popular} category="popular" />
      <MovieRow
        title="top rated"
        url={endpoints.topRated}
        category="topRated"
      />
      <MovieRow title="upcoming" url={endpoints.upcoming} category="upcoming" />
      <MovieRow title="comedy" url={endpoints.comedy} category="comedy" />
    </>
  );
};

export default Home;
