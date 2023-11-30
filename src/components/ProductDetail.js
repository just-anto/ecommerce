import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = ({ products }) => {
  const { sku } = useParams();
  const [product, setProduct] = useState(null);
  const [showThanksMessage, setShowThanksMessage] = useState(false);

  useEffect(() => {
    const selectedProduct = products.find((p) => p.sku === sku);
    setProduct(selectedProduct);
  }, [products, sku]);

  const handleBuyClick = () => {
    setShowThanksMessage(true);
  };

  if (!product) {
    return <p className="not-found-message">Producto no encontrado</p>;
  }

  return (
    <div className="product-detail-container">
      <h2 className="product-name">{product.nombre}</h2>
      <p className="product-description">{product.descripcion}</p>
      <p className="product-price">Precio: ${product.precio}</p>
      <p className="product-sku">SKU: {product.sku}</p>
      <button onClick={handleBuyClick} className="buy-button">
        Comprar
      </button>
      {showThanksMessage && <p className="thanks-message">Gracias por su compra</p>}
    </div>
  );
};

export default ProductDetail;
