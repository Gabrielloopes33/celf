'use client';

import Banner from './components/Banner/index';
import People from './components/People/index';
import Features from './components/Features/index';
import Business from './components/Business/index';
import Payment from './components/Payment/index';
import Pricing from './components/Pricing/index';
<<<<<<< HEAD
import Faixa from './components/Faixa/index'
import Faixa2 from './components/Faixa2/index'


=======
>>>>>>> f25c1ee7323688f4c75647129f058196f6354bc5

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* Padrão geométrico sutil no fundo */}
<<<<<<< HEAD
      <div className="fixed inset-0 bg-grid-blueprint opacity-[0.04] pointer-events-none" />
=======
      <div className="fixed inset-0 bg-grid-blueprint opacity-[0.02] pointer-events-none" />
      
      {/* Gradiente sutil nas bordas */}
      <div className="fixed inset-0 bg-gradient-radial from-transparent via-transparent to-[#e8eaf2] opacity-30 pointer-events-none" />
>>>>>>> f25c1ee7323688f4c75647129f058196f6354bc5

      {/* Conteúdo */}
      <div className="relative z-10">
        <Banner />
<<<<<<< HEAD
        <Faixa /> 
        <Features />
        <Business />
        <Faixa2 />
        <Payment />

        <People />
=======
        <Features />
        <Business />
        <Payment />
        
        <People />        
>>>>>>> f25c1ee7323688f4c75647129f058196f6354bc5
      </div>
    </main>
  )
}