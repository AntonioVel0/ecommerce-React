import { useCart } from "../CartContext/CartContext";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ alternarBuscador }) => {
  const { carrito } = useCart();

  const navigate = useNavigate();

  const totalProductos = carrito.reduce(
    (acc, producto) => acc + producto.cantidad,
    0,
  );

  const handleHome = () => {
    alternarBuscador();
    navigate("/");
  };

  return (
    <section className="header">
      <h1 className="logo">
        Antar<span>Shop</span>
      </h1>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/"> Home</Link>
          </li>
        </ul>
      </nav>

      <div className="icons">
        <button className="search-button" onClick={handleHome}>
          <i className="fas fa-search"></i>
        </button>

        <Link to="/carrito" className="icon-button">
          <i className="fas fa-shopping-cart"></i>
          <span className="counter">${totalProductos}</span>
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
