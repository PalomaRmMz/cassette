import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../library/fontawesome";
import "./style/Cassette.css";

class Cassette extends React.Component {
  render() {
    return (
      <div className="Cassette__container">
        <div className="Cassette">
          <div className="Cassette__screw">
            <FontAwesomeIcon icon={["fa", "times"]} />
          </div>
          <div className="Cassette__screw">
            <FontAwesomeIcon icon={["fa", "times"]} />
          </div>
          <div className="Cassette__screw">
            <FontAwesomeIcon icon={["fa", "times"]} />
          </div>
          <div className="Cassette__screw">
            <FontAwesomeIcon icon={["fa", "times"]} />
          </div>
          <div className="Cassette__reels">
            <div className="Cassette__filament L" id="filamentL"></div>
            <div className="Cassette__filament R" id="filamentR"></div>
            <div className="Cassette__reel L" id="reelL">
              <div className="Cassette__cresta-lv1"></div>
              <div className="Cassette__cresta-lv1"></div>
              <div className="Cassette__cresta-lv1"></div>
              <div className="Cassette__cresta-lv1"></div>
              <div className="Cassette__cresta-lv1"></div>
              <div className="Cassette__cresta-lv1"></div>
              <div className="Cassette__reel-lv1">
                <div className="Cassette__cresta-lv2"></div>
                <div className="Cassette__cresta-lv2"></div>
                <div className="Cassette__cresta-lv2"></div>
                <div className="Cassette__cresta-lv2"></div>
                <div className="Cassette__cresta-lv2"></div>
                <div className="Cassette__cresta-lv2"></div>
              </div>
            </div>
            <div className="Cassette__reel R" id="reelR">
              <div className="Cassette__cresta-lv1"></div>
              <div className="Cassette__cresta-lv1"></div>
              <div className="Cassette__cresta-lv1"></div>
              <div className="Cassette__cresta-lv1"></div>
              <div className="Cassette__cresta-lv1"></div>
              <div className="Cassette__cresta-lv1"></div>
              <div className="Cassette__reel-lv1">
                <div className="Cassette__cresta-lv2"></div>
                <div className="Cassette__cresta-lv2"></div>
                <div className="Cassette__cresta-lv2"></div>
                <div className="Cassette__cresta-lv2"></div>
                <div className="Cassette__cresta-lv2"></div>
                <div className="Cassette__cresta-lv2"></div>
              </div>
            </div>
          </div>
          <div className="Cassette__label-tape">
            <div className="Cassette__label-title">Awesome Mix Vol. 1</div>
          </div>
          <div className="Cassette__bottom">
            <div className="Cassette__orifice-square L"></div>
            <div className="Cassette__orifice-square R"></div>
            <div className="Cassette__orifice-circle L"></div>
            <div className="Cassette__orifice-circle R"></div>
            <div className="Cassette__screw">
              <FontAwesomeIcon icon={["fa", "times"]} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cassette;
