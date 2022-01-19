import "./headline.css";
import "../../index.css"

function Headline() {
  return (
    <div className="headline">
      <h1>Antiq Invest</h1>
      <h3>
        закрытый инвестиционный фонд, который позволяет зарабатывать на
        антикварных и редких вещах от 2 до 50% от в месяц
      </h3>

      <div className="headline__block">
      <a href="/cabinet">
        <button className="headline__button">Войти</button>
        </a>
        <a className="headline__link">Подробнее</a>
      </div>
    </div>
  );
}

export default Headline;
