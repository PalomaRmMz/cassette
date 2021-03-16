import React from "react";
import "./style/Player.css";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.handleEvent = this.handleEvent.bind(this);
  }
  handleEvent = (e) => {
    console.log(e.target.id);
  };

  render() {
    return (
      <div className="Player__container">
        <div className="Player__speed-box" id="speed-box"></div>
        <button
          id="btnUndo"
          name="btnUndo"
          type="button"
          className="Player__btn-player"
          onClick={this.handleEvent}
        />
        <button
          id="btnBackward"
          name="btnBackward"
          type="button"
          className="Player__btn-player"
          onClick={this.handleEvent}
        />
        <button
          id="btnPlay"
          name="btnPlay"
          type="button"
          className="Player__btn-player"
          onClick={this.handleEvent}
        />
        <button
          id="btnPause"
          name="btnPause"
          type="button"
          className="Player__btn-player"
          onClick={this.handleEvent}
        />
        <button
          id="btnForward"
          name="btnForward"
          type="button"
          className="Player__btn-player"
          onClick={this.handleEvent}
        />
      </div>
    );
  }
}

export default Player;
