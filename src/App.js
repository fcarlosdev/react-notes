import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const footerRef = useRef(null);

  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const controlFormResize = (e, action) => {

    console.log(e.target);    

    if (action !== "close" && !e.target.classList.contains("App")) {
      titleRef.current.style.display = "inline-block";
      footerRef.current.style.display = "flex";
    } else {
      titleRef.current.style.display = "none";
      footerRef.current.style.display = "none";      
    }
  };

  const handSubmit = event => {
    event.preventDefault();    
    setNotes([...notes, {id: (notes.length+1), title, content}]);
    setTitle("");
    setContent("");    
    contentRef.current.style.height = "auto";
  };

  const handleContentInput = () => {
    contentRef.current.style.height = "auto";
    contentRef.current.style.height = 
      contentRef.current.scrollHeight + "px";
  }

  const chooseAction = e => {
    return e.target.attributes[0].value === "btClose" ? "close" : "";
  };

  return (
    <div className="App" onClick={e => controlFormResize(e, chooseAction(e))}>
      <form className="create-note" onSubmit={handSubmit}>
        <input
          name="title"
          type="text"          
          placeholder="Title"
          ref={titleRef}
          value={title}
          onChange={() => setTitle(titleRef.current.value)}
        />
        <textarea
          name="content"
          rows="1"
          placeholder="Enter a note"
          value={content}
          ref={contentRef}
          onInput={handleContentInput}          
          onChange={() => setContent(contentRef.current.value)}
        />
        <div className="form-footer" ref={footerRef}>
          <button id="btClose">close</button>
        </div>
      </form>
      <div className="note-list">
        {notes.map(note => {
          return (
            <div className="note" key={note.id}>
              <div className="note-title">{note.title}</div>
              <div className="note-content">{note.content}</div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
