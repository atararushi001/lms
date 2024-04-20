import { useState, useEffect ,useContext } from "react";

import Headers from "../Components/header";
import { FaHome } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
// import { GrAchievement } from "react-icons/gr";
import courseimage from "../assets/imags/bannerimg2.png";
import { Link } from "react-router-dom";
import { UserContext } from '../Context/UserContext'; 
const MylearningCourses = () => {


  const [courses, setCourses] = useState([]);
  const { user } = useContext(UserContext);
  const user_id = user.user_id;

// console.log(user_id);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API}Course/studentcourses?userId=${user_id}`)
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.log(error));

  }, [user_id]);
  
  return (
    <div className=" w-full min-h-screen  bg-gradient-to-r from-[#171137] via-[#001426] via-[#041329] to-[#171137]">
      <Headers />
      <div className="text-white py-20 flex px-12 w-full justify-center  content-center">
        <div className="w-1/5 border-4 border-[#4f1fd3] m-2 p-2 rounded-lg p-8 pt-16">
          <ul className="space-y-6 ">
            <li key="da" className="flex items-center text-[#ffff] text-2xl">
              <FaHome />

              <Link to={"/MylearningDashboard"} className="ml-2">
                Dashboard
              </Link>
            </li>
            <li key="as" className="flex items-center  text-[#352683] text-2xl">
              <FaBookOpen />

              <Link to={"/MylearningCourses"} className="ml-2">
                Courses
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-3/5 border-4 rounded-lg border-[#4f1fd3] m-2 p-5">
          <div className="py-4 px-4 grid grid-cols-2 gap-6 content-start">
          {courses.courses &&
          courses.courses.map((course) => {
            console.log(course);
            return (
              <div
                key={course.id}
                className="border-2 lg:w-80 border-white-200 max-w-sm bg-white rounded-lg shadow dark:bg-gray-800"
              >
                <a href="#">
                  <img
                    className="rounded-t-lg w-full"
                    src={`${import.meta.env.VITE_API}upload/${course.Images}`}
                    alt=""
                  />
                </a>
                <div className="bg-gradient-to-b from-[#352683] ">
                  <div className="ml-2 justify-between">
                    <a href="#">
                      <h5 className="mr-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {course.title}
                      </h5>
                    </a>
                    <p className="text-white pr-2 ">{course.Description}</p>
                    <p className="text-white pr-2 ">{course.Price}</p>
                  </div>

                  <div className="w-100 flex flex-col items-center py-2">
                    <Link
                      to={`/Coursesdetails/${course.id}`}
                      className="bg-[#352683]  text-[1.1rem]  font-normal text-white px-10 py-2 font-semibold rounded"
                    >
                      start Learning
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
            <div className="border-2 lg:w-80 border-white-200 max-w-sm bg-white rounded-lg shadow dark:bg-gray-800">
              <a href="#">
                <img className="rounded-t-lg w-full" src={courseimage} alt="" />
              </a>
              <div className="bg-gradient-to-b from-[#352683] ">
                <div className="ml-2 justify-between">
                  <a href="#">
                    <h5 className="mr-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Learn Python
                    </h5>
                  </a>
                  <p className="text-white pr-2 ">Remaing Chapter 20</p>
                  <p className="text-white pr-2 ">1 hr 31min</p>
                </div>

                <div className="w-100 flex flex-col items-center py-2">
                  <a
                    href="/Coursesdetails"
                    className="bg-[#352683]  text-[1.1rem]  font-normal text-white px-10 py-2 font-semibold rounded"
                  >
                    Complete
                  </a>
                </div>
              </div>
            </div>
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default MylearningCourses;