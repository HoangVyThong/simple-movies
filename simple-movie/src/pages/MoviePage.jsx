import React, { useEffect, useState } from "react";
import MovieCard from "../components/movie/MovieCard";
import { fetcher } from "../config";
import useSWR from "swr";
import useDebounce from "../hooks/useDebounce";
import ReactPaginate from "react-paginate";

const itemsPerPage = 20;
const MoviePage = () => {
  const [nextPage, setNextPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${nextPage}`
  );
  const filterDebounce = useDebounce(filter, 500);
  const handlerFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const { data, error } = useSWR(url, fetcher);
  const isLoading = !data && !error;

  useEffect(() => {
    if (filterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?query=${filterDebounce}&language=en-US&page=${nextPage}`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${nextPage}`
      );
    }
  }, [filterDebounce, nextPage]);

  const movies = data?.results || [];
  // const { page, total_pages } = data || {};
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  if (!data && !data?.total_results) return null;
  const pageCount = Math.ceil(data?.total_results / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data?.total_results;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };
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
      {isLoading && (
        <div className="w-10 h-10 rounded-full border-4 border-primary border-t-4 border-t-transparent mx-auto animate-spin"></div>
      )}
      <div className="grid grid-cols-4 gap-10 mb-10">
        {!isLoading &&
          movies &&
          movies.length > 0 &&
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie}></MovieCard>
          ))}
      </div>
      <div className="mt-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>
    </div>
  );
};

export default MoviePage;
