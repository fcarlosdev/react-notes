const autoResizeTextArea = textArea => {
  if (textArea !== null) {
    textArea.style.height = "auto";
    textArea.style.height = textArea.scrollHeight + "px";
  }
};

export { autoResizeTextArea };
