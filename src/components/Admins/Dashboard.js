import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import BarChart from '../Charts/BarChart';
import PieChart from '../Charts/PieChart';

const Dashboard = ({ history }) => {
  //Checking if the login user is admin otherwise redirect
  //We have so many ways of doing this but since the user in local storage is fast we will use that
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && !userInfo.isAdmin) history.pushState('/profile');
  });
  return (
    <div className='min-h-screen'>
      <h1 className='text-center text-3xl capitalize m-4'>Store overviews</h1>
      <div class='flex flex-wrap -mx-4 -mb-4 md:mb-0 '>
        <div class='w-full md:w-1/2 px-4 mb-4 md:mb-0'>
          <PieChart />
        </div>

        <div class='w-full md:w-1/2 px-4 mb-4 md:mb-0'>
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
