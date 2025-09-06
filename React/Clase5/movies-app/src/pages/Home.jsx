import { useState, useEffect } from "react";
import { fetchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        const moviesData = await fetchMovies();
        setMovies(moviesData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <h1 className="text-2xl font-bold mb-4">Populares</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
