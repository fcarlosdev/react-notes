import React, { useState } from "react";

import "./addnote.css";

export default function AddNote({submit,refs:{titleRef, contentRef, footerRef}}) {
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
      let note = {id: 0, title, content}
      submit(note);
      setTitle("");
      setContent("");
  }

  return (
    <div>
      <form className="form-note" onSubmit={handleSubmit}>
        <input
          typ="text"
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
