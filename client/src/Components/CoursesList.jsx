import courseimage from "../assets/imags/bannerimg2.png";
import { useState, useEffect } from "react";
import {
  FaShoppingCart,
  FaRegBookmark,
  FaStar,
  FaFireAlt,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
const CoursesList = () => {
  const { user } = useContext(UserContext); 
  const navigate = useNavigate();
  const Purchasecourse = (course_id) => {
  
    if (user == null ) {
      toast.error("Please login to purchase course");
      navigate("/Login");
      return;
    }
    console.log(JSON.stringify({
      Course_id: course_id,
      User_id: user.user_id,
    }));
    fetch(`${import.meta.env.VITE_API}Course/Purchase`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Course_id: course_id,
        User_id: user.user_id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success(data.message);
      })
      .catch((error) => console.log(error));
  };
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/Course/getcourses")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div>
        <div className=" text-white gap-4 flex content-start m-5">
          <p className="hover:bg-[#352683] px-2 rounded-lg  border-2  border-gray-200 ">
            Accounting
          </p>

          <p className="hover:bg-[#352683] px-2 rounded-lg  border-2  border-gray-200 ">
            Computer Science
          </p>
          <p className="hover:bg-[#352683] px-2 rounded-lg  border-2  border-gray-200 ">
            {" "}
            Engineering
          </p>
        </div>
      </div>
      <div className="ml-5 grid grid-cols-4 gap-6 content-start place-content-center justify-center">
        {courses.courses &&
          courses.courses.map((course) => {
            // console.log(course);
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
                    <button
                      onClick={() => {
                        Purchasecourse(course.id);
                      }}
                      className="bg-[#352683]  text-[1.1rem]  font-normal text-white px-10 py-2 font-semibold rounded"
                    >
                      Enroll in Course
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        {/* <div className="border-2 lg:w-80 border-white-200 max-w-sm bg-white rounded-lg shadow dark:bg-gray-800">
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
              <p className="text-white pr-2 ">Chapter 20</p>
              <p className="text-white pr-2 ">$20</p>
            </div>

            <div className="w-100 flex flex-col items-center py-2">
              <a
                href="#"
                className="bg-[#352683]  text-[1.1rem]  font-normal text-white px-10 py-2 font-semibold rounded"
              >
                Purchase
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default CoursesList;
