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

const BarChart = () => {
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

  //======================
  //PRODUCTS CATEGORIES
  //======================
  const chartData = products?.map(product => {
    return {
      label: product.category,
      value: product.countInStock,
    };
  });

  //Chart configuration
  const chartConfigs = {
    type: 'bar2d', // The chart type
    width: '100%', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: 'Products category and their quantities',
        subCaption: 'Last month',
        yAxisName: 'Product Instock',
        numberPrefix: '',
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

export default BarChart;
