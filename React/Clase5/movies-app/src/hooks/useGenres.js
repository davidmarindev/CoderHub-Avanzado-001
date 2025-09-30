import { useEffect, useState } from "react";

const API =
  import.meta.env.VITE_TMDB_API_BASE || "https://api.themoviedb.org/3";
const KEY = import.meta.env.VITE_API_KEY;

export function useGenres() {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const url = `${API}/genre/movie/list?api_key=${KEY}&language=es-ES`;
        const r = await fetch(url, { signal: controller.signal });
        if (!r.ok) throw new Error("Error cargando géneros");
        const j = await r.json();
        setGenres(j.genres || []); // [{id, name}]
      } catch (e) {
        if (e.name !== "AbortError") setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
    return () => controller.abort();
  }, []);

  return { genres, loading, error };
}
