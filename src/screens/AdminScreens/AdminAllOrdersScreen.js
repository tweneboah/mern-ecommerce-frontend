import React from 'react';
import { useEffect } from 'react';
import Moment from 'react-moment';
import CurrencyFormat from 'react-currency-format';
import { MdUpdate } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllOrdersAction } from '../../redux/actions/orderActions';
import { getUserDetailsAction } from '../../redux/actions/userAction';
import { Link } from 'react-router-dom';
import { fetchAllProductsAction } from '../../redux/actions/productActions';

const AdminAllOrdersScreen = ({ history }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);

  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push('/profile');
    } else {
      dispatch(getUserDetailsAction('profile'));
      if (userInfo && !userInfo.isAdmin) {
        history.push('/');
      }
    }
  }, [userInfo, userLogin]);

  useEffect(() => {
    dispatch(fetchAllOrdersAction());
  }, [dispatch]);

  //Get all orders
  const allOrders = useSelector(state => state.allOrders);
  const { loading, orders, error } = allOrders;

  //Get all products
  //We need to pass an empty string because it's base on our query
  useEffect(() => {
    dispatch(fetchAllProductsAction(''));
  }, []);

  const productList = useSelector(state => state.productList);
  const {
    loading: productLoading,
    products,
    error: productError,
  } = productList;
  //=======
  //TOTAL ORDERS
  //======

  const totalSpent = orders?.reduce((acc, curr) => {
    return curr.totalPrice + acc;
  }, 0);

  return (
    <div className='min-h-screen bg-gray-600 text-gray-100'>
      {loading ? (
        <h1 className='text-center pt-44 text-gray-200'>loading.....</h1>
      ) : (
        <section class=' px-4 min-h-screen'>
          <h2 class='text-3xl mb-20 pt-5 text-center font-heading font-semibold text-gray-100'>
            All Orders history
          </h2>

          <div class='flex justify-around flex-wrap -mx-4 mb-8'>
            <div class='w-full lg:w-1/4 px-4 mb-6 lg:mb-0'>
              <div class='h-full'>
                <div class='text-center p-4 mb-2 bg-blue-700 text-white rounded'>
                  <h3 class='text-3xl leading-tight text-yellow-200 font-heading font-semibold'>
                    <CurrencyFormat
                      value={totalSpent}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'GHS'}
                    />
                  </h3>
                  <span class='leading-none text-lg'>Total Orders Amount</span>
                </div>
              </div>
            </div>

            <div class='w-full lg:w-1/4 px-4 mb-6 lg:mb-0'>
              <div class='h-full'>
                <div class='text-center p-4 mb-2 bg-yellow-500 text-white rounded'>
                  <h3 class='text-3xl leading-tight   font-semibold'>
                    {orders?.length}
                  </h3>
                  <span class='leading-none text-lg'>Total Purchased</span>
                </div>
              </div>
            </div>
            <div class='w-full lg:w-1/4 px-4 mb-6 lg:mb-0'>
              <div class='h-full'>
                <div class='text-center p-4 mb-2 bg-red-400 text-white rounded'>
                  <h3 class='text-3xl leading-tight  font-heading font-semibold'>
                    {products?.length}
                  </h3>
                  <span class='leading-none'>Total Products</span>
                </div>
              </div>
            </div>
          </div>
          <table class='w-full table-auto text-center'>
            <thead>
              <tr>
                <th class='border-t px-2 py-2' scope='col'>
                  Order Id
                </th>
                <th class='border-t px-2 py-2' scope='col'>
                  Customer
                </th>
                <th class='border-t px-2 py-2' scope='col'>
                  Date
                </th>
                <th class='text-center border-t px-2 py-2' scope='col'>
                  Amount
                </th>
                <th class='text-center border-t px-2 py-2' scope='col'>
                  Paid At
                </th>
                <th class='text-center border-t px-2 py-2' scope='col'>
                  Paid
                </th>
                <th class='text-left border-t px-2 py-2' scope='col'>
                  Delivered
                </th>
                <th class='text-left border-t px-2 py-2' scope='col'>
                  Update to delivered
                </th>
              </tr>
            </thead>
            <tbody>
              {orders?.map(order => {
                console.log(order);
                return (
                  <tr>
                    <td class='border-t px-2 py-2'>
                      <Link to={`/order/${order?._id}`}>{order._id}</Link>
                    </td>

                    <td class='border-t px-2 py-2'>
                      <Link to={`/order/${order?._id}`}>{userInfo?.name}</Link>
                    </td>

                    <td class='border-t px-2 py-2'>
                      <Moment fromNow>{order?.createdAt}</Moment>
                    </td>
                    <td class='border-t px-2 py-2'>{order?.totalPrice}</td>

                    <td class='border-t px-2 py-2'>{order?.createdAt}</td>
                    <td class='text-center border-t px-2 py-2'>
                      {order.isPaid ? (
                        // order.paidAt.substring(0, 10)
                        <span class='inline-block text-sm py-1 px-3 rounded-full text-white bg-green-500'>
                          Paid
                        </span>
                      ) : (
                        <span class='inline-block text-sm py-1 px-3 rounded-full text-white bg-red-500'>
                          Unpaid
                        </span>
                      )}
                    </td>
                    <td class='text-center border-t px-2 py-2'>
                      {!order?.isDelivered ? (
                        <span class='inline-block text-sm py-1 px-3 rounded-full text-white bg-red-500'>
                          Not delivered
                        </span>
                      ) : (
                        <span class='inline-block text-sm py-1 px-3 rounded-full text-white bg-green-500'>
                          Delivered
                        </span>
                      )}
                    </td>

                    <td class='text-center border-t px-2 py-2'>
                      <MdUpdate
                        className='text-3xl text-yellow-200 cursor-pointer ml-8'
                        onClick={() =>
                          history.push(`/admin/updatetoorder/${order?._id}`)
                        }
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      )}
    </div>
  );
};

export default AdminAllOrdersScreen;
