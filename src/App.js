import React, { useRef } from "react";
import "./App.css";
import AddNote from "./components/add_note/AddNote";
import NoteList from "./components/note_list/NoteList";
import NavBar from "./components/navbar/NavBar";
import { NotesProvider } from "./store/NotesContext";

function App() {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const footerRef = useRef(null);

  const controlFormResize = action => {
    [titleRef.current.style.display, footerRef.current.style.display] =
      action === "open" ? ["inline-block", "flex"] : ["none", "none"];
  };

  document.addEventListener("click", e => {
    controlFormResize(
      e.target.parentElement.classList[0] === "form-note" ? "open" : "close"
    );
  });

  return (
    <div className="App">
      <NotesProvider>
        <NavBar />
        <AddNote
          refs={{
            titleRef: titleRef,
            contentRef: contentRef,
            footerRef: footerRef
          }}
        />
        <NoteList />
      </NotesProvider>
    </div>
  );
}

export default App;
