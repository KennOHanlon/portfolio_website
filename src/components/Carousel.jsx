import React, {useState} from 'react'
import "./Carousel.css";

export const Carousel = ({data}) => {

  const [slide, setSlide] = useState(0);

  const nextSlide = ({slides}) => {
    setSlide((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = ({slides}) => {
    setSlide((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return <div className='carousel'> 
    <button onClick={() => {prevSlide(data)}} className="carousel__btn carousel__btn--prev">
    &lt;
    </button>
{data.slides.map( (item,idx) => {
    return  <img 
          src={item.src} 
          alt={item.alt} 
          key={idx} 
          className={slide === idx ? "carousel-image" : "carousel-image carousel-image-hidden"}/>
    })}
    <p className='carousel__cnt'>{slide} / {data.slides.length - 1}</p>
    <button onClick={()=>{nextSlide(data)}} className="carousel__btn carousel__btn--next">
        &gt;
      </button>
      
  </div>
}
