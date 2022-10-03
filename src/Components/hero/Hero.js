import React from 'react';
import './Hero.css';

function Hero() {
    return (
      <div className='hero-wrapper'>
        <div className='hero'>
            <img src={process.env.PUBLIC_URL + "/images/Whiskey.png"} alt="wiskey" />
            <img src={process.env.PUBLIC_URL + "/images/Green.png"} alt="green margarita" />
        </div>          
    </div>
    )
  }
  
  export default Hero;