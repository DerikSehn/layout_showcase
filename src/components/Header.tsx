// src/components/Header.tsx
import React from 'react';
import imglogo from '../assets/logo_dani.png'

const Header: React.FC = () => {
  
  return (
    <header className="bg-black to-100% sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-2">
        <div className="text-2xl font-semibold text-gray-100 px-4">
            <img src={imglogo} alt='logo' className='w-60 max-h-20 object-cover' />
        </div>
        <nav className="space-x-4">
          <a href="#" className="text-gray-400 hover:text-gray-100">Início</a>
          <a href="#" className="text-gray-400 hover:text-gray-100">Sobre Nós</a>
          <a href="#" className="text-gray-400 hover:text-gray-100">Serviços</a>
          <a href="#" className="text-gray-400 hover:text-gray-100">Cardápio</a>
          <a href="#" className="text-gray-400 hover:text-gray-100">Contato</a>
        </nav>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 mx-4 my-2">
            Saiba Mais
        </button>
      </div>
    </header>
  );
};

export default Header;
