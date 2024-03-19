import { useEffect, useState } from "react";
import { Product } from "../movies.types";
import { getMoviesService } from "../services/MoviesService";

const useMovies = () => {
  const [movies, setMovies] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const movies = await getMoviesService();
      setMovies(movies);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    movies,
    isLoading,
    isError,
    getMovies,
  };
};

export default useMovies;
