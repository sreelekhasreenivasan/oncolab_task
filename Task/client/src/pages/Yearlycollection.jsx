import React from 'react'

function Yearlycollection() {
  return (
    <>

    <div className='bg-[#E8F9FF] h-96 mt-8 mx-6 rounded-lg shadow-md p-6 justify-between'>
      <div className='flex justify-between'>
      <p className='text-gray-700 text-xl font-semibold'>Client Yearly Collection Report</p>
      
      <select className="px-4 py-2 border h-8 text-xs rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#81BFDA]">
        <option value="all"> Select All</option>
        <option value="walkin">Walkin</option>
        <option value="doctor">Doctor</option>
        <option value="client">Client</option>

      </select>
      <select className="px-4 py-2 border h-8 text-xs rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#81BFDA]">
        <option value="total">Total</option>
        <option value="collection">Collection</option>
        <option value="outstand">Outstanding</option>

      </select>
      <select className="px-4 py-2 border h-8 text-xs rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#81BFDA]">
        <option value="year1"> 2025-2026</option>
        <option value="year2">2024-2025</option>
        <option value="year3">2023-2024</option>
        <option value="year4">2022-2023</option>

      </select>

      <a 
        href="#" 
        className="text-[#0d5c88] font-medium hover:underline hover:text-[#81BFDA]"
      >
        Export to PDF
      </a>
      </div>
      <table className="w-full bg-white shadow-md rounded-lg mt-16 overflow-hidden">
        <thead className="bg-[#0d5c88] text-white text-left">
          <tr>
            <th className="py-3 px-4">Sl. No.</th>
            <th className="py-3 px-4">Referral Name</th>
            <th className="py-3 px-4">JAN</th>
            <th className="py-3 px-4">FEB</th>
            <th className="py-3 px-4">MARCH</th>
            <th className="py-3 px-4">APRIL</th>
            <th className="py-3 px-4">MAY</th>
            <th className="py-3 px-4">JUNE</th>
            <th className="py-3 px-4">JULY</th>
            <th className="py-3 px-4">AUG</th>
            <th className="py-3 px-4">SEP</th>
            <th className="py-3 px-4">OCT</th>
            <th className="py-3 px-4">NOV</th>
            <th className="py-3 px-4">DEC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="5" className="text-center py-6 text-red-500">No records available</td>
          </tr>
        </tbody>
      </table>
      
    </div>
  </>
  )
}

export default Yearlycollection