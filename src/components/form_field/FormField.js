import React, { useRef } from "react";

import "./ffield.css";

const FormField = props => {

  const fieldRef = useRef(null);

  const applyClassName = () =>
    props.multline ? " form-field multlines-height" : "form-field";

  const changeEditable = status => {
    fieldRef.current.contentEditable = status;
    if (status === true) {
      fieldRef.current.focus();
    }
  };

  return (
    <div
      className={applyClassName()}
      placeholder={props.placeholder}
      onClick={() => changeEditable(true)}
      onBlur={() => {
        changeEditable(false);
        props.handleChange(fieldRef.current.innerHTML);
      }}
      ref={fieldRef}
      dangerouslySetInnerHTML={{ __html: props.html  }}
    />
  );
};

export default FormField;
