import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetailsActon } from '../redux/actions/orderActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

const OrderScreen = ({ match, history }) => {
  const dispatch = useDispatch();

  //This component contains the summary of our order
  const cart = useSelector(state => state.cart);
  //calculate price

  const orderDetails = useSelector(state => state.orderDetails);
  const { order, loading, error } = orderDetails;

  // useEffect(() => {
  //   dispatch(getOrderDetailsActon(match.params.id));
  // }, [match]);

  useEffect(() => {
    if (!order || order._id !== match.params.id) {
      dispatch(getOrderDetailsActon(match.params.id));
    }
  }, [order, match]);

  //Send To Pay

  const sendToPay = () => {
    history.push('/pay', {
      orderId: order._id,
      userEmail: order.user.email,
      totalAmount: order.totalPrice.toString(),
    });
  };
  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger' />
  ) : (
    <div className='h-screen'>
      <p class='text-center mt-3 text-2xl font-semibold bg-red-900 text-gray-200'>
        Keep note of your Order ID {order._id}
      </p>
      <div class='flex mt-16 h-screen flex-wrap  md:mb-0'>
        <div class='w-full md:w-2/3 px-4 mb-4 md:mb-0'>
          {/* Shipping address details */}
          <div class='mb-8 '>
            <ul>
              <li class='mb-2 flex items-center'>
                <svg
                  class='inline-block w-6 h-6 mr-3 text-indigo-600'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                  />
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
                <span>
                  {cart?.shippingAddress.address}, {cart?.shippingAddress.city}
                </span>
              </li>
              <li class='mb-2 flex items-center'>
                <svg
                  class='inline-block w-6 h-6 mr-3 text-indigo-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'></path>
                </svg>
                {cart.shippingAddress?.phoneNumber}
              </li>
              <li class='mb-2 flex items-center'>
                <svg
                  class='inline-block w-6 h-6 mr-3 text-indigo-600'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path d='M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z' />
                  <path d='M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z' />
                </svg>
                Shipping Type: {cart.shippingAddress?.shippingType}
              </li>
              <li class='mb-2 flex items-center'>
                <svg
                  class='inline-block w-6 h-6 mr-3 text-indigo-600'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
                </svg>
                <span> Region: {cart.shippingAddress.region}</span>
              </li>
              <li class='mb-2 flex items-center'>
                <svg
                  class='inline-block w-6 h-6 mr-3 text-indigo-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'></path>
                </svg>
                <span> {cart.shippingAddress?.email}</span>
              </li>
            </ul>
            <p>
              {order.isDelivered ? (
                <Message variant='success'>
                  Delivered on {order.deliveredAt}
                </Message>
              ) : (
                <Message variant='danger'>Not Delivered</Message>
              )}
            </p>
            <p>
              {order.isPaid ? (
                <Message variant='success'>Paid on {order.paidAt}</Message>
              ) : (
                <Message variant='danger'>Not Paid</Message>
              )}
            </p>
          </div>
          {/* Table */}

          <div class='flex flex-col'>
            <div class='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
              <div class='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
                <div class='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                  <table class='min-w-full divide-y divide-gray-200'>
                    <thead class='bg-gray-50'>
                      <tr>
                        <th
                          scope='col'
                          class='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                          Name
                        </th>
                        <th
                          scope='col'
                          class='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                          Title
                        </th>
                      </tr>
                    </thead>
                    <tbody class='bg-white divide-y divide-gray-200'>
                      {order.orderItems.length === 0 ? (
                        <h1>Your Cart is empty</h1>
                      ) : (
                        <>
                          {order.orderItems?.map((item, index) => (
                            <tr>
                              <td class='px-6 py-3  whitespace-nowrap'>
                                <div class='flex items-center'>
                                  <div class='ml-4'>
                                    <div class='text-sm font-medium text-gray-900'>
                                      <Link to={`/product/${item.product}`}>
                                        {item.name}
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td class='px-6 py-3 whitespace-nowrap text-sm text-gray-500'>
                                <div class='text-sm text-gray-500'>
                                  {item.qty} x GHS {item.price} = GHS
                                  {item.qty * item.price}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='w-full md:w-1/3 px-4 mb-4 md:mb-0'>
          <div>
            <p>ORDER Summary</p>
          </div>
          {/* Second table */}

          <div class='flex flex-col'>
            <div class='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
              <div class='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
                <div class='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                  <table class='min-w-full divide-y divide-gray-200'>
                    <thead class='bg-gray-50'>
                      <tr>
                        <th
                          scope='col'
                          class='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'></th>
                        <th
                          scope='col'
                          class='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'></th>
                      </tr>
                    </thead>
                    <tbody class='bg-white divide-y divide-gray-200'>
                      <tr>
                        <td class='px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900'>
                          Items
                        </td>
                        <td class='px-6 py-2 whitespace-nowrap text-sm text-gray-500'>
                          GHS {order?.totalPrice}
                        </td>
                      </tr>
                      <tr>
                        <td class='px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900'>
                          Shipping
                        </td>
                        <td class='px-6 py-2 whitespace-nowrap text-sm text-gray-500'>
                          {order?.shippingAddress?.shippingType}
                        </td>
                      </tr>
                      <tr>
                        <td class='px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900'>
                          Tax
                        </td>
                        <td class='px-6 py-2 whitespace-nowrap text-sm text-gray-500'>
                          GHS 0.00
                        </td>
                      </tr>
                      <tr>
                        <td class='px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900'>
                          Total
                        </td>
                        <td class='px-6 py-2 whitespace-nowrap text-sm text-gray-500'>
                          GHS {order?.totalPrice}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* Errors */}

                  <div>
                    {error && <Message variant='danger'>{error}</Message>}
                  </div>
                  <div className='mt-4'>
                    {!order.isPaid ? (
                      <Button
                        onClick={sendToPay}
                        type='button'
                        className='btn-block'
                        disabled={order.cartItems === 0}>
                        Continue to Payment
                      </Button>
                    ) : (
                      <button
                        disabled
                        className='bg-red-900 text-white py-3 px-2 block w-full text-2xl cursor-not-allowed'>
                        Already Paid
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderScreen;
