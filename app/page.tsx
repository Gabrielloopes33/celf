'use client';

import Banner from './components/Banner/index';
import People from './components/People/index';
import Features from './components/Features/index';
import Business from './components/Business/index';
import Payment from './components/Payment/index';
import Pricing from './components/Pricing/index';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* Padrão geométrico sutil no fundo */}
      <div className="fixed inset-0 bg-grid-blueprint opacity-[0.02] pointer-events-none" />
      
      {/* Gradiente sutil nas bordas */}
      <div className="fixed inset-0 bg-gradient-radial from-transparent via-transparent to-[#e8eaf2] opacity-30 pointer-events-none" />

      {/* Conteúdo */}
      <div className="relative z-10">
        <Banner />
        <Features />
        <Business />
        <Payment />
        
        <People />        
      </div>
    </main>
  )
}