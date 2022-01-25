import React, { useState, useContext } from "react";
import Context from '../../Context'

import "../../index.css";
import "./BringAmount.css";
import "./BringMoney.css";
import cross from "../../assets/images/x.png";
import classic from "../../assets/images/classic.png";
import i from "../../assets/images/i.png";


function BringAmount({ modalBringAmount, setModalBringAmount }) {
  const [inputValue, setInputValue] = useState(37500);
  const value = useContext(Context)

  let inputRange = inputValue / 750;

  function rangeValue(event) {
    const target = event.target.value * 750;
    setInputValue(target);
  }




  let conversionFree = value.free
  .toString()
  .replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + " ");


  return (
    <div className={modalBringAmount ? "ModalActive" : "ModalActiveDeactive"}>
      <div className="BringAmount">
        <button>
          <img
            src={cross}
            alt="cross"
            onClick={() => setModalBringAmount(false)}
          />
        </button>
        <h3>Внести сумму</h3>

        <div className="BringAmount__main-blocks">
          <div className="BringAmount__main-block background">
            <img src={classic} />
          </div>
          <div className="BringAmount__main-card-block bigBlock">
            <h4>Продукт</h4>
            <h5>
              Классический <img src={i} alt="question"/>
            </h5>
          </div>
          <div className="BringAmount__main-card-block smallBlock">
            <h4>Сумма</h4>
            <h5>75 000 Р</h5>
          </div>
          <div className="BringAmount__main-card-block">
            <h4>Доходность</h4>
            <h5>10 000 Р</h5>
          </div>
        </div>
        <div className="BringAmount__scale">
          <div className="BringAmount__scale__data">
            <h6>100 ₽</h6>
            <h6>75 000 ₽</h6>
          </div>

          <input
            id="scale"
            type="range"
            min="0"
            max="100"
            step="1"
            style={{
              background: `-webkit-linear-gradient(left, #FFD02F 0%, #FFD02F ${inputRange}%, #D0D0D0 ${inputRange}%, #D0D0D0 100%)`,
            }}
            onChange={rangeValue}
          />
        </div>

        <div className="BringAmount__total">
          <div className="BringAmount__total-money">
            <div className="BringAmount__total-free">
              <h4>Свободные средства</h4>
              <h5>{conversionFree} ₽</h5>
            </div>
            <h3>{inputValue} ₽</h3>
          </div>
          <button onClick={() => setModalBringAmount(false)} disabled={inputRange === 0}>Внести</button>
    
        </div>
      </div>
    </div>
  );
}

export default BringAmount;
