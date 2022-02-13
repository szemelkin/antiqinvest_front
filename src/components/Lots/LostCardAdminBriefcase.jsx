import React, { useState } from "react";
import "./LotsCard.css";
import "../../index.css";



function LotsCardBriefcase({setModalActive, img, lot, status, capital, payment }) {
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
            <h6>ФИО</h6>
            <h3>{lot}</h3>
          </div>

          <div className="Lots__lot width">
            <h6>ID пользователя</h6>
            <h3>{status}</h3>
          </div>

          <div className="Lots__lot width">
            <h6>Роль</h6>
            <h3>{capital} ₽</h3>
          </div>

 
        </div>
        <div className="Lots-card-buttonsBlock lots-card-style">
            <button>Подробно</button>
            <a href="/"><button>Редактировать</button></a>
       
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default LotsCardBriefcase;
