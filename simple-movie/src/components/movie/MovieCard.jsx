import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/button";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";

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
        <Button
          bgColor="secondary"
          onClick={() => {
            navigate(`/movies/${id}`);
          }}
        >
          Watch now
        </Button>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    poster_path: PropTypes.string,
    id: PropTypes.number,
  }),
};

function FallbackComponent() {
  return (
    <p className="bg-red-50 text-red-400">
      Something went wrong with this component
    </p>
  );
}

export default withErrorBoundary(MovieCard, { FallbackComponent });
