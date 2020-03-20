import React, { createContext, useState } from "react";

const NotesContext = createContext([]);

const NotesProvider = props => {
  const [notes, setNotes] = useState([
    { id: 1, title: "Note One", content: "Model note" }
  ]);

  const addNote = note => {
    if (note.title || note.content) {
      note.id = notes.length + 1;
      setNotes([...notes, note]);
    }    
  };


  return (
    <NotesContext.Provider value={[notes, addNote]}>
      {props.children}
    </NotesContext.Provider>
  );
};

export { NotesContext, NotesProvider };
