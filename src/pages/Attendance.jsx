import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Logo from "../assets/images/hp_logo.png";

export default function Attendance() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [gpcssi_id, setGPCSSI_ID] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const token = Cookies.get("user_auth");
    if (!token) {
      navigate("/login");
    }
    const attn_token = Cookies.get("attendance_record");
    if (attn_token) {
      navigate("/");
      alert("You Already Marked Your Attendance");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username !== "" && gpcssi_id !== "") {
      Cookies.set("attendance_record", new Date(), { expires: 1 });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setUsername("");
        setGPCSSI_ID("");
      }, 2000);
      navigate('/')
    } else {
      alert("Enter username or GPCSSI-ID");
    }
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center gap-8">
      <p className="text-[#AD0F0E] font-bold text-7xl my-8">Attendance</p>
      {!submitted ? (
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <input
            className="border-b-2 focus:outline-none focus:border-b-black text-3xl"
            placeholder="Enter Your Name"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            className="border-b-2 uppercase focus:outline-none focus:border-b-black text-3xl"
            placeholder="Enter Your GPCSSI-ID"
            value={gpcssi_id}
            onChange={(e) => {
              setGPCSSI_ID(e.target.value);
            }}
          />
          <button
            type="submit"
            className="hover:bg-[#323576] bg-white mt-8 rounded-2xl min-w-32 py-2 hover:text-white text-[#323576] border border-[#323576]"
          >
            <p className="capitalize text-xl font-semibold">Present</p>
          </button>
        </form>
      ) : (
        <div className="items-center flex justify-center flex-col">
          <img src={Logo} alt="haryana police" />
          <div className="my-4">
            <p className="capitalize font-semibold">
              Hello <span className="uppercase">{username}</span>
            </p>
            <p className="font-semibold text-gray-500">
              Have a Great Session Today!
            </p>
            <p className="text-sm my-2 text-gray-400 underline">
              Redirecting to Home Page
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
