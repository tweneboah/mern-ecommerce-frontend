import React, { useEffect } from 'react';

const PaymentSuccess = ({ history }) => {
  useEffect(() => {
    setTimeout(() => {
      history.push('/profile');
    }, 5000);
  });
  return (
    <div className='bg-gray-700 flex justify-center items-center h-screen'>
      <div>
        <h1 className='text-green-500 font-semibold text-center text-3xl capitalize'>
          Thank you
        </h1>
        <h1 className='text-green-500 font-semibold text-3xl capitalize'>
          Payment was Successfull
        </h1>
        <p className='text-gray-100 mt-3 text-lg'>
          You will be redirected soon to your profile page.... 😊
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
