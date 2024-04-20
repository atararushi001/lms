import React from 'react'
import bannerimg from "../assets/imags/bannerimg.png"
import { Link } from "react-router-dom";
const HomeBanner = () => {
  return (
   <>
    <div className="flex text-white py-20 px-5  justify-center w-300">
      <div className="w-3/5 p-8 py-12">
        <h1 className="md:text-6xl sm:text-7xl lg:text-7xl font-bold lg:py-12 text-white">Start Better Learning Future Here</h1>
    <p className='tracking-widest lg:text-xl md:text-md text-white sm:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloremque asperiores consequuntur excepturi quasi, autem voluptates quibusdam nostrum reprehenderit incidunt alias corporis atque vel tempora ullam corrupti officiis laboriosam nam.</p>
  <br/>
    <Link to='/Register' className="bg-[#352683] mt-10 text-[1.1rem] font-normal  text-white px-5 py-2 font-semibold rounded ">Get started free </Link>
      </div>
      <div className="p-8 w-2/5">
        <img
          src={bannerimg}
          alt="Child with graduation cap"
          className="w-90 h-100 ml-20"
        />
      </div>

    </div>

   </>
  )
}

export default HomeBanner