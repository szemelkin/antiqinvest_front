import "./Report.css";

function Report() {
  return (
   <div className="Report">
        <div className="Report__card">
            <div className="Report__card-block">
                <h5>Свободные средства</h5>
                <h2>150 000 ₽</h2>
            </div>

            <div className="Report__card-block Report__block2">
                <h5>Использованые средства</h5>
                <h2>200 000 ₽</h2>
            </div>
            <button>Пополнить</button>
            <button>Вывести</button>
        </div>

    </div>
  );
}

export default Report;
