import React, { useState, useContext, useRef } from "react";

import "./addnote.css";
import { NotesContext } from "../../store/NotesContext";
import { autoResizeTextArea } from "../../shared/lib";

export default function AddNote() {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const footerRef = useRef(null);

  const [, addNote] = useContext(NotesContext);

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

  const controlFormResize = action => {
    [titleRef.current.style.display, footerRef.current.style.display] =
      action === "open" ? ["inline-block", "flex"] : ["none", "none"];
  };

  document.addEventListener("click", e => {
    controlFormResize(
      e.target.parentElement &&
        e.target.parentElement.classList[0] === "form-note"
        ? "open"
        : "close"
    );
  });

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
          onInput={() => autoResizeTextArea(contentRef.current)}
        ></textarea>
        <div className="form-footer" ref={footerRef}>
          <button id="bt-close">close</button>
        </div>
      </form>
    </div>
  );
}
