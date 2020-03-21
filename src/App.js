import React from "react";
import "./App.css";
import AddNote from "./components/add_note/AddNote";
import NoteList from "./components/note_list/NoteList";
import NavBar from "./components/navbar/NavBar";
import { NotesProvider } from "./store/NotesContext";

function App() {
  return (
    <div className="App">
      <NotesProvider>
        <NavBar />
        <AddNote />
        <NoteList />
      </NotesProvider>
    </div>
  );
}

export default App;
