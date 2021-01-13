import React from 'react';
import svg1 from '../images/logi.svg';
import svg2 from '../images/happy.svg';
import svg3 from '../images/21.svg';
import '../styles/homePageShipping.css';

const HomePageDeliverText = () => {
  return (
    <div class='section-2'>
      <div class='w-layout-grid shippingintrogrid'>
        <img
          src={svg1}
          loading='lazy'
          width='524'
          id='w-node-74b510108897-b16912ab'
          alt=''
          class='shiooing_grid_item_1'
        />
        <div class='shippinggriditem_2'>
          <h1 class='shippinggrid_item_1_hheading'>Fast Delivery</h1>
          <p class='shippinggrid_item_1_text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
            in eros elementum tristique. Duis cursus, mi quis viverra ornare,
            eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean
            faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem
            vitae risus tristique posuere.
          </p>
        </div>
        <div class='shiping_grid_item_block'>
          <img src={svg2} loading='lazy' alt='' class='shipping_grid_img_1' />
          <img src={svg3} loading='lazy' alt='' class='shipping_grid_img_2' />
        </div>
      </div>
    </div>
  );
};

export default HomePageDeliverText;
