import React, { useState } from "react";
import profile from "../../assets/images/profile.png";
import "./LotTable.css";
import "../../index.css";



function LotTable() {
  
  return (
    <>
   <div className="AboutLot__capital-list">
            <div className="capital-list-headline">
              <h4>Инвестор</h4>
              <h4>ID инвестора</h4>
              <h4>Инвестировано</h4>
              <h4>Ожидаемая прибыль</h4>
            </div>

            <div>
              <div className="capital-list-list">
                <div className="capital-list-block">
                  <img src={profile} />
                  <h4>Иван Иванов</h4>
                </div>
                <h4>id_8985421</h4>
                <h4>10 000 ₽</h4>
                <h4>10 000 ₽</h4>
              </div>
              <hr className="AboutLot-hr" />

              <div className="capital-list-list">
                <div className="capital-list-block">
                  <img src={profile} />
                  <h4>Иван Иванов</h4>
                </div>
                <h4>id_8985421</h4>
                <h4>10 000 ₽</h4>
                <h4>10 000 ₽</h4>
              </div>
              <hr className="AboutLot-hr" />

              <div className="capital-list-list">
                <div className="capital-list-block">
                  <img src={profile} />
                  <h4>Иван Иванов</h4>
                </div>
                <h4>id_8985421</h4>
                <h4>10 000 ₽</h4>
                <h4>10 000 ₽</h4>
              </div>
              <hr className="AboutLot-hr" />

              <div className="capital-list-list">
                <div className="capital-list-block">
                  <img src={profile} />
                  <h4>Иван Иванов</h4>
                </div>
                <h4>id_8985421</h4>
                <h4>10 000 ₽</h4>
                <h4>10 000 ₽</h4>
              </div>
              <hr className="AboutLot-hr" />
            </div>
          </div>
    </>
  );
}

export default LotTable;
