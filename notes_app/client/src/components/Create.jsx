import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createNote } from '../services/NoteApi';

function Create() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const HandleSubmit = ((e) => {
        e.preventDefault();
        createNote({ title, description })
            .then(() => {
                navigate("/")
            })
            .catch((err) => {
                console.log(err);
            })
    })
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">

                <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                    Create Note
                </h1>

                <form onSubmit={HandleSubmit} className="space-y-5">

                    
                    
                    <input
                        type="text"
                        placeholder="Enter title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     focus:border-transparent"
                    />

                    
                    <textarea
                        placeholder="Enter description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        rows="5"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     focus:border-transparent resize-none"
                    />

                   
                   
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg
                     hover:bg-blue-700 transition duration-200
                     font-medium"
                    >
                        Save Note
                    </button>

                </form>
            </div>
        </div>
    );

}

export default Create