import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from "axios"

function Create() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();

  const navigate = useNavigate();

  const HandleSubmit = (e) => {
    e.preventDefault();
    try{
        axios.post("http://localhost:8080/create", { name, email, age });
        navigate("/");
    } catch(err){
      console.log(err);
    }
  }

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-xl shadow-lg mb-8">

      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-800">
        <h2 className="text-lg font-semibold text-gray-200">
          Create New User
        </h2>
      </div>

      {/* Form */}
      <form className="p-6 space-y-5">

        {/* Name */}
        <div>
          <label className="block text-sm text-slate-400 mb-1">
            Name
          </label>
          <input
            onChange={(e) => { setName(e.target.value) }}
            type="text"
            placeholder="Enter name"
            className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-gray-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm text-slate-400 mb-1">
            Email
          </label>
          <input
            onChange={(e) => { setEmail(e.target.value) }}
            type="email"
            placeholder="Enter email"
            className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-gray-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        {/* Age */}
        <div>
          <label className="block text-sm text-slate-400 mb-1">
            Age
          </label>
          <input
            onChange={(e) => { setAge(e.target.value) }}
            type="number"
            placeholder="Enter age"
            className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-gray-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            onClick={HandleSubmit}
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold py-2 rounded-lg transition"
          >
            Create User
          </button>
        </div>

      </form>
    </div>
  )
}

export default Create