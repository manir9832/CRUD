import React from "react";

function Navbar() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center bg-gray-300 shadow px-4 py-3 md:h-20">
      <div className="w-full md:w-auto flex justify-center md:justify-start items-center">
        <h2 className="font-bold text-gray-800 text-2xl">skyR</h2>
      </div>

      <div className="w-full md:w-auto mt-3 md:mt-0">
        <ul className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 font-medium text-gray-800">
          <li className="cursor-pointer">HOME</li>
          <li className="cursor-pointer">ABOUT</li>
          <li className="cursor-pointer">CONTACT</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;