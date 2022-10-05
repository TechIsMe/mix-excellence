// import React from "react";

// function OurDrinks() {
//     return (
//   <section >
//       <div>
//       <h1 className='ourdrinks'>Our Most Popular Drinks</h1> 
  
//       </div>
//   <div className='moIMG'>
//   <img src={process.env.PUBLIC_URL + "/images/Mojito image.png"} alt="wiskey" />

//   <p className='text' >Mojitos</p>
//   <p className='text-1'>Citrus Mint</p>
//   </div>
  
//   <div className='strIMG'>
//   <img src={process.env.PUBLIC_URL + "/images/straw.png"} alt="wiskey" />

//   <h5 className='text2'>Margaritas</h5>
//   <p className='text-2'>Roasted Strawberry</p>
//   </div>
  
//   <div className='kisspng'>
//   <img src={process.env.PUBLIC_URL + "/images/Paloma Image.png"} alt="wiskey" />

//   <h5 className='text3'>Palomas</h5>
//   <p className='text-3'>Grapefruit Paloma</p>
  
//   </div>
  
//   <div className='beerIMG'>
//   <img src={process.env.PUBLIC_URL + "/images/Beer Image.png"} alt="wiskey" />

//   <h5 className='text4'>Beer</h5>
//   <p className='text-4'>Malty & Sweet</p>
//   </div>
//   <div className='btn'>
//   <button className='BButton'>Book Now</button>
//   </div>
//   </section>
  
//     )
//   }
  
//   export default OurDrinks;

import React from 'react'
// import Mojito from "../Components/images/Mojito.png";
// import straw from "../Components/images/straw.png";
// import Beer from '../Components/images/Beer.png';
// import Kisspng from "../Components/images/kisspng.png";
import './OurDrinks.css'


function OurDrinks() {
<<<<<<< HEAD
  return (
<section className='horizontal-line'>
    <div>
      <hr/>
      <h1 className='ourdrinks'>Our Most Popular Drinks</h1> 
    </div>
    <div className='moIMG right'>
       <div className='text-right'> 
        <p className='text' >Mojitos</p>
        <p className='text-1'>Citrus Mint</p>
      </div> 
      <div>
        {/* <img src={Mojito} alt=" Img"/> */}
        <img src={process.env.PUBLIC_URL + "/images/Mojito image.png"} alt="wiskey" />
      </div>
    </div>
=======
    return (
  <section className="dwrapper">
      <div>
        
      <h1 className='ourdrinks'>Our Most Popular Drinks</h1> 
      </div>
    

  <div className='moIMG'>
  <img src={process.env.PUBLIC_URL + "/images/Mojito image.png"} alt="wiskey" />
>>>>>>> 6ab99726f8ca85b96c0b414bc36b0a4710f2d940

<div className='strIMG left'>
 <div>
    {/* <img src={straw} alt="straw"/> */}
    <img src={process.env.PUBLIC_URL + "/images/straw.png"} alt="wiskey" />
 </div> 
 <div className='text-left'>
  <h5 className='text'>Margaritas</h5>
  <p className='text-1'>Roasted Strawberry</p>
 </div>
</div>

<div className='kisspng right top'>
  <div className='text-right'>
    <h5 className='text'>Palomas</h5>
    <p className='text-1'>Grapefruit Paloma</p>
  </div>
  <div className='img-right'>
    {/* <img src={Kisspng} alt=" Img"/>  */}
  <img src={process.env.PUBLIC_URL + "/images/Paloma Image.png"} alt="wiskey" /></div>
</div>

<div className='beerIMG left'>
    <div> 
        {/* <img src={Beer} alt=" Img"/>  */}
        <img src={process.env.PUBLIC_URL + "/images/Beer Image.png"} alt="wiskey" />
    </div>
  <div>
<h5 className='text4'>Beer</h5>

  <p className='text-4'>Malty&Sweet</p>
  </div>
  <hr/>
</div>
{/* <div className=''>
<button className='BButton'>Book Now</button>

</div> */}

</section>

  )
}

export default OurDrinks;
