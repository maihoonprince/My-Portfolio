import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <hr className='hidden dark:block' />

      <div className='w-full flex flex-col md:flex-row py-20 px-8 md:px-10 gap-10 lg:gap-20 justify-between '>
        <p className='text-lg text-white font-semibold '>
        Modinagar, Ghaziabad, UP
        </p>

        <div className='flex flex-col md:flex-row text-md gap-5 md:gap-20 text-white '>
          <a href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
        </div>

        <div className='flex flex-col gap-5 text-md text-white '>
          <p>maihoonprinx@gmail.com</p>
          <p>+91 6207 215 942</p>
        </div>
      </div>

      <div className='flex flex-col gap-10 items-center justify-center pb-20 '>
        <p className='text-white font-semibold tracking-wider'>Social Media</p>

        <div className='flex gap-10 text-white text-2xl mb-10 '>
          <BsYoutube className='hover:scale-125' />
          <BsFacebook className='hover:scale-125' />
          <BsInstagram className='hover:scale-125' />
          <BsLinkedin className='hover:scale-110' />
          <AiFillTwitterCircle className='hover:scale-125' />
        </div>

        <p className='text-gray-400 text-md tracking-wider'>@2023 PRince</p>
      </div>
    </footer>
  );
};

export default Footer;