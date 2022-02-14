import "./Lots.css";
import "../../index.css";
import BringMoney from "../Modal/BringMoney";
import React, { useState, useContext } from "react";
import Context from "../../Context";
import LotsCardAlluser from "./LostCardAlluser";

function LotsAdminBriefCase(event) {
  const [modalActive, setModalActive] = useState(false);
  const value = useContext(Context);


  return (
    <>
      <div className="Lots">
        <h3>Все пользователи</h3>
        {value.allusers.map((item, index) => {
          return (
            <LotsCardAlluser
            key={index}
            modalActive={modalActive}
            setModalActive={setModalActive}
            img2={item.img2}
            name={item.name}
            id={item.id}
            role={item.role}
            />
          );
        })}
      </div>
      <BringMoney modalActive={modalActive} setModalActive={setModalActive} />
    </>
  );
}

export default LotsAdminBriefCase;
