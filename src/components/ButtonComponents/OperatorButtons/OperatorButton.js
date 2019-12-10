import React from "react";

const OperatorButton = (props) => {
  return (
    <div className = "opContainer">
      <button className = "opButtons">{props.display.char}</button>
    </div>
  );
};
export default OperatorButton;
