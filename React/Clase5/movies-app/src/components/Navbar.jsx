import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

function Navbar() {
  const { items } = useCart();

  return (
    <nav className="bg-slate-900 text-white">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <Link to="/" className="hover:text-gray-300">
          AlquilerPeliculas
        </Link>
        <Link to="/cart" className="hover:text-gray-300">
          Carrito <span className="text-yellow-500">🛒{items.length}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
