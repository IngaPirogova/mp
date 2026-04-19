import Slider from '../Slider/Slider';
import { reviews1, reviews2 } from '../Slider/Slider';
import { SliderTitle } from '../Slider/Slider.styled';

const SlidersBlock = () => {
  return (
    <>
      <SliderTitle>Reviews</SliderTitle>
      <div
        style={{
          display: 'flex',
          gap: '40px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Slider data={reviews1} />
        <Slider data={reviews2} />
      </div>
    </>
  );
};

export default SlidersBlock;
