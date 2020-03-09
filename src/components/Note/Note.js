import React from "react";

import { FaEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

import "./note.css";

const Note = ({note}) => {      

  return (
    <div className="note">
      <div className="note-title">{note.title}</div>
      <div className="note-title">{note.content}</div>
      <div className="note-footer">
          <FaEdit />
          <AiOutlineDelete />
      </div>
    </div>
  );
}

export default Note;
