import React from "react";
import { NavBar } from "../Components";

function AdminLogin() {
  return (
    <div>
      <div>
        <NavBar />
        <div className="flex justify-center max-h-[92vh]">
          <div className=" max-h-[300px] max-w-[500px] mt-10 ">
            <h2 className="text-center text-2xl text-blue-500">
              EHIZUA ADMIN
            </h2>

            <form>
              <input
                className="border border-black font-bold w-full mt-4 p-4 h-[60px]"
                type="text"
                placeholder="USERNAME"
              />
              <input
                className="border border-black font-bold w-full  mt-4 p-4 h-[60px]"
                type="password"
                placeholder="PASSWORD"
              />
              <button className="border bg-blue-900 w-full mt-5 p-4 text-white  ">
                Sign In 
              </button>
            </form>
            <div>
              <h1 className="mt-3 text-blue-400">
                <a href="#forgotpassword">Forgot password?</a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
