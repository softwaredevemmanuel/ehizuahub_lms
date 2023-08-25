import React from "react";
import { Link } from "react-router-dom";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { PiStudent } from "react-icons/pi";

function TutorDashboard() {
  return (
    <div>
      <nav className="flex justify-between px-16 items-center h-20 bg-blue-400 shadow-lg">
        <div className="border border-black px-3 py-2 text-white">Home</div>
        <div className="space-x-6">
          <Link className="border border-black px-3 py-2 text-white">
            Welcome Emmanuel
          </Link>
          <Link
            to="/admin_login"
            className="border border-black px-3 py-2 text-white"
          >
            LogOut
          </Link>
        </div>
      </nav>

      <section className="h-[calc(100vh-80px)] w-full my-6 px-16 border shadow-lg py-3">
        <div className="text-xl">
          <div className="flex m-3 space-x-6">
            <div className="border w-[30%] h-[800px] p-6 bg-gray-100 text-blue-500">
              <Link className="flex justify-between items-center">
                <div className="font-bold">All students</div>
                <PiStudent className="text-2xl" />
              </Link>
              <Link
                to="/curriculum"
                className="flex justify-between items-center"
              >
                <div className="font-bold">Create Curriculum</div>
                <BsFillJournalBookmarkFill className="text-2xl" />
              </Link>
              <Link
                to="/tutor_dashboard"
                className="flex justify-between items-center border-blue-500 p-4 border-2 my-3"
              >
                <div className="font-bold">Create Test Questions</div>
                <BsFillJournalBookmarkFill className="text-2xl" />
              </Link>
            </div>

            <div className="border w-[70%] h-[800px] p-6 bg-white">
              <div className="flex items-center justify-between mb-6">
                <div className="border border-black px-3 py-2">
                  <select className="bg-white border rounded px-2 py-1">
                    <option value="">Select Course</option>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="javascript">JavaScript</option>
                  </select>
                </div>
                <div className="font-bold">HTML 201: BEGINNERS GUIDE TO CODING</div>
              </div>

              <form className="space-y-4">
                <div className="font-bold py-3 my-10">
                  <input
                    type="search"
                    className="w-full border rounded px-3 py-2"
                    placeholder="Write a Question"
                  />
                </div>
                <div className="flex justify-between">
                  <div className="text-white">h</div>
                  <div className="border px-3 py-2 rounded bg-gray-100 text-gray-700 cursor-pointer">
                    Choose File
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-white">h</div>
                  <div className="text-sm">Select Correct option</div>
                </div>

                {["A", "B", "C", "D"].map((option) => (
                  <div key={option} className="flex items-center justify-between">
                    <div className="w-[70%] border rounded px-3 py-2 flex">
                      <input
                        type="text"
                        className="w-full outline-none"
                        placeholder={`OPTION ${option}`}
                      />
                    </div>
                    <input type="checkbox" />
                  </div>
                ))}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TutorDashboard;
