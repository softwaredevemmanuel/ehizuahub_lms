import React from 'react'
import Ehizua from '../assets/Ehizua-Hub-Logo-PNG-1536x211.png';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <nav class="container flex mx-10 items-center justify-between p-6  ">
    <div class="w-[200px] "><img src={Ehizua}/></div>

    
    <div class="space-x-6 hidden lg:block">
        <a href="#home">Home</a>
        <a href="#Courses">Courses</a>
        <a href="#tutors">Tutors</a>
        <a href="#about">About</a>
    </div>

    <div class="space-x-3 hidden lg:block">
        <Link to="/studentlogin">
        <button>Sign In</button>
        </Link>
        <Link  to="/stafflogin" class="font-semibold border rounded-3xl p-2 border-black hover:bg-blue-950  hover:text-white">Get started</Link>
    </div>
   
  </nav>


   <section class="flex w-[100%] h-[540px] ">
    <div class="bg-[#e2e0d9] w-[100%] relative p-6">
       <h1 class="mx-10 font-bold text-[20px] absolute top-16 md:text-[35px] ">Get world class <br/> courses from world class mentors</h1>
       <p class="mx-10  absolute top-[200px]">Get quality courses with us with the best price. Now you can get the best course from us. we have top mentors in Hub</p>
       <div class="mx-10 absolute top-[280px]">

        <Link class=" p-3 bg-blue-900 text-white" to="/stafflogin">Get started</Link>
         
           <button>
               <i class='bx bx-play  ml-4 border-1 rounded-full p-3 border-black'></i>  How it works?
           </button>
       </div>

    </div>
  
   </section>

   <section class="m-10 p-6 ">
       <h1 class="mx-auto flex font-bold text-3xl justify-center">Our popular courses</h1>
       <div class="flex flex-row space-x-6 mt-6 justify-center">
        <a class="font-bold" href="">All categories</a>
        <a href="">Front End</a>
        <a href="">Back-End</a>
        <a href="">Full stack</a>
        <a href="">Ui/Ux Design</a>
        <a href="">Business</a>
        <a href="">Desktop publishing</a>
        <a href="">Cinematography</a>
       </div>
   </section>

    </div>
  )
}

export default Home
