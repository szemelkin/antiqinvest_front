//import "../index.css";
//import "../App.css";
import "./EditLot.css";
import back from "../../assets/images/back.png";
import React, { useState, useContext } from "react";

function EditLotAdmin() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="EditLot">
      <div className="EditLot__block">
        <a href="/cabinetadmin/alllots">
          <img src={back} />
          <h6>Назад</h6>
        </a>
        <h4>Редактировать порфель пользователя</h4>
      </div>
      <button onClick={() => setModalOpen(true)}>Сохранить</button>
    </div>
  );
}

export default EditLotAdmin;
