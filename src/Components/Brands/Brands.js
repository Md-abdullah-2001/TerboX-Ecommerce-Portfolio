import React from 'react';
import nike from '../../asset/nike.png'
import underarmer from '../../asset/under-armur.png'
import puma from '../../asset/puma.png'
import bata from '../../asset/bata.png'
import progmado from '../../asset/pragmo.png'
import sketcher from '../../asset/skecters.png'
import newrelic from '../../asset/newrelic.png'
import publo from '../../asset/pubalo.png'
const Brands = () => {
    return (
<div id='brands' className='mx-14 my-28'>
    <h1 className='text-4xl text-center font-semibold mb-3 font-serif'>Scroll World's Top Brands </h1>
 <div className="carousel carousel-center items-center  lg:w-3/5 sm:w-2/5 sm:px-10 gap-7 lg:mx-auto rounded-box">
    <div className="carousel-item">
    <img className='w-28' src={nike} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img className='w-28' src={puma} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img className='w-28' src={bata} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img className='w-28' src={sketcher} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img className='w-28' src={newrelic} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img className='w-28' src={underarmer} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img className='w-28' src={progmado} alt="Pizza" />
  </div>
  <div className="carousel-item">
    <img className='w-28' src={publo} alt="Pizza" />
  </div>
  
</div>
        </div>
    );
};

export default Brands;