import "./index.scss";
import { NavLink } from "react-router-dom";
import MovieList from "./components/movie/MovieList";

function App() {
  return (
    <>
      <header className="header flex items-center justify-center gap-x-5  text-white py-10 mb-10">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[300px] page-container mb-20">
        <div className="w-full h-full rounded-lg relative">
          <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
          <img
            src="https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute left-5 bottom-0 w-full text-white ">
            <h2 className="font-bold text-3xl mb-5">Avenger: Endgame</h2>
            <div className="flex items-center gap-x-3 mb-8">
              <span className="p-3 border border-white rounded-md">Action</span>
              <span className="p-3 border border-white rounded-md">
                Adventure
              </span>
              <span className="p-3 border border- rounded-md">Drama</span>
            </div>
            <button className="py-3 px-6 bg-primary rounded-lg mb-3 font-medium">
              Watch Now
            </button>
          </div>
        </div>
      </section>
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
          Popular movies
        </h2>
        <MovieList type={"popular"}></MovieList>
      </section>
    </>
  );
}

export default App;
