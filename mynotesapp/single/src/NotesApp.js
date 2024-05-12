
import React, { useState } from "react";
import AddNote from "./AddNote";
import EditNote from "./EditNote";
import NotesList from "./NotesList";
import './NotesApp.css';

// Main app component
const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [updatingNoteId, setUpdatingNoteId] = useState(null);

  const handleAddNote = (title, context) => {
    const newNote = {
      id: Date.now(),
      title,
      context,
    };
    setNotes([...notes, newNote]);
  };

  const handleDeleteNote = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId));
  };

  const handleStartUpdateNote = (noteId) => {
    setUpdatingNoteId(noteId);
  };

  const handleCancelUpdateNote = () => {
    setUpdatingNoteId(null);
  };

  const handleUpdateNote = (noteId, updatedNoteTitle, updatedNoteContext) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === noteId) {
        return { ...note, title: updatedNoteTitle, context: updatedNoteContext };
      }
      return note;
    });
    setNotes(updatedNotes);
    setUpdatingNoteId(null);
  };

  return (
    <div className="notes-a">
      <h1>Notes App</h1>
      <AddNote handleAddNote={handleAddNote} />
      <NotesList
        notes={notes}
        handleDeleteNote={handleDeleteNote}
        handleStartUpdateNote={handleStartUpdateNote}
        updatingNoteId={updatingNoteId}
        handleCancelUpdateNote={handleCancelUpdateNote}
        handleUpdateNote={handleUpdateNote}
      />
    </div>
  );
};

export default NotesApp;
