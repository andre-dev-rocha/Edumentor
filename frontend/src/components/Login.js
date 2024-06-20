import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/login', formData)
      .then(response => {
        if (response.data.valid) {
          navigate('/tutores');
        } else {
          alert('Conta inválida');
        }
      })
      .catch(error => {
        console.error('Erro ao verificar conta:', error);
        alert('Erro ao verificar conta');
      });
  };

  const handleBackToRegister = () => {
    navigate('/registro');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <label>Senha:</label>
        <input type="password" name="senha" value={formData.senha} onChange={handleChange} required />
        <button type="submit">Entrar</button>
      </form>
      <button onClick={handleBackToRegister} className="back-button">Voltar</button>
    </div>
  );
}

export default Login;
