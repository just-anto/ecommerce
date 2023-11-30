import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import './Registro.css';

const Registro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistro = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      // El usuario ha sido registrado correctamente
    } catch (error) {
      console.error('Error al registrar usuario', error.message);
    }
  };

  return (
    <div className="registro-container">
      <h2>Registro</h2>
      <form className="registro-form">
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
        <button type="button" onClick={handleRegistro} className="registro-button">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Registro;
