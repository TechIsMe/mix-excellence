import React from 'react';

function Hero() {
    return (
      <div className='hero-wrapper'>
        <div className='hero'>
            <img src={process.env.PUBLIC_URL + "/images/Whiskey image.png"} alt="wiskey" />
            <img src={process.env.PUBLIC_URL + "/images/pngegg 3.png"} alt="wiskey" />
        </div>          
    </div>
    )
  }
  
  export default Hero;