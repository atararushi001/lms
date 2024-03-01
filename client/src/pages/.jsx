import React from "react";
import Headers from "../Components/header";
import { FaHome } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
// import { GrAchievement } from "react-icons/gr";
import { FaMedal } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi";

const MylearningDashboard = () => {
  return (
    <div className=" w-full min-h-screen bg-[#031328]">
      <Headers />
      <div className="text-white py-20 flex px-12 w-full justify-center  content-center">
        <div className="w-1/5 border-4 border-[#4f1fd3] m-2 p-2 rounded-lg p-8 pt-16">
          <ul className="space-y-6 ">
            <li key="da" className="flex items-center text-[#352683] text-2xl">
              <FaHome />

              <p className="ml-2">Dashboard</p>
            </li>
            <li key="as" className="flex items-center text-[#ffff] text-2xl">
              <FaBookOpen />

              <p className="ml-2">Courses</p>
            </li>
          </ul>
        </div>
        <div className="w-3/5 border-4 rounded-lg border-[#4f1fd3] m-2 p-5">
          <div className="grid grid-cols-2   mt-40 mb-20 space-x-2 ">
            <div className=" border-2 w-full border-[#4f1fd3] rounded-lg flex">
              <FaMedal className="text-7xl  text-red-600 m-5" />
           
              <div className="h-full grid content-center">
                <h1 className="text-2xl">Enrolled Courses</h1>
                  <h2 className=" text-1xl">3 Course Completed</h2>
              </div>
            </div>
            <div className="border-2  w-full border-[#4f1fd3] rounded-lg flex">
              <HiOutlineAcademicCap className="text-7xl  text-red-600 m-5" />
              <div className="h-full grid content-center">
                <h1  className="text-2xl">Active Courses</h1>
                <h2 className=" text-1xl">3 Course Completed</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MylearningDashboard;
