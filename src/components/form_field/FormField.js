import React, { useRef } from "react";

import "./ffield.css";

const FormField = props => {
  console.log(props);

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
    />
  );
};

export default FormField;
