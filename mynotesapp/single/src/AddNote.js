import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddNote = ({ handleAddNote }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContext, setNoteContext] = useState("");

  const handleTitleChange = (event) => {
    setNoteTitle(event.target.value);
  };

  const handleContextChange = (event) => {
    setNoteContext(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (noteTitle.trim().length > 0 && noteContext.trim().length > 0) {
      handleAddNote(noteTitle, noteContext);
      setNoteTitle("");
      setNoteContext("");
      toast.success("Note added successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
         
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="add-n">
      <form onSubmit={handleSubmit} className="form-inline">
        <div className="form-group">
          <input type="text" placeholder="Note title" value={noteTitle} onChange={handleTitleChange} className="form-control mr-2" />
          <input type="text" placeholder="Note context" value={noteContext} onChange={handleContextChange} className="form-control mr-2" />
        </div>
        <button type="submit" className="btn btn-primary">Add Note</button>
      </form>
    </div>
  );
};

export default AddNote;
