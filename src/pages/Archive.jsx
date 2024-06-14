import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import archiveData from "../data/archive";

export default function Archive() {
  return (
    <div className="p-4 my-20">
      <p className="font-semibold my-2">Explore Previous Internship Events</p>
      {archiveData.map((items, index) => (
        <AnimatedCard key={index} index={index} items={items} />
      ))}
    </div>
  );
}

function AnimatedCard({ index, items }) {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.9, 
  });

  const animationClass = inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10";

  return (
    <div ref={ref} className={`transition-all duration-700 ease-in-out ${animationClass} flex flex-col grid-cols-9 mx-auto md:grid`}>
      {/* Card Start */}
      {index % 2 === 0 ? (
        <div className="hidden md:contents">
          <span className="text-2xl font-bold text-black flex items-center justify-start col-start-4 col-end-5">
            {items.date}
          </span>
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full rounded-t-full bg-black"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-[#D1AA66] border-2 border-black rounded-full top-1/2 items-center"></div>
          </div>
          <Link
            to={items.id}
            className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 ml-auto"
          >
            <img src={items.img} alt={items.alt} className="rounded-2xl" />
          </Link>
        </div>
      ) : (
        <div className="hidden md:contents mt-6">
          <Link
            to={items.id}
            className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto"
          >
            <img src={items.img} alt={items.alt} className="rounded-2xl" />
          </Link>
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full rounded-t-full bg-black"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-[#D1AA66] border-2 border-black rounded-full top-1/2 items-center"></div>
          </div>
          <span className="text-2xl font-bold text-black flex items-center justify-end col-start-6 col-end-7">
            {items.date}
          </span>
        </div>
      )}
      <div className="flex md:hidden">
        <div className="relative col-start-1 col-end-2 ml-7 mr-auto">
          <div className="flex items-center justify-center w-6 h-full">
            <div className="w-1 h-full rounded-t-full bg-black"></div>
          </div>
          <div className="absolute w-6 h-6 -mt-3 bg-[#D1AA66] border-2 border-black rounded-full top-1/2 items-center"></div>
        </div>
        <span className="text-2xl px-2 font-bold text-black flex items-center justify-end col-start-2 col-end-3">
          {items.date}
        </span>
        <Link
          to={items.id}
          className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-3 col-end-7 mr-7 ml-auto"
        >
          <img src={items.img} alt={items.alt} className="rounded-2xl" />
        </Link>
      </div>
    </div>
  );
}
