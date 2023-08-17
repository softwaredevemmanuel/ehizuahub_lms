import React, { useState } from 'react';
import Ehizua from "./assets/Ehizua-Hub-Logo-PNG-1536x211.png";
import { Link } from 'react-router-dom';

function NavBar() {

  return (
    <div className='flex justify-around items-center h-20 w-full px-24 bg-white-400 border-solid shadow-lg'>
      <div className='text-[30px]'><img className='w-[150px]' src={Ehizua} alt='image'/></div>
      <div class="space-x-6 hidden lg:block text-blue-500 font-extrabold uppercase">
        {/* <a href="/">Home</a> */}
        <a href="#Courses">Courses</a>
        <a href="#tutors">Tutors</a>
        {/* <a href="#about">About</a> */}
      </div>

      <div class="space-x-3 hidden lg:block ">
        <Link to="/student_login">
        <button  class="font-semibold border rounded-3xl p-2 border-black hover:bg-blue-950  hover:text-white">Student sign In</button>
        </Link>
        <Link
          to="/admin_login"
          class="font-semibold border rounded-3xl p-2 border-black hover:bg-blue-950  hover:text-white"
        >
          Admin Login
        </Link>
      </div>
    </div>
  )
}

export default NavBar


