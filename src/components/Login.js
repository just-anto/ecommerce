import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // El usuario ha iniciado sesión correctamente
    } catch (error) {
      console.error('Error al iniciar sesión', error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <button type="button" onClick={handleLogin} className="login-button">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
