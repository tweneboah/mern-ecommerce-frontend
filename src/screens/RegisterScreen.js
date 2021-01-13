import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';

import { registerAction } from '../redux/actions/userAction';
import ErrorMessage from '../components/ErrorMessage';

const RegisterScreen = ({ location, history }) => {
  const dispatch = useDispatch();

  const userRegister = useSelector(state => state.userRegister);

  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  console.log(loading, error, userInfo);
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={values =>
          dispatch(registerAction(values.name, values.email, values.password))
        }>
        {props => {
          return (
            <div className='min-h-1/2 bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
              <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                {loading && <Loader />}
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <h2 className='mt-6 text-center text-xl font-extrabold text-gray-900'>
                  Create new Account
                </h2>
                <svg
                  className='mx-auto h-12 w-auto text-blue-500'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
                  />
                </svg>
                {/* Alert */}
                {userInfo && (
                  <div class='bg-yellow-50 border-l-4 border-yellow-400 p-4'>
                    <div class='flex'>
                      <div class='flex-shrink-0'>
                        <svg
                          class='h-5 w-5 text-yellow-400'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'>
                          <path
                            fill-rule='evenodd'
                            d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z'
                            clip-rule='evenodd'
                          />
                        </svg>
                      </div>
                      <div class='ml-3'>
                        <p class='text-sm text-yellow-700'>
                          Check your email to verify your email
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* End of alert */}
              </div>

              <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                  <form className='space-y-6' onSubmit={props.handleSubmit}>
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium text-gray-700'>
                        Name
                      </label>
                      <div className='mt-1'>
                        <input
                          value={props.values.name}
                          onChange={props.handleChange('name')}
                          id='name'
                          name='name'
                          type='text'
                          autocomplete='Enter your name'
                          required
                          className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium text-gray-700'>
                        Email address
                      </label>
                      <div className='mt-1'>
                        <input
                          value={props.values.email}
                          onChange={props.handleChange('email')}
                          id='email'
                          name='email'
                          type='email'
                          autocomplete='email'
                          required
                          className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor='password'
                        className='block text-sm font-medium text-gray-700'>
                        Password
                      </label>
                      <div className='mt-1'>
                        <input
                          value={props.values.password}
                          onChange={props.handleChange('password')}
                          id='password'
                          name='password'
                          type='password'
                          autocomplete='current-password'
                          required
                          className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                      </div>
                    </div>

                    <div className='flex items-center justify-between'>
                      <div className='text-sm'>
                        <Link
                          className='font-medium text-indigo-600 hover:text-indigo-500'
                          to={
                            redirect ? `/login?redirect=${redirect}` : '/login'
                          }>
                          Already have an Account ?
                        </Link>
                      </div>
                    </div>

                    <div>
                      <button
                        type='submit'
                        className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                        Register
                      </button>
                    </div>
                  </form>

                  <div className='mt-6'>
                    <div className='relative'>
                      <div className='absolute inset-0 flex items-center'>
                        <div className='w-full border-t border-gray-300'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Formik>
    </>
  );
};

export default RegisterScreen;
