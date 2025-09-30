import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Iniciando sesión con:", { email, password });
    login(email, password)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Error en el login:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <main className="container max-w-md mx-auto px-4 py-10">
      <h1 className="text-2xl text-center font-bold mb-2">Inicio de sesión</h1>
      {loading && <p className="text-center text-gray-600">Cargando...</p>}
      <form className="max-w-sm mx-auto mt-8" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            className="border border-gray-300 p-2 rounded w-full"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            className="border border-gray-300 p-2 rounded w-full"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 mt-4 text-white text-center p-2 rounded"
        >
          Iniciar sesión
        </button>
      </form>
    </main>
  );
}

export default Login;
