import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Registro.css';

function Registro() {
  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    escolaridade: '',
    areaInteresse: '',
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
    axios.post('http://localhost:5000/register', formData)
      .then(response => {
        alert('Dados inseridos com sucesso');
        setFormData({ nome: '', idade: '', escolaridade: '', areaInteresse: '', email: '', senha: '' });
      })
      .catch(error => {
        console.error('Erro ao inserir dados:', error);
        alert('Erro ao inserir dados');
      });
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className="registro-container">
      <h2>Registro de Usuário</h2>
      <form onSubmit={handleSubmit} className="registro-form">
        <label>Nome:</label>
        <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
        <label>Idade:</label>
        <input type="number" name="idade" value={formData.idade} onChange={handleChange} required />
        <label>Escolaridade:</label>
        <input type="text" name="escolaridade" value={formData.escolaridade} onChange={handleChange} required />
        <label>Área de Interesse:</label>
        <input type="text" name="areaInteresse" value={formData.areaInteresse} onChange={handleChange} required />
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <label>Senha:</label>
        <input type="password" name="senha" value={formData.senha} onChange={handleChange} required />
        <button type="submit">Registrar</button>
      </form>
      <button onClick={handleLoginRedirect} className="login-redirect-button">Já tenho uma conta</button>
    </div>
  );
}

export default Registro;
