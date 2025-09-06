import { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
import SkeletonCard from "../components/SkeletonCard";
import { useUsers } from "../hooks/useUsers";
import { useUserFilter } from "../hooks/useUserFilter";

function Home() {
  const [query, setQuery] = useState("");
  const [gender, setGender] = useState("");
  const [nat, setNat] = useState("");
  const { users, loading, error } = useUsers();
  const { filtered, setFiltered } = useUserFilter(users, query, gender, nat);

  useEffect(() => {
    setFiltered(users);
  }, []);

  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Product Manager",
    "DevOps Engineer",
    "Data Scientist",
    "QA Engineer",
    "Tech Lead",
    "Scrum Master",
  ];

  function handleUserClick(user) {
    console.log("User clicked:", user);
  }

  function renderSkeletons() {
    return Array.from({ length: 8 }, (_, index) => (
      <SkeletonCard key={index} />
    ));
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Explora Nuestro Equipo
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Conoce a los increíbles profesionales que forman parte de nuestro
          equipo internacional. Cada uno aporta su experiencia única para crear
          soluciones extraordinarias.
        </p>
      </div>
      {error && <p>Error al cargar usuarios: {error.message}</p>}
      {/* Filtros */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Búsqueda por nombre */}
          <div>
            <label
              htmlFor="search"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Buscar por nombre
            </label>
            <input
              id="search"
              type="text"
              placeholder="Escribe un nombre..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg 
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                         transition-colors"
              aria-label="Buscar miembros del equipo por nombre"
            />
          </div>

          {/* Filtro por género */}
          <div>
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Género
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg 
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                         transition-colors bg-white"
              aria-label="Filtrar por género"
            >
              <option value="">Todos</option>
              <option value="female">Mujer</option>
              <option value="male">Hombre</option>
            </select>
          </div>

          {/* Filtro por país */}
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              País
            </label>
            <input
              id="country"
              type="text"
              placeholder="Filtrar por país..."
              value={nat}
              onChange={(e) => setNat(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg 
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                         transition-colors"
              aria-label="Filtrar por país"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading
          ? renderSkeletons()
          : filtered.map((person, index) => (
              <UserCard
                key={person.login.uuid}
                name={`${person.name.first} ${person.name.last}`}
                email={person.email}
                image={person.picture.large}
                country={person.location.country}
                subtitle={roles[index % roles.length]}
                onClick={() => handleUserClick(person)}
              />
            ))}
      </div>
    </div>
  );
}

export default Home;
