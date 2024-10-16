import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import { fetcher } from "../../config";
import useSWR from "swr";

const MovieList = ({ type = "now_playing" }) => {
  const [movies, setMovies] = useState([]);
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?language=en-US&page=1`,
    fetcher
  );

  useEffect(() => {
    if (data && data.results) {
      setMovies(data.results);
    }
  }, [data]);

  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies?.length > 0 &&
          movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
