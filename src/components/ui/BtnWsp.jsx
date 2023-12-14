import React from "react";

export const BtnWsp = () => {
  return (
    <button className="inline-block transition-all ease-in relative overflow-hidden z-1 text-gray-800 py-2 px-8 text-lg rounded-md bg-gray-200 border border-gray-200 shadow-md group">
      WhatsApp
      <svg
        viewBox="0 0 48 48"
        y="0px"
        x="0px"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 absolute right-2 top-1/2 transform -translate-y-1/2 transition-transform group-hover:scale-105"
      >
        <path
          d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
          fill="#fff"
        ></path>
        {/* Otros elementos path */}
      </svg>
      <div className="absolute left-0 right-0 bottom-0 top-0 bg-opacity-20 bg-black border-radius-[50%] transition-all duration-500 delay-100 opacity-0 group-hover:opacity-100"></div>
      <div className="absolute left-0 right-0 bottom-0 top-[180%] bg-green-600 border-radius-[50%] transition-all duration-500 delay-100 opacity-0 group-hover:opacity-100"></div>
    </button>
  );
};
