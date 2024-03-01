// About.js

import React from 'react';
import Headers from "../Components/header";
const About = () => {
  return (
    <div>
        <Headers />
    <div className="bg-white p-8 rounded-lg shadow-md">
      <p className="text-gray-600 text-sm mb-4">
        Trusted by over 15,000 companies and millions of learners around the world.
      </p>
      <div className="flex space-x-4">
        {/* Replace these logos with actual company logos */}
        <img src="volkswagen-logo.png" alt="Volkswagen" className="w-8 h-8" />
        <img src="samsung-logo.png" alt="Samsung" className="w-8 h-8" />
        <img src="cisco-logo.png" alt="Cisco" className="w-8 h-8" />
        {/* Add more logos here */}
      </div>
    </div>
    </div>
  );
};

export default About;
