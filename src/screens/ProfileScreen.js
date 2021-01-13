import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CurrencyFormat from 'react-currency-format';
import bg from '../images/bg.jpg';
import { getMyProfileAction } from '../redux/actions/userAction';
import { ErrorMessage } from 'formik';
import Loading from '../components/Loading';

const ProfileScreen = ({ location, history }) => {
  const dispatch = useDispatch();

  const myProfile = useSelector(state => state.myProfile);
  const { loading: profileLoading, profile, error: profileError } = myProfile;
  //check if user is login otherwise redirect
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(getMyProfileAction());
  }, [dispatch]);

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    } else {
      if (profile && !profile.name) {
        // dispatch(getUserDetailsAction('profile')); //Because we want to get the login user
        dispatch(getMyProfileAction());
      } else {
      }
    }
  }, [history, userInfo, dispatch]);

  //=========
  //Total spent
  const totalSpent =
    profile &&
    profile.orders?.reduce((acc, curr) => {
      return acc + curr.totalPrice;
    }, 0);

  return (
    <div className='h-full'>
      {/* Profile details container */}
      <div>{profileError && <ErrorMessage>{profileError}</ErrorMessage>}</div>

      {profileLoading ? (
        <h1 className='text-center mt-11 text-4xl font-semibold capitalize'>
          Loading
        </h1>
      ) : (
        <div>
          <div>
            <img class='h-32 w-full object-cover lg:h-48' src={bg} alt='' />
          </div>
          <div class='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div class='-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5'>
              <div class='flex'>
                {/* User Avatar */}

                <span class='inline-block h-24 w-24 rounded-full bg-gray-600 overflow-hidden'>
                  <svg
                    class='h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32'
                    class='h-full w-full text-gray-300'
                    fill='currentColor'
                    viewBox='0 0 24 24'>
                    <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                  </svg>
                </span>
              </div>
              <div class='mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1'>
                <div class='sm:hidden md:block mt-6 min-w-0 flex-1'>
                  <h1 class='text-2xl font-bold text-gray-900 truncate mt-6'>
                    {profile?.name}
                  </h1>

                  <div> Email: {profile?.email}</div>
                  <div>
                    {profile?.isVerified ? (
                      <div class='bg-green-500 text-gray-200 inline-block px-2 rounded'>
                        Verified
                      </div>
                    ) : (
                      <div class='bg-red-500 text-gray-200 inline-block px-2 rounded'>
                        Unverified
                      </div>
                    )}
                  </div>
                  <div> Date Join: {profile?.createdAt}</div>
                </div>
                <div class='mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4'>
                  <a
                    href='mailto:someone@yoursite.com'
                    type='button'
                    class='inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500'>
                    <svg
                      class='-ml-1 mr-2 h-5 w-5 text-gray-400'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'>
                      <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                      <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                    </svg>
                    <span>Email Store Owner</span>
                  </a>
                  <a
                    href='tel:2332439999'
                    type='button'
                    class='inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500'>
                    <svg
                      class='-ml-1 mr-2 h-5 w-5 text-gray-400'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'>
                      <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                    </svg>
                    <span>Call</span>
                    +233245633715
                  </a>
                </div>
              </div>
            </div>
          </div>

          <section class='py-8 px-4 '>
            {/* Statistics card */}
            <div class='flex flex-wrap -mx-4 -mb-4 md:mb-0'>
              <div class='w-full md:w-1/2 px-4 mb-4 md:mb-0 text-center '>
                <div class='bg-gray-100 overflow-hidden shadow rounded-lg'>
                  <div class='px-4 py-5 sm:p-6'>
                    <dt class='text-sm font-medium text-gray-500 truncate'>
                      Total Amount
                    </dt>
                    <dd class='mt-1 text-3xl font-semibold text-gray-900'>
                      <CurrencyFormat
                        value={totalSpent}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'GHS '}
                      />
                    </dd>
                  </div>
                </div>
              </div>
              <div class='w-full md:w-1/2 px-4 mb-4 md:mb-0 text-center'>
                <div class='bg-white overflow-hidden shadow rounded-lg'>
                  <div class='px-4 py-5 sm:p-6'>
                    <dt class='text-sm font-medium text-gray-500 truncate'>
                      Total Items Bought
                    </dt>
                    <dd class='mt-1 text-3xl font-semibold text-gray-900'>
                      {profile.orders?.length}
                    </dd>
                  </div>
                </div>
              </div>
            </div>
            {/* Table */}
            <h3 className='text-center text-3xl font-semibold underline capitalize mb-9 '>
              {' '}
              Order history
            </h3>
            <table class='w-full table-auto text-center bg-gray-700 text-white'>
              <thead>
                <tr>
                  <th class='border-t px-2 py-2' scope='col'>
                    Order Id
                  </th>

                  <th class='border-t px-2 py-2' scope='col'>
                    Date
                  </th>
                  <th class='text-center border-t px-2 py-2' scope='col'>
                    Amount
                  </th>
                  <th class='text-center border-t px-2 py-2' scope='col'>
                    Paid
                  </th>
                  <th class='text-center border-t px-2 py-2' scope='col'>
                    Delivered
                  </th>
                  <th class='text-left border-t px-2 py-2' scope='col'>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {profile.orders?.map(order => (
                  <tr>
                    <td class='border-t px-2 py-2'>{order._id}</td>
                    <td class='border-t px-2 py-2'>
                      {order.createdAt.substring(0, 10)}
                    </td>
                    <td class='border-t px-2 py-2'>{order.totalPrice}</td>
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
                      {order?.isDelivered ? (
                        <span class='inline-block text-sm py-1 px-3 rounded-full text-white bg-green-500'>
                          delivered
                        </span>
                      ) : (
                        <span class='inline-block text-sm py-1 px-3 rounded-full text-white bg-red-500'>
                          Not Delivered
                        </span>
                      )}
                    </td>

                    <td class='text-center border-t px-2 py-2'>
                      <Link to={`/order/${order?._id}`}>
                        <svg
                          className='h-5 w-5 cursor-pointer text-yellow-600'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'>
                          <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                          <path
                            fill-rule='evenodd'
                            d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                            clip-rule='evenodd'
                          />
                        </svg>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      )}
      {/* end of Profile details container */}
    </div>
  );
};

export default ProfileScreen;
