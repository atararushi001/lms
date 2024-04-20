import React from 'react'
import Header from "../Components/header";
// import HomeBanner from "../Components/homeBanner";
// import contents from './content';
import {  BrowserRouter as Router } from "react-router-dom";
import CoursesList from '../Components/CoursesList';
const Courses = () => {
  return (

            <div className="w-full min-h-screen  bg-gradient-to-r from-[#171137] via-[#001426] via-[#041329] to-[#171137]">
   <Header />
   <CoursesList /> 
   </div>

  )
}

export default Courses