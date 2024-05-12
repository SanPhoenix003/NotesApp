import React from "react";
import EditNote from "./EditNote";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTimes } from "react-icons/fa";
const NotesList = ({
  notes,
  handleDeleteNote,
  handleStartUpdateNote,
  updatingNoteId,
  handleCancelUpdateNote,
  handleUpdateNote,
}) => {
  const handleDeleteClick = (id) => {
    handleDeleteNote(id);
    toast.success('Note deleted successfully!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      icon: <FaTimes color="red" />,
      progressStyle: {
        backgroundColor: 'red'
      }
    });
  }

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <div className="note" key={note.id}>
          {updatingNoteId === note.id ? (
            <EditNote
              note={note}
              handleUpdateNote={handleUpdateNote}
              handleCancelUpdateNote={handleCancelUpdateNote}
            />
          ) : (
            <>
              <h2 className="note-title">{note.title}</h2>
              <span className="note-context">{note.context}</span>
              <div className="note-buttons">
                <button style={{backgroundColor:'red'}} onClick={() => handleDeleteClick(note.id)}>Delete</button>
                <button onClick={() => handleStartUpdateNote(note.id)}>Edit</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default NotesList;
