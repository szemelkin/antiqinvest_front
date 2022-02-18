import "./Lots.css";
import "../../index.css";
import BringMoney from "../Modal/BringMoney";
import React, { useState, useContext } from "react";
import Context from "../../Context";
import LotsCardAdminAllLots from "./LotsCardAdminAllLots";

function LotsAdmin(event) {
  const [modalActive, setModalActive] = useState(false);
  const value = useContext(Context);

  return (
    <>
      <div className="Lots">
        <h3>Все лоты</h3>
        {value.allusers.map((item, index) => {
          return (
            <LotsCardAdminAllLots
              key={index}
              img={item.img}
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

export default LotsAdmin;
