//import "../index.css";
//import "../App.css";
import "./EditLot.css";
import back from "../../assets/images/back.png";
import React, { useState, useContext } from "react";


function EditBriefCase() {


  return (
    <div className="EditLot">
      <div className="EditLot__block">
        <a href="/cabinetadmin/alllots">
          <img src={back} />
          <h6>Назад</h6>
        </a>
        <h4>Редактировать портфель пользователя</h4>
      </div>
   
    </div>
  );
}

export default EditBriefCase;
