// Notes.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Notes = ({ mode }) => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        try {
            const response = await axios.get("http://localhost:8080/notes");
            console.log("All notes:", response.data);
            setNotes(response.data);
        } catch (error) {
            console.error("Error fetching notes:", error);
        }
    };

    return (
        <div className={`container ${mode === 'dark' ? 'text-light' : 'text-dark'}`} style={{ backgroundColor: mode === 'dark' ? '#042743' : 'inherit' }}>
            <h1 className={`mb-4 ${mode === 'dark' ? 'text-light' : 'text-dark'}`}>Your Notes</h1>
            <div className="row">
                {notes.map((note, index) => (
                    <div key={note.id} className="col-md-4 mb-4">
                        <div className={`card border-${mode === 'dark' ? 'light' : 'primary'} ${mode === 'dark' ? 'bg-dark' : ''}`}>
                            <div className="card-body" style={{ backgroundColor : mode === 'dark' ? 'rgb(36, 74, 104)':'white' }}>
                                <h5 className={`card-title ${mode === 'dark' ? 'text-light' : 'text-dark'}`}>
                                    {`Note ${index + 1}`}
                                </h5>
                                <p className={`card-text ${mode === 'dark' ? 'text-light' : 'text-dark'}`}>
                                    {note.content}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notes;
