import "./Report.css";

function Report() {
  const free = 150000;
  const use = 200000;

  let conversionFree = free
    .toString()
    .replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + " ");
  let conversionUse = use
    .toString()
    .replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + " ");

  return (
    <div className="Report">
      <div className="Report__card">
        <div className="Report__card-block">
          <h5>Свободные средства</h5>
          <h2>{conversionFree} ₽</h2>
        </div>

        <div className="Report__card-block Report__block2">
          <h5>Использованые средства</h5>
          <h2>{conversionUse} ₽</h2>
        </div>
        <button disabled={free === 0}>Пополнить</button>
        <button disabled={use === 0}>Вывести</button>
      </div>
    </div>
  );
}

export default Report;
