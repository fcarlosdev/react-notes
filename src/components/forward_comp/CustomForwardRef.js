import React, { forwardRef } from "react";

const CustomForwardRef = forwardRef((props, ref) => {
  return (
    <div ref={ref} onClick={props.handleClick || undefined}>
      {props.comp}
    </div>
  );
});

export default CustomForwardRef;
