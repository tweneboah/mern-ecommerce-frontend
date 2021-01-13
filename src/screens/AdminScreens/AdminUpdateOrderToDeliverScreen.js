import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodeliverOrderAction } from '../../redux/actions/orderActions';

const AdminUpdateOrderToDeliverScreen = ({ match, history }) => {
  //Redirect if not admin
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (userInfo && !userInfo.isAdmin) history.pushState('/profile');
  });

  const dispatch = useDispatch();

  const updateOrderToPaid = () => {
    dispatch(updateTodeliverOrderAction(match.params.id));
    history.push('/admin/allorders');
  };

  return (
    <div className='h-screen flex flex-col justify-center items-center bg-gray-800 -ml-9'>
      <div className='text-lg text-gray-500 underline'>
        <span className='text-red-700 text-4xl'> NOTE: </span> Updating this
        order is irreversible so try to be sure before taking this action
      </div>
      <p className='text-gray-200 capitalize text-lg'>
        update this order id{' '}
        <span className='text-yellow-500'>{match.params.id}</span> to delivered
      </p>
      <div>
        <button
          className='bg-red-800 text-white text-xl py-2 px-3 rounded'
          onClick={updateOrderToPaid}>
          Update to deliver
        </button>
      </div>
    </div>
  );
};

export default AdminUpdateOrderToDeliverScreen;
