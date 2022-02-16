import needle from "../../assets/images/botton-needle.png";
import Logo from "../Logo/Logo";
import "../../index.css";
import "./headerMain.css";
import Cabinet from "../Cabinet";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function HeaderMain() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <Logo />
          <a href="/auth">
            <button className="header__button">Войти </button>
            <img className="needle" src={needle} />
          </a>
        </header>
      </div>

    
        <Route path="/auth">
          <Cabinet />
        </Route>

    </Router>
  );
}

export default HeaderMain;
