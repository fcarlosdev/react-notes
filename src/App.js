import React, { useRef, useState } from "react";
import "./App.css";
import AddNote from "./components/add_note/AddNote";
import NoteList from "./components/note_list/NoteList";
import NavBar from "./components/navbar/NavBar";

function App() {
  const [notes, setNotes] = useState([]);

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
    let action = (e.target.parentElement.classList[0] === "form-note") ? "open" : "close";
    controlFormResize(action);
  });

  const handleSubmit = note => {
    if (note.title || note.content) {
      note.id = (notes.length + 1);
      setNotes([...notes, note]);
    }
    contentRef.current.style.height = "auto";
  };


  return (
    <div className="App">
      <NavBar />
      <AddNote
        submit={handleSubmit}
        refs={{
          titleRef: titleRef,
          contentRef: contentRef,
          footerRef: footerRef
        }}
      />
      <NoteList notes={notes}/>
    </div>
  );
}

export default App;
