import React, { useState } from "react";
import { FaBars, FaBell } from "react-icons/fa";
import logo from "../assets/logo.jpeg";
import avatar from "../assets/user-avatar.jpeg";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const menuItems = {
    "Primary Menu": ["Rider Tracking", "Workstation Master", "Yearly Consolidated Report"],
    "Financial MIS Report": ["Bill Transaction Report", "Billing Statement", "Client Advance Report", "Client Billing Collection", "Client Portal Registration MIS", "Client Transaction Details", "Collection MIS Reports", "Sales Summary Report", "Servicewise Transaction MIS Report", "Transaction Details MIS Report"],
    "Invoice MIS Report": ["Pending Invoices", "Paid Invoices", "Invoice Summary"],
    "Clinical MIS Report": ["Comprehensive Status MIS Report", "Final MIS Report", "MIV Comprehensive Status Report", "Patient Demographic Report", "Patientwise Result Report", "Result Based MIS Report", "Transfer MIS Report"],
    "Revenue MIS Report": ["Monthly Revenue", "Yearly Growth", "Profit Margins"],
    "Operational MIS Report": ["Daily Operations", "Logistics", "Staff Management"],
  };

  return (
    <div className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
      <header className="bg-[#81BFDA] text-white flex justify-between items-center px-6 py-3 shadow-md">
        <div className="flex items-center space-x-4">
          <button className="text-xl" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <FaBars />
          </button>
          <img src={logo} alt="Oncolab Diagnostics" className="h-10" />
          <h1 className="text-lg font-semibold">Oncolab Diagnostics LLC</h1>
        </div>

        <div className="flex items-center space-x-6">
          <span className="text-sm font-medium">ACCOUNTS1</span>

          <div className="relative">
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white px-2 rounded-full">19</span>
            <FaBell className="text-xl cursor-pointer" />
          </div>

          <div className="flex items-center space-x-2">
            <img src={avatar} alt="User" className="h-8 w-8 rounded-full border-2 border-white" />
            <span className="font-medium">THOMAS</span>
          </div>
        </div>
      </header>

      <div className="flex">
        {isSidebarOpen && (
          <div className="fixed top-0 left-0 h-screen w-64 bg-[#0d5c88] text-white shadow-lg p-5 z-50 overflow-y-auto">
            {Object.keys(menuItems).map((menu, index) => (
              <div key={index} className="relative w-full">
                <button
                  onClick={() => toggleMenu(menu)}
                  className="w-full mt-6 text-left text-m font-semibold mb-2 px-4 py-2 rounded hover:bg-[#81BFDA]"
                >
                  {menu}
                </button>
                {openMenus[menu] && (
                  <nav className="ml-4 mt-2 bg-[#81BFDA] text-xs text-white rounded shadow-lg p-2">
                    {menuItems[menu].map((submenu, subIndex) => (
                      <button key={subIndex} className="block w-full text-left py-2 px-4 rounded hover:bg-[#0d5c88]">
                        {submenu}
                      </button>
                    ))}
                  </nav>
                )}
              </div>
            ))}
          </div>
        )}
        
      </div>
    </div>
  );
}

export default Header;
