import React from 'react';
import img1 from '../../asset/red_shoe-min-1-1.png'
import img2 from '../../asset/blue_shoe-min.png'
import img3 from '../../asset/yellow-shoe.png'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full pt-12 flex sm:flex-col lg:flex-row justify-between ">
  
    <div className=' w-1/2 text-start'>
    <h1 className='lg:text-6xl font-bold sm:text-5xl mt-32 ml-10 py-5' style={{fontFamily: 'Kanit, sans-serif'}}>Pick Your Shoe <br /> From Latest Collection of TerboX</h1>
    <Link to='/collection' className='btn bg-[#e0132f] transition duration-700 ease-in rounded-2xl hover:bg-white hover:text-black ml-10'>Collections</Link>
    </div>
  <div className='w-1/2' >
  <img alt='' src={img1} className="w-full " />
    <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  
    </div>
    
  </div> 
  <div id="slide2" className="carousel-item relative w-full pt-12 flex sm:flex-col lg:flex-row justify-between ">
  
    <div className=' w-1/2 text-start'>
    <h1 className='lg:text-6xl font-bold sm:text-5xl mt-32 ml-10 py-5' style={{fontFamily: 'Kanit, sans-serif'}}>Pick Your Shoe <br /> From Latest Collection of TerboX</h1>
    <Link to='/collection' className='btn bg-[#0460A5] transition duration-700 ease-in rounded-2xl hover:bg-white hover:text-black ml-10'>Collections</Link>
    </div>
  <div className='w-1/2' >
  <img alt='' src={img2} className="w-full " />
    <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  
    </div>
    
  </div> 
  <div id="slide3" className="carousel-item relative w-full pt-12 flex sm:flex-col lg:flex-row justify-between ">
  
    <div className=' w-1/2 text-start'>
    <h1 className='lg:text-6xl font-bold sm:text-5xl mt-32 ml-10 py-5' style={{fontFamily: 'Kanit, sans-serif'}}>Pick Your Shoe <br /> From Latest Collection of TerboX</h1>  
    <Link to='/collection' className='btn bg-[#D38E15] transition duration-700 ease-in rounded-2xl hover:bg-white hover:text-black ml-10'>Collections</Link>
    </div>
  <div className='w-1/2' >
  <img alt='' src={img3} className="w-full " />
    <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  
    </div>
   
  </div>  
  <hr className='bg-black h-24 w-full divider'/>
  
</div>
    );
};

export default Banner;