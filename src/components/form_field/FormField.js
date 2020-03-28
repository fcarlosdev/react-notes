import React, { useRef } from "react";

import "./ffield.css";

const FormField = props => {

  const fieldRef = useRef(null);

  const applyClassName = () =>{
    let className = "form-field ";
    if (props.multline) {
      className += "multlines-height";
    }
    if (props.className !== undefined)
      className += " " + props.className;
    return className;
  }

  const changeEditable = status => {
    fieldRef.current.contentEditable = status;
    if (status === true) {
      fieldRef.current.focus();
    }
  };

  return (
    <div
      id={props.id || null}
      className={applyClassName()}
      placeholder={props.placeholder || "Enter a value"}
      onClick={() => changeEditable(true)}
      onBlur={() => {
        changeEditable(false);
        if (props.handleChange !== undefined)
          props.handleChange(fieldRef.current.innerHTML);
      }}
      ref={fieldRef}
      dangerouslySetInnerHTML={{ __html: props.html  }}
    />
  );
};

export default FormField;
