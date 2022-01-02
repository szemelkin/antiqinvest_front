import logo from "../../assets/images/logo.png";
import needle from "../../assets/images/botton-needle.png";

import "./header.css";

function Header() {
  return (
    <div className="App">
        <header className="header">
          <div className="header__logo">
            <a href="/"><img className="header__logo-img" src={logo} /></a>
            <a className="header__logo-text" href="/">ANTIQ <br /> INVEST</a>
          </div>
          <button>Войти
            <img className="needle" src={needle}/>
          </button>
        </header>
    </div>
  );
}

export default Header;
