import "./headline.css";
import "../../index.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Headline() {
  return (
    <div className="headline">
      <h1>Antiq Invest</h1>
      <h3>
        закрытый инвестиционный фонд, который позволяет зарабатывать на
        антикварных и редких вещах от 2 до 50% от в месяц
      </h3>

      <div className="headline__block">
        <Link to="/auth">
          <button className="headline__button">Войти</button>
        </Link>
        <a className="headline__link">Подробнее</a>
      </div>
    </div>
  );
}

export default Headline;
