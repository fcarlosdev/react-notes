import React, { useState } from "react";

import { AiOutlineDelete } from "react-icons/ai";

import "./note.css";
import FormField from "../form_field/FormField";

const Note = ({ note }) => {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  return (
    <div className="note">
      <>
        <FormField
          className="note-title"
          placeholder="Ente a title"
          html={title}
          handleChange={setTitle}
        />
        <FormField
          placeholder="Enter a note"
          multline
          html={content}
          handleChange={setContent}
        />
      </>
      <div className="note-footer">
        <AiOutlineDelete />
      </div>
    </div>
  );
};

export default Note;
