import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Checkout.css';

const Checkout = ({ products }) => {
  const { sku } = useParams();
  const [product, setProduct] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showThanksMessage, setShowThanksMessage] = useState(false);

  useEffect(() => {
    const selectedProduct = products.find((p) => p.sku === sku);
    setProduct(selectedProduct);
    setTotalPrice(selectedProduct ? selectedProduct.precio : 0);
  }, [products, sku]);

  const handleConfirmBuy = () => {
    setShowThanksMessage(true);
  };

  if (!product) {
    return <p className="not-found-message">Producto no encontrado</p>;
  }

  return (
    <div className="checkout-container">
      <h2>Checkout de Compra</h2>
      <div className="product-info">
        <h3>{product.nombre}</h3>
        <p>{product.descripcion}</p>
        <p>Precio: ${product.precio}</p>
        <p>SKU: {product.sku}</p>
      </div>
      <div className="total-price">
        <p>Total a Pagar: ${totalPrice}</p>
      </div>
      <button onClick={handleConfirmBuy} className="confirm-buy-button">
        Confirmar Compra
      </button>
      {showThanksMessage && <p className="thanks-message">¡Gracias por su compra!</p>}
    </div>
  );
};

export default Checkout;
