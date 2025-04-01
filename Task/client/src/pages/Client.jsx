import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Client = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/api/patients", data);
      alert("Patient added successfully!");
      reset(); // Clear form after submission
    } catch (error) {
      console.error("Error adding patient:", error);
      alert("Error adding patient. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-5 bg-gray-100 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Add New Patient</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        
        <input className="w-full p-2 border rounded" {...register("name", { required: true })} placeholder="Name" />
        <input className="w-full p-2 border rounded" {...register("age", { required: true })} type="number" placeholder="Age" />
        
        <select className="w-full p-2 border rounded" {...register("gender", { required: true })}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input className="w-full p-2 border rounded" {...register("phone", { required: true })} type="tel" placeholder="Phone" />
        <input className="w-full p-2 border rounded" {...register("email")} type="email" placeholder="Email (optional)" />
        <input className="w-full p-2 border rounded" {...register("address", { required: true })} placeholder="Address" />
        
        <select className="w-full p-2 border rounded" {...register("bloodGroup")}>
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>

        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Submit</button>
      </form>
    </div>
  );
};

export default Client;
