import React from "react";
import {
  ButtonToolbar,
  Dropdown,
  Button,
  DropdownButton
} from "react-bootstrap";

const Buttons = props => {
  const handleSelect = evt => {
    console.log(evt);
    props.gridSize(evt);
  };
  return (
    <div className="center">
      <ButtonToolbar>
        <Button variant="success" onClick={props.playButton}>
          Play |>
        </Button>
        <Button variant="warning" onClick={props.pauseButton}>
          Pause ||
        </Button>
        <Button variant="danger" onClick={props.clear}>
          Clear -
        </Button>
        <Button variant="info" onClick={props.slow}>
          Slow\/
        </Button>
        <Button variant="info" onClick={props.fast}>
          Fast /\
        </Button>
        <Button variant="dark" onClick={props.seed}>
          Seed+
        </Button>
      </ButtonToolbar>
    </div>
  );
};

export default Buttons;
