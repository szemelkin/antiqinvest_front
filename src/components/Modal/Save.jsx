import React, { useState, useContext } from "react";
import Context from "../../Context";

import "../../index.css";
import "./Save.css";
/*import "./BringMoney.css";*/
import cross from "../../assets/images/x.png";
import profile from "../../assets/images/profile.png";

function Save({ modalOpen, setModalOpen }) {
  const value = useContext(Context);

  return (
    <div className={modalOpen ? "ModalActive" : "ModalActiveDeactive"}>
      <div className="save">
        <button className="save-btn-cross">
          <img src={cross} alt="cross" onClick={() => setModalOpen(false)} />
        </button>
        <div className="dd">
          <div className="block">
            <h4>Тип инвестпродукта</h4>
            <h3>Антикварные часы</h3>
            <hr className="about-hr" />
          </div>

          <div className="block">
            <h4>дата сбора инвестиции</h4>
            <h3>id_8985421</h3>
            <hr className="about-hr" />
          </div>

          <div className="block">
            <h4>Ожиданиемый срок продажи</h4>
            <h3>21.02.2021</h3>
            <hr className="about-hr" />
          </div>

          <div className="block">
            <h4>Ожидаемая цена продажи</h4>
            <h3>75 000 Р</h3>
            <hr className="block-hr" />
          </div>
        </div>

        <button className="save-btn" onClick={() => setModalOpen(false)}>
          Привлечь инвестиции
        </button>

        <h3>Инвесторы</h3>

        <div className="save__invest">
          <div>
            <img src={profile} />
          </div>

          <div className="save__invest-block">
            <h4>Инвестор</h4>
            <h3>Иван Иванов</h3>
          </div>
          <div className="save__invest-block">
            <h4>ID инвестора</h4>
            <h3>id_8985421</h3>
          </div>
          <div className="save__invest-block">
            <h4>Инвестировано</h4>
            <h3>10 000 Р</h3>
          </div>
          <div className="save__invest-block">
            <h4>Ожидаемая прибыль</h4>
            <h3>10 000 Р</h3>
          </div>
        </div>
        <button className="save-btn" onClick={() => setModalOpen(false)}>
          Сохранить
        </button>
      </div>
    </div>
  );
}

export default Save;
