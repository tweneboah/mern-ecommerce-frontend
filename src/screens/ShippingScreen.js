import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { GrLocation } from 'react-icons/gr';
import { saveShippingAddressAction } from '../redux/actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
const ShippingScreen = ({ history }) => {
  const cart = useSelector(state => state.cart);
  const { shippingAddress } = cart;

  //Populate the shipping address into state

  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          address: shippingAddress?.address,
          city: shippingAddress?.city,
          postalCode: shippingAddress?.postalCode,
          country: shippingAddress?.country,
          region: shippingAddress?.region,
          email: shippingAddress?.email,
          phoneNumber: shippingAddress?.phoneNumber,
          shippingType: 'Free',
        }}
        onSubmit={values => {
          console.log(values);
          dispatch(saveShippingAddressAction(values));
          history.push('/placeorder');
        }}>
        {props => {
          return (
            <div className='min-h-1/2 bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
              <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                <h2 className='mt-6 text-center text-xl font-extrabold text-gray-900'>
                  Your Shipping Address
                </h2>

                <GrLocation className='mx-auto h-12 w-auto text-blue-500' />
              </div>

              <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                  <form className='space-y-6' onSubmit={props.handleSubmit}>
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium text-gray-700'>
                        Address
                      </label>
                      <div className='mt-1'>
                        <input
                          value={props.values.address}
                          onChange={props.handleChange('address')}
                          placeholder='Enter your Address'
                          type='text'
                          autocomplete='Enter your Address'
                          required
                          className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium text-gray-700'>
                        Email
                      </label>
                      <div className='mt-1'>
                        <input
                          value={props.values.email}
                          onChange={props.handleChange('email')}
                          placeholder='Enter your Email'
                          type='Email'
                          autocomplete='Enter your Email'
                          required
                          className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium text-gray-700'>
                        Phone Number
                      </label>
                      <div className='mt-1'>
                        <input
                          value={props.values.phoneNumber}
                          onChange={props.handleChange('phoneNumber')}
                          placeholder='Enter your Phone Number'
                          type='text'
                          autocomplete='Enter your Phone Number'
                          required
                          className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                      </div>
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-gray-700'>
                        City
                      </label>
                      <div className='mt-1'>
                        <input
                          value={props.values.city}
                          onChange={props.handleChange('city')}
                          type='text'
                          placeholder='Enter your city'
                          autocomplete='text'
                          required
                          className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                      </div>
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-gray-700'>
                        Region
                      </label>
                      <div className='mt-1'>
                        <select
                          onBlur={props.handleBlur('region')}
                          onChange={props.handleChange('region')}
                          name='category'
                          className='mt-1 block border w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'>
                          <option value='Ashanti'>Ashanti</option>
                          <option value='Western'>Western</option>
                          <option value='Northern'>Northern</option>
                          <option value='Eastern'>Eastern</option>
                          <option value='Accra'>Accra</option>
                          <option value='Brong Ahafo'>Brong Ahafo</option>
                          <option value='Volta'>Volta</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className='block text-sm font-medium text-gray-700'>
                        postal Code
                      </label>
                      <div className='mt-1'>
                        <input
                          value={props.values.postalCode}
                          onChange={props.handleChange('postalCode')}
                          type='text'
                          autocomplete='text'
                          required
                          placeholder='Enter your postal code'
                          className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                      </div>
                    </div>

                    <div>
                      <label className='block text-sm font-medium text-gray-700'>
                        Country
                      </label>
                      <div className='mt-1'>
                        <input
                          value={props.values.country}
                          onChange={props.handleChange('country')}
                          type='text'
                          autocomplete='text'
                          required
                          placeholder='Enter your Country'
                          className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                      </div>
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-gray-700'>
                        Shipping Type
                      </label>
                      <div className='mt-1'>
                        <select
                          onBlur={props.handleBlur('shippingType')}
                          onChange={props.handleChange('shippingType')}
                          name='shippingType'
                          className='mt-1 block border w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'>
                          <option selected value='Free'>
                            Free
                          </option>
                          <option value='Exress'>Exress</option>
                        </select>
                        <div className='text-red-500'>
                          NOTE: For free shipping it can take about 30 days but
                          if you need an express (10 days by flight ) your
                          shipping is not part of the total cost of the products
                          but instead you will pay during pick up For more info{' '}
                          <Link to='/contact'>
                            <span className='text-blue-600'>contact us</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center justify-between'>
                      <div className='text-sm'></div>
                    </div>

                    <div>
                      <button
                        type='submit'
                        className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                        Continue
                      </button>
                    </div>
                  </form>

                  <div className='mt-6'>
                    <div className='relative'>
                      <div className='absolute inset-0 flex items-center'>
                        <div className='w-full border-t border-gray-300'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Formik>
      ;
    </>
  );
};

export default ShippingScreen;
