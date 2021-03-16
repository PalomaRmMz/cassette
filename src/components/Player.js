import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style/Player.css";
import "../library/fontawesome";

class Player extends React.Component {
  render() {
    return (
      <div className="Player__container">
        <div className="Player__speed-box" id="speed-box"></div>
        <button className="Player__btn-player" id="btn-player-undo">
          <FontAwesomeIcon icon={["fa", "undo"]} />
        </button>
        <button className="Player__btn-player" id="btn-player-backward">
          <FontAwesomeIcon icon={["fa", "backward"]} />
        </button>
        <button className="Player__btn-player" id="btn-player-play">
          <FontAwesomeIcon icon={["fa", "play"]} />
        </button>
        <button className="Player__btn-player visible" id="btn-player-pause">
          <FontAwesomeIcon icon={["fa", "pause"]} />
        </button>
        <button className="Player__btn-player" id="btn-player-forward">
          <FontAwesomeIcon icon={["fa", "forward"]} />
        </button>
        <button className="Player__btn-player" id="btn-player-stop">
          <FontAwesomeIcon icon={["fa", "stop"]} />
        </button>
      </div>
    );
  }
}

export default Player;
