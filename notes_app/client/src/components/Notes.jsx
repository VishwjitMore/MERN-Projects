import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getNotes, deleteNote } from "../services/NoteApi";

function Notes() {
    const [notes, setNotes] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getNotes()
            .then((res) => {
                setNotes(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const HandleDelete = ((id) => {
        deleteNote(id)
            .then(() => {
                return getNotes();
            })
            .then((res) => {
                setNotes(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    })
    return (
        <div className="min-h-screen bg-gray-100 px-6 py-8">

            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-semibold text-gray-800">
                    All Notes
                </h1>

                <button
                    onClick={() => navigate("/create")}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg
                   hover:bg-blue-700 transition font-medium"
                >
                    + Create New Note
                </button>
            </div>

            
            {notes.length === 0 ? (
                <p className="text-gray-500 text-center mt-20">
                    No notes found. Create your first note 🚀
                </p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {notes.map(note => (
                        <div
                            key={note._id}
                            className="bg-white rounded-xl shadow-md p-5
                       hover:shadow-lg transition"
                        >

                            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                {note.title}
                            </h2>

                            <p className="text-gray-600 mb-4 line-clamp-3">
                                {note.description}
                            </p>

                            <p className="text-sm text-gray-400 mb-4">
                                UpdatedAt: {new Date(note.updatedAt).toLocaleString()}
                            </p>

                            
                            <div className="flex justify-end gap-3">
                                <button
                                    onClick={() => navigate(`/update/${note._id}`)}
                                    className="px-3 py-1.5 text-sm rounded-md
                           bg-yellow-500 text-white
                           hover:bg-yellow-600 transition"
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() => HandleDelete(note._id)}
                                    className="px-3 py-1.5 text-sm rounded-md
                           bg-red-500 text-white
                           hover:bg-red-600 transition"
                                >
                                    Delete
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            )}
        </div>
    );

}

export default Notes;