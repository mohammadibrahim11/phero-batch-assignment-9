import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <header className="p-4 dark:bg-gray-800 dark:text-gray-100 shadow sticky">
        <div className="container flex justify-between h-16 mx-auto pl-16 pr-16">
            <Link rel="noopener noreferrer" to="/home" aria-label="Back to homepage" className="flex items-center p-2 text-4xl font-bold text-purple-300 ">
            Quizzz master
            </Link>
            <ul className="items-stretch hidden space-x-3 md:flex">
                <li className="flex">
                    <Link rel="noopener noreferrer" to="/topic" className="flex items-center px-4 mb-1  font-bold text-purple-300">Topics</Link>
                </li>
                <li className="flex">
                    <Link rel="noopener noreferrer" to="/statistics" className="flex items-center px-4 mb-1  font-bold text-purple-300">Statistics</Link>
                </li>
                <li className="flex">
                    <Link rel="noopener noreferrer" to="/blog" className="flex items-center px-4 mb-1  font-bold text-purple-300">Blog</Link>
                </li>
                {/* <li className="flex">
                    <Link rel="noopener noreferrer" to="contact" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Link</Link>
                </li> */}
            </ul>
     
        </div>
    </header>
    );
};

export default Header;