import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { updateUserProfileAction } from '../redux/actions/userAction';
import SuccessMessage from '../components/SuccessMessage';
import ErrorMessage from '../components/ErrorMessage';

const EditProfileScreen = ({ history, match }) => {
  const dispatch = useDispatch();

  //======
  //Get the user login details
  //=======
  const userLogin = useSelector(state => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  //======
  //GET THE UPDATED USER
  //=======

  const userUpdatedProfile = useSelector(state => state.userUpdateProfile);
  console.log(userUpdatedProfile);

  const {
    loading: userProfileLoading,
    userInfo: updatedUserInfo,
    success,
  } = userUpdatedProfile;

  useEffect(() => {
    if (success && updatedUserInfo) {
      setTimeout(() => {
        history.push('/profile');
      }, 5000);
    }
  });

  return (
    <div className='h-screen'>
      <Formik
        initialValues={{
          name: userInfo.name,
          email: userInfo.email,
          password: userInfo.password,
        }}
        onSubmit={values =>
          dispatch(updateUserProfileAction(match.params.id, values))
        }>
        {props => {
          return (
            <div className='min-h-1/2 bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
              <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                {error && <ErrorMessage>{error}</ErrorMessage>}

                <h2 className='mt-6 text-center text-xl font-extrabold text-gray-900'>
                  {userProfileLoading && (
                    <h1 className='capitalize font-semibold text-3xl mt-4 text-green-800'>
                      Loading please wait
                    </h1>
                  )}
                  {userInfo && (
                    <p className='capitalize'>
                      {userInfo.name} do you want to update your details?
                    </p>
                  )}
                </h2>
                <p className='text-center'>
                  {' '}
                  {success && (
                    <>
                      <SuccessMessage>
                        Successfully Updated. Loing back to see your update
                      </SuccessMessage>
                      <p className='text-2xl'>
                        You will be redirected shortly....😊
                      </p>
                    </>
                  )}
                </p>
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
                <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                  {userInfo && (
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
                            className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                          />
                        </div>
                      </div>

                      <div>
                        <button
                          type='submit'
                          className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                          Update Profile
                        </button>
                      </div>
                    </form>
                  )}
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
    </div>
  );
};

export default EditProfileScreen;
