import React from "react";
import { Link } from "react-router-dom";
import { accLink, useLink, socialLink } from "../data/footer";
import logo from "../assets/images/GPCSSI.png";

function Footer() {
  return (
    <div className="px-8 py-12 bg-white space-y-4 items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 py-16 gap-5 md:gap-0">
        <div></div>
        <div className="text-left text-black w-full">
          <div className="space-y-6">
            <Link to="/">
              <button className="text-5xl font-bold">
                <p className="flex items-center">
                  <span>
                    <img src={logo} alt="logo" className="mt-1" />
                  </span>
                </p>
              </button>
            </Link>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                maiores minus eaque sequi, quo voluptas harum totam nostrum et
                eveniet dignissimos suscipit ullam id cum.
              </p>
            </div>
            <div className="flex items-center">
              {socialLink.map((items, index) => (
                <div key={index} className="flex flex-row">
                  <a href={`${items.link}`}>
                    <button className="px-2">
                      <p className="text-3xl">
                        <i className={`fi ${items.icon}`}></i>
                      </p>
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div></div>
        <div className="text-center xl:text-left space-y-4 text-black">
          <div className="w-fit">
            <p className="font-bold text-base md:text-2xl text-black border-b-2 border-blue-500">
              Usefull Links
            </p>
          </div>
          <div>
            {useLink.map((items, index) => (
              <div key={index} className="items-center mx-2 py-1">
                <Link to={`/${items.link}`}>
                  <div className="flex gap-2 items-center">
                    <p className="mt-1">
                      <i className="fi fi-rr-angle-double-small-right"></i>
                    </p>
                    <p className="text-xs text-gray-700 md:text-base font-semibold">
                      {items.linkName}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="text-left space-y-4 text-black">
          <div className="w-fit">
            <p className="font-bold text-base md:text-2xl text-black border-b-2 border-blue-500">
              My Account
            </p>
          </div>
          <div>
            {accLink.map((items, index) => (
              <div key={index} className="items-center mx-2 py-1">
                <Link to={`/${items.link}`}>
                  <div className="flex gap-2 items-center">
                    <p className="mt-1">
                      <i className="fi fi-rr-angle-double-small-right"></i>
                    </p>
                    <p className="text-xs text-gray-700 md:text-base font-semibold">
                      {items.linkName}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </div>
      <div className="text-sm md:text-base text-black">
        <p>
          &copy; Copyright <span className="font-bold">GPCSSI</span>. All Rights
          Reserved
        </p>
        <p>Developed with &#9829;</p>
      </div>
    </div>
  );
}
export default Footer;
