import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';

function Update() {
  const { id } = useParams();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/update/${id}`)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setAge(res.data.age);
      }).catch((err) => {
        console.log(err);
      })
  }, [id]);

  const HandleUpdate = (e) => {
  e.preventDefault();
  axios.put(`http://localhost:8080/update/${id}`, {
    name,
    email,
    age,
  })
  .then(() => {
    navigate("/");
  });
};

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      {/* Modal Card */}
      <div className="w-full max-w-md bg-slate-950 border border-slate-800 rounded-xl shadow-lg">

        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-200">
            Update User
          </h2>
          <button onClick={() => { navigate("/") }} className="text-slate-400 hover:text-gray-200">
            ✕
          </button>
        </div>

        {/* Form */}
        <form className="p-6 space-y-5">

          {/* Name */}
          <div>
            <label className="block text-sm text-slate-400 mb-1">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => { setName(e.target.value) }}
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-slate-400 mb-1">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm text-slate-400 mb-1">
              Age
            </label>
            <input
              value={age}
              onChange={(e) => { setAge(e.target.value) }}
              type="number"
              className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <button
              onClick={HandleUpdate}
              type="submit"
              className="flex-1 bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold py-2 rounded-lg transition"
            >
              Update
            </button>

            <button
              onClick={() => { navigate("/") }}
              type="button"
              className="flex-1 bg-slate-800 text-gray-200 py-2 rounded-lg transition hover:bg-sky-500 hover:text-black font-semibold"
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Update