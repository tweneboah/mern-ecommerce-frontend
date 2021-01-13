import React, { useState } from 'react';
import globlaImg from '../images/global2.png';

const HomeBanner = () => {
  const [openProductMenu, setOpenProductMenu] = useState(false);

  const openProductMenuHandler = () => {
    setOpenProductMenu(!openProductMenu);
  };
  return (
    <>
      <div class='relative bg-gray-700 overflow-hidden'>
        <div class='max-w-7xl mx-auto'>
          <div class='relative z-10 pb-8 bg-gray-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
            <svg
              class='hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-red-900 transform translate-x-1/2'
              fill='currentColor'
              viewBox='0 0 100 100'
              preserveAspectRatio='none'
              aria-hidden='true'>
              <polygon points='50,0 100,0 50,100 0,100' />
            </svg>

            <div class='relative pt-6 px-4 sm:px-6 lg:px-8'></div>

            <main class='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
              <div class='sm:text-center lg:text-left'>
                <h1 class='text-4xl tracking-tight font-extrabold text-gray-300 sm:text-5xl md:text-5xl'>
                  <span class='block xl:inline'>Put your store Online</span>
                </h1>
                <span class='block text-yellow-600 text-4xl xl:inline'>
                  Payment integration
                </span>
                <p class='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>

                <div class='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                  <div class='mt-3 sm:mt-0 sm:ml-3'>
                    <a
                      href='#'
                      class='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-200 bg-yellow-600 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10'>
                      Purchase Now
                    </a>
                  </div>
                  {/* Countdown */}

                  {/* <div class='mt-3 sm:mt-0 sm:ml-3'>
                    <CountdownCounter />
                  </div> */}
                </div>
              </div>
            </main>
          </div>
        </div>
        <div class='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
          <img
            class='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full'
            src='https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029_1280.jpg'
            alt=''
          />
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
