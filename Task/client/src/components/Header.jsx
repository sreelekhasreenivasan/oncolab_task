import React, { useState } from "react";
import { FaBars, FaBell, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.jpeg";
import avatar from "../assets/user-avatar.jpeg";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header className="bg-[#81BFDA] text-white flex justify-between items-center px-6 py-3 shadow-md">
        <div className="flex items-center space-x-4">
          <button className="text-xl" onClick={() => setIsSidebarOpen(true)}>
            <FaBars />
          </button>
          <img src={logo} alt="Oncolab Diagnostics" className="h-10" />
          <h1 className="text-lg font-semibold">Oncolab Diagnostics LLC</h1>
        </div>

        <div className="flex items-center space-x-6">
          <span className="text-sm font-medium">ACCOUNTS1</span>

          <div className="relative">
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white px-2 rounded-full">
              19
            </span>
            <FaBell className="text-xl cursor-pointer" />
          </div>

          <div className="flex items-center space-x-2">
            <img
              src={avatar}
              alt="User"
              className="h-8 w-8 rounded-full border-2 border-white"
            />
            <span className="font-medium">THOMAS</span>
          </div>
        </div>
      </header>

      {isSidebarOpen && (
        <div className="fixed top-16 left-0 h-full w-auto bg-[#0d5c88] text-white shadow-lg p-5 z-50">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="absolute top-4 right-4 text-2xl"
          >
            <FaTimes />
          </button>

          <div className="relative w-64">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full mt-6 text-left text-lg font-semibold mb-2 px-4 py-2 text-white rounded hover:bg-blue-200 hover:opacity-5"
      >
        Primary Menu
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <nav className="absolute left-0 mt-2 w-full bg-gray-800 text-white rounded shadow-lg p-2">
          <button className="block w-full text-left py-2 px-4 rounded hover:bg-gray-700">
            Rider Tracking
          </button>
          <button className="block w-full text-left py-2 px-4 rounded opacity-50 cursor-not-allowed">
            Workstation Master
          </button>
          <button className="block w-full text-left py-2 px-4 rounded hover:bg-gray-700">
            Yearly Consolidated Report
          </button>
        </nav>
      )}
    </div>
        </div>
      )}
    </div>
  );
}

export default Header;
