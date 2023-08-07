import React from 'react'
import NavBar from './NavBar';


const StaffLogin = () => {
  return (
      <div>
       <NavBar/>
       <div className="flex justify-center max-h-[92vh]">
        <div className=" max-h-[300px] max-w-[500px] mt-10 ">
          <h2 className="text-center text-2xl text-blue-500">
            EHIZUA ADMIN LOG IN
          </h2>
       
          <form>
            <input
              className="border border-black  font-bold w-full mt-4 p-4 h-[60px]"
              type="text"
              placeholder="Username"
            />
            <input
              className="border border-black  font-bold w-full  mt-4 p-4 h-[60px]"
              type="password"
              placeholder="Password"
            />
            <button className="border bg-blue-900 w-full mt-5 p-4 text-white  ">
              Sign up
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
  )
}

export default StaffLogin;



// <div className='flex justify-center items-center min-h-[92vh] '>
// <div className='p-[40px] border-[8px] border-[#223243] shadow1 flex justify-center items-center flex-col gap-[25px] rounded-3xl'>
//   <h2 className="text-white">Log in to your Ehizua Learn</h2>
//   <div className='flex flex-col  cursor-pointer text-center'>
//     <a className='sinput hover:text-[#00dfc4]'>
//      <i class="fa-brands fa-facebook mr-3"></i>
//       Continue with Google
//     </a>
//     <a className='mt-4 sinput hover:text-[#00dfc4]'>
//     <i class="fa-brands fa-twitter mr-3" style={{color: "#396ca2"}}></i>
//       Continue with social
//     </a>
//   </div>


//   <form action="" >
//   <div className='relative hover:text-[#00dfc4] '>
//       <input className=' w-[300px] sinput' type="email" required="required" placeholder='username~email'/>
//       <i className="fa-solid fa-user-graduate absolute left-[16px] top-[15px] text-[#00dfc4] border-r-teal-200 border-r-2 w-[25px] "></i>
      
//   </div>

//   <div className='relative mt-4 hover:text-[#00dfc4]'>
//       <input className=' w-[300px] sinput ' type="password" required="required" placeholder='password'/>
//       <i className="fa-regular fa-unlock-keyhole absolute left-[16px] top-[15px] text-[#00dfc4] border-r-teal-200 border-r-2 w-[25px]"></i>
      
//   </div>
//     <input type="submit" value="Log In" className='sinput mt-4 hover:text-[#00dfc4]'/>
  
//   </form>
  
//   <p className='text-white'>Forgot password ? <a href='/' className='text-[#00dfc4]'>
//     Recover</a></p>




// </div>
// </div>