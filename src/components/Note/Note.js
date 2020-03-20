import React, {useState, useRef} from "react";

import { AiOutlineDelete } from "react-icons/ai";

import "./note.css";

const Note = ({ note }) => {

  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  let edit = false; //Put it on the shared context

  const handleChangeTitle = () => {
    setTitle(titleRef.current.value);
  };

  const handleChangeContent = () => {
    setContent(contentRef.current.value);
  }

  const exibForm = () => {
    return (<form>
        <input
          type="text"          
          className="note-title"
          value={title}
          ref={titleRef}          
          onChange={handleChangeTitle}
        />
        <textarea   
          className="note-content"
          ref={contentRef}
          value={content}          
          onChange={handleChangeContent}          
        />
    </form>)
  }

  const exibDivs = () => {
    return (
      <>
      <div className="note-title">{title}</div>
      <div className="note-content">{content}</div>
      </>
    )
  }

  return (
    <div className="note">
      {edit === true ? exibForm() : exibDivs()}
      <div className="note-footer">        
        <AiOutlineDelete />
      </div>
    </div>
  );
};

export default Note;
