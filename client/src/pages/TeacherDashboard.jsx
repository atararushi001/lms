import React from "react";
import Headers from "../Components/header";
import { FaHome } from "react-icons/fa";
import { FaBookOpen,FaRupeeSign,FaMedal,FaBookReader  } from "react-icons/fa";
// import { GrAchievement } from "react-icons/gr";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { Link } from "react-router-dom";
const TeacherDashboard = () => {
  return (
    <div className=" w-full min-h-screen  bg-gradient-to-r from-[#171137] via-[#001426] via-[#041329] to-[#171137]">
      <Headers />
      <div className="text-white py-20 flex px-12 w-full justify-center  content-center">
        <div className="w-1/5 border-4 border-[#4f1fd3] m-2 text-[#352683] p-2 rounded-lg p-8 pt-16">
          <ul className="space-y-6 ">
          <li key="da" className="flex items-center text-2xl">
              <FaHome />

              <Link to={'/TeacherDashboard'} className="ml-2">Dashboard</Link>
            </li>
            <li key="as" className="flex items-center text-[#ffff]   text-2xl">
              <FaBookOpen />

              <Link to={'/TeacherCourses'} className="ml-2">Courses</Link>
            </li>
          </ul>
        </div>
        <div className="w-3/5 border-4  rounded-lg border-[#4f1fd3] m-2 p-5">
          <div className="grid grid-cols-2 mt-20 mb-20 space-x-2 gap-5 ">
            <div className=" border-2 w-full border-[#4f1fd3] rounded-lg flex">
              <FaMedal className="text-7xl  text-red-600 m-5" />
           
              <div className="h-full grid content-center">
                <h1 className="text-2xl">30+</h1>
                  <h2 className=" text-1xl">Published  Courses</h2>
              </div>
            </div>
            <div className="border-2  w-full border-[#4f1fd3] rounded-lg flex">
              <HiOutlineAcademicCap className="text-7xl  text-red-600 m-5" />
              <div className="h-full grid content-center">
                <h1  className="text-2xl">300+</h1>
                <h2 className=" text-1xl">Active Courses</h2>
              </div>
            </div>
            <div className=" border-2 w-full border-[#4f1fd3] rounded-lg flex">
              <FaRupeeSign className="text-7xl  text-red-600 m-5" />
           
              <div className="h-full grid content-center">
                <h1 className="text-2xl">3000K+</h1>
                  <h2 className=" text-1xl">Total Earning</h2>
              </div>
            </div>
            <div className=" border-2 w-full border-[#4f1fd3] rounded-lg flex">
              <FaBookReader className="text-7xl  text-red-600 m-5" />
           
              <div className="h-full grid content-center">
                <h1 className="text-2xl">3000+</h1>
                  <h2 className=" text-1xl">Student</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
