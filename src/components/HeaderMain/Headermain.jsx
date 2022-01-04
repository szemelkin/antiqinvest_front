import needle from "../../assets/images/botton-needle.png";
import Logo from '../Logo/Logo'


import "./headerMain.css";

function HeaderMain() {
  return (
    <div className="App">
        <header className="header">
          <Logo />
          <button>Войти
            <img className="needle" src={needle}/>
          </button>
        </header>
    </div>
  );
}

export default HeaderMain;
