export const fetcher = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

export const accessToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDVmYTE2NTcwOWI5YmQwMjJlNjBkZmJiNDUxMDQxMSIsIm5iZiI6MTcyOTA1MjE5Ni40MDQ5MzYsInN1YiI6IjY2Yjk5MmZmZjBhYTFiMjUwOGQ3NjhlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IjwmmEwvJqPuXT3yqeJn8Fo1VzYykj4TCT-kXDNEZ3c";
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
const tmdbEndpointSearch = "https://api.themoviedb.org/3/search/movie";

export const tmdbAPI = {
  getMovieList: (type, page = 1) =>
    `${tmdbEndpoint}/${type}?language=en-US&page=${page}`,
  getMovieSearch: (query, page = 1) =>
    ` ${tmdbEndpointSearch}?query=${query}&language=en-US&page=${page}`,
  getMovieDetail: (movieId) => `${tmdbEndpoint}/${movieId}?language=en-US`,
  getMovieByType: (movieId, type) =>
    `${tmdbEndpoint}/${movieId}/${type}?language=en-US`,
  imageOriginal: (path) => `https://image.tmdb.org/t/p/original${path}`,
};
