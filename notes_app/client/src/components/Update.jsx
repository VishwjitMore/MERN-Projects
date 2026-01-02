import React, { useEffect, useState } from 'react'
import { updateNote } from '../services/NoteApi';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from "axios"

function Update() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8080/notes/${id}`)
            .then((res) => {
                setTitle(res.data.title);
                setDescription(res.data.description);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id]);

    const HandleSubmit = ((e) => {
        e.preventDefault();
        updateNote(id, { title, description })
            .then(() => {
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            })
    })
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">

                <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                    Update Note
                </h1>

                <form onSubmit={HandleSubmit} className="space-y-5">

                    
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     focus:border-transparent"
                    />

                    
                    <textarea
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
                        className="w-full bg-green-600 text-white py-2 rounded-lg
                     hover:bg-green-700 transition font-medium"
                    >
                        Update Note
                    </button>

                </form>
            </div>
        </div>
    );

}

export default Update