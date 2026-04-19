import SliderContainer from '../SliderContainer/SliderContainer';
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
        <SliderContainer limit={5} />
        <SliderContainer limit={10} />
      </div>
    </>
  );
};

export default SlidersBlock;
