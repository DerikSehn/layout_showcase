import React from 'react';
import {Carousel} from 'flowbite-react'
import img1 from '../assets/landing_page/carousel/food_1.jpeg'
import img2 from '../assets/landing_page/carousel/food_2.jpeg'
import img3 from '../assets/landing_page/carousel/food_3.jpeg'
import img4 from '../assets/landing_page/carousel/food_4.jpeg'
import img5 from '../assets/landing_page/carousel/food_5.jpeg'
import img6 from '../assets/landing_page/carousel/food_6.jpeg'
import img7 from '../assets/landing_page/carousel/food_7.jpeg'
import img8 from '../assets/landing_page/carousel/food_8.jpeg'
import img9 from '../assets/landing_page/carousel/food_9.jpeg'
import img10 from '../assets/landing_page/carousel/food_10.jpeg'


const AboutUsSection: React.FC = () => {
  
  const imgArray = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10
  ]
  
    return (
    <section className="h-[650px] bg-gradient-to-b from-black to-zinc-900">
      <div className="container grid grid-cols-4 gap-4 mx-auto py-8 px-4 h-full text-white">
         <div className="h-full md:col-span-2 col-span-4">
          <h2 className="text-4xl font-bold leading-tight md:pb-20">
           A Melhor Experiência para seu evento
          </h2>
          <div className="text-xl text-gray-200" >
            🍕 Finger Food
            <br/>
            🍔 Salgados finos e tradicionais
            <br/>
            🍩 Doces Gourmet
            <br/>
            🎂 Bolos artesanais
          </div> 
         </div>
           <div className="text-xl text-gray-200 md:col-span-2 col-span-4" >
            <Carousel className='h-[500px] ' >
              {imgArray.map(item => 
                <img className='shadow-m' src={item} alt=' . . . '/>
                )}
            </Carousel>
          </div>
         </div>
      
    </section>
  );
};

export default AboutUsSection