import "./headline.css";

function Headline() {
  return (
    <div className="headline">
      <h1>Antiq Invest</h1>
      <h3>
        закрытый инвестиционный фонд, который позволяет зарабатывать на
        антикварных и редких вещах от 2 до 50% от в месяц
      </h3>

      <div className="headline__block">
        <button>Войти</button>
        <a>Подробнее</a>
      </div>
    </div>
  );
}

export default Headline;
