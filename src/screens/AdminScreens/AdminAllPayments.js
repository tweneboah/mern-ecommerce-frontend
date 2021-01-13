import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllPaymentsAction } from '../../redux/actions/paymentActions';
import { fetchAllProductsAction } from '../../redux/actions/productActions';
import { fetchAllUsersAction } from '../../redux/actions/userAction';

const AdminAllPayments = ({ history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPaymentsAction());
  }, [dispatch]);

  const allPayments = useSelector(state => state.allPayments);
  const { loading, error, payments } = allPayments;

  //Get a user if admin
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && !userInfo.isAdmin) {
      history.push('/profile');
    }
  }, [userInfo]);

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    }
  }, [userInfo]);
  //=====
  //FETCH ALL USERS
  //============
  useEffect(() => {
    dispatch(fetchAllUsersAction());
  }, [dispatch]);

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
  //========
  //GET ALL USERS
  //==========

  const userList = useSelector(state => state.userList);
  const { loading: usersLoading, users } = userList;

  //Calculate total orders

  const totalIncome = payments?.reduce((acc, curr) => {
    console.log(curr);
    return Number(curr.amountPaid) / 100 + acc;
  }, 0);

  return (
    <div className='min-h-screen'>
      <div>
        <dl class='mt-5  grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          <div class='bg-white overflow-hidden shadow rounded-lg'>
            <div class='px-4 py-5 sm:p-6'>
              <div class='flex items-center'>
                <div class='flex-shrink-0 bg-red-500 rounded-md p-3'>
                  <svg
                    class='h-6 w-6 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
                    />
                  </svg>
                </div>
                <div class='ml-5 w-0 flex-1'>
                  <dt class='text-sm font-medium text-gray-500 truncate'>
                    Total Customers
                  </dt>
                  <dd class='flex items-baseline'>
                    <div class='text-2xl font-semibold text-gray-900'>
                      {usersLoading ? <h1>Loading</h1> : users?.length}
                    </div>
                  </dd>
                </div>
              </div>
            </div>
          </div>

          <div class='bg-white overflow-hidden shadow rounded-lg'>
            <div class='px-4 py-5 sm:p-6'>
              <div class='flex items-center'>
                {/* Total income svg */}
                <div class='flex-shrink-0 bg-yellow-600 rounded-md p-3'>
                  <svg
                    class='h-6 w-6 text-white '
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path d='M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z' />
                    <path
                      fill-rule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </div>
                <div class='ml-5 w-auto '>
                  <dt class='text-sm font-medium text-gray-500 truncate'>
                    Total Income
                  </dt>
                  <dd class='flex items-baseline'>
                    <div class='text-2xl font-semibold text-gray-900'>
                      GHS {totalIncome}
                    </div>
                  </dd>
                </div>
              </div>
            </div>
          </div>

          <div class='bg-white overflow-hidden shadow rounded-lg'>
            <div class='px-4 py-5 sm:p-6'>
              <div class='flex items-center'>
                {/* Total products svg */}
                <div class='flex-shrink-0 bg-yellow-400 rounded-md p-3'>
                  <svg
                    class='h-6 w-6 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                    />
                  </svg>
                </div>
                <div class='ml-5 w-0 flex-1'>
                  <dt class='text-sm font-medium text-gray-500 truncate'>
                    Total Products
                  </dt>
                  <dd class='flex items-baseline'>
                    <div class='text-2xl font-semibold text-gray-900'>
                      {products?.length}
                    </div>
                  </dd>
                </div>
              </div>
            </div>
          </div>
        </dl>
      </div>
      {usersLoading ? (
        <h1 className='text-center text-3xl font-semibold capitalize pt-6'>
          Loading
        </h1>
      ) : (
        <div className='flex flex-col min-h-screen'>
          <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
              <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                <table className='min-w-full divide-y divide-gray-200'>
                  <thead className='bg-gray-100'>
                    <tr>
                      <th
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                        Paid by / payment ID
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                        Amount Paid
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                        Bank
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                        Paid Order
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                        Last 4 digit of Account
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-white divide-y divide-gray-200'>
                    {payments?.map(payment => (
                      <tr>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='flex items-center'>
                            <div className='flex-shrink-0 h-10 w-10'>
                              {/* User avatar */}
                              <span class='inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-100'>
                                <svg
                                  class='h-full w-full bg-gray-500 text-gray-300'
                                  fill='currentColor'
                                  viewBox='0 0 24 24'>
                                  <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                                </svg>
                              </span>
                            </div>
                            <div className='ml-4'>
                              <div className='text-sm font-medium text-gray-900'>
                                {payment.user}
                              </div>
                              <div className='text-sm text-gray-500'>
                                {payment._id}
                              </div>
                              <div className='text-sm text-gray-500'>
                                {userInfo?.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='text-sm text-gray-900'>
                            {payment.amountPaid / 100}
                          </div>
                        </td>

                        <div className='text-sm text-gray-500'>
                          {payment.bank}
                        </div>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                            {payment.order}
                          </span>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                          {payment.lastFourDigitOfYourAccount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminAllPayments;
