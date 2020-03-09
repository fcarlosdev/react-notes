import React from "react";

import "./notelist.css";
import Note from "../Note/Note";

export default function NoteList({notes}) {
  return (
    <div className="notes">
      {notes.map(note => <Note note={note} key={note.id} />)}
    </div>
  );
}
