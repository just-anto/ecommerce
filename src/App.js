// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import Registro from './components/Registro';
import Login from './components/Login';

const products = [
  // Tus datos de productos aquí
];

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            {/* Página Home */}
            <Home products={products} />
          </Route>
          <Route path="/producto/:sku">
            {/* Página Detalle de Producto */}
            <ProductDetail products={products} />
          </Route>
          <Route path="/registro">
            {/* Página Registro */}
            <Registro />
          </Route>
          <Route path="/login">
            {/* Página Login */}
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
