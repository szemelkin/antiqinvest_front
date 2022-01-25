import "./Lots.css";
import "../../index.css";
import LotsCard from "./LotsCard";
import BringMoney from "../Modal/BringMoney";
import React, { useState, useContext } from "react";
import Context from "../../Context";
import clock from "../../assets/images/clock.png";

function Lots(event) {
  const [modalActive, setModalActive] = useState(false);
  const value = useContext(Context);

  return (
    <>
      <div className="Lots">
        <h3>Проинвестированные лоты</h3>
        {value.lots.map((item, index) => {
          return (
            <LotsCard
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

export default Lots;
