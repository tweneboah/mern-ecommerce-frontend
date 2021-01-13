import React, { useEffect } from 'react';
import { Formik } from 'formik';
import Dropzone from 'react-dropzone';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteProductAction,
  fetchAllProductsAction,
  updateProductAction,
} from '../../redux/actions/productActions';
import { productFileImageUploadAction } from '../../redux/actions/productFileImageUploadAction';

const AdminEditProduct = ({ history, match }) => {
  const dispatch = useDispatch();

  //======FETCH ALL PRODUCTS==================

  useEffect(() => {
    dispatch(fetchAllProductsAction());
  }, [match.params.id]);
  const productList = useSelector(state => state.productList);

  //updated product state
  const updateProduct = useSelector(state => state.updateProduct);
  const {
    loading: updateProductLoading,
    error: updateProductError,
    success,
  } = updateProduct;
  const { products } = productList;
  //find the particular product whos id is in the param and populate it in the form
  const product =
    products && products.find(product => product._id === match.params.id);

  const confirmDeleteProduct = () => {
    let isDelete = window.confirm(
      'Are you sure you want to delete this product ?'
    );

    if (isDelete) dispatch(deleteProductAction(match.params.id));
    history.push('/admin/fetchproducts');
  };

  useEffect(() => {
    if (success) history.push('/admin/fetchproducts');
  }, [success]);
  return (
    <>
      <Formik
        initialValues={{
          name: product && product.name,
          price: product && product.price,
          brand: product && product.brand,
          category: product && product.category,
          countInStock: product && product.countInStock,
          numReviews: product && product.numReviews,
          description: product && product.description,
        }}
        onSubmit={values => {
          dispatch(updateProductAction(match.params.id, values));
        }}>
        {props => {
          return (
            <form onSubmit={props.handleSubmit}>
              <div class='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
                <div class='sm:mx-auto sm:w-full sm:max-w-md'>
                  <img
                    class='mx-auto h-12 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                    alt='Workflow'
                  />
                  <h2 class='mt-6 text-center text-3xl font-extrabold text-gray-900'>
                    update Product
                  </h2>
                  <div>
                    {updateProductLoading && (
                      <p class='text-lg text-pink-500'>
                        Product is updating please wait....
                      </p>
                    )}
                    {updateProductError && (
                      <p class='text-lg bg-gray-200 text-red-600'>
                        {updateProductError}
                      </p>
                    )}
                  </div>
                </div>
                <div></div>
                <div class='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                  <div class='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                    <div>
                      <label
                        for='email'
                        class='block text-sm font-medium text-gray-700'>
                        Product name
                      </label>
                      <div class='mt-1'>
                        <input
                          value={props.values.name}
                          onChange={props.handleChange('name')}
                          type='text'
                          autocomplete='text'
                          class='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        for='password'
                        class='block text-sm font-medium text-gray-700'>
                        Product price
                      </label>
                      <div class='mt-1'>
                        <input
                          value={props.values.price}
                          onChange={props.handleChange('price')}
                          id='number'
                          name='number'
                          type='number'
                          autocomplete='current-text'
                          class='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        for='password'
                        class='block text-sm font-medium text-gray-700'>
                        Product brand
                      </label>
                      <div class='mt-1'>
                        <input
                          value={props.values.brand}
                          onChange={props.handleChange('brand')}
                          type='text'
                          autocomplete='text'
                          class='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                      </div>
                    </div>

                    <div>
                      <div class='mt-1'>
                        <div>
                          <label
                            for='location'
                            class='block text-sm font-medium text-gray-700'>
                            Category
                          </label>
                          <select
                            required
                            onChange={props.handleChange('category')}
                            name='category'
                            class='mt-1 block border w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'>
                            <option>Fashion</option>
                            <option>Gents</option>
                            <option>Ladies</option>
                            <option>Hot Deals</option>
                            <option>Auto Parts</option>
                            <option>Phone Accessories</option>
                            <option>Laptops and Accessories</option>
                            <option>Home Appliances</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        for='password'
                        class='block text-sm font-medium text-gray-700'>
                        Product in Stock
                      </label>
                      <div class='mt-1'>
                        <input
                          value={props.values.countInStock}
                          onChange={props.handleChange('countInStock')}
                          type='text'
                          autocomplete='text'
                          class='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        for='password'
                        class='block text-sm font-medium text-gray-700'>
                        Product description
                      </label>
                      <div class='mt-1'>
                        <textarea
                          cols='10'
                          value={props.values.description}
                          onChange={props.handleChange('description')}
                          id='description'
                          name='description'
                          type='textarea'
                          autocomplete='current-description'
                          class='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'></textarea>
                      </div>
                    </div>

                    <div>
                      <label
                        for='password'
                        class='block text-sm font-medium text-gray-700'>
                        Number of Reviews
                      </label>
                      <div class='mt-1'>
                        <input
                          value={props.values.numReviews}
                          onChange={props.handleChange('numReviews')}
                          type='text'
                          autocomplete='current-password'
                          class='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                      </div>
                    </div>

                    <div className='mt-4'>
                      <button
                        type='submit'
                        class='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-green-600 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                        Update product
                      </button>
                    </div>

                    <div className='mt-4'>
                      <button
                        onClick={confirmDeleteProduct}
                        type='submit'
                        class='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                        Delete product
                      </button>
                    </div>
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

export default AdminEditProduct;
