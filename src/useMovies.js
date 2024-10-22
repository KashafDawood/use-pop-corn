import { useState, useEffect } from "react";

export function useMovies(query, callBack) {
  const [movies, setMovies] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const KEY = "ac3e32b2";

  useEffect(() => {
    callBack?.();

    const controller = new AbortController();
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();
        if (data.Response === "True") {
          setMovies(data.Search);
        } else if (!response.ok) {
          throw new Error("something went wrong with fetching movies");
        } else {
          setMovies([]);
          // throw new Error("Movie not found");
        }
        setError("");
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();

    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return { movies, isloading, error };
}
