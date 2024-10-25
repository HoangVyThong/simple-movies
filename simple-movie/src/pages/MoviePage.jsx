import React from "react";
import MovieCard from "../components/movie/MovieCard";
import { fetcher } from "../config";
import useSWR from "swr";

const MoviePage = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
    fetcher
  );

  const movies = data?.results || [];
  return (
    <div className="py-10">
      <div className="grid grid-cols-4 gap-10">
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie}></MovieCard>
          ))}
      </div>
    </div>
  );
};

export default MoviePage;
