import React from "react";
import { Link } from "react-router-dom";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { PiStudent } from "react-icons/pi";

function TutorDashboard() {
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
              <Link to="/curriculum" className="flex justify-between items-center  ">
                <div>Create Curriculum</div>
                <BsFillJournalBookmarkFill />
              </Link>
              <Link to="/tutor_dashboard" className="flex justify-between items-center  border-blue-500 p-4 border-2 my-3">
                <div>Create Test Questions</div>
                <BsFillJournalBookmarkFill />
              </Link>
            </div>

            <div className="border w-[70%] h-[800px] p-6">
              <div className="flex items-center justify-between">
                <div className="border border-black px-3 py-2">
                  <select name="" id="">
                    <option value="">Select Course</option>
                    <option value="">HTML </option>
                    <option value="">CSS</option>
                    <option value="">JAVASCRIPT</option>
                  </select>
                </div>
                <div className="font-bold border-2 border-black px-3 py-3">
                  HTML 201:BEGINNERS GUIDE TO CODING
                </div>
              </div>
           {/* FORM SECTION FOR CREATING T3ST QUESTIONS */}
              <form className="space-y-4 ">
                
                <div className="font-bold border-2 border-black  py-3 my-10">
                  <input
                    type="search"
                    className="px-[350px]"
                    placeholder="Write a Question"
                  />
                </div>
                <div className="flex justify-between">
                    <div className="text-white">h</div>
                    <div className="border border-black px-3 py-4">Choose File</div>
                </div>
                <div className="flex justify-between">
                    <div className="text-white">h</div>
                    <div className="text-sm">Select Correct option</div>
                </div>


                <div className="flex items-center justify-between">
                  <div className="border-black border w-[400px] flex p-3">
                    <input type="text" placeholder="OPTIONS A" />
                  </div>
                  <input type="checkbox" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="border-black border w-[400px] flex p-3">
                    <input type="text" placeholder="OPTIONS B" />
                  </div>
                  <input type="checkbox" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="border-black border w-[400px] flex p-3">
                    <input type="text" placeholder="OPTIONS C" />
                  </div>
                  <input type="checkbox" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="border-black border w-[400px] flex p-3">
                    <input type="text" placeholder="OPTIONS D" />
                  </div>
                  <input type="checkbox" />
                </div>
              </form>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TutorDashboard;
