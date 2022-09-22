import React from "react";
import ReactRotatingText from "react-rotating-text";

const RotatingText = ({ text }) => {
  return (
    <ReactRotatingText
      items={text}
      typingInterval={100}
      deletingInterval={100}
      color="#0078ff"
    />
  );
};

export default RotatingText;
