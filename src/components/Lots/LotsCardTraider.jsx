import React, { useState } from "react";
import "./LotsCard.css";
import "../../index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function LotsCardTraider({setModalActive, img, lot, status, capital, payment }) {
  const [buttonDisabled, setButtonDisabled] = useState(true);

    let conversionPayment = payment
    .toString()
    .replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + " ");

  
  return (
    <>
      <div className="Lots__block">
        <div className="Lots__list">
          <img src={img} alt="clock" />

          <div className="Lots__lot width-big">
            <h6>Лот 1</h6>
            <h3>{lot}</h3>
          </div>

          <div className="Lots__lot width">
            <h6>Статус</h6>
            <h3>{status}</h3>
          </div>

          <div className="Lots__lot width">
            <h6>В работе</h6>
            <h3>{capital} ₽</h3>
          </div>

          <div className="Lots__lot width">
            <h6>Свободные</h6>
            <h3>{conversionPayment} ₽</h3>
          </div>
        </div>
        <div className="Lots-card-buttonsBlock lots-card-style">
            <button>Подробно</button>
            <Link to="/cabinetraider/lots/edit"><button>Редактировать</button></Link>
       
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default LotsCardTraider;
