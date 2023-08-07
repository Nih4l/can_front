import React from 'react'
import Carousel from './CarouselFunction'
import c1 from '../Photos/c1.png'
import c2 from '../Photos/c2.png'
import c3 from '../Photos/c3.png'
import c4 from '../Photos/c4.png'
import c5 from '../Photos/c5.png'

// const slides = [
//   { image: {c1} , text : 'image 1' },
//   `${c2}`,
//   `${c3}`,
//   `${c4}`,
//   `${c5}`,

// ]
const slides = [
  { image: c1, text: 'Image 1' },
  { image: c2, text: 'Image 2' },
  { image: c3, text: 'Image 3' },
  { image: c4, text: 'Image 4' },
  { image: c5, text: 'Image 5' },
];

const CarouselMain = () => {
  return (
    <>
      {/* <div className='max-w-lg'>
        <Carousel>
          {slides.map((s) => (
            <img src={s} />
          ))}
        </Carousel> */}

      <div className='max-w-lg flex relative'>
        <Carousel>
          {slides.map((slide , index) => (
            <>
            <img  src={slide.image} />
            <p className=''></p>
            </>
          ))}
        </Carousel>

        {/*  <div>
      {slides.map((slide, index) => (
        <div key={index}>
          <img src={slide.image} alt={`Slide ${index}`} />
          <p>{slide.text}</p>
        </div>
      ))}
    </div> */}
      </div>
    </>
  )
}

export default CarouselMain