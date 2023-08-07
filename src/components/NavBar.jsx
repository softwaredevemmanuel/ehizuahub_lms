import React from "react";
import Ehizua from '../assets/Ehizua-Hub-Logo-PNG-1536x211.png';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (

    <nav class="container flex mx-10 items-center justify-between p-6  ">
      <div class="w-[200px] ">
        <img src={Ehizua} alt="" />
      </div>

      <div class="space-x-6 hidden lg:block">
        <a href="/">Home</a>
        <a href="#Courses">Courses</a>
        <a href="#tutors">Tutors</a>
        <a href="#about">About</a>
      </div>

      <div class="space-x-3 hidden lg:block">
        <Link to="/studentlogin">
        <button>Sign In</button>
        </Link>
        <Link
          to="/stafflogin"
          class="font-semibold border rounded-3xl p-2 border-black hover:bg-blue-950  hover:text-white"
        >
          Get started
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
