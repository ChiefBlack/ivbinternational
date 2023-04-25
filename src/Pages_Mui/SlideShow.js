import React from 'react';
import { Slide } from 'react-slideshow-image';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import 'react-slideshow-image/dist/styles.css';
import image1 from './images/interestRate.jpg';
import image2 from './images/invest2.jpg';
import image3 from './images/bgImage2.jpg';

const SliderContainer = styled('div')({
  width: '100%',
  margin: '0 auto',
});

const SlideContainer = styled(Paper)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 300,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
  position: 'relative',
});



const SlideShow = () => {
  const slideImages = [
    image1,image2,image3
    
    
  ];

  return (
    <SliderContainer>
      <Slide>
        {slideImages.map((image, index) => (
          <SlideContainer key={index} style={{ backgroundImage: `url(${image})` }}>
            
          </SlideContainer>
        ))}
      </Slide>
    </SliderContainer>
  );
};

export default SlideShow;
