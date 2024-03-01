import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const Navbar = [
    {
      name: "HOME",
      link: "/",
    },
   
    {
      name: "COURSES",
      link: "/Courses",
    },
 
    {
      name: "ABOUT US",
      link: "/About",
    },
    {
      name: "MY LEARNING",
      link: "/MylearningDashboard",
    },
    {
      name: "CONTACT US",
      link: "/contact",
    }
  ];
  return (
    <>
      <nav className="w-full bg-[#031328] lg:px-24 md:px-16 sm:px-14 px-12  shadow-md">
        <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
          {/* Navbar logo & toggle button section */}
          <div className="">
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* Logo section */}
              <Link className="text-3xl font-semibold tracking-[0.1rem] text-white flex">
                Lo <div className="text-[#352683] ">go</div>
              </Link>
              {/* Toggle button section  (we will do it later) */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none border border-transparent focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <FaTimes
                      className="text-gray-400 cursor-pointer"
                      size={24}
                    />
                  ) : (
                    <FaBars
                      className="text-gray-400 cursor-pointer"
                      size={24}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* NAvbar menu items section */}
          <div
            className={`flex justify-between items-center md:block ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="list-none lg:flex md:flex sm:block block gap-x-12 gap-y-16">
              {Navbar.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="text-white text-[1.15rem] font-medium tracking-wider hover:text-[#7c62ff] hover:underline   underline-offset-8 ease-out duration-700"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
             
             
            </ul>
          </div>
          <div>
          <Link to='/Register' className="bg-[#352683] text-[1.1rem] font-normal text-white px-5 py-2 font-semibold rounded lg:ml-10 md:ml-6 sm:ml-0 ml-0">
          SIGN UP/ LOGIN
              </Link>
              </div>
        </div>
      </nav>
    </>
  );
};

export default Header;