import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Login() {
  function generateToken(length = 16) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let token = "";
    for (let i = 0; i < length; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [panelShown, setPanelShow] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.toLowerCase() === "admin" && password === "admin") {
      const token = generateToken();
      Cookies.set("user_auth", `${token}/${username}`, { expires: 1 });
      navigate("/");
      setUsername("");
      setPassword("");
    } else {
      alert("Wrong username or password");
    }
  };

  useEffect(() => {
    const token = Cookies.get("user_auth");
    if (token) {
      setPanelShow(true);
      setUsername(token.split("/").pop().toLocaleUpperCase());
    } else {
      setPanelShow(false);
    }
  }, []);

  return (
    <div className="flex flex-col h-screen items-center justify-center gap-8">
      <p className="text-[#AD0F0E] font-bold text-7xl my-8">
        {panelShown ? `Welcome ${username}` : "Login"}
      </p>
      {!panelShown ? (
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <input
            className="border-b-2 focus:outline-none focus:border-b-black text-3xl"
            placeholder="Enter Your Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            className="border-b-2 focus:outline-none focus:border-b-black text-3xl"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            type="submit"
            className="hover:bg-[#323576] bg-white mt-8 rounded-2xl min-w-32 py-2 hover:text-white text-[#323576] border border-[#323576]"
          >
            <p className="capitalize text-xl font-semibold">Login</p>
          </button>
        </form>
      ) : (
        <div className="flex flex-col">
          <Link
            to={"/attendance"}
            className="hover:bg-[#323576] bg-white my-2 rounded-2xl min-w-40 py-2 px-4 hover:text-white text-[#323576] border border-[#323576]"
          >
            <p className="capitalize text-xl font-semibold">Mark Attendance</p>
          </Link>
          <button
            onClick={() => {
              Cookies.remove("user_auth");
              navigate('/');
              window.location.reload();
            }}
            className="hover:bg-[#323576] bg-white my-2 rounded-2xl min-w-40 py-2 px-4 hover:text-white text-[#323576] border border-[#323576]"
          >
            <p className="capitalize text-xl font-semibold">Logout</p>
          </button>
        </div>
      )}
    </div>
  );
}
