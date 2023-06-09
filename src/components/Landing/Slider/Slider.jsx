

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
  );
};

export default Slider;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
// SliderTitle,
// StyledSlider,
// SliderList,
// SliderItem,
// SliderHeaderUser,
// SliderUserPhoto,
// HeaderUserWrapper,
// SliderUserTitle,
// SliderUserDescr,
// SliderArWrap,
// } from './Slider.styled';

// import { ReactComponent as LeftArrow } from '../../../imagesMainPage/svg/leftarrow.svg';
// import { ReactComponent as RightArrow } from '../../../imagesMainPage/svg/rightarrow.svg';

// const Slider = () => {
// const [reviews, setReviews] = useState([]);
// const [currentSlide, setCurrentSlide] = useState(0);

// useEffect(() => {
// fetchReviews();
// }, []);

// const fetchReviews = async () => {
// try {
// const response = await axios.get('backend-url/reviews'); // Replace 'backend-url' with the actual URL of your backend endpoint to fetch reviews
// setReviews(response.data);
// } catch (error) {
// console.log('Error fetching reviews:', error);
// }
// };

// const handlePrevSlide = () => {
// setCurrentSlide((prevSlide) => (prevSlide === 0 ? reviews.length - 1 : prevSlide - 1));
// };

// const handleNextSlide = () => {
// setCurrentSlide((prevSlide) => (prevSlide === reviews.length - 1 ? 0 : prevSlide + 1));
// };

// return (
// <StyledSlider>
// <SliderTitle>Reviews</SliderTitle>
// <SliderList>
// {reviews.map((review, index) => (
// <SliderItem key={index} style={{ transform: translateX(${(index - currentSlide) * 100}%) }}>
// <SliderHeaderUser>
// <SliderUserPhoto src={review.photo} alt={review.name} />
// <HeaderUserWrapper>
// <SliderUserTitle>{review.name}</SliderUserTitle>
// </HeaderUserWrapper>
// </SliderHeaderUser>
// <SliderUserDescr>{review.description}</SliderUserDescr>
// </SliderItem>
// ))}
// </SliderList>
// <SliderArWrap>
// <LeftArrow width={47} height={6} onClick={handlePrevSlide} />
// <RightArrow width={47} height={6} onClick={handleNextSlide} />
// </SliderArWrap>
// </StyledSlider>
// );
// };

// export default Slider;

// В предоставленном коде я добавил логику и функции для получения данных с бэкэнда и их отображения в компоненте слайдера.

// Вот что я добавил:

// Импортировал необходимые зависимости: React, useState, useEffect и axios.
// Создал переменную состояния с именем reviews с помощью хука useState для хранения полученных данных отзывов.
// Добавил хук useEffect, чтобы при монтировании компонента получать данные отзывов с помощью функции fetchReviews.
// Определил функцию fetchReviews для выполнения асинхронного HTTP-запроса GET к конечной точке бэкэнда, возвращающего данные отзывов. Замените 'backend-url' на фактический URL вашей конечной точки бэкэнда.
// В функциях handlePrevSlide и handleNextSlide я обновил состояние currentSlide, используя функциональную форму, чтобы вычислить новый индекс слайда на основе текущего слайда и длины массива отзывов.
// Заменил статический массив reviews на состояние reviews в функции map компонента SliderList.
// Добавил компонент SliderUserPhoto для отображения фотографии отзыва и использовал компонент SliderUserTitle для отображения имени отзыва.
// Обернул компонент слайдера с помощью компонента StyledSlider и включил в него компоненты SliderTitle, SliderList, SliderItem, SliderHeaderUser, HeaderUserWrapper, SliderUserDescr и SliderArWrap.
// Добавил компоненты LeftArrow и RightArrow для действий предыдущего и следующего слайдов соответственно. Обработчики событий onClick установлены на функции handlePrevSlide и handleNextSlide.
// Экспортировал компонент Slider в качестве экспорта по умолчанию.
// Обратите внимание, что вам нужно заменить 'backend-url' в функции fetchReviews на фактический URL вашей конечной точки бэкэнда, возвращающей данные отзывов. Также убедитесь, что у вас указаны правильные пути к импортированным SVG- и изображениям.







