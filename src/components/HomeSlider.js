import '../styles/SlideShow.css';

const HomeSlider = () => {
  return (
    <div
      data-delay='4000'
      data-animation='slide'
      data-autoplay='1'
      data-duration='500'
      data-infinite='1'
      class='slideshowsection w-slider'>
      <div class='w-slider-mask'>
        <div class='sliderimg1 w-slide'></div>
        <div class='sliderimg2 w-slide'></div>
        <div class='sliderimg3 w-slide'></div>
      </div>
      <div class='w-slider-arrow-left'>
        <div class='w-icon-slider-left'></div>
      </div>
      <div class='w-slider-arrow-right'>
        <div class='w-icon-slider-right'></div>
      </div>
      <div class='slide-nav w-slider-nav w-slider-nav-invert w-shadow w-round w-num'></div>
    </div>
  );
};

export default HomeSlider;
