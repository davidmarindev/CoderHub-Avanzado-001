import { createContext, useContext, useReducer } from "react";

const FiltersContext = createContext(null);

// Estado inicial y acciones
const initial = { query: "", year: "", genreId: "" };
const SET_QUERY = "SET_QUERY";
const SET_YEAR = "SET_YEAR";
const SET_GENRE = "SET_GENRE";
const RESET = "RESET";

function reducer(state, action) {
  switch (action.type) {
    case SET_QUERY:
      return { ...state, query: action.payload };
    case SET_YEAR:
      return { ...state, year: action.payload }; // "" | "2024"...
    case SET_GENRE:
      return { ...state, genreId: action.payload }; // "" | "28"...
    case RESET:
      return initial;
    default:
      return state;
  }
}

export function FiltersProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial);

  const setQuery = (q) => dispatch({ type: SET_QUERY, payload: q });
  const setYear = (y) => dispatch({ type: SET_YEAR, payload: y });
  const setGenre = (g) => dispatch({ type: SET_GENRE, payload: g });
  const reset = () => dispatch({ type: RESET });

  return (
    <FiltersContext.Provider
      value={{ ...state, setQuery, setYear, setGenre, reset }}
    >
      {children}
    </FiltersContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFiltersContext() {
  const ctx = useContext(FiltersContext);
  if (!ctx)
    throw new Error(
      "useFiltersContext debe usarse dentro de <FiltersProvider>"
    );
  return ctx;
}
