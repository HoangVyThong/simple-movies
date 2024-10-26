import React, { useEffect, useState } from "react";
import MovieCard from "../components/movie/MovieCard";
import { fetcher } from "../config";
import useSWR from "swr";
import useDebounce from "../hooks/useDebounce";

const MoviePage = () => {
  const [filter, setFilter] = useState("");
  const [url, setUrl] = useState(
    "https://api.themoviedb.org/3/movie/popular?language=en-US"
  );
  const filterDebounce = useDebounce(filter, 500);
  const handlerFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const { data } = useSWR(url, fetcher);

  useEffect(() => {
    if (filterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?query=${filterDebounce}&language=en-US`
      );
    } else {
      setUrl("https://api.themoviedb.org/3/movie/popular?language=en-US");
    }
  }, [filterDebounce]);

  const movies = data?.results || [];
  return (
    <div className="py-10 page-container">
      <div className="flex mb-10">
        <div className="flex-1 max-h-[50px]">
          <input
            type="text"
            className="w-full bg-slate-800 outline-none p-4 mb-10 rounded-lg h-full"
            placeholder="Type here to search....."
            onChange={handlerFilterChange}
          />
        </div>
        <button className="p-4 bg-primary text-white rounded-lg max-h-[50px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
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
