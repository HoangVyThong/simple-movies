import React from "react";
import MovieList from "../components/movie/MovieList";

const HomePage = () => {
  return (
    <>
      <section className="movies-layout page-container-fluid pb-10 text-white mb-20">
        <h2 className="capitalize text-white mb-5 text-3xl font-bold">
          Now playing
        </h2>
        <MovieList></MovieList>
      </section>
      <section className="movies-layout page-container-fluid pb-10 text-white">
        <h2 className="capitalize text-white mb-5 text-3xl font-bold">
          Rated movies
        </h2>
        <MovieList type={"top_rated"}></MovieList>
      </section>
      <section className="movies-layout page-container-fluid pb-10 text-white">
        <h2 className="capitalize text-white mb-5 text-3xl font-bold">
          Trending
        </h2>
        <MovieList type={"popular"}></MovieList>
      </section>
    </>
  );
};

export default HomePage;
