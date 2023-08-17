import React from 'react';
import { Link } from 'react-router-dom';
import {FaBars} from "react-icons/fa"

function StudentDashboard() {
  return (
    <div>
     <nav className='flex justify-between px-16 items-center h-20 w-full bg-white-400 border-solid shadow-lg'>
      <div className='border border-black px-3 py-2'>My Courses</div>
      <div className='space-x-6'>
        
        <Link className='border border-black px-3 py-2'>
        Tutor Details
        </Link>
        <Link className='border border-black px-3 py-2'>
        Download Certificate
        </Link>
        <Link className='border border-black px-3 py-2'>
          LogOut
        </Link>
      </div>
     </nav>
      <section className='h-[100vh] w-full  my-6 px-16  border  border-solid shadow-lg py-3'>
         <div className="text-xl">
           <p className='font-bold'>
           Front End
            </p>
           <div className="flex m-3 space-x-6">


            <div className=" border w-[30%] h-[800px] p-6 space-y-3">
              <div className='flex justify-around font-bold uppercase'>
              Course Curriculum
              </div>
               <div className='flex justify-between items-center'>
              <div><span className='font-bold'>HTML 101:</span> Beginers guide to coding  </div>
               
               <FaBars/>
               </div>
               <div><span className='font-bold'>HTML 201:</span> Intermediate   </div>
               <div><span className='font-bold'>CSS 101:</span> Intro to CSS   </div>
               <div><span className='font-bold'>CSS 201:</span> Advanced CSS   </div>
            </div>



            <div className="flex border w-[70%] h-[800px] p-6">
         
              <div className='flex'>
                 WHAT IS HTML?
              </div>
            
           
            </div>








           </div>
         </div>
      </section>
  
    </div>
  )
}

export default StudentDashboard


