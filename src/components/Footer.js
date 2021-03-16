import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../library/fontawesome";
import "./style/Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <p>
          Designed with <i className="fas fa-heart"></i> by{" "}
          <a className="Footer__link" href="https://github.com/PalomaRmMz">
            Paloma RM&nbsp;
          </a>
          <FontAwesomeIcon icon={["fa", "copyright"]} />
        </p>
      </div>
    );
  }
}

export default Footer;
