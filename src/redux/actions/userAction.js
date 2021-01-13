import axios from 'axios';

import {
  USER_DETAILS_FAIL,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_REQUEST,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_TOKEN_SENT_REQUEST,
  PASSWORD_RESET_TOKEN_SENT_SUCCESS,
  PASSWORD_RESET_TOKEN_SENT_FAIL,
  PASSWORD_RESET_UPDATE_REQUEST,
  PASSWORD_RESET_UPDATE_SUCCESS,
  PASSWORD_RESET_UPDATE_FAIL,
  GET_MY_PROFILE_REQUEST,
  GET_MY_PROFILE_SUCCESS,
  GET_MY_PROFILE_FAIL,
} from '../actionTypes/userSctionTypes';
import baseURL from '../../utils/baseURL.js';
//=====================
//=====LOGIN
//=====================
export const loginAction = (email, password) => async dispatch => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      `${baseURL}/api/users/login`,
      { email, password },
      config
    );
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    //save to localstorage
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//=====================
//=====LOG OUT
//=====================

export const logoutAction = () => {
  return async dispatch => {
    localStorage.removeItem('userInfo');
    dispatch({
      type: USER_LOGOUT,
    });
  };
};

//=====================
//=====REGISTER
//=====================
export const registerAction = (name, email, password) => async dispatch => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      `${baseURL}/api/users/register`,
      { name, email, password },
      config
    );
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });
    //save to localstorage for login
    //localStorage.setItem('userInfo', JSON.stringify(data));

    //LOGIN THE USER IN AFTER REGISTRATION because when register we get the same data as login and save to localstorage
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
  //Send a link to the person email to verify
};

//=====================
//===== GET USER DETAILS
//=====================
//For this we need a token to access this because we can get the userInfo in the store which has a token in it

export const getUserDetailsAction = id => async (dispatch, getState) => {
  try {
    //destructure the login
    const {
      userLogin: { userInfo },
    } = getState();
    dispatch({
      type: USER_DETAILS_REQUEST,
    });
    //The way pass authorization we will pass it here as this
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`${baseURL}/api/users/${id}`, config);
    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//=====================
//===== UPDATE USER PROFILE
//=====================

export const updateUserProfileAction = (userId, userData) => async (
  dispatch,
  getState
) => {
  try {
    //destructure the login

    const {
      userLogin: { userInfo },
    } = getState();
    dispatch({
      type: USER_UPDATE_PROFILE_REQUEST,
    });
    //The way pass authorization we will pass it here as this
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(
      `${baseURL}/api/users/profile/${userId}`,
      userData,
      config
    );
    dispatch({
      type: USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//=============
//RESET PASSWORD
//===========

export const passwordResetTokenAction = email => {
  console.log(email);
  return async dispatch => {
    try {
      dispatch({
        type: PASSWORD_RESET_TOKEN_SENT_REQUEST,
      });

      const config = {
        'Content-Type': 'application/json',
      };

      const updatePassword = await axios.post(
        `${baseURL}/api/users/reset-password-request-token`,
        {
          email: email,
        },
        config
      );
      dispatch({
        type: PASSWORD_RESET_TOKEN_SENT_SUCCESS,
        payload: updatePassword,
      });
    } catch (error) {
      dispatch({
        type: PASSWORD_RESET_TOKEN_SENT_FAIL,
        payload: error,
      });
    }
  };
};

//=============
//RESET PASSWORD
//===========

export const updateRequestPasswordAction = (newPassword, passwordToken) => {
  return async dispatch => {
    try {
      console.log(newPassword, passwordToken);
      dispatch({
        type: PASSWORD_RESET_UPDATE_REQUEST,
      });

      const config = {
        'Content-Type': 'application/json',
      };

      const updatePassword = await axios.post(
        `${baseURL}/api/users/new-password-reset`,
        {
          password: newPassword,
          token: passwordToken,
        },
        config
      );
      dispatch({
        type: PASSWORD_RESET_UPDATE_SUCCESS,
        payload: updatePassword,
      });
    } catch (error) {
      dispatch({
        type: PASSWORD_RESET_UPDATE_FAIL,
        payload: error,
      });
    }
  };
};

//=====================
//===== FETCH ALL USERS
//=====================

//Only admin can see all users
export const fetchAllUsersAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`${baseURL}/api/users`, config);

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      // dispatch(logout());
    }
    dispatch({
      type: USER_LIST_FAIL,
      payload: message,
    });
  }
};

//Profile
export const getMyProfileAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_MY_PROFILE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`${baseURL}/api/users/profile`, config);

    dispatch({
      type: GET_MY_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      // dispatch(logout());
    }
    dispatch({
      type: GET_MY_PROFILE_FAIL,
      payload: message,
    });
  }
};
