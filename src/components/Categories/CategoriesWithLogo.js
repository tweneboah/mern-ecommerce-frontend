import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GiClothes } from 'react-icons/gi';
import { VscListOrdered } from 'react-icons/vsc';
import { GiLaptop } from 'react-icons/gi';
import { ImMobile } from 'react-icons/im';
import { GiMonclerJacket } from 'react-icons/gi';
import { BsSpeaker } from 'react-icons/bs';
import { BiRun } from 'react-icons/bi';
import { AiFillCar } from 'react-icons/ai';
import ReactTooltip from 'react-tooltip';

import {
  fetchAllProductsAction,
  filterByCategoryAction,
} from '../../redux/actions/productActions';

const CategoriesWithLogo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProductsAction(''));
  }, []);

  return (
    <div class='flex flex-wrap justify-center mt-4 md:flex '>
      <ReactTooltip />
      <div
        data-type='info'
        data-tip='All Products'
        onClick={() => dispatch(fetchAllProductsAction(''))}>
        <VscListOrdered class=' text-gray-400  text-4xl mr-3 cursor-pointer  ' />
      </div>
      <div
        data-type='warning'
        data-tip='Fashion'
        onClick={() => dispatch(filterByCategoryAction('Fashion'))}>
        <GiClothes class=' text-gray-400  border cursor-pointer text-4xl mr-3' />
      </div>
      <div
        data-type='error'
        data-tip='Laptops and Accessories'
        onClick={() =>
          dispatch(filterByCategoryAction('Laptops and Accessories'))
        }>
        <GiLaptop class=' text-gray-400  cursor-pointer  text-4xl mr-3' />
      </div>
      <div
        data-type='dark'
        data-tip='Phone Accessories'
        onClick={() => dispatch(filterByCategoryAction('Phone Accessories'))}>
        <ImMobile class=' text-gray-400 text-4xl mr-3  cursor-pointer' />
      </div>

      <div
        data-type='info'
        data-tip='Gents'
        onClick={() => dispatch(filterByCategoryAction('Gents'))}>
        <GiMonclerJacket class=' text-gray-400 text-4xl mr-3  cursor-pointer ' />
      </div>
      <div
        data-type='warning'
        data-tip='Home Appliances'
        onClick={() => dispatch(filterByCategoryAction('Home Appliances'))}>
        <BsSpeaker class=' text-gray-400 text-4xl mr-3 cursor-pointer' />
      </div>

      <div
        data-type='error'
        data-tip='Hot Deals'
        onClick={() => dispatch(filterByCategoryAction('Hot Deals'))}>
        <BiRun class=' text-gray-400 text-4xl mr-3 cursor-pointer  ' />
      </div>
      <div
        data-type='success'
        data-tip='Auto Parts'
        onClick={() => dispatch(filterByCategoryAction('Auto Parts'))}>
        <AiFillCar class=' text-gray-400 text-4xl mr-3 cursor-pointer ' />
      </div>
    </div>
  );
};

export default CategoriesWithLogo;
