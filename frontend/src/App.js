import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Registro from './components/Registro';
import Login from './components/Login';
import Perfil from './components/Perfil';
import Tutores from './components/Tutores';
import Tutoria from './components/Tutoria';
import Recursos from './components/Recursos';
import Forum from './components/Forum';
import Progresso from './components/Progresso';
import Chat from './components/Chat';
import Feedback from './components/Feedback';
import Comunidade from './components/Comunidade';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registro />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/tutores" element={<Tutores />} />
          <Route path="/tutoria" element={<Tutoria />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/progresso" element={<Progresso />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/comunidade" element={<Comunidade />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
