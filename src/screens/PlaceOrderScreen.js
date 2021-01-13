import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import CheckoutSteps from '../components/CheckoutSteps';
import { createOrderAction } from '../redux/actions/orderActions';
import { Formik } from 'formik';
// import { ORDER_CREATE_RESET } from '../constants/orderConstants';
// import { USER_DETAILS_RESET } from '../constants/userConstants';

const PlaceOrderScreen = ({ history }) => {
  const dispatch = useDispatch();

  //This component contains the summary of our order
  const cart = useSelector(state => state.cart);
  //calculate price

  //We want to add additonal property to the cart, in mongoose we will call virtual property because it does not persist in our database
  cart.itemsPrice = cart.cartItems.reduce((acc, item) => {
    return acc + item.price * item.qty;
  }, 0);

  //add shipping to cart
  cart.shippingPrice = cart.itemsPrice > 100 ? 0 : 100;

  //Add Tax
  cart.taxPrice = 0.0;

  //Total cost. Add all shipping and tax
  cart.totalPrice = Number(cart.itemsPrice);
  console.log(cart.cartItems.length === 0);
  const placeOrderHandler = () => {
    //All these values is coming from our cart
    dispatch(
      createOrderAction({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };

  const orderCreate = useSelector(state => state.orderCreate);
  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
      // dispatch({ type: USER_DETAILS_RESET });
      // dispatch({ type: ORDER_CREATE_RESET });
    }
    // eslint-disable-next-line
  }, [history, success]);

  return (
    <>
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
                      {cart.cartItems.length === 0 ? (
                        <h1>Your Cart is empty</h1>
                      ) : (
                        <>
                          {cart.cartItems.map((item, index) => (
                            <tr>
                              <td class='px-6 py-3  whitespace-nowrap'>
                                <div class='flex items-center'>
                                  <div class='flex-shrink-0 h-10 w-10'>
                                    <img
                                      class='h-10 w-10 rounded-full'
                                      src={item.image[0].url}
                                      alt=''
                                    />
                                  </div>
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
                          GHS {cart?.itemsPrice}
                        </td>
                      </tr>
                      <tr>
                        <td class='px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900'>
                          Shipping
                        </td>
                        <td class='px-6 py-2 whitespace-nowrap text-sm text-gray-500'>
                          {cart?.shippingAddress?.shippingType}
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
                          GHS {cart?.totalPrice}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* Errors */}

                  <div>
                    {error && <Message variant='danger'>{error}</Message>}
                  </div>
                  <div className='mt-4'>
                    {cart.cartItems.length === 0 ? (
                      <button
                        disabled
                        className='rounded cursor-not-allowed py-2 inline-block w-full bg-blue-400 '>
                        Your cart is empty
                      </button>
                    ) : (
                      <button
                        onClick={placeOrderHandler}
                        className='rounded text-gray-200 py-2 inline-block w-full bg-yellow-900 '>
                        placeorder
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrderScreen;
