import React from 'react';
import shipping from '../images/shipping.jpg';
import { FaShippingFast } from 'react-icons/fa';
import { GiMoneyStack } from 'react-icons/gi';
import { FcCustomerSupport } from 'react-icons/fc';
// import { FaShippingFast } from 'react-icons/fa';
const HomePageSections = () => {
  return (
    <div className='bg-gray-900 -ml-9  overflow-hidden'>
      <div className='relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        <svg
          className='absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4'
          width='404'
          height='784'
          fill='none'
          viewBox='0 0 404 784'
          aria-hidden='true'>
          <defs>
            <pattern
              id='8b1b5f72-e944-4457-af67-0c6d15a99f38'
              x='0'
              y='0'
              width='20'
              height='20'
              patternUnits='userSpaceOnUse'>
              <rect
                x='0'
                y='0'
                width='4'
                height='4'
                className='text-gray-200'
                fill='currentColor'
              />
            </pattern>
          </defs>
          <rect
            width='404'
            height='784'
            fill='url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)'
          />
        </svg>

        <div className='relative lg:grid lg:grid-cols-3 lg:gap-x-8'>
          <div className='lg:col-span-1'>
            <h2 className='text-2xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              A better way to Shop.
            </h2>
            <img className='h-3/4 w-full' src={shipping} alt='shipping' />
          </div>
          <dl className='mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2'>
            <div>
              <div className='flex items-center justify-center h-16 w-16 rounded-md bg-yellow-500 text-white'>
                {/* Logo */}
                <FaShippingFast className='text-5xl' />
              </div>
              <div className='mt-5'>
                <dt className='text-lg leading-6 font-medium text-gray-900'>
                  Competitive rates
                </dt>
                <dd className='mt-2 text-base text-gray-500'>
                  Consequuntur omnis dicta cumque, inventore atque ab dolores
                  aspernatur tempora ab doloremque.
                </dd>
              </div>
            </div>

            <div>
              <div className='flex items-center justify-center h-16 w-16 rounded-md bg-yellow-500 text-white'>
                {/* Logo */}
                <GiMoneyStack className='text-5xl' />
              </div>
              <div className='mt-5'>
                <dt className='text-lg leading-6 font-medium text-gray-900'>
                  No hidden fees
                </dt>
                <dd className='mt-2 text-base text-gray-500'>
                  Corporis quisquam nostrum nulla veniam recusandae temporibus
                  aperiam officia incidunt at distinctio ratione.
                </dd>
              </div>
            </div>

            <div>
              <div className='flex items-center justify-center h-16 w-16 rounded-md bg-gray-400 text-white'>
                {/* Logo */}
                <FcCustomerSupport className='text-5xl' />
              </div>
              <div className='mt-5'>
                <dt className='text-lg leading-6 font-medium text-gray-900'>
                  Instant transfers
                </dt>
                <dd className='mt-2 text-base text-gray-500'>
                  Omnis, illo delectus? Libero, possimus nulla nemo tenetur
                  adipisci repellat dolore eligendi velit doloribus mollitia.
                </dd>
              </div>
            </div>

            <div>
              <div className='flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
              </div>
              <div className='mt-5'>
                <dt className='text-lg leading-6 font-medium text-gray-900'>
                  Reminder emails
                </dt>
                <dd className='mt-2 text-base text-gray-500'>
                  Veniam necessitatibus reiciendis fugit explicabo dolorem nihil
                  et omnis assumenda odit? Quisquam unde accusantium.
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default HomePageSections;
