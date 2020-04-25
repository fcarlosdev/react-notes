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

    let content = fieldRef.current.innerText;
    let pattern1 = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/ig;
    let str1 = content.replace(pattern1, "<a href='$1' target='_blank' >$1</a>");

    let pattern2 =/(^|[^/])(www\.[\S]+(\b|$))/gim;
    return str1.replace(pattern2, '$1<a href="http://$2" target="_blank">$2</a>');
    
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
