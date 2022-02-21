import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Auth() {
  return (
    <div style={{ background: "white", height: "1000px", paddingTop: "250px" }}>
      <Link to="/cabinet">
        <button>Пользователь</button>
      </Link>
      <Link to="/cabinetraider">
        <button>Трейдер</button>
      </Link>
      <Link to="/cabinetadmin/alllots">
        <button>Администратор</button>
      </Link>
    </div>
  );
}

export default Auth;
