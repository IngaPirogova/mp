import React, { useState } from 'react';
//import styled from 'styled-components';


import {  
  SliderTitle, 
  StyledSlider,
  SliderList,
  SliderItem,
    SliderHeaderUser,
  SliderUserPhoto,
  HeaderUserWrapper,
  SliderUserTitle,
  //SliderUserRating,
  SliderUserDescr,  
  SliderArWrap, 
 // SliderArrows,
 // ArrowButton
  
} from './Slider.styled';

import { ReactComponent as LeftArrow } from '../../../imagesMainPage/svg/leftarrow.svg';
import { ReactComponent as RightArrow } from '../../../imagesMainPage/svg/rightarrow.svg';

import Olena from '../../../imagesMainPage/img/mobile/Olena2x.png';
import Olex from '../../../imagesMainPage/img/desktop/Olexdesk2x.png';



const reviews = [
  {
    name: 'Olena Doe 11',
    photo: Olena,
    description: 'GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.',
  },
  {
    name: 'Alexander Hubbard',
    photo: Olex,
    description: 'GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.',
  },
  {
    name: 'Olena Doe 22',
    photo: Olena,
    description: 'GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.',
  },
  {
    name: 'Olena Doe 33',
    photo: Olena,
    description: 'GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.',
  },
  {
    name: 'Alexander Hubbard 22',
    photo: Olex,
    description: 'GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.',
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? reviews.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === reviews.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <StyledSlider>
      <SliderTitle>Reviews</SliderTitle>
      <SliderList>
        {reviews.map((review, index) => (
          <SliderItem key={index} style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}>
            <SliderHeaderUser>
              <SliderUserPhoto src={review.photo} alt={review.name} />
              <HeaderUserWrapper>
                <SliderUserTitle>{review.name}</SliderUserTitle>
              </HeaderUserWrapper>
            </SliderHeaderUser>
            <SliderUserDescr>{review.description}</SliderUserDescr>
          </SliderItem>
        ))}
      </SliderList>
      <SliderArWrap>
        <LeftArrow width={47} height={6} onClick={handlePrevSlide} />
        <RightArrow width={47} height={6} onClick={handleNextSlide} />
      </SliderArWrap>
    </StyledSlider>
  );
};

export default Slider;




