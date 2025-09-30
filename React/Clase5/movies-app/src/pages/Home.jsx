import { useState, useEffect, useMemo, useCallback } from "react";
import { fetchMovies } from "../services/api";
import MoviesFilters from "../components/MoviesFilters";
import { useFilters } from "../hooks/useFilters";
import { useCart } from "../hooks/useCart";
import MoviesGrid from "../components/MoviesGrid";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saludo, setSaludo] = useState("Hola");
  // const [filtered, setFiltered] = useState([]);
  const [error, setError] = useState(null);
  const { query, year, genreId } = useFilters();
  const { addItem } = useCart();

  const handleAddItem = useCallback(
    (movie) => {
      addItem(movie);
    },
    [addItem]
  );

  console.log("Renderizando...");

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

  const filtered = useMemo(() => {
    console.log("Filtrando...");
    const q = query.trim().toLowerCase();
    const g = genreId ? Number(genreId) : null;
    const y = year ? year : "";

    return (movies || []).filter((m) => {
      const byTitle = !q || (m.title || "").toLowerCase().includes(q);
      const byYear = !y || (m.release_date || "").startsWith(y);
      const byGenre =
        !g || (Array.isArray(m.genre_ids) && m.genre_ids.includes(g));
      return byTitle && byYear && byGenre;
    });
  }, [movies, query, year, genreId]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Populares</h1>

      <div className="grid gap-3 sm:grid-cols-4 mb-6">
        <input
          className="rounded-xl border px-4 py-2"
          placeholder="Escribe un saludo..."
          value={saludo}
          onChange={(e) => setSaludo(e.target.value)}
        />
      </div>
      <MoviesFilters />

      {loading && <p className="text-gray-600">Loading...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}

      <MoviesGrid movies={filtered} addItem={handleAddItem} />
    </div>
  );
}

export default Home;
