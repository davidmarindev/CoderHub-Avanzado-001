import { useFilters } from "../hooks/useFilters";
import { useGenres } from "../hooks/useGenres";

export default function MoviesFilters() {
  const { query, setQuery, year, setYear, genreId, setGenre, reset } =
    useFilters();
  const { genres } = useGenres();
  const current = new Date().getFullYear();
  const years = [
    "",
    ...Array.from({ length: 10 }, (_, i) => (current - i).toString()),
  ];

  return (
    <div className="grid gap-3 sm:grid-cols-4 mb-6">
      <input
        className="rounded-xl border px-4 py-2"
        placeholder="Buscar por título…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select
        className="rounded-xl border px-4 py-2"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      >
        <option value="">Año (todos)</option>
        {years.map((y) => (
          <option key={y || "all"} value={y}>
            {y || "Todos"}
          </option>
        ))}
      </select>
      <select
        className="rounded-xl border px-4 py-2"
        value={genreId}
        onChange={(e) => setGenre(e.target.value)}
      >
        <option value="">Género (todos)</option>
        {genres.map((g) => (
          <option key={g.id} value={String(g.id)}>
            {g.name}
          </option>
        ))}
      </select>
      <button
        onClick={reset}
        className="rounded-xl border px-4 py-2 hover:bg-slate-100"
      >
        Limpiar
      </button>
    </div>
  );
}
