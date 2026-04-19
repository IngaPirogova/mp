import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Slider from '../Slider/Slider'

import { fetchReviews } from '../../../redux/reviews/operations';
import { selectAllReviews } from '../../../redux/reviews/selectors';

const SliderContainer = ({ limit = 5 }) => {
  const dispatch = useDispatch();

  const reviews = useSelector(selectAllReviews);
  const isLoading = useSelector(state => state.reviews.isLoading);
  const error = useSelector(state => state.reviews.error);

  const sliced = reviews.slice(0, limit);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  // состояния загрузки
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return <Slider data={sliced} />;
};

export default SliderContainer;
