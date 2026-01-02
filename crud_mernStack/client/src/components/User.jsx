import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';

function User() {
    const {id}=useParams();
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080")
            .then((result) => { setUsers(result.data) })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const HandleDelete = (id) => {
        if (!window.confirm("Are you sure you want to delete this user?")) return;

        axios.delete(`http://localhost:8080/delete/${id}`)
            .then(() => {
                setUsers(users.filter(user => user._id !== id));
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="min-h-screen bg-slate-900 p-6 text-gray-200">
            <div className="max-w-4xl mx-auto">


                {/* Card */}
                <div className="bg-slate-950 border border-slate-800 rounded-xl shadow-lg">

                    {/* Header */}
                    <div className="px-6 py-4 border-b border-slate-800">
                        <button onClick={() => { navigate("/create") }} className="text-lg font-semibold bg-blue-600 p-1.5 rounded-md hover:text-black">Create new User</button>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-900 text-slate-400">
                                <tr>
                                    <th className="px-6 py-3 text-left font-medium">Name</th>
                                    <th className="px-6 py-3 text-left font-medium">Email</th>
                                    <th className="px-6 py-3 text-left font-medium">Age</th>
                                    <th className="px-6 py-3 text-left font-medium">Action</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-slate-800">
                                {/* Backend data will come here */}

                                {users.map((user) => (
                                    <tr className="hover:bg-slate-900 transition">
                                        <td className="px-6 text-left py-3">{user.name}</td>
                                        <td className="px-6 py-3 text-left text-slate-400">{user.email}</td>
                                        <td className="px-6 py-3 text-left">{user.age}</td>
                                        <td className="px-6 py-3  text-left flex gap-3">
                                            <button onClick={() => { navigate(`/update/${user._id}`) }} className="p-1.5 bg-blue-700 text-white hover:text-black rounded-sm">
                                                Edit
                                            </button>
                                            <button onClick={()=>{HandleDelete(user._id)}} className=" p-1.5 bg-red-500 text-white hover:text-black rounded-sm">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User