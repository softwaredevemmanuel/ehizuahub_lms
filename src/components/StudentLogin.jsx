import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const StudentLogin = () => {
  return (
    <>
      <NavBar />
      <div className="flex justify-center max-h-[92vh]">
        <div className=" max-h-[300px] max-w-[500px] mt-10 ">
          <h2 className="text-center text-2xl">
            Log in to your Ehizua online course account
          </h2>
          {/* <button className="border border-black p-3 mt-4 w-full hover:border-blue-950  hover:border-2">
            <i className="bx bxl-google text-[35px] align-middle"></i> Continue
            with google
          </button>
          <button className="border border-black p-3 mt-4 w-full px-3 hover:border-blue-950 hover:border-2">
            <i
              className="bx bxl-facebook-circle text-[35px] align-middle px-3"
              style={{ color: "#0a45b4" }}
            ></i>
            Continue with Facebook
          </button> */}
          <form>
            <input
              className="border border-black  font-bold w-full mt-4 p-4 h-[60px]"
              type="email"
              placeholder="Email"
            />
            <input
              className="border border-black  font-bold w-full  mt-4 p-4 h-[60px]"
              type="password"
              placeholder="Password"
            />
            <button className="border bg-blue-900 w-full mt-5 p-4 text-white  ">
              Sign In
            </button>
          </form>
          <div>
            <h1 className="mt-3 text-blue-400">
              <a href="#forgotpassword">Forgot password?</a>
            </h1>
            <h1 className="mt-3">
              New to Ehizua Learn?
              <Link class="mt-3 text-blue-400" to="/stafflogin">
                Sign up
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentLogin;
