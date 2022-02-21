import logo from "../../assets/images/logo.png";
import "../../index.css"
import "./Logo.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img className="logo-img" src={logo} />
      </Link>
      <Link className="logo-text" to="/">
        ANTIQ <br /> INVEST
      </Link>
    </div>
  );
}

export default Logo;
