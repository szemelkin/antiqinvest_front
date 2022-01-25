import "./Report.css";
import BringAmount from "../Modal/BringAmount";
import React, {useContext} from "react";
import Context from '../../Context'

function Report(props) {
  
  const value = useContext(Context)


  let conversionFree = value.free
    .toString()
    .replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + " ");
  let conversionUse = value.use
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
        <button>Пополнить</button>
        <button disabled={value.use === 0}>Вывести</button>
      </div>
    </div>
  );
}

export default Report;
