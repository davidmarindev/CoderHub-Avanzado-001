import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { items } = useCart();
  const { logout, isAuthenticated } = useAuth();

  return (
    <nav className="bg-slate-900 text-white">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <Link to="/" className="hover:text-gray-300">
          AlquilerPeliculas
        </Link>
        <Link to="/login" className="hover:text-gray-300">
          Iniciar sesión
        </Link>
        {isAuthenticated && (
          <Link to="/cart" className="hover:text-gray-300">
            Carrito <span className="text-yellow-500">🛒{items.length}</span>
          </Link>
        )}
        <a onClick={logout} className="hover:text-gray-300">
          Cerrar sesión
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
