import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { passwordResetTokenAction } from '../../redux/actions/userAction';

//Send token to email
const PasswordResetSendToken = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          email: '',
        }}
        onSubmit={values => dispatch(passwordResetTokenAction(values.email))}>
        {props => {
          return (
            <div className='h-screen bg-gray-500 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
              <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                <h2 className='mt-6 text-center text-xl font-extrabold text-gray-900'>
                  Enter your email
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
              </div>

              <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 ml-3 mr-3'>
                  <form className='space-y-6' onSubmit={props.handleSubmit}>
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
                      <button
                        type='submit'
                        className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                        Reset Password
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

export default PasswordResetSendToken;
