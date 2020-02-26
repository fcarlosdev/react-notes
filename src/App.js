import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const footerRef = useRef(null);

  const controlFormResize = action => {
    if (action === "open") {
      titleRef.current.style.display = "inline-block";
      footerRef.current.style.display = "flex";
    } else {
      titleRef.current.style.display = "none";
      footerRef.current.style.display = "none";
    }
  };

  document.addEventListener("click", e => {
    if (
      e.target.classList[0] === "App" ||
      e.target.getAttribute("id") === "bt-close"
    ) {
      controlFormResize("close");
    } else {
      controlFormResize("open");
    }
  });

  const handleSubmit = e => {
    e.preventDefault();
    if (title || content) {
      setNotes([...notes,{id: (notes.length+1), title, content}])
    }
    setTitle("");
    setContent("");
    contentRef.current.style.height = "auto";
  };

  const handleTitleChange = () => {
    setTitle(titleRef.current.value)
  }

  const handleContentChange = () => {
    setContent(contentRef.current.value);
  }

  return (
    <div className="App">
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
          onInput={ () => {
            contentRef.current.style.height = "auto";
            contentRef.current.style.height = contentRef.current.scrollHeight + "px";
          }}
        ></textarea>
        <div className="form-footer" ref={footerRef}>
          <button id="bt-close">close</button>
        </div>
      </form>
      <div className="notes">
        {notes.map(note => {
          return (<div className="note" key={note.id}> 
            <div className="note-title">{note.title}</div>
            <div className="note-title">{note.content}</div>
          </div>)
        })}
      </div>
    </div>
  );
}

export default App;
