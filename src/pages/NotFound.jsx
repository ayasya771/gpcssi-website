import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/hp_logo.png";

function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-white">
      <div className="relative items-center justify-center">
        <div className="flex items-center justify-between">
          <p className="font-bold text-9xl md:text-[300px] text-[#AD0F0E] mb-4">4</p>
          <img src={Logo} alt="Haryana Police" className="mt-0 md:mt-8 h-40 md:h-full w-40 md:w-full" />
          <p className="font-bold text-9xl md:text-[300px] text-[#AD0F0E] mb-4">4</p>
        </div>
      </div>
      <Link to={"/"}>
        <button>
          <div className="relative inline-block text-sm font-medium text-[#323576] hover:text-white group active:text-[#323576] focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#323576] group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative block px-8 py-3 bg-white hover:bg-transparent border border-current">
              Go Home
            </span>
          </div>
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
