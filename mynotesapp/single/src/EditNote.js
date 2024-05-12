
import React, { useState } from "react";

const EditNote = ({ note, handleUpdateNote, handleCancelUpdateNote }) => {
  const [updatedNoteTitle, setUpdatedNoteTitle] = useState(note.title);
  const [updatedNoteContent, setUpdatedNoteContent] = useState(note.content);

  const handleTitleChange = (event) => {
    setUpdatedNoteTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setUpdatedNoteContent(event.target.value);
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    if (updatedNoteTitle.trim().length > 0 && updatedNoteContent.trim().length > 0) {
      handleUpdateNote(note.id, updatedNoteTitle, updatedNoteContent);
    }
  };

  const handleCancel = () => {
    handleCancelUpdateNote();
  };

  return (
    <div className="edit-n">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={updatedNoteTitle} onChange={handleTitleChange} />
        <textarea placeholder="Context" value={updatedNoteContent} onChange={handleContentChange} />
        <button style={{backgroundColor:'green'}}>Update</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditNote;
