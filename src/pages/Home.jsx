import React from "react";
import Logo from "../assets/images/hp_logo.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section id="home" className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <img src={Logo} alt="Haryana Police" />
        <p className="text-black text-4xl font-bold">
          Gurugram Police Cyber Security Summer Internship
        </p>
        <div className="flex gap-8 my-12">
          <Link to={'/about-us'} className="border border-[#323576] rounded-2xl min-w-36 py-2 hover:bg-[#323576] text-[#323576] hover:text-white duration-105">
            <p className="capitalize text-2xl font-semibold">About us</p>
          </Link>
          <Link className="hover:bg-[#323576] bg-white rounded-2xl min-w-32 py-2 hover:text-white text-[#323576] border border-[#323576]">
            <p className="capitalize text-2xl font-semibold">
              Apply
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
