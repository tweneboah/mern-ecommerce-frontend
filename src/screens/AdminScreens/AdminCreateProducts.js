import React, { useEffect } from 'react';
import { Formik } from 'formik';
import Dropzone from 'react-dropzone';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { createProductAction } from '../../redux/actions/productActions';

// Form schema
const formSchema = yup.object({
  name: yup.string().required(),
  price: yup.string().required(),
  brand: yup.string().required(),
  category: yup.string().required(),
  countInStock: yup.string().required(),
  numReviews: yup.string().required(),
  description: yup.string().required(),
});

const AdminCreateProducts = ({ history, match }) => {
  const dispatch = useDispatch();

  const productCreate = useSelector(state => state.productCreate);

  const { loading, success, product, error } = productCreate;

  //Rediredirect when product is created
  useEffect(() => {
    if (success) {
      history.push('/');
    }
  }, [dispatch, success]);

  //Redirect if not admin
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (userInfo && !userInfo.isAdmin) history.pushState('/profile');
  });
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          price: '',
          brand: '',
          category: 'Fashion',
          countInStock: '',
          numReviews: '',
          description: '',
          image: [],
        }}
        onSubmit={values => {
          dispatch(createProductAction(values));
          console.log(values);
        }}
        validationSchema={formSchema}>
        {props => {
          return (
            <form onSubmit={props.handleSubmit}>
              <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
                <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                  <img
                    className='mx-auto h-12 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                    alt='Workflow'
                  />
                  <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
                    Add New Product
                  </h2>
                  <div>
                    {loading && (
                      <p className='text-lg text-pink-500'>
                        Product is creating please wait....
                      </p>
                    )}
                    {error && (
                      <p className='text-lg bg-gray-200 text-red-600'>
                        {error}
                      </p>
                    )}
                  </div>
                </div>
                <div></div>
                <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                  <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                    <div>
                      <label
                        for='email'
                        className='block text-sm font-medium text-gray-700'>
                        Product name
                      </label>
                      <div className='mt-1'>
                        <input
                          onBlur={props.handleBlur('name')}
                          value={props.values.name}
                          onChange={props.handleChange('name')}
                          type='text'
                          autocomplete='text'
                          className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                      </div>
                      <div className='text-red-500'>
                        {props.touched.name && props.errors.name}
                      </div>
                    </div>
                    <div>
                      <label
                        for='password'
                        className='block text-sm font-medium text-gray-700'>
                        Product price
                      </label>
                      <div className='mt-1'>
                        <input
                          onBlur={props.handleBlur('price')}
                          value={props.values.price}
                          onChange={props.handleChange('price')}
                          id='number'
                          name='number'
                          type='number'
                          autocomplete='current-text'
                          className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                      </div>
                      <div className='text-red-500'>
                        {props.touched.price && props.errors.price}
                      </div>
                    </div>
                    <div>
                      <label
                        for='password'
                        className='block text-sm font-medium text-gray-700'>
                        Product brand
                      </label>
                      <div className='mt-1'>
                        <input
                          onBlur={props.handleBlur('brand')}
                          value={props.values.brand}
                          onChange={props.handleChange('brand')}
                          type='text'
                          autocomplete='text'
                          className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                      </div>
                      <div className='text-red-500'>
                        {props.touched.brand && props.errors.brand}
                      </div>
                    </div>
                    {/* Upload image */}
                    <div className='mt-2 sm:mt-0 sm:col-span-2'>
                      <div className='max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
                        <div className='space-y-1 text-center'>
                          <svg
                            className='mx-auto h-12 w-12 text-gray-400'
                            stroke='currentColor'
                            fill='none'
                            viewBox='0 0 48 48'
                            aria-hidden='true'>
                            <path
                              d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                              stroke-width='2'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </svg>
                          <div className='flex text-sm text-gray-600'>
                            <Dropzone
                              accept='image/jpeg, image/png'
                              maxFiles={4}
                              onDrop={acceptedFiles => {
                                props.setFieldValue(
                                  'image',
                                  props.values.image.concat(acceptedFiles)
                                );
                              }}>
                              {({ getRootProps, getInputProps }) => (
                                <div className='container'>
                                  <div
                                    {...getRootProps({
                                      classNameName: 'dropzone',
                                      onDrop: event => event.stopPropagation(),
                                    })}>
                                    <input {...getInputProps()} />
                                    <p>
                                      Drag 'n' drop some files here, or click to
                                      select files
                                    </p>
                                  </div>
                                </div>
                              )}
                            </Dropzone>
                          </div>
                          <p className='text-sm text-gray-500'>
                            PNG, JPG, GIF minimum size 1M
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* end of upload image */}
                    <div>
                      <div className='mt-1'>
                        <div>
                          <label
                            for='location'
                            className='block text-sm font-medium text-gray-700'>
                            Category
                          </label>
                          <select
                            onBlur={props.handleBlur('category')}
                            onChange={props.handleChange('category')}
                            name='category'
                            className='mt-1 block border w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'>
                            <option value='Fashion'>Fashion</option>
                            <option value='Gents'>Gents</option>
                            <option value='Ladies'>Ladies</option>
                            <option value='Hot Deals'>Hot Deals</option>
                            <option value='Phone Accessories'>
                              Phone Accessories
                            </option>
                            <option value='Laptops and Accessories'>
                              Laptops and Accessories
                            </option>
                            <option value='Home Appliances'>
                              Home Appliances
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className='text-red-500'>
                        {props.touched.category && props.errors.category}
                      </div>
                    </div>
                    <div>
                      <label
                        for='password'
                        className='block text-sm font-medium text-gray-700'>
                        Product in Stock
                      </label>
                      <div className='mt-1'>
                        <input
                          onBlur={props.handleBlur('countInStock')}
                          value={props.values.countInStock}
                          onChange={props.handleChange('countInStock')}
                          type='text'
                          autocomplete='text'
                          className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                      </div>
                      <div className='text-red-500'>
                        {props.touched.countInStock &&
                          props.errors.countInStock}
                      </div>
                    </div>
                    <div>
                      <label
                        for='password'
                        className='block text-sm font-medium text-gray-700'>
                        Product description
                      </label>
                      <div className='mt-1'>
                        <textarea
                          cols='20'
                          onBlur={props.handleBlur.description}
                          value={props.values.description}
                          onChange={props.handleChange('description')}
                          id='description'
                          name='description'
                          type='textarea'
                          autocomplete='current-description'
                          className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'></textarea>
                      </div>
                    </div>
                    <div className='text-red-500'>
                      {props.touched.description && props.errors.description}
                    </div>
                    <div>
                      <label
                        for='password'
                        className='block text-sm font-medium text-gray-700'>
                        Number of Reviews
                      </label>
                      <div className='mt-1'>
                        <input
                          onBlur={props.handleBlur('numReviews')}
                          value={props.values.numReviews}
                          onChange={props.handleChange('numReviews')}
                          type='text'
                          autocomplete='current-password'
                          className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                      </div>
                      <div className='text-red-500'>
                        {props.touched.numReviews && props.errors.numReviews}
                      </div>
                    </div>
                    {/* Check if a user has uploaded imgage */}
                    {props.values.image.length === 0 ? (
                      <button
                        disabled
                        className='bg-red-200 block w-full py-3 text-lg cursor-not-allowed rounded-full mt-3 text-white'
                        type='submit'>
                        Please upload image to continue
                      </button>
                    ) : (
                      <button
                        className='bg-yellow-700 block py-3 text-lg w-full   rounded-full mt-3 text-white'
                        type='submit'>
                        Create Product
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </form>
          );
        }}
      </Formik>
    </>
  );
};

export default AdminCreateProducts;
