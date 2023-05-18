import React, { useState, useRef, useEffect } from 'react';
import './productCarousell.css';
import CarousellHeading from './carousellHeading/CarousellHeading';
import Carousell from './carousell/Carousell';

const ProductCarousell = ({ products }) => {
  
  const carousellRef = useRef(null);
  
  // scroll right
  const handleRightScroll = () => {
    const carousel = carousellRef.current;
    if (carousel) {
      carousel.scrollBy({ left: window.innerWidth * 0.5, behavior: 'smooth' });
    }
  };
  // scroll left
  const handleLeftScroll = () => {
    const carousel = carousellRef.current;
    if (carousel) {
      carousel.scrollBy({ left: window.innerWidth * -0.5, behavior: 'smooth' })
    }
  };
  // autoscroll
  const handleAutoScroll = () => {
    const carousel = carousellRef.current;
    if (carousel) {
      carousel.scrollBy({ left: window.innerWidth * 0.1, behavior: 'smooth' })
    } else {

    }
  }
  useEffect(() => {
    const intervalId = setInterval(handleAutoScroll, 1000); 
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Behöver lösa pausfunktionalitet
  //   const handlePause = () => {
  //     const carousel = carousellRef.current;
  //     carousel.scrollBy({ left: 1, behavior: 'smooth' })
  // }

  
  return (
    <div className='productCarousell-wrapper'>
      <CarousellHeading />
      <div className='productCarousell-container'>
      <Carousell key={products._id} products={products} ref={carousellRef} />
      </div>
      <div className="btn-center">
        <div className='adminPostBtn'>
          <button onClick={handleLeftScroll}>&lt;</button>
        </div>
        <div className='adminPostBtn'>
          <button onClick={handleRightScroll}>&gt;</button>
        </div>
        <div className='adminPostBtn'>
          <button id="pause-symbol" 
          // onClick={handlePause}
          >&ge;</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousell;
