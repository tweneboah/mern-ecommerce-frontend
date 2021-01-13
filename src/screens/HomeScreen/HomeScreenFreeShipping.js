import React from 'react';
import img from '../../images/happy3-p-1080.png';
import '../../styles/HomeScreenFreeShipping.css';
const HomeScreenFreeShipping = () => {
  return (
    <div class='free_shipping_section'>
      <div class='w-layout-grid free_shipping_grid'>
        <div class='free_shipping_second_div'>
          <h1 class='free_shipping_heading'>Free Shipping</h1>
          {/* <p class='free_shipping_paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          </p> */}
          <img src={img} loading='lazy' alt='' class='free_shipping_img' />
        </div>
      </div>
    </div>
  );
};

export default HomeScreenFreeShipping;
