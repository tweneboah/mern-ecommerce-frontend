import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../redux/actions/userAction';
import logo from '../images/logo.jpeg';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutAction());
  };

  return (
    <>
      <div
        data-collapse='medium'
        data-animation='over-right'
        data-duration='400'
        data-doc-height='1'
        role='banner'
        class='navbarcontainer w-nav'>
        <div class='navbar_items_container w-container'>
          <Link to='/' class='logobranddiv w-nav-brand'>
            <img src={logo} loading='lazy' className='w-20 mt-2' alt='' />
          </Link>
          <nav role='navigation' class='nav-menu w-nav-menu'>
            <Link to='/' class='navlinkitem w-nav-link'>
              <div className='text-white'>Home</div>
            </Link>
            <Link to='/about' class='navlinkitem w-nav-link'>
              About
            </Link>
            <Link to='/team' class='navlinkitem w-nav-link'>
              Our Team
            </Link>
            <Link to='/contact' class='navlinkitem w-nav-link '>
              <div className='text-white'>Contact</div>
            </Link>
            <Link to='/products' class='navlinkitem w-nav-link '>
              <div className='text-white'>Products</div>
            </Link>

            <div data-hover='1' data-delay='0' class='w-dropdown'>
              <div class='w-dropdown-toggle'>
                <div class='dropdownicon w-icon-dropdown-toggle'></div>
                <div class='dropdownlink'>Categories</div>
              </div>
              <nav class='w-dropdown-list'>
                <Link
                  to='/gents'
                  class='dropdownlinkitem navlinkitem w-dropdown-link'>
                  <div className='text-white'>Gents</div>
                </Link>
                <Link
                  to='/auto-parts'
                  class='dropdownlinkitem navlinkitem w-dropdown-link'>
                  <div className='text-white'>Auto Parts</div>
                </Link>
                <Link
                  to='/fashions'
                  class='dropdownlinkitem navlinkitem w-dropdown-link'>
                  <div className='text-white'>Fashions</div>
                </Link>
                <Link
                  to='/hot-deals'
                  class='dropdownlinkitem navlinkitem w-dropdown-link'>
                  <div className='text-white'>Hot Deals</div>
                </Link>
                <Link
                  to='/phones-accessories'
                  class='dropdownlinkitem navlinkitem w-dropdown-link'>
                  <div className='text-white'>Phone Accessories</div>
                </Link>

                <Link
                  to='/laptops-accessories'
                  class='dropdownlinkitem navlinkitem w-dropdown-link'>
                  <div className='text-white'>Laptops Accessories</div>
                </Link>
                <Link
                  to='/home-appliances'
                  class='dropdownlinkitem navlinkitem w-dropdown-link'>
                  <div className='text-white'>Home Appliances</div>
                </Link>
              </nav>
            </div>
            {!userInfo ? (
              <>
                {' '}
                <Link to='/login' class='login_button w-button'>
                  <div className='text-white'>Login</div>
                </Link>
                <Link to='/register' class='register_button w-button'>
                  register
                </Link>
              </>
            ) : (
              <>
                <button
                  onClick={() => logoutHandler()}
                  class='register_button w-button'>
                  Logout
                </button>
              </>
            )}
            {userInfo && (
              <div data-hover='1' data-delay='0' class='w-dropdown'>
                <div class='w-dropdown-toggle'>
                  <div class='dropdownicon w-icon-dropdown-toggle'></div>
                  <span class='inline-block relative'>
                    {/* Dashboard avatar */}
                    <svg
                      className='h-8 w-8 rounded-full bg-gray-400'
                      fill='currentColor'
                      viewBox='0 0 24 24'>
                      <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                    </svg>
                    <span class='absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-green-400'></span>
                  </span>
                </div>
                <nav class='w-dropdown-list'>
                  <Link
                    to='/profile'
                    class='dropdownlinkitem navlinkitem w-dropdown-link'>
                    <div className='text-white'>My Orders</div>
                  </Link>

                  <Link
                    to={`/editprofile/${userInfo._id}`}
                    class='dropdownlinkitem navlinkitem w-dropdown-link'>
                    Update Profile
                  </Link>
                  {userInfo && userInfo.isAdmin && (
                    <>
                      <Link
                        to='/admin/allorders'
                        class='dropdownlinkitem navlinkitem w-dropdown-link'>
                        All Orders
                      </Link>
                      <Link
                        to={`/dashboard`}
                        class='dropdownlinkitem navlinkitem w-dropdown-link'>
                        Graphical View
                      </Link>
                      <Link
                        to='/admin/createproducts'
                        class='dropdownlinkitem navlinkitem w-dropdown-link'>
                        Add New Product
                      </Link>

                      <Link
                        to='/admin/fetchproducts'
                        class='dropdownlinkitem navlinkitem w-dropdown-link'>
                        All Products
                      </Link>
                      <Link
                        to='/admin/allpayments'
                        class='dropdownlinkitem navlinkitem w-dropdown-link'>
                        View All Payments
                      </Link>
                    </>
                  )}
                </nav>
              </div>
            )}
          </nav>

          <div class='w-nav-button'>
            <div class='hamburgericon w-icon-nav-menu'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
