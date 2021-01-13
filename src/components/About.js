import React from 'react';
import aboutSVG from '../images/about.svg';
const About = () => {
  return (
    <section class='py-12 px-4'>
      <div class='flex flex-wrap items-center -mx-2'>
        <div class='lg:w-1/2 px-2'>
          <img src={aboutSVG} alt='' />
        </div>
        <div class='lg:w-1/2 px-2 lg:pl-16 mt-10 lg:mt-0'>
          <span class='text-sm font-semibold'>Blispath</span>
          <p class='text-5xl mt-4 mb-6 leading-tight font-semibold font-heading'>
            About us
          </p>
          <div class='flex flex-wrap -mx-4'>
            <div class='lg:w-1/2 px-4 mb-4 lg:mb-0'>
              <svg
                class='text-indigo-600 w-10 h-10'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'></path>
              </svg>
              <p class='mt-2 text-gray-400 leading-relaxed'>
                Procurement of Goods and Services from China
              </p>
            </div>
            <div class='lg:w-1/2 px-4 mb-4 lg:mb-0'>
              <svg
                class='text-indigo-600 w-10 h-10'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
                <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'></path>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'></path>
              </svg>
              <p class='mt-2 text-gray-400 leading-relaxed'>
                Shipmnet of goods from China to your destination
              </p>
            </div>
            <div class='lg:w-1/2 px-4 mb-4 lg:mb-0'>
              <svg
                class='text-indigo-600 w-10 h-10'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
                <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'></path>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'></path>
              </svg>
              <p class='mt-2 text-gray-400 leading-relaxed'>
                Getting your goods to you through Air, fast and reliable
              </p>
            </div>

            <div class='lg:w-1/2 px-4 mb-4 lg:mb-0'>
              <svg
                class='text-indigo-600 w-10 h-10'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
                <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'></path>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'></path>
              </svg>
              <p class='mt-2 text-gray-400 leading-relaxed'>
                Payment of goods and services on your behalf
              </p>
            </div>
            <div class='lg:w-1/2 px-4 mb-4 lg:mb-0'>
              <svg
                class='text-indigo-600 w-10 h-10'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
                <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'></path>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'></path>
              </svg>
              <p class='mt-2 text-gray-400 leading-relaxed'>Custom clearance</p>
            </div>

            <div class='lg:w-1/2 px-4 mb-4 lg:mb-0'>
              <svg
                class='text-indigo-600 w-10 h-10'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
                <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'></path>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'></path>
              </svg>
              <p class='mt-2 text-gray-400 leading-relaxed'>
                Shipmnet of goods from China to your destination
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
