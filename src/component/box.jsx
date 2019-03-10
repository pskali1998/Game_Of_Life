import React from "react";
const Box = props => {
  return (
    <div
      className={props.boxClass}
      id={props.boxId}
      onClick={() => {
        props.selectBox(props.row, props.col);
      }}
    />
  );
};

export default Box;
