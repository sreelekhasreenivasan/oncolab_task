import React from 'react';

function Workstation() {
  return (
    <>
      <div className='bg-[#E8F9FF] h-24 flex items-center justify-center space-x-4 px-6 shadow-md'>
        <input 
          placeholder='Workstation Name' 
          className='h-10 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#81BFDA]' 
        />
        <input 
          placeholder='IP Address' 
          className='h-10 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#81BFDA]' 
        />
        
        <label className='flex items-center space-x-2'>
          <input type='checkbox' className='w-5 h-5 accent-[#81BFDA] cursor-pointer' />
          <span className='text-gray-700 font-medium'>Is Active</span>
        </label>
      </div>

      <div className='bg-[#E8F9FF] h-96 mt-8 mx-6 rounded-lg shadow-md p-6 justify-between'>
        <div className='flex justify-between'>
        <p className='text-gray-700 text-xl font-semibold'>Workstation List</p>
        
        <select className="px-4 py-2 border h-8 text-xs rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#81BFDA]">
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
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
              <th className="py-3 px-4">Edit</th>
              <th className="py-3 px-4">Workstation Name</th>
              <th className="py-3 px-4">IP Address</th>
              <th className="py-3 px-4">Status</th>
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
  );
}

export default Workstation;
