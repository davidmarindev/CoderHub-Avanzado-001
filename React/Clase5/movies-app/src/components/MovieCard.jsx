import { useCart } from "../hooks/useCart";

export default function MovieCard({ movie }) {
  const { addItem } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        className="w-full h-auto rounded-md"
        src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
        alt={movie.title}
      />
      <div>
        <h2 className="text-lg font-semibold">{movie.title}</h2>
        <p className="text-sm text-gray-600">{movie.release_date}</p>
        <p className="text-sm text-gray-600">{movie.vote_average}</p>
        <div className="mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Ver detalles
          </button>
          <button
            className="mx-2 bg-green-500 text-white px-4 py-2 rounded-md"
            onClick={() => addItem(movie)}
          >
            Alquilar - $4.99
          </button>
        </div>
      </div>
    </div>
  );
}
