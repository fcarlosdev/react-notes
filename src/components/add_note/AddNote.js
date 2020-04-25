import React, { useState, useContext, useRef } from "react";
import FormField from "../form_field/FormField";

import { NotesContext } from "../../store/NotesContext";

import "./addnote.css";

const AddNote = () => {
  const footerRef = useRef(null);  

  const [, addNote] = useContext(NotesContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    let note = { id: 0, title, content };
    addNote(note);
    setTitle("");
    setContent("");    
    document.getElementById("fcontent").style.height="auto";
  };

  const controlFormResize = action => {
    [document.getElementById("ftitle").style.display, 
     document.getElementById("fcontent").style.display, 
        footerRef.current.style.display] =
      action === "open" ? ["inline-block", "multline", "flex"] : ["none", "", "none"];
  };

  document.addEventListener("click", e => {
    controlFormResize(
      e.target.parentElement &&
        e.target.parentElement.classList[0] === "form-note2"
        ? "open"
        : "close"
    );
  });

  return (
    <form className="form-note2" onSubmit={handleSubmit}>
      <FormField
        html={title}
        handleChange={setTitle}
        placeholder="Title"
        id="ftitle"
      />
      <FormField
        html={content}
        handleChange={setContent}
        placeholder="Enter a note"
        id="fcontent" 
      />
      <div className="form-footer2" ref={footerRef}>
        <button id="bt-close">close</button>
      </div>
    </form>
  );
};

export default AddNote;
