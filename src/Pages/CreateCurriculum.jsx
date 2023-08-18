import React from 'react'
import { Link } from 'react-router-dom'
import { FiUserPlus } from "react-icons/fi";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { PiStudent } from "react-icons/pi";

const CreateCurriculum = () => {
  return (
    <div>
       <nav className="flex justify-between px-16 items-center h-20 w-full bg-white-400 border-solid shadow-lg">
        <div className="border border-black px-3 py-2">Home</div>
        <div className="space-x-6">
          <Link className="border border-black px-3 py-2">
            Welcome Emmanuel
          </Link>
          <Link to="/admin_login" className="border border-black px-3 py-2">LogOut</Link>
        </div>
      </nav>

      <section className="h-[100vh] w-full  my-6 px-16  border  border-solid shadow-lg py-3">
        <div className="text-xl">
          <div className="flex m-3 space-x-6 ">
            <div className=" border w-[30%] h-[800px] p-6  text-blue-500 justify-around">
              <Link className="flex justify-between items-center">
                <div>All students</div>
                <PiStudent />
              </Link>
              <Link to="/curriculum" className="flex justify-between items-center  border-2 border-blue-500 p-4 my-3">
                <div>Create Curriculum</div>
                <BsFillJournalBookmarkFill />
              </Link>
              <Link to="/tutor_dashboard" className="flex justify-between items-center">
                <div>Create Test Questions</div>
                <FiUserPlus />
              </Link>
            </div>

            <div className="border w-[70%] h-[800px] p-6">
                <div className="flex gap-3">
                    {/* SELECT COURSES */}
                <div className="border border-black px-3 py-2 w-[200px]">
                  <select name="" id="">
                    <option value="">Select Course</option>
                    <option value="">HTML </option>
                    <option value="">CSS</option>
                    <option value="">JAVASCRIPT</option>
                  </select>
                </div>
                {/* SELECT TOPIC */}
                <div className="border border-black px-3 py-2 w-[200px]">
                  <select name="" id="">
                    <option value="">Select Topic</option>
                    <option value="">HTML </option>
                    <option value="">CSS</option>
                    <option value="">JAVASCRIPT</option>
                  </select>
                </div>
                </div>
              
                <div className='border border-black h-[500px] my-4 box-border'>
                    <textarea name="" id="" cols="88" rows="16" placeholder='Write content' className='p-6'/>
                </div>
                
                <button className='flex float-right border border-black px-3 py-3'>Submit</button>
                </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default CreateCurriculum
