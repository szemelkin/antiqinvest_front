import React, { useState, useContext } from "react";
import "./LotsCard.css";
import "../../index.css";
import Context from "../../Context";



function LotsCardAdmin({setModalActive, img2, name, id, idBriefcase }) {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const value = useContext(Context);


  return (
    <>
      <div className="Lots__block">
        <div className="Lots__list">
          <img  className="imgProfile" src={img2} alt="clock"/>

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
            <a href="/cabinetadmin/allbriefcase/editbrief"><button>Редактировать</button></a>
       
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default LotsCardAdmin;
