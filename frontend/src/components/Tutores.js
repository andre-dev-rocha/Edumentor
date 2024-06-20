import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Tutores.css';

function Tutores() {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchVideos();
  }, [searchTerm]);
  const fetchVideos = () => {
    axios.get('http://localhost:5000/videos', {
      params: { titulo: searchTerm }
    })
    .then(response => {
      setVideos(response.data);
    })
    .catch(error => {
      console.error('Erro ao buscar vídeos:', error);
    });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="tutores-container">
      <input
        type="text"
        placeholder="Pesquisar vídeos"
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-bar"
      />
      <div className="videos-grid">
        {videos.map(video => (
          <div key={video.id} className="video-card">
            <img src={video.imagem} alt={video.titulo} className="video-image" />
            <h3>{video.titulo}</h3>
            <p>{video.tutor}</p>
            <video controls className="video-player">
              <source src={video.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tutores;