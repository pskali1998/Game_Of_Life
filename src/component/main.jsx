import React, { Component } from "react";
import Grid from "./grid";
import Buttons from "./button";
class Main extends Component {
  constructor() {
    super();
    this.speed = 80;
    this.col = 30;
    this.row = 50;
    this.state = {
      speed: this.speed,
      col: this.col,
      row: this.row,
      generation: 0,
      gridFull: Array(this.row)
        .fill()
        .map(() => Array(this.col).fill(false))
    };
  }
  selectBox = (row, col) => {
    let gridFull = JSON.parse(JSON.stringify(this.state.gridFull));
    gridFull[row][col] = !gridFull[row][col];
    this.setState({ gridFull });
  };
  seed = () => {
    let gridFull = JSON.parse(JSON.stringify(this.state.gridFull));
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.col; j++) {
        if (Math.floor(Math.random() * 4) === 1) {
          gridFull[i][j] = true;
        }
      }
    }
    this.setState({ gridFull });
  };
  playButton = () => {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.play, this.speed);
  };
  pauseButton = () => {
    clearInterval(this.intervalId);
  };
  play = () => {
    let g = this.state.gridFull;
    let g2 = JSON.parse(JSON.stringify(this.state.gridFull));
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.col; j++) {
        let count = 0;
        if (i > 0) if (g[i - 1][j]) count++;
        if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
        if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
        if (j < this.col - 1) if (g[i][j + 1]) count++;
        if (j > 0) if (g[i][j - 1]) count++;
        if (i < this.row - 1) if (g[i + 1][j]) count++;
        if (i < this.row - 1 && j > 0) if (g[i + 1][j + 1]) count++;
        if (i < this.row - 1 && this.col - 1) if (g[i + 1][j + 1]) count++;
        console.log("inloop");
        if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
        if (!g[i][j] && count === 3) g2[i][j] = true;
      }
    }
    this.setState({ gridFull: g2, generation: this.state.generation + 1 });
  };
  slow = () => {
    this.speed = 50;
    this.playButton();
  };
  fast = () => {
    this.speed = 100;
    this.playButton();
  };
  clear = () => {
    let gridFull = Array(this.row)
      .fill()
      .map(() => Array(this.col).fill(false));
    this.setState({
      gridFull: gridFull,
      generation: 0
    });
  };
  componentDidMount() {
    this.seed();
    this.playButton();
  }
  render() {
    const { gridFull, generation, row, col } = this.state;
    return (
      <div className="container-fluid bg1">
        <h1 className="hd1">Game Of Life</h1>
        <Buttons
          playButton={this.playButton}
          pauseButton={this.pauseButton}
          slow={this.slow}
          fast={this.fast}
          clear={this.clear}
          seed={this.seed}
          gridSize={this.gridSize}
        />
        <Grid
          gridFull={gridFull}
          col={col}
          row={row}
          selectBox={this.selectBox}
        />
        <h2 className="hd1">Generations : {generation}</h2>
      </div>
    );
  }
}

export default Main;
