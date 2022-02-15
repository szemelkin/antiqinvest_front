//import "../index.css";
//import "../App.css";
import "./EditLot.css";
import back from "../../assets/images/back.png";
import React, { useState, useContext } from "react";
import Save from "../Modal/Save";

function EditLot() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="EditLot">
      <div className="EditLot__block">
        <a href="/cabinetraider/lots">
          <img src={back} />
          <h6>Назад</h6>
        </a>
        <h4>Редактировать лот</h4>
      </div>
      <button onClick={() => setModalOpen(true)}>Сохранить</button>
      <Save modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default EditLot;
