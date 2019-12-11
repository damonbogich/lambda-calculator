import React from "react";

const Display = (props) => {
  console.log(props);
  return <div className="display">{props.number}{/* Display any props data here */}</div>;
};
export default Display;