import React from "react";
import { projects } from "../data";

const Works = () => {
  const handleProjectClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className='w-full flex flex-col py-20 px-8 md:px-10 gap-10 lg:gap-20 lg:py-20'>
      <h4 className='text-3xl font-bold text-black dark:text-white mt-10 '>
        Projects
      </h4>

      <div className='flex flex-wrap gap-10 lg:gap-20 justify-center '>
        {projects.map((p, index) => (
          <div
            data-aos='fade-up'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            key={index}
            className='w-[350px] h-[350px] cursor-pointer shadow-xl hover:scale-110 ease-in-out duration-300 rounded-md '
          >
            <img
              src={p.img}
              alt={p.name}
              className='w-full h-[250px] object-cover rounded-md '
            />

            <div className='w-full h-[100px] bg-white dark:bg-[#04133e]'>
              <h4 className='text-2xl text-black dark:text-white font-semibold py-2 px-1 '>
                {p.title}
              </h4>
              <p className='text-sm text-orange-600 px-1 uppercase'>{p.cat}</p>

              <button
                className='text-sm text-blue-500 px-1 uppercase cursor-pointer'
                onClick={() => handleProjectClick(p.url)}
              >
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
