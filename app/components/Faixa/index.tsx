'use client';

import React from 'react';

const Faixa: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-90 bg-blue text-white animate-pulse animate-gradient animate-overflow- overflow-auto">
      <div className="grid grid-cols-4 gap-20 p-10 max-w-7xl">
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
    </div>
  );
};

export default Faixa;