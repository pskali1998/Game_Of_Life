import React from "react";
import Box from "./box";
const Grid = props => {
  const width = props.col * 14;
  let rowArr = [];
  let boxClass = "";
  for (let i = 0; i < props.row; i++) {
    for (let j = 0; j < props.col; j++) {
      let boxId = i + "_" + j;
      boxClass = props.gridFull[i][j] ? "box on" : "box off";
      rowArr.push(
        <Box
          boxClass={boxClass}
          key={boxId}
          boxId={boxId}
          row={i}
          col={j}
          selectBox={props.selectBox}
        />
      );
    }
  }
  return (
    <div className="grid" style={{ width }}>
      {rowArr}
    </div>
  );
};

export default Grid;
