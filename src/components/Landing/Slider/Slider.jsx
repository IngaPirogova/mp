

import React, { useState } from 'react';
import {  
  SliderTitle, 
  StyledSlider,
  SliderList,
  SliderItem,
  SliderHeaderUser,
  SliderUserPhoto,
  HeaderUserWrapper,
  SliderUserTitle,
  SliderUserDescr,  
  SliderArWrap, 
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
    name: 'Alexander Hubbard 11',
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


  {
    name: 'Olena Doe 44',
    photo: Olena,
    description: 'GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.',
  },
  {
    name: 'Alexander Hubbard 44',
    photo: Olex,
    description: 'GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.',
  },
  {
    name: 'Olena Doe 55',
    photo: Olena,
    description: 'GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.',
  },
  {
    name: 'Olena Doe 66',
    photo: Olena,
    description: 'GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.',
  },
  {
    name: 'Alexander Hubbard 77',
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
    setCurrentSlide((prevSlide) => (prevSlide + 1) % reviews.length);
  };

  return (
    <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
    <StyledSlider>
      <SliderTitle>Reviews</SliderTitle>
      <SliderList>
        {reviews.map((review, index) => (
          <SliderItem
            key={index}
            index={index}
            currentSlide={currentSlide}
          >
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
        <button onClick={handlePrevSlide}>
          <LeftArrow width={47} height={6} />
        </button>
        <button onClick={handleNextSlide}>
          <RightArrow width={47} height={6} />
        </button>
      </SliderArWrap>
    </StyledSlider>
    </div>
  );
};

export default Slider;





