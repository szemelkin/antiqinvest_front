import Logo from "../Logo/Logo";
import user from "../../assets/images/user.png";
import check from "../../assets/images/check.png";

import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <div className="Header__main">
        <Logo />
        <div className="Header__user">
          <img className="Header__user-img" src={user} />
          <span>Ivan Ivanov</span>
          <img className="Header__user-check" src={check} />
        </div>
      </div>
    </div>
  );
}

export default Header;
