import React, { useState, useEffect } from 'react';
import {    
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

export const reviews1 = [
  {
    name: 'Olena Doe',
    photo: Olena,
    description:
      'GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.',
  },
  {
    name: 'User 1',
    photo: Olena,
    description:
      'GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.',
  },
  {
    name: 'Olena',
    photo: Olena,
    description:
      'GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.',
  },
];
  
export const reviews2 = [
  {
    name: 'Alexander Hubbard',
    photo: Olex,
    description:
      'GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.',
  },
  {
    name: 'User 2',
    photo: Olex,
    description:
      'GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.',
  },
  {
    name: 'Olex',
    photo: Olex,
    description:
      'GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.',
  },
];


const Slider = ({data}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? data.length - 1 : prevSlide - 1));
  };
  
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
  };

   useEffect(() => {
     // защита от пустого массива
     if (!data.length) return;

     const interval = setInterval(() => {
       setCurrentSlide(prev => (prev + 1) % data.length);
     }, 3000);

     return () => clearInterval(interval);
   }, [data.length]);


  return (
    <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
    <StyledSlider>
      
      <SliderList>
        {data.map((review, index) => (
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
















//добавить props data (prewiews -> data)
//два массива
//компонент SlidersBlock
