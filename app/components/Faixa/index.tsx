import React from 'react';
import ReactDOM from 'react-dom/client';

const StatsBanner: React.FC = () => {
  return (
    <div className="stats-banner">
      <div className="stat-item">
        <h2>10+</h2>
        <p>Anos de Experiência</p>
      </div>
      <div className="stat-item">
        <h2>100+</h2>
        <p>Engenheiros Certificados</p>
      </div>
      <div className="stat-item">
        <h2>40+</h2>
        <p>Projetos Completos</p>
      </div>
      <div className="stat-item">
        <h2>120+</h2>
        <p>Prêmios Ganhos</p>
      </div>
    </div>
  );
};

