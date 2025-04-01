import React from "react";
import {
  FaPlus,
  FaSave,
  FaPrint,
  FaEnvelope,
  FaBrush,
  FaRedo,
  FaTruck,
  FaDownload,
  FaExclamationCircle,
  FaTimes,
} from "react-icons/fa";
import { useModal } from "../ModalContext"; // Import context hook

function TopNavbar() {
  const { openModal } = useModal(); // Get function to open modal

  return (
    <div className="bg-[#0d5c88] text-white flex items-center px-48 shadow-md relative">
      <div className="flex pl-96">
        {[
          { icon: FaPlus, label: "Create", onClick: openModal }, // Open modal when clicked
          { icon: FaSave, label: "Save" },
          { icon: FaPrint, label: "Print" },
          { icon: FaEnvelope, label: "Email" },
          { icon: FaBrush, label: "Clear" }, 
          { icon: FaRedo, label: "Refresh" },
          { icon: FaTruck, label: "Dispatch" },
          { icon: FaDownload, label: "Fetch" },
          { icon: FaExclamationCircle, label: "Issues" },
          { icon: FaTimes, label: "Close" },
        ].map((item, index, arr) => (
          <div key={index} className="flex">
            <button
              className="flex flex-col items-center text-sm px-4 py-2 hover:opacity-100 transition opacity-60"
              onClick={item.onClick} // Call function when clicked
            >
              <item.icon className="text-lg" />
              <span className="mt-1">{item.label}</span>
            </button>

            {index !== arr.length - 1 && <div className="h-15 w-[1px] bg-white"></div>}
          </div>
        ))}
      </div>
      <marquee behavior="scroll" direction="left" className="text-xs text-yellow-600 font-semibold">
        ****Dear customer, Please note that there is an outstanding payment and your last due date is 23-03-2025. Kindly make the payment to be available for our support service.*****
      </marquee>
    </div>
  );
}

export default TopNavbar;
