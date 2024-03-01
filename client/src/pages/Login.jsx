import React  from "react";
import Headers from "../Components/header";

import { BrowserRouter as Router } from "react-router-dom";
const Login = () => {


  return (
    <>
        <div className=  "  bg-gradient-to-r from-[#171137] via-[#001426] via-[#041329] to-[#171137] w-full min-h-screen  ">
            <Headers />
            <div className="  w-2/3 m-auto text-center text-white py-20 ">
      <h1 className="text-4xl font-bold  pb-5 mb-6 text-center underline  underline-offset-8 decoration-[#2B0B84]">LOGIN</h1>
      <form action="">
      <div>      <input
        type="email"
        placeholder="Email"
        className="w-1/2 p-2 rounded-md mb-4 bg-transparent border-2 border-[#2B0B84]"
      />
      </div>
<div>
      <input
        type="Password"
        placeholder="Password"
        className="w-1/2 p-2 rounded-md mb-4 bg-transparent border-2 border-[#2B0B84]"
      />
     </div>

    
      <button
        className="bg-[#352683] text-1xl rounded-3xl text-white px-8 py-2 rounded-md font-semibold"
      >
        Login
      </button>
      </form>
    </div>
            {/* <div className="text-center text-white py-20 px-5 w-300">
                <h1 className="font-bold text-3xl ">Create Account</h1>
              
                <form action="">
                    <div className="">
                        <label htmlFor="firstname">First Name</label>
                    <input type="text" name="firstname" id="firstname"  />
                    </div>
                  
                </form>
             
    </div> */}
        </div>
       
    </>
  );
};

export default Login;
