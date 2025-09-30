import { memo } from "react";
import MovieCard from "./MovieCard";

function MoviesGrid({ movies, addItem }) {
  console.log("Renderizando MoviesGrid");
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} addItem={addItem} />
      ))}
    </div>
  );
}

export default memo(MoviesGrid);
