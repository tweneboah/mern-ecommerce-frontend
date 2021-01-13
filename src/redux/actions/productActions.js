import axios from 'axios';
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_SUCCESS,
} from '../actionTypes/productActionTypes';
import baseURL from '../../utils/baseURL.js';

export const fetchAllProductsAction = SearchTerm => {
  return async dispatch => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST });
      const { data } = await axios.get(
        `${baseURL}/api/products?name=${SearchTerm}`
      );

      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      //We have to to grab exactly the error that's coming from our route so we will look at our error response object and pass it as an error to our frontend

      //error.response this is a general error where we can find it but since we have our custom error we will check

      //on the frontend we will have access to our error as error.response.data.message so we will pass this to the frontend
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const filterByCategoryAction = category => {
  return async dispatch => {
    try {
      dispatch({
        type: PRODUCT_LIST_REQUEST,
      });
      dispatch({ type: PRODUCT_LIST_REQUEST });
      const { data } = await axios.get(`${baseURL}/api/products`);
      if (data) {
        const products = data.filter(product => product.category === category);
        dispatch({
          type: PRODUCT_LIST_SUCCESS,
          payload: products,
        });
      }
    } catch (error) {}
  };
};
export const productDetailsActions = id => {
  return async dispatch => {
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST });
      const { data } = await axios.get(`${baseURL}/api/products/${id}`);

      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      //We have to to grab exactly the error that's coming from our route so we will look at our error response object and pass it as an error to our frontend

      //error.response this is a general error where we can find it but since we have our custom error we will check

      //on the frontend we will have access to our error as error.response.data.message so we will pass this to the frontend
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

//Create Product
const createProductAction = productData => async (dispatch, getState) => {
  console.log(productData);
  try {
    dispatch({
      type: PRODUCT_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        'Access-Control-Allow-Origin': '*',
      },
    };

    const formProductData = new FormData();
    formProductData.append('name', productData.name);
    formProductData.append('price', productData.price);
    formProductData.append('brand', productData.brand);
    formProductData.append('category', productData.category);
    formProductData.append('countInStock', productData.countInStock);
    formProductData.append('numReviews', productData.numReviews);
    formProductData.append('description', productData.description);

    for (let i = 0; i < productData.image.length; i++) {
      formProductData.append('image', productData.image[i]);
    }

    const { data } = await axios.post(
      `${baseURL}/api/products`,
      formProductData,
      config
    );

    dispatch({
      type: PRODUCT_CREATE_SUCCESS,
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
      type: PRODUCT_CREATE_FAIL,
      payload: message,
    });
  }
};

//update Product
const updateProductAction = (id, productData) => async (dispatch, getState) => {
  console.log(productData);
  try {
    dispatch({
      type: PRODUCT_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `${baseURL}/api/products/update/${id}`,
      productData,
      config
    );

    dispatch({
      type: PRODUCT_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: PRODUCT_UPDATE_FAIL,
      payload: message,
    });
  }
};

//================
//==== DELETE PRODUCT
//================

const deleteProductAction = id => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(
      `${baseURL}/api/products/delete/${id}`,
      {},
      config
    );

    dispatch({
      type: PRODUCT_DELETE_SUCCESS,
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
      type: PRODUCT_DELETE_FAIL,
      payload: message,
    });
  }
};

export { createProductAction, updateProductAction, deleteProductAction };
