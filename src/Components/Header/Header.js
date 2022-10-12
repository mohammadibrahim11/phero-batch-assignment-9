import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="p-4 dark:bg-gray-800 dark:text-gray-100 shadow sticky">
      <div className="container flex justify-between h-16 mx-auto pl-8 pr-4    sm:justify-between">
        <Link 
          rel="noopener noreferrer"
          to="/home"
          aria-label="Back to homepage"
          className="flex items-center pb-3 text-4xl font-bold text-purple-300 "
        >
          Quizzz master
        </Link>
        <ul  className={` lg:flex md:flex lg:static md:static  absolute duration-500  ease-in  ${open ? 'top-16 absolute left-[390px] bg-white' : 'top-[-122px] left-[390px] right-1'}`}>
          <li className="flex">
            <Link 
              rel="noopener noreferrer"
              to="/home"
              className="flex items-center px-4 mb-1  right-1   font-bold text-purple-300"
            >
              Home
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="/topic"
              className="flex items-center px-4 mb-1  font-bold text-purple-300"
            >
              Topics
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="/statistics"
              className="flex items-center px-4 mb-1   font-bold text-purple-300"
            >
              Statistics
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="/blog"
              className="flex items-center px-4 mb-1  font-bold text-purple-300"
            >
              Blog
            </Link>
          </li>
          {/* <li className="flex">
                    <Link rel="noopener noreferrer" to="contact" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Link</Link>
                </li> */}
        </ul>

        <div
          onClick={() => setOpen(!open)}
          className="h-8 w-8 lg:hidden md:hidden text-purple-400 pt-4"
        >
        <label> {open ? <XMarkIcon /> : <Bars3Icon />}</label>  
        </div>
      </div>
    </header>
  );
};

export default Header;
