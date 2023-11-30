import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({ products }) => {
  return (
    <div className="home-container">
      <h2>Productos Disponibles</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.sku} className="product-item">
            <p className="product-name">{product.nombre}</p>
            <p className="product-price">Precio: ${product.precio}</p>
            <p className="product-sku">SKU: {product.sku}</p>
            <p className="product-description">{product.descripcion}</p>
            <Link to={`/producto/${product.sku}`} className="details-link">
              Ver Detalles
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
