const API_URL = "https://api.themoviedb.org/3/movie";
const API_KEY = import.meta.env.VITE_API_KEY;

export async function fetchMovies() {
  const response = await fetch(`${API_URL}/popular?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  const data = await response.json();
  return data.results;
}

export async function fetchMovieById(id) {
  const response = await fetch(`${API_URL}/${id}?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error("Failed to fetch movie");
  }
  return response.json();
}
