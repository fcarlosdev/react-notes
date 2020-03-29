import React, { useState } from "react";

import { AiOutlineDelete } from "react-icons/ai";
import { IoIosLink } from "react-icons/io";
import Tippy from "@tippyjs/react";

import FormField from "../form_field/FormField";
import CustomForwardRef from "../forward_comp/CustomForwardRef";

import "./note.css";
import "tippy.js/dist/tippy.css";

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
        <Tippy content="Delete">
          <CustomForwardRef comp={<AiOutlineDelete />} />
        </Tippy>
        <Tippy content="Add link to selection">
          <CustomForwardRef comp={<IoIosLink />} />
        </Tippy>
      </div>
    </div>
  );
};

export default Note;
