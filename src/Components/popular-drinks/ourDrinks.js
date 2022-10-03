import React from "react";

function OurDrinks() {
    return (
  <section >
      <div>
      <h1 className='ourdrinks'>Our Most Popular Drinks</h1> 
  
      </div>
  <div className='moIMG'>
  <img src={process.env.PUBLIC_URL + "/images/Mojito image.png"} alt="wiskey" />

  <p className='text' >Mojitos</p>
  <p className='text-1'>Citrus Mint</p>
  </div>
  
  <div className='strIMG'>
  <img src={process.env.PUBLIC_URL + "/images/straw.png"} alt="wiskey" />

  <h5 className='text2'>Margaritas</h5>
  <p className='text-2'>Roasted Strawberry</p>
  </div>
  
  <div className='kisspng'>
  <img src={process.env.PUBLIC_URL + "/images/Paloma Image.png"} alt="wiskey" />

  <h5 className='text3'>Palomas</h5>
  <p className='text-3'>Grapefruit Paloma</p>
  
  </div>
  
  <div className='beerIMG'>
  <img src={process.env.PUBLIC_URL + "/images/Beer Image.png"} alt="wiskey" />

  <h5 className='text4'>Beer</h5>
  <p className='text-4'>Malty & Sweet</p>
  </div>
  <div className='btn'>
  <button className='BButton'>Book Now</button>
  </div>
  </section>
  
    )
  }
  
  export default OurDrinks;