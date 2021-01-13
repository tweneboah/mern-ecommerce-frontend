import React from 'react';
import video from '../../videos/shipping222-transcode.mp4';
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
        <div
          data-poster-url='../videos/shipping222-poster-00001.jpg'
          data-video-urls='../videos/shipping222-transcode.mp4,../videos/shipping222-transcode.webm'
          data-autoplay='true'
          data-loop='true'
          data-wf-ignore='true'
          class='free_shipping_bg_video w-background-video w-background-video-atom'>
          <video
            autoplay=''
            loop=''
            // style='background-image:url("../videos/shipping222-poster-00001.jpg")'
            muted=''
            playsinline=''
            data-wf-ignore='true'
            data-object-fit='cover'>
            <source src={video} data-wf-ignore='true' />
            <source
              src='../videos/shipping222-transcode.webm'
              data-wf-ignore='true'
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default HomeScreenFreeShipping;
