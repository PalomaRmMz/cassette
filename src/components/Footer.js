import React from "react";
import "./style/Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <p>
          Designed with <i className="fas fa-heart"></i> by{" "}
          <a className="Footer__link" href="https://github.com/PalomaRmMz">
            Paloma RM
          </a>
          <i className="fas fa-copyright"></i>
        </p>
      </div>
    );
  }
}

export default Footer;
