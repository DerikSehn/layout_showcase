import React from 'react';
import bgImage from '../assets/landing_page/main_section/candies.jpg'

const MainSection: React.FC = () => {
  
  
    return (
    <section className="h-[700px] bg-black mt-[-96px]">
      <div className='absolute w-full max-h-[650px] pt-24 z-0'>
        <img className='container mx-auto object-cover brightness-110 w-full max-h-[650px] sm:w-96 md:w-[800px]' src={bgImage}/>
      </div>
      <div className='container mx-auto z-50 pt-24'>   
         bgImage 
      </div>
    
    </section>
  );
};

export default MainSection