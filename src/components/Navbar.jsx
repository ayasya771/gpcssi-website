import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/GPCSSI.png";
import Cookies from "js-cookie";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [home, setHome] = useState("");
  const [archive, setArchive] = useState("");
  const [about, setAbout] = useState("");
  const [login, setLogin] = useState("");
  const [attendance, setAttendance] = useState("");
  const [loginbtnName, setLoginBtnName] = useState("Login");
  function activeByDefault() {
    if (location.pathname.includes("/not-found")) {
      setHome("");
      setArchive("");
      setAbout("");
      setLogin("");
      setAttendance("");
    } else if (location.pathname.includes("about-us")) {
      setHome("");
      setArchive("");
      setAbout("bg-[#D1AA66] text-white  xl:text-[#D1AA66]");
      setLogin("");
      setAttendance("");
    } else if (location.pathname.includes("archive")) {
      setHome("");
      setArchive("bg-[#D1AA66] text-white  xl:text-[#D1AA66]");
      setAbout("");
      setLogin("");
      setAttendance("");
    } else if (location.pathname.includes("login")) {
      setHome("");
      setArchive("");
      setAbout("");
      setLogin("bg-[#D1AA66] text-white  xl:text-[#D1AA66]");
      setAttendance("");
    } else if (location.pathname.includes("attendance")) {
      setHome("");
      setArchive("");
      setAbout("");
      setLogin("");
      setAttendance("bg-[#D1AA66] text-white  xl:text-[#D1AA66]");
    } else {
      setHome("bg-[#D1AA66] text-white  xl:text-[#D1AA66]");
      setArchive("");
      setAbout("");
      setLogin("");
      setAttendance("");
    }
  }
  useEffect(() => {
    activeByDefault();
    const token = Cookies.get("user_auth");
    if (token) {
      const username = token.split("/").pop().toLocaleUpperCase();
      setLoginBtnName(username);
    }
  },);
  const navItems = [
    {
      itemName: "Home",
      link: "",
      activeCss: home,
    },
    {
      itemName: "About Us",
      link: "about-us",
      activeCss: about,
    },
    {
      itemName: "Archive",
      link: "archive",
      activeCss: archive,
    },
    {
      itemName: "Attendance",
      link: "attendance",
      activeCss: attendance,
    },
    {
      itemName: loginbtnName,
      link: "login",
      activeCss: login,
    },
  ];

  return (
    <div className="py-2 px-8 flex flex-col xl:flex-row h-fit justify-center xl:justify-between bg-white z-30">
      <div className="flex items-center justify-center">
        <div className="flex xl:hidden justify-start w-full items-center">
          {!open ? (
            <button
              onClick={() => {
                setOpen(true);
              }}
            >
              <i className="fi fi-br-bars-staggered mt-1"></i>
            </button>
          ) : (
            <button
              onClick={() => {
                setOpen(false);
              }}
            >
              <i className="fi fi-br-cross"></i>
            </button>
          )}
        </div>
        <div className="text-2xl xl:text-5xl font-bold">
          <Link to="/">
            <button>
              <p className="flex items-center">
                <span>
                  <img src={logo} alt="logo" />
                </span>
              </p>
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden xl:flex justify-center items-center">
        {navItems.map((items, index) => (
          <div key={index} className="items-center">
            <Link to={`/${items.link}`} className={`${items.activeCss}`}>
              <button className="flex flex-row space-x-2 p-2 items-center mx-1">
                <p className="mt-1 font-bold">
                </p>
                <div className="font-bold">{items.itemName}</div>
              </button>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex xl:hidden">
        {open ? (
          <div className="border border-[#1A2238] my-4 rounded-xl items-center w-screen flex flex-col h-screen animate-slide-in-left duration-150">
            <div className="py-8 space-y-8 px-4 w-full">
              {navItems.map((items, index) => (
                <Link
                  key={index}
                  to={`/${items.link}`}
                  className={`flex flex-col border w-full border-[#D1AA66] justify-center active rounded-xl items-center ${items.activeCss}`}
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <button className="items-center">
                    <div className="flex flex-row space-x-4 p-2 items-center">
                      <p className="mt-1">
                      </p>
                      <div>{items.itemName}</div>
                    </div>
                  </button>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
