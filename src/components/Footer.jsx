import React from "react";
import { Link } from "react-router-dom";
import { accLink, useLink, socialLink } from "../data/footer";
import logo from "../assets/images/GPCSSI.png";

function Footer() {
  return (
    <div className="px-8 py-12 bg-[#323576] space-y-6 items-center mt-64 2xl:mt-24">
      <div className="w-full h-full flex flex-col-reverse md:flex-row justify-between items-start gap-6 xl:gap-0">
        <div className="flex flex-wrap justify-start xl:justify-center w-full xl:w-4/12 h-full gap-6 xl:gap-12 text-base xl:text-3xl font-semibold text-white">
          <p>Home</p>
          <p>About</p>
          <p>Archive</p>
          <p>Resources</p>
          <p>Login</p>
          <p>Attendance</p>
        </div>
        <div className="flex flex-wrap w-full xl:w-8/12 justify-start xl:justify-end items-start text-4xl xl:text-7xl font-bold text-white">
          <p>GPCSSI 2024</p>
        </div>
      </div>
      <div className="w-full text-white text-2xl font-semibold flex justify-start xl:justify-end px-1">
        <p>
          Made with<span className="text-rose-500">{" <3 "}</span>by{" "}
          <span className="text-[#D1AA66]">PARKS</span>
        </p>
      </div>
    </div>
  );
}
export default Footer;
