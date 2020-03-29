import React, { forwardRef } from "react";

const CustomForwardRef = forwardRef((props, ref) => {
  return <div ref={ref}>{props.comp}</div>;
});

export default CustomForwardRef;
