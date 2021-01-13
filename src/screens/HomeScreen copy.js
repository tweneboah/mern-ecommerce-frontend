import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CategoriesWithLogo from '../components/Categories/CategoriesWithLogo';
import Customers from '../components/Customers';
import ErrorMessage from '../components/ErrorMessage';
import FAQ from '../components/FAQ';
import HomeBanner from '../components/HomeBanner';
import HomePageSections from '../components/HomePageSections';

import Loading from '../components/Loading';

import Ratings from '../components/Ratings';
import { fetchAllProductsAction } from '../redux/actions/productActions';
import HomeSlider from '../components/HomeSlider';
import HomePageDeliverText from '../components/HomePageDeliverText';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const [productSearchTerm, setproductSearchTerm] = useState('');
  useEffect(() => {
    dispatch(fetchAllProductsAction(productSearchTerm));
  }, [dispatch]);

  const productList = useSelector(state => state.productList);
  //These are the state that are possible to be available
  const { loading, products, error } = productList;

  return (
    <>
      <HomeSlider />
      <HomePageDeliverText />

      <div class='relative  pt-16  pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 '>
        <div class='relative max-w-7xl mx-auto'>
          <div class='text-center'>
            <h2 class='text-3xl animate-bounce tracking-tight font-extrabold text-gray-900 sm:text-4xl'>
              Latest Products
            </h2>
            <p class='mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              libero labore natus atque, ducimus sed.
            </p>
            {/* Search input */}
            <div className='text-center flex justify-center'>
              <input
                onChange={e => dispatch(fetchAllProductsAction(e.target.value))}
                type='text'
                class='py-3 bg-gray-100 px-3 text-center border  focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 sm:text-sm border-gray-500 rounded-md'
                placeholder='Search for product'
              />
            </div>
            {/* Logo categories */}
            {/* <CategoriesWithLogo /> */}
            {loading && <Loading />}
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </div>
          <div className='text-2xl text-center text-red-800 pt-4'>
            {products?.length === 0 ? (
              <a className='text-blue-800' href='mailto:e.tweneboah1@gmail.com'>
                No product. contact the store owner to make pre order
              </a>
            ) : (
              ''
            )}
          </div>
          <div class='mt-12   grid gap-3 lg:grid-cols-4 lg:max-w-none md:grid-cols-3 sm:grid-cols-2'>
            {/* Card 1 */}

            {products?.map(product => {
              console.log(product.image[0]);
              const dateNow = new Date();
              const productLasteDateCreated = new Date(product.isProductNew);
              return (
                <>
                  <div class=' element group border-indigo-500 hover:bg-white hover:shadow-lg hover:transform scale-150 flex flex-col rounded-lg  overflow-hidden '>
                    <div class=' flex-shrink-0'>
                      <Link to={`/product/${product._id}`}>
                        <img
                          class='h-48 w-full object-cover'
                          src={product.image[0].url}
                          alt=''
                        />
                      </Link>
                    </div>

                    {productLasteDateCreated > dateNow && (
                      <div class='absolute bg-red-600 py-1 px-3 text-white text-base'>
                        New
                      </div>
                    )}
                    <div class='flex-1 bg-white p-6 flex flex-col justify-between'>
                      <div class='flex-1'>
                        {product.isProductNew < Date.now() ? (
                          <p class='text-sm font-medium text-indigo-600'>
                            <a href='#' class='hover:underline'>
                              New
                            </a>
                          </p>
                        ) : (
                          ''
                        )}
                        <a href='#' class='block mt-2'>
                          <p class='text-xl font-semibold text-gray-900'>
                            {product.name}
                          </p>
                          <p class='mt-3 text-base text-gray-500'>
                            {product.description}
                          </p>

                          <Ratings
                            value={product.rating}
                            text={`${product.numReviews} Reviews`}
                          />
                        </a>
                      </div>
                      <div class='mt-6 flex items-center '>
                        <div class='flex-shrink-0'>
                          <a href='#'>
                            <span class='sr-only'>{product?.category}</span>
                            <img
                              class='h-10 w-10 rounded-full '
                              src={product.image[0]?.url}
                              alt=''
                            />
                          </a>
                        </div>
                        <div class='ml-3'>
                          <p class='text-sm font-medium text-gray-900'>
                            <a href='#' class='hover:underline'>
                              {product.category}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <Customers />
      <HomePageSections />
      <FAQ />
    </>
  );
};

export default HomeScreen;
