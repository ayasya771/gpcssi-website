import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Login from "./pages/auth/Login";
import Attendance from "./pages/Attendance";
import Archive from "./pages/Archive";
import MainArchiveView from "./pages/MainArchiveView";
import ScrollToTop from "./scrollToTop";
import About from "./pages/About";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src =
      "https://s3-alpha-sig.figma.com/img/ae0c/b6bd/0e349011b36b0f8639f04277b077657e?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OoJFglkR~qapSLLojQtYGNvJxzkFbYWxM~izn-epScIWpZT553cFEN9X7MDuW2bJEjEzim-wf3xZabYMZ9Ihd0Cgusgq2rclOJG2lw5CTdunJc9biLqOYBk1X0ZK9uzb4YrvPAuh11DKTyV6IzEDs9olr3jAxgz7zckqus1OUiMdhmqayPC-ZH2XGlXWnByrZC3byzzn8P4xkt633DV5h5Pc46I5WXOqktQpUEji-XxaWPc301GtYctiGhUsoBXeXz49QKmEH8CgCC6whlRDTxOa9uWaKfCaRZnF9oWTYtbVlUruAegUueTHx6XAaRyCuxTS~lfqszHAlmEaXfwVAA__";

    image.onload = () => {
      setLoading(false);
    };
  }, []);

  return (
    <div className="App font-custom">
      <ScrollToTop />
      <div className="fixed w-screen z-20">
        <Navbar />
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <img
            src="https://s3-alpha-sig.figma.com/img/ae0c/b6bd/0e349011b36b0f8639f04277b077657e?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OoJFglkR~qapSLLojQtYGNvJxzkFbYWxM~izn-epScIWpZT553cFEN9X7MDuW2bJEjEzim-wf3xZabYMZ9Ihd0Cgusgq2rclOJG2lw5CTdunJc9biLqOYBk1X0ZK9uzb4YrvPAuh11DKTyV6IzEDs9olr3jAxgz7zckqus1OUiMdhmqayPC-ZH2XGlXWnByrZC3byzzn8P4xkt633DV5h5Pc46I5WXOqktQpUEji-XxaWPc301GtYctiGhUsoBXeXz49QKmEH8CgCC6whlRDTxOa9uWaKfCaRZnF9oWTYtbVlUruAegUueTHx6XAaRyCuxTS~lfqszHAlmEaXfwVAA__"
            alt="loading"
            className="animate-bounce duration-105 h-52 w-52 rounded-full"
          />
        </div>
      ) : (
        <div>
          <header className="App-header">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/archive" element={<Archive />} />
              <Route path="/archive/:archiveId" element={<MainArchiveView />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/about-us" element={<About />} />
              <Route path="*" element={<Navigate to="/not-found" replace />} />
              <Route path="/not-found" element={<NotFound />} />
            </Routes>
          </header>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
