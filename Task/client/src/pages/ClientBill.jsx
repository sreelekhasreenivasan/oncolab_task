import React, { useState, useEffect } from "react";
import { useModal } from "../ModalContext";

function ClientBill() {
  const { isModalOpen, closeModal } = useModal();
  const [patients, setPatients] = useState([]);  
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    patientName: "",
    patientID: "",
    visitDate: "",
    visitID: "",
    clientName: "",
    testName: "",
    mrp: "",
    discountAmount: "",
    netAmount: "",
    collectedAmount: "",
    dueAmount: "",
    b2b: "",
    differenceAmount: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/all")  
      .then((res) => res.json())
      .then((data) => setPatients(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Data added successfully!");
        closeModal();
        setFormData({});
      } else {
        console.error("Failed to add data");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="bg-[#E8F9FF] h-96 mt-8 mx-6 rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center">
          <div className="flex justify-center w-full">
            <input
              type="text"
              placeholder="Search by client name"
              className="p-2 border border-gray-300 rounded-md w-2/3 md:w-1/2 lg:w-1/3"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-[#0d5c88] font-medium hover:underline hover:text-[#81BFDA]">
              Export PDF
            </a>
            <a href="#" className="text-[#0d5c88] font-medium hover:underline hover:text-[#81BFDA]">
              Export Excel
            </a>
          </div>
        </div>

        <table className="w-full bg-white shadow-md rounded-lg mt-16">
          <thead className="bg-[#0d5c88] text-white text-left">
            <tr>
              <th className="py-3 px-4">Sl. No.</th>
              <th className="py-3 px-4">Patient Name</th>
              <th className="py-3 px-4">Patient ID</th>
              <th className="py-3 px-4">Visit Date</th>
              <th className="py-3 px-4">Visit ID</th>
              <th className="py-3 px-4">Client Name</th>
              <th className="py-3 px-4">Test Name</th>
              <th className="py-3 px-4">MRP</th>
              <th className="py-3 px-4">Discount Amount</th>
              <th className="py-3 px-4">Net Amount</th>
              <th className="py-3 px-4">Collected Amount</th>
              <th className="py-3 px-4">Due Amount</th>
              <th className="py-3 px-4">B2B</th>
              <th className="py-3 px-4">Difference Amount</th>
            </tr>
          </thead>
          <tbody>
            {patients
              .filter((patient) =>
                patient.clientName.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((patient, index) => (
                <tr key={patient._id}>
                  <td className="py-3 px-4">{index + 1}</td>
                  <td className="py-3 px-4">{patient.patientName}</td>
                  <td className="py-3 px-4">{patient.patientID}</td>
                  <td className="py-3 px-4">{patient.visitDate}</td>
                  <td className="py-3 px-4">{patient.visitID}</td>
                  <td className="py-3 px-4">{patient.clientName}</td>
                  <td className="py-3 px-4">{patient.testName}</td>
                  <td className="py-3 px-4">{patient.mrp}</td>
                  <td className="py-3 px-4">{patient.discountAmount}</td>
                  <td className="py-3 px-4">{patient.netAmount}</td>
                  <td className="py-3 px-4">{patient.collectedAmount}</td>
                  <td className="py-3 px-4">{patient.dueAmount}</td>
                  <td className="py-3 px-4">{patient.b2b}</td>
                  <td className="py-3 px-4">{patient.differenceAmount}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Add Details</h2>
            {Object.keys(formData).map((key) => (
              <input
                key={key}
                name={key}
                type={key === "visitDate" ? "date" : "text"}
                placeholder={key.replace(/([A-Z])/g, " $1").trim()}
                className="border p-2 w-full mb-2"
                value={formData[key]}
                onChange={handleChange}
              />
            ))}
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

export default ClientBill;
