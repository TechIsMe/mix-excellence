import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar } from 'react-icons/fa';
import './TestimonialSlider.css'
import { data } from './data';

function TestimonialSliders () {

    const [defaultImage, setDefaultImage] = useState({});
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
  return (
    <div>
      <h1 className='top-header'>Hear From Our Valued Customers </h1>
      
          <Slider {...settings}>
        {data.map((item) => (
          
          <div className="card"> 
            <div className="card-top">
              <img
                src={
                  defaultImage[item.title] === item.title
                    ? defaultImage.linkDefault
                    : item.linkImg
                }
                alt={""}
              />
              <h1 >{item.title}</h1>
            </div>

            <div className="card-bottom">
              <h3> <FaStar className='fa'/><FaStar className='fa'/><FaStar className='fa'/><FaStar className='fa'/><FaStar className='fa'/> {item.month}  </h3>
              <span className="category">{item.text}</span>
            </div>
            <div className="card-bottom">
              <h3 className='bottom-h3'>{item.name},{item.age}</h3>
              {/* <span className="category">{item.age}</span> */}
            </div>
            
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default TestimonialSliders;