import React from "react";

const Courses = ({ percentage }) => {
  const radius = 30; // Adjust the radius size as needed
  const circumference = 2 * Math.PI * radius;

  const offset = circumference - (percentage / 100) * circumference;
  return (
    <div className="space-y-5 ">
      <p className="font-bold text-3xl mt-10 text-blue-400">Your Courses</p>

      
      <div className="float-right bg-gray-100 w-[500px] h-[250px]  p-4 rounded-xl">
        <h1 className="text-3xl font-semibold">
          <i class="bx bx-bulb text-gray-500"></i>Upcoming Test
        </h1>
        <div className="bg-white h-[150px] rounded-3xl p-4 m-3  font-thin relative">
          The Div Tag
          <div>
            <i class="bx bxs-coin-stack mr-2 mt-2"></i>
            Front End development.
          </div>
          <button className="absolute right-6 top-4">
            <i class="bx bxs-book-reader  text-lg "></i>
          </button>
          <button className="p-2 bg-blue-400 m-2 rounded-lg text-white">
            Resume
          </button>
       

      </div>
      </div>

      <div className=" bg-gray-100 rounded-2xl h-[300px] w-[500px] flex flex-row p-4">
        <div className="w-[500px] mt-3 h-26">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              className="circle-bg"
              cx="50"
              cy="50"
              r={radius}
              strokeWidth="8"
            />
            <circle
              className="circle-progress"
              cx="50"
              cy="50"
              r={radius}
              strokeWidth="8"
              strokeDasharray={`${circumference} ${circumference}`}
              style={{ strokeDashoffset: offset }}
            />
            <text
              x="50"
              y="50"
              className="circle-text"
              textAnchor="middle"
              dominantBaseline="central"
            >
              {percentage}%
            </text>
          </svg>
        </div>

        <div className="p-2">
          <h1 className="font-bold text-2xl">Front-End development</h1>
          <div className="flex gap-6 mt-3 text-2xl font-extralight mb-3">
            <a href="">21. Basics of HTML </a>
          </div>
          <a className="" href="">
            NOTES
          </a>
          <div className="flex gap-6 mt-3">
            <a
              className="border-2 rounded-2xl px-5 py-3 border-[#5FA5FA]"
              href=""
            >
              Skip
            </a>
            <a className="border rounded-2xl px-5 py-3 bg-[#5FA5FA]" href="">
              continue
            </a>
          </div>
        </div>
      </div>

      <div className=" bg-gray-100 rounded-2xl h-[300px] w-[500px] flex flex-row p-4">
        <div className="w-[500px] mt-3 h-26">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              className="circle-bg"
              cx="50"
              cy="50"
              r={radius}
              strokeWidth="8"
            />
            <circle
              className="circle-progress"
              cx="50"
              cy="50"
              r={radius}
              strokeWidth="8"
              strokeDasharray={`${circumference} ${circumference}`}
              style={{ strokeDashoffset: offset }}
            />
            <text
              x="50"
              y="50"
              className="circle-text"
              textAnchor="middle"
              dominantBaseline="central"
            >
              {percentage}%
            </text>
          </svg>
        </div>
        <div className="p-2">
          <h1 className="font-bold text-2xl">Python</h1>
          <div className="flex gap-6 mt-3 text-2xl mb-3 font-extralight">
            <a href="">8. Django tutorial </a>
          </div>

          <a className="" href="">
            NOTES
          </a>

          <div className="flex gap-6 mt-3">
            <a
              className="border-2 rounded-2xl px-5 py-3 border-[#5FA5FA]"
              href=""
            >
              Skip
            </a>
            <a className="border rounded-2xl px-5 py-3 bg-[#5FA5FA]" href="">
              continue
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
