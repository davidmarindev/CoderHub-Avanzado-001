import { useCart } from "../hooks/useCart";
const RENT_PRICE = import.meta.env.VITE_RENT_PRICE || 4.99;

function Cart() {
  const { items, removeItem, clearCart, totalPrice } = useCart();
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Carrito</h1>
      {items.length === 0 ? (
        <p>Tu carrito esta Vacio</p>
      ) : (
        <ul className="mb-4">
          {items.map((item) => (
            <li key={item.id}>
              <img
                className="w-16 h-auto rounded-md inline-block mr-4"
                src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
                alt={item.title}
              />
              {item.title} - ${RENT_PRICE}
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <div>
        <strong>Total:</strong> ${totalPrice}
      </div>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

export default Cart;
