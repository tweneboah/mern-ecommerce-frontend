import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllProductsAction } from '../../redux/actions/productActions';
import ErrorMessage from '../ErrorMessage';

import Loading from '../Loading';

const GentsCategories = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProductsAction(''));
  }, [dispatch]);

  const productList = useSelector(state => state.productList);

  const { loading, products, error } = productList;

  const gents =
    products && products.filter(product => product.category === 'Gents');

  console.log(productList);
  return (
    <>
      <div class='relative min-h-screen bg-gray-200 pt-16 -ml-9 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
        <div class='relative max-w-7xl mx-auto'>
          <div class='text-center'>
            <h2 class='text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl'>
              Gents products - ({gents?.length})
            </h2>
            <p class='mt-3 pt-3 pb-6 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4'>
              Our latest Gents collection
            </p>
            {/* Search input */}
            <div className='text-center flex justify-center'>
              <input
                onChange={e => dispatch(fetchAllProductsAction(e.target.value))}
                type='text'
                class='py-3 w-full bg-gray-100   text-center border shadow-xl focus:ring-indigo-500 focus:border-yellow-500 block  sm:text-sm ml-7 border-gray-500 rounded-md'
                placeholder='Search for product'
              />
            </div>
            <div className='text-center flex justify-center'>
              {loading && <Loading />}
            </div>

            <div className='text-center flex justify-center'>
              {error && <ErrorMessage>{error}</ErrorMessage>}
            </div>
          </div>
          <div className='text-2xl text-center text-red-800 pt-4'>
            {gents?.length === 0 && !loading ? (
              <a className='text-blue-800' href='mailto:e.tweneboah1@gmail.com'>
                No product. contact the store owner to make pre order
              </a>
            ) : (
              ''
            )}
          </div>
          <div class='mt-12   grid gap-3 lg:grid-cols-4 lg:max-w-none md:grid-cols-3 sm:grid-cols-2'>
            {/* Card 1 */}

            {gents?.map(product => {
              console.log(product.image[0]);
              const dateNow = new Date();
              const productLasteDateCreated = new Date(product.isProductNew);
              return (
                <>
                  <div class='flex flex-col rounded-lg shadow-lg overflow-hidden'>
                    <div class='flex-shrink-0'>
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

                          {/* <Ratings
                            value={product.rating}
                            text={`${product.numReviews} Reviews`}
                          /> */}
                        </a>
                      </div>
                      <div class='mt-6 flex items-center'>
                        <div class='flex-shrink-0'>
                          <a href='#'>
                            <span class='sr-only'>{product?.category}</span>
                            <img
                              class='h-10 w-10 rounded-full'
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
    </>
  );
};

export default GentsCategories;
