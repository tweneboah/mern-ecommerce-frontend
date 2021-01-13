import React from 'react';

const Customers = () => {
  return (
    <div>
      <div class='bg-white'>
        <div class='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
          <div class='lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center'>
            <div>
              <h2 class='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
                Be part of our successful customers
              </h2>
              <p class='mt-3 max-w-3xl text-lg text-gray-500'>
                Our customers voice is our priority. We supply all kinds of
                goods base on our customers request
              </p>
              <div class='mt-8 sm:flex'>dd</div>
            </div>
            <div class='mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2'>
              <div class='col-span-1 flex justify-center py-8 px-8 bg-gray-50'>
                <img
                  class='max-h-12'
                  src='https://tailwindui.com/img/logos/transistor-logo-gray-400.svg'
                  alt='Workcation'
                />
              </div>
              <div class='col-span-1 flex justify-center py-8 px-8 bg-gray-50'>
                <img
                  class='max-h-12'
                  src='https://tailwindui.com/img/logos/mirage-logo-gray-400.svg'
                  alt='Mirage'
                />
              </div>
              <div class='col-span-1 flex justify-center py-8 px-8 bg-gray-50'>
                <img
                  class='max-h-12'
                  src='https://tailwindui.com/img/logos/tuple-logo-gray-400.svg'
                  alt='Tuple'
                />
              </div>
              <div class='col-span-1 flex justify-center py-8 px-8 bg-gray-50'>
                <img
                  class='max-h-12'
                  src='https://tailwindui.com/img/logos/laravel-logo-gray-400.svg'
                  alt='Laravel'
                />
              </div>
              <div class='col-span-1 flex justify-center py-8 px-8 bg-gray-50'>
                <img
                  class='max-h-12'
                  src='https://tailwindui.com/img/logos/statickit-logo-gray-400.svg'
                  alt='StaticKit'
                />
              </div>
              <div class='col-span-1 flex justify-center py-8 px-8 bg-gray-50'>
                <img
                  class='max-h-12'
                  src='https://tailwindui.com/img/logos/statamic-logo-gray-400.svg'
                  alt='Statamic'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;