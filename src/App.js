import React, { useRef, useState } from "react";
import "./App.css";
import AddNote from "./components/add_note/AddNote";
import NoteList from "./components/note_list/NoteList";
import NavBar from "./components/navbar/NavBar";

function App() {
  const [notes, setNotes] = useState([{id: 1, title:"Note One", content:"Model note"}]);

  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const footerRef = useRef(null);

  const controlFormResize = action => {
    [titleRef.current.style.display, footerRef.current.style.display] =
      action === "open" ? ["inline-block", "flex"] : ["none", "none"];
  };

  document.addEventListener("click", e => {
    controlFormResize(e.target.parentElement.classList[0] === "form-note" ? "open" : "close");
  });

  const handleSubmit = note => {
    if (note.title || note.content) {
      note.id = notes.length + 1;
      setNotes([...notes, note]);
    }
    contentRef.current.style.height = "auto";
  };

  // const handlEditNote = () => {

  // }

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
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
