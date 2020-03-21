import React, { useState, useRef } from "react";

import { FaEdit } from "react-icons/fa";
import { TiCancel } from "react-icons/ti";
import { AiOutlineDelete } from "react-icons/ai";

import "./note.css";

const Note = ({ note }) => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [editNote, setEditNote] = useState(false);

  const handleChangeTitle = () => {
    setTitle(titleRef.current.value);
  };

  const handleChangeContent = () => {
    // console.log(contentRef.current.innerHTML)
    setContent(contentRef.current.value);
  };

  const exibForm = () => {
    return (
      <form>
        <input
          type="text"
          className="note-title"
          value={title}
          ref={titleRef}
          onChange={handleChangeTitle}
        />
        <textarea
          className="note-content note-font"
          ref={contentRef}
          value={content}
          onChange={handleChangeContent}
        />
      </form>
    );
  };

  const test = value => {
    let toHtml = "";

    value.split("\n").forEach(row => {
      if (row.includes("https")) {
        let pos = row.indexOf("https");
        if (pos === 0) toHtml += "</br><a href=" + row + ">" + row + "</a>";
        else {
          toHtml += row
            .split(" ")
            .map(item => {
              return item.includes("http")
                ? item.replace(item, "<a href=" + item + ">" + item + "</a>")
                : item;
            })
            .join(" ");
        }
      } else {
        toHtml += "</br><sapn>" + row + "</span>";
      }
    });
    return { __html: toHtml };
  };

  const exibDivs = () => {
    return (
      <>
        <div className="note-title">{title}</div>
        <div className="note-content" dangerouslySetInnerHTML={test(content)} />
      </>
    );
  };

  return (
    <div className="note">
      {editNote === true ? exibForm() : exibDivs()}
      <div className="note-footer">
        {editNote === false ? (
          <FaEdit onClick={() => setEditNote(true)} />
        ) : (
          <TiCancel onClick={() => setEditNote(false)} />
        )}
        <AiOutlineDelete />
      </div>
    </div>
  );
};

export default Note;
