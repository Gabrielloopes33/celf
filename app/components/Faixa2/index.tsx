'use client';

import React from 'react';

const Faixa2: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-90 bg-blue text-white animate-gradient animate-overflow">
      <div className="grid grid-cols-1 gap-20 p-10 max-w-7xl">
        <div className="text-4xl sm:text-5xl font-semibold text-orange text-center my-10">
          <h2>Sua reforma,</h2>
          <p>nossa missão!</p>
        </div>
      </div>
    </div>
  );
};

export default Faixa2;