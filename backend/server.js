const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'abrr175689',
  database: 'bancoedumentor',
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados MySQL');
  }
});

app.post('/register', (req, res) => {
  const { nome, idade, escolaridade, areaInteresse, email, senha } = req.body;
  const query = 'INSERT INTO estudantes (nome, idade, escolaridade, areaInteresse, email, senha) VALUES (?, ?, ?, ?, ?, ?)';

  db.query(query, [nome, idade, escolaridade, areaInteresse,email,senha], (err, result) => {
    if (err) {
      console.error('Erro ao inserir dados:', err);
      res.status(500).send('Erro ao inserir dados');
    } else {
      res.status(200).send('Dados inseridos com sucesso');
    }
  });
});

app.post('/login', (req, res) => {
    const { email, senha } = req.body;
    const query = 'SELECT * FROM estudantes WHERE email = ? AND senha = ?';
  
    db.query(query, [email, senha], (err, results) => {
      if (err) {
        console.error('Erro ao verificar conta:', err);
        res.status(500).send('Erro ao verificar conta');
      } else {
        if (results.length > 0) {
          res.status(200).json({ valid: true });
        } else {
          res.status(200).json({ valid: false });
        }
      }
    });
  });

  // Adicione ao seu arquivo server.js

app.get('/videos', (req, res) => {
    const { titulo } = req.query;
    let query = 'SELECT * FROM videos';
    let queryParams = [];
  
    if (titulo) {
      query += ' WHERE titulo LIKE ?';
      queryParams.push(`%${titulo}%`);
    }
  
    db.query(query, queryParams, (err, results) => {
      if (err) {
        console.error('Erro ao buscar vídeos:', err);
        res.status(500).send('Erro ao buscar vídeos');
      } else {
        res.status(200).json(results);
      }
    });
  });
  
  
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
