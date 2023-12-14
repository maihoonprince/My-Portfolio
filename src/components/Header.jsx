import React from 'react';
import { Mongodb, Nodejs, Profile, Reactjs, Redux } from "../assets";

const Header = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row px-8 md:px-10 gap-10 2xl:gap-20 py-20">
        <div className='flex flex-col mb-20 lg:mb-0'
        data-aos='fade-down'
        data-aos-offset='100'
        data-aos-delay='50'
        data-aos-duration='1000'
        data-aos-easing='ease-in-out'>
          
          <span className='text-lg font-bold text-orange-700'>
            FULL-STACK DEVELOPER
          </span>

          <div className='flex gap-4 items-center my-4'>
            <h1 className='text-gray-800 dark:text-neutral-100
            text-5xl 2xl:text-7xl font-bold text-center'>
              I'm a
            </h1>

            <div className='flex items-center justify-center text-white shadow-lg bg-blue-800 dark:bg-[#224cff10] dark:text-[#224cff] rounded-full'>
              <p className='text-3xl 2xl:text-5xl font-bold px-5 py-2 pb-2 text-center'>
                Developer
              </p>
            </div>
          </div>

          <h1 className='text-5xl 2xl:text-7xl font-extrabold text-black dark:text-neutral-100 tracking-wider'>
            PRince
          </h1>

          <p className='text-md text-black dark:text-gray-100 mt-5 2xl:mt-10'>
            Full-Stack Developer with ability to learn and collaborate in rapidly changing enviroments and compositions.
          </p>

          <div className='mt-10 flex gap-10'>
            <button className='bg-orange-700 text-lg text-white font-semibold rounded-md py-3 px-5'>
              Hire Me
            </button>

            <a href='#projects'>
              <button className='text-lg text-white font-semibold rounded-md py-3 px-5 bg-black dark:bg-[#224cff10]'>
                Projects
              </button>
            </a>
          </div>
        </div>

        <div className='w-full flex-1 flex justify-center'>
        <div className='w-[300px] h-[290px] md:w-[400px] md:h-[400px] 2xl:w-[500px] 2xl:h-[500px]  border rounded-full border-gray-600 dark:border-gray-200 relative  md:mt-20 lg:mt-0 flex items-center justify-center'>
          <img
            src={Profile}
            className='w-auto h-full absolute -top-5 md:-top-10'
            data-aos='fade-down'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='500'
            data-aos-easing='ease-in-out'
          />
          <div
            className='relative w-full h-full rounded-full'
            data-aos='fade-up'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
          >
            <img
              src={Reactjs}
              className='absolute top-7 md:top-20 left-3 md:-left-3 2xl:left-2 w-12 h-12 md:w-16 md:h-16'
            />
            <img
              src={Redux}
              className='absolute bottom-7 left-3 md:bottom-10 2xl:left-12 w-12 h-12 md:w-16 md:h-16'
            />
            <img
              src={Mongodb}
              className='absolute top-5 md:top-14 right-3 md:-right-3 2xl:right-2 w-12 h-12 md:w-16 md:h-16'
            />
            <img
              src={Nodejs}
              className='absolute bottom-7 right-3 md:bottom-10 2xl:right-12 w-12 h-12 md:w-16 md:h-16'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;