import React from "react";
import "./LotsCard.css";
import "../../index.css";


function LotsCardAdminAllLots({ img, name, id, idBriefcase }) {
  return (
    <>
      <div className="Lots__block">
        <div className="Lots__list">
          <img className="imgProfile2" src={img} alt="clock" />

          <div className="Lots__lot width-big">
            <h6>ФИО</h6>
            <h3>{name}</h3>
          </div>

          <div className="Lots__lot width">
            <h6>ID пользователя</h6>
            <h3>{id}</h3>
          </div>

          <div className="Lots__lot width">
            <h6>ID порфеля</h6>
            <h3>{idBriefcase}</h3>
          </div>
        </div>
        <div className="Lots-card-buttonsBlock lots-card-style">
          <button>Подробно</button>
          <a href="#">
            <button>Редактировать</button>
          </a>
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default LotsCardAdminAllLots;
