import logo from "../../assets/images/logo.png";
import "../../index.css"
import "./Logo.css";

function Logo() {
  return (
    <div className="logo">
      <a href="/">
        <img className="logo-img" src={logo} />
      </a>
      <a className="logo-text" href="/">
        ANTIQ <br /> INVEST
      </a>
    </div>
  );
}

export default Logo;
