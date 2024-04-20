import React from 'react'
import Header from "../Components/header";
import HomeBanner from "../Components/homeBanner";
import {  BrowserRouter as Router } from "react-router-dom";
const Home = () => {
  return (
    <>



        <div className="w-full min-h-screen bg-gradient-to-r from-[#171137] via-[#001426] via-[#041329] to-[#171137]">
          <Header />
          <HomeBanner />

        </div>



    </>
  )
}

export default Home