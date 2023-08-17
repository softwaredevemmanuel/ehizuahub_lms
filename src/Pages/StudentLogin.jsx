import React from 'react';
import { NavBar } from '../Components';
import { Link } from 'react-router-dom';


function StudentLogin() {
  return (
    <div>
       <NavBar />
      <div className="flex justify-center max-h-[92vh]">
        <div className=" max-h-[300px] max-w-[500px] mt-10 ">
          <h2 className="text-center text-2xl text-blue-500 rounded-3xl ">
            Log in to your Ehizua online course account
          </h2>
         
          <form>
            <input
              className="border border-black   font-bold w-full mt-4 p-4 h-[60px]"
              type="email"
              placeholder="EMAIL"
            />
            <input
              className="border border-black  font-bold w-full  mt-4 p-4 h-[60px]"
              type="password"
              placeholder="LOG IN ID"
            />
            <button className="border  bg-blue-900 w-full mt-5 p-4 text-white  ">
              SIGN IN
            </button>
          </form>
          <div>
            <h1 className="mt-3 text-blue-400">
              <a href="#forgotpassword">Forgot password?</a>
            </h1>
            <h1 className="mt-3">
              New to Ehizua Learn?
              <Link class="mt-3 mx-2 text-blue-400" to="/admin_login">
                Admin
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentLogin
