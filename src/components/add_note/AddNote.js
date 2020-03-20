import React, { useState, useContext } from "react";

import "./addnote.css";
import { NotesContext } from "../../store/NotesContext";

export default function AddNote({ refs: { titleRef, contentRef, footerRef } }) {
  const [, addNote] = useContext(NotesContext);
  console.log(addNote);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = () => {
    setTitle(titleRef.current.value);
  };

  const handleContentChange = () => {
    setContent(contentRef.current.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    let note = { id: 0, title, content };
    addNote(note);
    setTitle("");
    setContent("");
    contentRef.current.style.height = "auto";
  };

  return (
    <div>
      <form className="form-note" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          className="field"
          placeholder="Title"
          ref={titleRef}
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          name="content"
          className="field"
          rows="1"
          placeholder="Enter a note"
          ref={contentRef}
          value={content}
          onChange={handleContentChange}
          onInput={() => {
            contentRef.current.style.height = "auto";
            contentRef.current.style.height =
              contentRef.current.scrollHeight + "px";
          }}
        ></textarea>
        <div className="form-footer" ref={footerRef}>
          <button id="bt-close">close</button>
        </div>
      </form>
    </div>
  );
}
