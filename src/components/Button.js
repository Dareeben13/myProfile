import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Button extends React.Component {
  render() {
    return (
      <div className="btn-div">
        <Link to={`/${this.props.path}`} className="ui button btn">
          {this.props.text}
        </Link>
      </div>
    );
  }
}

export default Button;
