import React from "react";
import { myProfile } from "../assets";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineAlternateEmail, MdWifiCalling2 } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row px-8 md:px-10 gap-10 lg:gap-20 lg:py-20 '>
      <div className='w-full md:h-[290px] lg:w-1/3 flex flex-col items-center border border-gray-500 dark:bg-transparent rounded-md'>
        <img
          src={myProfile}
          className=' border rounded-full  p-1 ease-in-out duration-300 hover:scale-125 mt-4'
        />
      </div>

      <div className='w-full flex flex-col'>
        <p className='text-3xl font-bold text-black dark:text-white  '>
          About Me
        </p>
        <p className='text-lg text-black dark:text-gray-400 leading-10'>
          Hello there! 👋
          <br />
          I'm Prince, a passionate and creative web developer. With a diverse skill set and a love for building innovative and user-friendly web applications, I strive to bring ideas to life through code.
          <br />
          <br />
          <span className="font-bold">Front-End</span> : I specialize in crafting responsive and dynamic websites using a stack that includes HTML, CSS, JavaScript, and popular frameworks like React.js.
          <br />
          <br />
          <span className="font-bold">Back-End</span> : I am proficient in Node.js and Express.js, and I have experience working with MongoDB for database management.
          <br />
          <br />
          <span className="font-bold">Design</span> : My development skills are complemented by a keen eye for design. I enjoy creating visually appealing and intuitive user interfaces, often incorporating tools like Tailwind CSS, Bootstrap, and GSAP.
        </p>

        <div
          className='mt-5 2xl:mt-10 flex flex-wrap gap-5'
          data-aos='fade-up'
          data-aos-offset='200'
          data-aos-delay='50'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
        >
          <p className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
            <FaUserAlt size={14} /> Prince
          </p>

          <p className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
            <MdOutlineAlternateEmail size={14} /> maihoonprinx@gmail.com
          </p>

          <a
            href=''
            className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'
          >
            <BsWhatsapp size={14} /> +91 6207 215 942
          </a>

        </div>
      </div>
    </div>
  );
};

export default About;