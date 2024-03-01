import React from "react";
import Headers from "../Components/header";
import { FaHome } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
// import { GrAchievement } from "react-icons/gr";
import { FaMedal } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { Link } from "react-router-dom";
import { IoMdCheckboxOutline } from "react-icons/io";
import 'video-react/dist/video-react.css'; 
import { Player } from 'video-react';
const Coursesdetails = () => {
  return (
    <div className=" w-full min-h-screen bg-[#031328]">
      <Headers />
      <div className="text-white py-10 flex  w-full pl-10 content-center">
        <div className="w-1/7 border-4 border-[#4f1fd3] m-2  p-2 rounded-lg p-8 pt-16">
          <ul className="space-y-6 ">
            <li
              key="Intro"
              className="flex items-center text-3xl text-[#352683] p-2"
            >
              <IoMdCheckboxOutline />
              <Link to={"/MylearningDashboard"} className="ml-2">
                Intro
              </Link>
            </li>
            <li key="Module1" className="flex items-center text-3xl p-2">
              <IoMdCheckboxOutline />
              <Link to={"/MylearningDashboard"} className="ml-2">
                Module 1
              </Link>
            </li>
            <li key="Module2" className="flex items-center text-3xl p-2">
              <IoMdCheckboxOutline />
              <Link to={"/MylearningDashboard"} className="ml-2">
                Module 2
              </Link>
            </li>
            <li key="Module3" className="flex items-center text-3xl p-2">
              <IoMdCheckboxOutline />
              <Link to={"/MylearningDashboard"} className="ml-2">
                Module 3
              </Link>
            </li>
            <li key="Module4" className="flex items-center text-3xl p-2">
              <IoMdCheckboxOutline />
              <Link to={"/MylearningDashboard"} className="ml-2">
                Module 4
              </Link>
            </li>
            <li key="Quiz" className="flex items-center text-3xl p-2">
              <IoMdCheckboxOutline />
              <Link to={"/MylearningDashboard"} className="ml-2">
                Quiz
              </Link>
            </li>
            <li key="Certificate" className="flex items-center text-3xl p-2">
              <IoMdCheckboxOutline />
              <Link to={"/MylearningDashboard"} className="ml-2">
                Certificate
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full">
        <div className="w-1/2 rounded-lg m-2 p-5">
        <Player >
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
    </Player>
    <h1 className="text-4xl font-bold mb-6 p-5   ">Paythond intro</h1>

        </div>
        </div>
      </div>
    </div>
  );
};

export default Coursesdetails;
