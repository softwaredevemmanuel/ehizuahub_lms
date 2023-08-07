import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="bg-blue-400  rounded-3xl">
      <section className="flex flex-col  p-3 h-[800px]">
        {/* <div className="border flex w-[230px] p-2 rounded-2xl items-center">
          <i className="bx bx-search-alt text-2xl"></i>
          <input className="" type="text" placeholder="search" />
        </div> */}
         <div className="text-[50px] text-white ">
      <Link to="/">
      <i class='bx bx-home-alt' ></i>
        </Link>    
      </div>
        <div className="text-2xl font-thin text-white my-auto">
          <div className="mt-3 text-blue-600">
            <a href="/">
              {" "}
              <i className="bx bxs-home"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href="">
              {" "}
              <i class='bx bx-cart-alt' ></i>
            </a>
          </div>
          <div className="mt-3">
            <a href="">
              {" "}
              <i className="bx bxs-bar-chart-alt-2"></i>
            </a>
          </div>

          <div className="mt-3">
            <a href="">
              {" "}
              <i className="bx bxs-book"></i>
            </a>
          </div>

          <div className="mt-3">
            <a href="">
              <i className="bx bxs-cog"></i>
            </a>
          </div>

          <div className="mt-3">
            <a href="">
            <i class='bx bx-chat' ></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SideBar;
