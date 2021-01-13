// STEP 1 - Include Dependencies
// Include react
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllProductsAction,
  filterByCategoryAction,
} from '../../redux/actions/productActions';

// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';

// Include the chart type
import Column2DChart from 'fusioncharts/fusioncharts.charts';

// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import Loading from '../Loading';
import ErrorMessage from '../ErrorMessage';
import { fetchAllOrdersAction } from '../../redux/actions/orderActions';

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2DChart, FusionTheme);

const PieChart = () => {
  //=============================
  //ALL PRODUCTS STATISTICS
  //=============================
  const [productSearchTerm, setproductSearchTerm] = useState('');
  //dispathch action
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProductsAction(productSearchTerm));
  }, [dispatch, fetchAllProductsAction]);

  //get products from store
  const productList = useSelector(state => state.productList);
  const { loading, error, products } = productList;

  //Total price for all products
  const totalPriceForAllProducts = products?.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);

  //==================================
  //ORDERS STATISTICS
  //==================================
  useEffect(() => {
    dispatch(fetchAllOrdersAction());
  }, [dispatch, fetchAllOrdersAction]);
  const allOrders = useSelector(state => state.allOrders);
  const { loading: orderLoading, orders, error: ordersError } = allOrders;

  const totalOrders = orders?.reduce((acc, curr) => {
    return acc + curr.totalPrice;
  }, 0);

  //======================
  //PRODUCTS CATEGORIES
  //======================
  const fashions = products?.map(product => {
    return {
      label: product.category,
      value: product.countInStock,
    };
  });

  console.log(fashions);
  //CHART DATA
  // STEP 2 - Chart Data
  const chartData = [
    {
      label: 'All Products',
      value: totalPriceForAllProducts && totalPriceForAllProducts,
    },
    {
      label: 'Total Amount Ordered',
      value: totalOrders && totalOrders,
    },
  ];
  //Chart configuration
  const chartConfigs = {
    type: 'pie2d', // The chart type
    width: '100%', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: 'Total Amount of all Products vs Total amount ordered',
        //Set the chart subcaption
        subCaption: 'Your transactions overviews',
        //Set the x-axis name
        xAxisName: 'Country',
        //Set the y-axis name
        yAxisName: 'Reserves (MMbbl)',
        numberSuffix: 'K',
        //Set the theme for your chart
        theme: 'fusion',
      },
      // Chart Data
      data: chartData,
    },
  };

  return (
    <div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {loading ? <Loading /> : <ReactFC {...chartConfigs} />}
    </div>
  );
};

export default PieChart;
