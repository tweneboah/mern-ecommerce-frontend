import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { fetchAllProductsAction } from '../../redux/actions/productActions';

const AdminFetchProducts = ({ history }) => {
  //Redirect is not admin
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;
  if (userInfo && !userInfo.isAdmin) {
    history.push('/');
  }

  const productList = useSelector(state => state.productList);

  const { loading, products, error } = productList;
  //Fetch all produts
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProductsAction(''));
  }, [dispatch]);
  return (
    <>
      <div className='flex flex-col min-h-screen mt-16'>
        <h1 className='text-center text-3xl capitalize font-extrabold'>
          All Products - ({products?.length})
        </h1>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-100'>
                  <tr>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Product
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Amount
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Category
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Brand
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {products?.map(product => (
                    <tr>
                      <td className='px-2 py-1 whitespace-nowrap'>
                        <div className='flex items-center'>
                          <div className='flex-shrink-0 h-10 w-10'>
                            <img
                              className='h-10 w-10'
                              src={product.image[0].url}
                              alt=''
                            />
                          </div>
                          <div className='ml-4'>
                            <div className='text-sm font-medium text-gray-900'>
                              {product.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-900'>
                          {product.price}
                        </div>
                      </td>

                      <td className='px-6 py-4 whitespace-nowrap'>
                        <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                          {product.category}
                        </span>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                        {product.brand}
                      </td>

                      <td className='px-2 py-2 whitespace-nowrap'>
                        <Link to={`/admin/edit/product/${product._id}`}>
                          <i className='fas fa-edit '></i>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminFetchProducts;
