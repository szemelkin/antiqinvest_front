import needle from "../../assets/images/botton-needle.png";
import Logo from "../Logo/Logo";
import "../../index.css";
import "./headerMain.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cabinet from "../Cabinet";

function HeaderMain() {
  return (
    <div className="App">
      <header className="header">
        <Logo />
   
          <button className="header__button">
            Войти
            <img className="needle" src={needle} />
          </button>
     
      </header>
    </div>
  );
}

export default HeaderMain;
