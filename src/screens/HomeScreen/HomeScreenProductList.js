import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProductsAction } from '../../redux/actions/productActions';
import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import '../../styles/HomeScreenProductList.css';

const HomeScreenProductList = () => {
  const dispatch = useDispatch();

  const [productSearchTerm, setproductSearchTerm] = useState('');
  useEffect(() => {
    dispatch(fetchAllProductsAction(productSearchTerm));
  }, [dispatch]);

  const productList = useSelector(state => state.productList);
  //These are the state that are possible to be available
  const { loading, products, error } = productList;

  return (
    <div className='home_product_list_grid_section'>
      <div className='home_product_list_title_div w-container'>
        <h1 className='product_heading text-gray-600 font-semi-bold capitalize font-mono'>
          Latest Products
        </h1>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </div>
      <div className='w-layout-grid home_product_list_grid'>
        {loading ? (
          <Loading />
        ) : products?.length < 0 ? (
          <h1>No products</h1>
        ) : (
          products?.map(product => {
            const dateNow = new Date();
            const productLasteDateCreated = new Date(product.isProductNew);
            return (
              <div className='home_product_list_item_wrapper'>
                <Link to={`/product/${product._id}`}>
                  <img
                    src={product?.image[0].url}
                    alt=''
                    className='product_img'
                  />
                </Link>
                <h1 className='text-2xl font-bold text-gray-600'>
                  {product?.name}
                </h1>
                <p className='product_desc font-normal'>
                  {product?.description}
                </p>
                <h1 className='text-3xl font-semibold text-red-600'>
                  GHS {product?.price}
                </h1>
                {productLasteDateCreated > dateNow && (
                  <div className='new_product_tag'>New </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default HomeScreenProductList;
