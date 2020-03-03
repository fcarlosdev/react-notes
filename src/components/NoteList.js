import React from "react";

export default function NoteList({notes}) {
  return (
    <div className="notes">
      {notes.map(note => {
        return (
          <div className="note" key={note.id}>
            <div className="note-title">{note.title}</div>
            <div className="note-title">{note.content}</div>
          </div>
        );
      })}
    </div>
  );
}
