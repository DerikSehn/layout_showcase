// src/components/ServicesSection.tsx
import React from 'react';
import FoodCarousel from './FoodCarousel';

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-gray-200 p-4 py-8">
      <div className="container grid sm:grid-cols-2 mx-auto">
        <div className='grid content-center'>
        <h2 className="text-5xl font-semibold mb-4 px-4">Produtos</h2>
        <p className='text-2xl px-4'>Descubra nossos serviços de catering para eventos especiais.</p>
        </div>
         <FoodCarousel className='w-full  '/>
      </div>
    </section>
  );
};

export default ServicesSection;
