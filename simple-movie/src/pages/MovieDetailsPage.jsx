import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../config";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "../components/movie/MovieCard";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieDetail(movieId), fetcher);
  return (
    <div className="py-10">
      <div className="w-full h-[600px] relative">
        <div className="absolute inset-0 bg-black bg-opacity-65"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(
            ${tmdbAPI.imageOriginal(data?.backdrop_path)}
          )`,
          }}
        ></div>
      </div>
      <div className="w-full h-[300px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
        <img
          src={tmdbAPI.imageOriginal(data?.poster_path)}
          alt=""
          className="w-full h-full object-cover rounded-xl "
        />
      </div>
      <h1 className="text-center text-4xl font-bold text-white mb-10">
        {data && data.title}
      </h1>
      {data && data.genres.length > 0 && (
        <div className="flex items-center justify-center gap-x-5 mb-10">
          {data.genres.map((genre) => (
            <span
              key={genre.id}
              className="py-2 px-4 border-primary text-primary border rounded-md"
            >
              {genre.name}
            </span>
          ))}
        </div>
      )}
      <p className="text-center leading-relaxed max-w-[600px] mx-auto mb-10">
        {data && data.overview}
      </p>
      <MovieCredit></MovieCredit>
      <MovieVideos></MovieVideos>
      <MovieSimilar></MovieSimilar>
    </div>
  );
};

function MovieCredit() {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieByType(movieId, "credits"), fetcher);

  if (!data) return null;
  const { cast } = data;
  if (!cast || cast.length <= 0) return null;

  return (
    <div className="py-10">
      <h2 className="text-center text-3xl mb-10">Credits</h2>
      <div className="grid grid-cols-4 gap-5">
        {cast &&
          cast.slice(0, 4).map((item) => (
            <div className="cast-item" key={item.id}>
              <img
                src={tmdbAPI.imageOriginal(item.profile_path)}
                alt=""
                className="w-full h-[350px] object-cover rounded-md mb-3"
              />
              <h3 className="text-center font-medium text-xl">{item.name}</h3>
            </div>
          ))}
      </div>
    </div>
  );
}

function MovieVideos() {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieByType(movieId, "videos"), fetcher);

  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;

  return (
    <div className="py-10">
      <div className="flex flex-col gap-10">
        {results.slice(0, 2).map((video) => (
          <div className="" key={video.id}>
            <h3 className="mb-5 text-xl text-center font-medium bg-secondary inline-block">
              {video.name}
            </h3>
            <div key={video.id} className="w-full aspect-video">
              <iframe
                width="1280"
                height="712"
                src={`https://www.youtube.com/embed/${video.key}`}
                title="Youtube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full object-fill"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MovieSimilar() {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieByType(movieId, "similar"), fetcher);
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;

  return (
    <div className="py-10">
      <h2>Similar movies</h2>

      <div className="movie-list">
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          {results.length > 0 &&
            results.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieCard movie={movie}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MovieDetailsPage;
