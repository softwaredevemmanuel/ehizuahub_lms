import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Courses from "./Courses";
import Ehizua from "../assets/Ehizua-Hub-Logo-PNG-1536x211.png";
const StudentDashboard = () => {
  const completionPercentage = 55;
  return (
    <div className="bg-blue-400 ">
      {/* <NavBar /> */}
     
      <section className="flex flex-row ">
        <div className="ml-2 mr-8">
          <SideBar />
        </div>
        <div className="justify-between bg-white p-20 w-[90%] mt-4 border rounded-2xl">
          <h1 className=" mb-2 text-[40px]">Welcome, <span className="text-blue-400">Student</span></h1>
          <p>
            Nice to have you back, what an exciting day!
            <p>
            Get ready and continue
            your lesson today
             </p> 
          </p>
         
            <div className="flex flex-col">
        
              <Courses percentage={completionPercentage} />
            </div>
         
        </div>
    <div className="align-middle">
        <i class='bx bx-trophy  border rounded-full  absolute right-8 top-20 p-3 mr-6'></i>
        <i class='bx bxs-chevron-down  absolute right-0 top-20 p-4 px-3 mr-6'></i>
    </div>
      </section>
    </div>
  );
};

export default StudentDashboard;
