import React from "react";

function Footer() {
  return (
    <div class="px-8 pt-12 pb-8 bg-[#323576] space-y-6 items-center mt-64 2xl:mt-24">
      <div className="w-full h-full flex flex-col-reverse md:flex-row justify-between items-start gap-6 xl:gap-0">
        <div className="flex flex-wrap justify-start xl:justify-center w-full xl:w-4/12 h-full gap-6 xl:gap-12 text-base xl:text-3xl font-semibold text-white">
          <p>Home</p>
          <p>About</p>
          <p>Archive</p>
          <p>Login</p>
          <p>Attendance</p>
          <p>Resources</p>
        </div>
        <div className="flex flex-wrap w-full xl:w-8/12 justify-start xl:justify-end items-start text-4xl xl:text-5xl font-bold text-white">
          <p>GPCSSI 2024</p>
        </div>
      </div>
      <div className="w-full text-white text-2xl font-figmafont font-semibold flex justify-start xl:justify-end px-1">
        <p>
          Made with<span className="text-rose-500">{" <3 "}</span>by{" "}
          <span className="text-[#D1AA66]">SPARK</span>
        </p>
      </div>
    </div>
  );
}
export default Footer;
