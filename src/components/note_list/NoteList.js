import React, { useContext } from "react";

import "./notelist.css";
import Note from "../Note/Note";
import { NotesContext } from "../../store/NotesContext";

export default function NoteList() {
  const [notes] = useContext(NotesContext);
  return (
    <div className="notes">
      {notes.map(note => <Note note={note} key={note.id} />)}
    </div>
  );
}
