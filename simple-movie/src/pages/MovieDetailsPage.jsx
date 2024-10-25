import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../config";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    fetcher
  );
  return (
    <div className="py-10">
      <div className="w-full h-[600px] relative">
        <div className="absolute inset-0 bg-black bg-opacity-65"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(
            https://image.tmdb.org/t/p/original${data && data?.backdrop_path}
          )`,
          }}
        ></div>
      </div>
      <div className="w-full h-[300px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
        <img
          src={`https://image.tmdb.org/t/p/original${
            data && data?.poster_path
          }`}
          alt=""
          className="w-full h-full object-cover rounded-xl "
        />
      </div>
      <h1 className="text-center text-3xl font-bold text-white mb-10">
        {data && data.title}
      </h1>
      {data.genres.length > 0 && (
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
      <p className="text-center leading-relaxed max-w-[600px] mx-auto">
        {data && data.overview}
      </p>
    </div>
  );
};

export default MovieDetailsPage;
