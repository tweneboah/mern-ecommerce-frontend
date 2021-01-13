import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/HomeCategory.css';
const HomeScreenCategory = () => {
  return (
    <div class='w-layout-grid homecategorygrid'>
      <div class='homescreen_category_column'>
        <h3 class='home_category_title'>Laptops</h3>
        <Link to='/laptops-accessories' class='home_category_button w-button'>
          Shop Now
        </Link>
      </div>
      <div class='homescreen_category_column category1'>
        <h3 class='home_category_title'>Ladies Fashions</h3>
        <Link to='/fashions' class='home_category_button w-button'>
          Shop Now
        </Link>
      </div>
      <div class='homescreen_category_column category2'>
        <h3 class='home_category_title'>Gents</h3>
        <Link to='/gents' class='home_category_button w-button'>
          Shop Now
        </Link>
      </div>

      <div class='homescreen_category_column category6'>
        <h3 class='home_category_title'>Hot Deals</h3>
        <Link to='/hot-deals' class='home_category_button w-button'>
          Shop Now
        </Link>
      </div>
      <div class='homescreen_category_column categiry3'>
        <h3 class='home_category_title'>Auto Parts</h3>
        <Link to='/auto-parts' class='home_category_button w-button'>
          Shop Now
        </Link>
      </div>
      <div class='homescreen_category_column category4'>
        <h3 class='home_category_title'>Phone & access</h3>
        <Link to='/phones-accessories' class='home_category_button w-button'>
          Shop Now
        </Link>
      </div>
      <div class='homescreen_category_column category5'>
        <h3 class='home_category_title'>Home Appliances</h3>
        <Link to='/home-appliances' class='home_category_button w-button'>
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default HomeScreenCategory;
