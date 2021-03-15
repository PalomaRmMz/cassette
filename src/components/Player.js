import React from "react";
import "./style/Player.css";

class Player extends React.Component {
  render() {
    return (
      <div className="Player__container">
        <div className="Player__speed-box" id="speed-box"></div>
        <button className="Player__btn-player" id="btn-player-undo">
          <i className="fas fa-undo"></i>
        </button>
        <button className="Player__btn-player" id="btn-player-backward">
          <i className="fas fa-backward"></i>
        </button>
        <button className="Player__btn-player" id="btn-player-play">
          <i className="fas fa-play"></i>
        </button>
        <button className="Player__btn-player visible" id="btn-player-pause">
          <i className="fas fa-pause"></i>
        </button>
        <button className="Player__btn-player" id="btn-player-forward">
          <i className="fas fa-forward"></i>
        </button>
        <button className="Player__btn-player" id="btn-player-stop">
          <i className="fas fa-stop"></i>
        </button>
      </div>
    );
  }
}

export default Player;
