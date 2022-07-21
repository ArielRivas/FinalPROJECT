import React from 'react'
import './Carousel.scss';
import { useState } from 'react';

const Carousel = ({images}) => {
  const [imageCurrent, setImageCurrent] = useState(0);
  const count = images ?.length; 

  const nextImage = () => {
  setImageCurrent(imageCurrent === count - 1 ? 0 : imageCurrent + 1);
	};
  
  const previousImage = () => {
  setImageCurrent(imageCurrent === 0 ? count - 1 : imageCurrent - 1);
	};
  
  return (
		<div className='slideTwo'>
			<button onClick={previousImage} className="buttonSlider" >GO!</button>
			{images.map((image, index) => {
				return (
					<div className='slideInfo'>
              <h4 className='subtittle'>{image.subtitle}</h4>
              <h2 className='.sliderTittle'>{image.title}</h2>
              <p className='.sliderParagraph'>{image.paragraph}</p>
            </div>
				);
			})}
			<button onClick={nextImage} className="buttonSlider" >GO!</button>
		</div>
	);
}


export default Carousel


