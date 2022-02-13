import "./Lots.css";
import "../../index.css";
import LotsCardAdmin from "./LostCardAdmin";
import BringMoney from "../Modal/BringMoney";
import React, { useState, useContext } from "react";
import Context from "../../Context";

function LotsAdminBriefCase(event) {
  const [modalActive, setModalActive] = useState(false);
  const value = useContext(Context);

  return (
    <>
      <div className="Lots">
        <h3>Все порфели</h3>
        {value.lots.map((item, index) => {
          return (
            <LotsCardAdmin
              key={index}
              modalActive={modalActive}
              setModalActive={setModalActive}
              img={item.img}
              lot={item.lot}
              status={item.status}
              capital={item.capital}
              payment={item.payment}
            />
          );
        })}
      </div>
      <BringMoney modalActive={modalActive} setModalActive={setModalActive} />
    </>
  );
}

export default LotsAdminBriefCase;
