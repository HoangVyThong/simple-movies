import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { SwiperSlide, Swiper } from "swiper/react";
import { fetcher, tmdbAPI } from "../../config";
import useSWR from "swr";

const MovieList = ({ type = "now_playing" }) => {
  const [movies, setMovies] = useState([]);
  const { data } = useSWR(tmdbAPI.getMovieList(type), fetcher);

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
