import React, { useState, useContext } from "react";
import "./LotsCard.css";
import "../../index.css";
import Context from "../../Context";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function LotsCardAlluser({setModalActive, img2, name, id, role }) {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const value = useContext(Context);

  return (
    <>
      <div className="Lots__block">
        <div className="Lots__list">
          <img className="imgProfile" src={img2} alt="clock"/>

          <div className="Lots__lot width-big">
            <h6>ФИО</h6>
            <h3>{name}</h3>
          </div>

          <div className="Lots__lot width">
            <h6>ID пользователя</h6>
            <h3>{id}</h3>
          </div>

          <div className="Lots__lot width">
            <h6>Роль</h6>
            <h3>{role}</h3>
          </div>

 
        </div>
        <div className="Lots-card-buttonsBlock lots-card-style">
            <button>Подробно</button>
            <Link to="/cabinetadmin/allbriefcase/edit"><button>Редактировать</button></Link>
       
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default LotsCardAlluser;
