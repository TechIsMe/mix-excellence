import React from "react";
import "./OurDrinks.css";

function OurDrinks() {
  return (
    <section className="horizontal-line">
      <div>
        <hr />
        <h1 className="ourdrinks">Our Most Popular Drinks</h1>
      </div>
      <div className="moIMG right">
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/Mojito image.png"}
            alt="mojito"
          />
        </div>
        <div className="text-left-left">
          <h5 className="text">Mojitos</h5>
          <p className="text-1">Citrus Mint</p>
        </div>
      </div>

      <div className="strIMG left">
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/straw.png"}
            alt="wiskey"
          />
        </div>
        <div className="text-left">
          <h5 className="text">Margaritas</h5>
          <p className="text-1">Roasted Strawberry</p>
        </div>
      </div>

      <div className="kisspng right top">
        <div className="text-right">
          <h5 className="text">Palomas</h5>
          <p className="text-1">Grapefruit Paloma</p>
        </div>
        <div className="img-right">
          <img
            src={process.env.PUBLIC_URL + "/images/Paloma Image.png"}
            alt="wiskey"
          />
        </div>
      </div>

      <div className="beerIMG left">
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/Beer Image.png"}
            alt="wiskey"
          />
        </div>
        <div>
          <h5 className="text4">Beer</h5>
          <p className="text-4">Malty&Sweet</p>
        </div>
      </div>

      <button className="BButton">Book Now</button>
    </section>
  );
}

export default OurDrinks;
