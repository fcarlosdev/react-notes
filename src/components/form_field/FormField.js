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

  const saveContent = () => {
    let value = fieldRef.current.innerHTML;
    if (value.includes("<a") ) {      
      let start     = value.indexOf("<a");
      let finish    = value.indexOf("\">");
      let link      = value.substring(start,finish+2);
      let finalLink = value.substring(start,start+3) + 'target="_blank" ' + value.substring(start+3,finish+2);
      value         = value.replace(link,finalLink)
    } 
    return value;
  }

  return (
    <div
      id={props.id || null}
      className={applyClassName()}
      placeholder={props.placeholder || "Enter a value"}
      onClick={() => changeEditable(true)}
      onBlur={() => {        
        changeEditable(false);
        if (props.handleChange !== undefined)
        props.handleChange(saveContent());          
      }}
      ref={fieldRef}
      dangerouslySetInnerHTML={{ __html: props.html  }}
    />
  );
};

export default FormField;
