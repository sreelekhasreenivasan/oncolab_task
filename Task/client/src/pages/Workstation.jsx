import React, { useState, useEffect } from "react";
import { useModal } from "../ModalContext";

function Workstation() {
  const { isModalOpen, closeModal } = useModal();
  const [workstations, setWorkstations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    workstationName: "",
    ipAddress: "",
    isActive: false,
  });

  useEffect(() => {
    fetch("http://localhost:5000/get-workstations")
      .then((res) => res.json())
      .then((data) => setWorkstations(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/add-workstation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Workstation added successfully!");
        closeModal();
        setFormData({ workstationName: "", ipAddress: "", isActive: false });
      } else {
        console.error("Failed to add workstation");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="bg-[#E8F9FF] h-96 mt-8 mx-6 rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center">
          <input
            type="text"
            placeholder="Search by workstation name"
            className="p-2 border border-gray-300 rounded-md w-2/3 md:w-1/2 lg:w-1/3"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <a href="#" className="text-[#0d5c88] font-medium hover:underline hover:text-[#81BFDA]">
            Export to PDF
          </a>
        </div>

        <table className="w-full bg-white shadow-md rounded-lg mt-16">
          <thead className="bg-[#0d5c88] text-white text-left">
            <tr>
              <th className="py-3 px-4">Sl. No.</th>
              <th className="py-3 px-4">Workstation Name</th>
              <th className="py-3 px-4">IP Address</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {workstations
              .filter((ws) => ws.workstationName.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((ws, index) => (
                <tr key={ws._id}>
                  <td className="py-3 px-4">{index + 1}</td>
                  <td className="py-3 px-4">{ws.workstationName}</td>
                  <td className="py-3 px-4">{ws.ipAddress}</td>
                  <td className="py-3 px-4">{ws.isActive ? "Active" : "Inactive"}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Add Workstation</h2>
            <input
              name="workstationName"
              type="text"
              placeholder="Workstation Name"
              className="border p-2 w-full mb-2"
              value={formData.workstationName}
              onChange={handleChange}
            />
            <input
              name="ipAddress"
              type="text"
              placeholder="IP Address"
              className="border p-2 w-full mb-2"
              value={formData.ipAddress}
              onChange={handleChange}
            />
            <label className="flex items-center space-x-2 mb-2">
              <input
                type="checkbox"
                name="isActive"
                className="w-5 h-5 accent-[#81BFDA] cursor-pointer"
                checked={formData.isActive}
                onChange={handleChange}
              />
              <span className="text-gray-700 font-medium">Is Active</span>
            </label>
            <div className="flex justify-between mt-4">
              <button onClick={closeModal} className="bg-red-500 text-white px-4 py-2 rounded">
                Close
              </button>
              <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Workstation;
