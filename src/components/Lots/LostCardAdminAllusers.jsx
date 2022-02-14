import "./Lots.css";
import "../../index.css";
import LotsCardAdmin from "./LostCardAdmin";
import BringMoney from "../Modal/BringMoney";
import React, { useState, useContext } from "react";
import Context from "../../Context";

function LostCardAdminAllusers(event) {
  const [modalActive, setModalActive] = useState(false);
  const value = useContext(Context);


  return (
    <>
      <div className="Lots">
        <h3>Все порфели</h3>
        {value.allusers.map((item, index) => {
          return (
            <LotsCardAdmin
            key={index}
            modalActive={modalActive}
            setModalActive={setModalActive}
            img2={item.img2}
            name={item.name}
            id={item.id}
            idBriefcase={item.idBriefcase}
            />
          );
        })}
      </div>
      <BringMoney modalActive={modalActive} setModalActive={setModalActive} />
    </>
  );
}

export default LostCardAdminAllusers;
