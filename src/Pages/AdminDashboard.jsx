import React from "react";
import { Link } from "react-router-dom";
import {FiUserPlus} from "react-icons/fi"
import {BsFillJournalBookmarkFill} from "react-icons/bs";
import {PiStudent} from "react-icons/pi"

function AdminDashboard() {
  return (
    <div>
      <nav className="flex justify-between px-16 items-center h-20 w-full bg-white-400 border-solid shadow-lg">
        <div className="border border-black px-3 py-2">Home</div>
        <div className="space-x-6">
          <Link className="border border-black px-3 py-2">
            Welcome Admin
          </Link>
          <Link className="border border-black px-3 py-2">LogOut</Link>
        </div>
      </nav>
    
    
      <section className='h-[100vh] w-full  my-6 px-16  border  border-solid shadow-lg py-3'>
         <div className="text-xl">
           <div className="flex m-3 space-x-6 ">


            <div className=" border w-[30%] h-[800px] p-6  text-blue-500 justify-around">
               <Link className='flex justify-between items-center'>
              <div>All students</div>
              <PiStudent/>
               </Link>
               <Link className='flex justify-between items-center'>
              <div>View Curriculum</div>
               <BsFillJournalBookmarkFill/>
               </Link>
               <Link className='flex justify-between items-center'>
              <div>Create Student Profile</div>
               <FiUserPlus/>
               </Link>
              
            </div>



            <div className="border w-[70%] h-[800px] p-6">
         
              <div className='flex justify-around font-extrabold my-4'>
                Create Students Profile
              </div>
             <form className=" flex flex-col justify-center items-center text-[20px]">
              <div >
                 First name:
                 <input type="text" className="border w-[500px] ml-4  px-2 py-4 my-2" placeholder="First name" />
              </div>
              <div >
              Last name:
                 <input type="text" className="border w-[500px]  ml-4 px-2 py-4 my-2" placeholder="Last name" />
              </div>
              <div >
                Email:
                 <input type="email" className="border w-[500px] ml-14  px-2 py-4 my-2 items-center" placeholder="Email"/>
              </div>
              <div className="flex items-center" >
                 Students Phone <br/> Number:
                 <input type="text" className="border w-[450px] ml-4  px-2 py-4 my-2" placeholder="Students Phone Number"/>
              </div>
              <div className="flex items-center" >
              Guardians/Parents <br/> Phone Number:  
                 <input type="text" className="border w-[400px]  ml-8 px-2 py-4 my-2" placeholder="Guardians/Parents Phone Number"/>
              </div>
              <div >
              Home Address:
                 <input type="text" className="border w-[450px]  ml-8 px-2 py-4 my-2" placeholder="Home Address"/>
              </div>

                <div className="my-8 ml-[-420px]">
                <div className="border border-black px-3 py-2">
                  <select name="" id="">
                    <option value="">Select Course</option>
                    <option value="">Front End </option>
                    <option value="">Back End</option>
                    <option value="">Cinematography</option>
                  </select>
                </div>


                </div>
                <button className="border border-black px-6 py-3 hover:bg-black hover:text-white">Submit</button>
             </form>
           
            </div>

           </div>
         </div>
      </section>










    

    </div>
  );
}

export default AdminDashboard;
