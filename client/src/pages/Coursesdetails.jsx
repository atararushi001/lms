import React, { useEffect } from "react";

import { useState } from "react";
import Headers from "../Components/header";
import { Link } from "react-router-dom";
import { IoMdCheckboxOutline } from "react-icons/io";
import "video-react/dist/video-react.css";
import ReactPlayer from "react-player";
// import reactvideo from "../assets/video/React Tutorial for Beginners.mp4";

import { useParams } from "react-router-dom";


const Coursesdetails = () => {
  const [reactvideo, setreactvideo] = useState("");
  const [coursedata, setCourses] = useState([]);
  const { courseid } = useParams();
  // console.log(courseid);
  useEffect(() => {
    fetch(
      `http://localhost:3000/Course/getcoursesdetail?courseId=${courseid}`
    )
      .then((response) => response.json())
      .then((coursedata) => setCourses(coursedata.courses[0]))
      .catch((error) => console.log(error));
  }, [courseid]);
  useEffect(() => {
    if (coursedata.chapters && coursedata.chapters.length > 0) {
      // setcount(coursedata.chapters.length);
      setreactvideo('http://localhost:3000/' + 'upload/' + coursedata.chapters[0].module_video);
    }
  }, [coursedata]);
  const [count, setcount] = useState(0);
  return (
    <div className=" w-full min-h-screen bg-[#031328]">
      <Headers />
      <div className="w-full flex justify-center mt-4">
        <h1 className="text-6xl font-bold  text-white border-[#352683] border-b-4 ">
          {coursedata.title}
        </h1>
      </div>

      <div className="text-white py-10 flex  w-full pl-10 content-center">
        <div className="w-1/7 border-4 border-[#4f1fd3] m-2  p-2 rounded-lg p-8 pt-16">
          <ul className="space-y-6 ">
            {coursedata.chapters &&
              coursedata.chapters.map((chapters, index) => {
             
            
                return (
                  <li
                    key={index}
                    className={`flex items-center text-2xl p-2 ${index === 0 ? 'text-rebeccapurple' : 'text-white'}`}
                  > 
                    <IoMdCheckboxOutline />
                    <button
                    type="button"
                     
                      className="ml-2"
                      onClick={() => {
                      
                        setreactvideo('http://localhost:3000/'+'upload/'+chapters.module_video);
                        // loadvideo(chapters.module_video);
                      }}
                    >
                      {chapters.module_name}
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="w-full">
          <div className="w-1/2 rounded-lg m-2 p-5">
            <ReactPlayer
              controls="true"
              volume="true"
              playing="true"
              className="text-4xl font-bold mb-6 p-5   "
              url={reactvideo}
            />

            <h1 className="text-4xl font-bold mb-6 p-5   ">Paythond intro</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursesdetails;
