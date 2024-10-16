export const fetcher = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDVmYTE2NTcwOWI5YmQwMjJlNjBkZmJiNDUxMDQxMSIsIm5iZiI6MTcyOTA1MjE5Ni40MDQ5MzYsInN1YiI6IjY2Yjk5MmZmZjBhYTFiMjUwOGQ3NjhlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IjwmmEwvJqPuXT3yqeJn8Fo1VzYykj4TCT-kXDNEZ3c`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
