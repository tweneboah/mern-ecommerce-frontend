import React from 'react';
import '../../styles/HomeScreenFixedBackground.css';
const HomeScreenFixedBackground = () => {
  return (
    <>
      <div class='homescreen_fixed_bg '></div>
      <div class='w-layout-grid home_screen_big_grid'>
        <div class='homescreen_big_img_column'></div>
        <div class='homescreen_big_image_text'>
          <h1 class='big_img_text'>99 % off</h1>
          <p class='big_img_desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeScreenFixedBackground;
