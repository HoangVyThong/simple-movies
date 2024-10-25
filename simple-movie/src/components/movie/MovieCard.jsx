import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { title, release_date, vote_average, poster_path, id } = movie;
  const navigate = useNavigate();
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 h-full select-none">
      <img
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-white text-xl font-bold mb-3">
          {title || "Avenger: Endgame"}
        </h3>
        <div className="flex items-center justify-between text-sm opacity-50 mb-5">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
        <button
          onClick={() => {
            navigate(`/movies/${id}`);
          }}
          className="bg-primary p-4 rounded-lg w-full capitalize mt-auto"
        >
          Watch now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
