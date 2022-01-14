import "./Lots.css";
import "../../index.css";
import clock from "../../assets/images/clock.png";
import LotsCard from "./LotsCard";
import { useState } from "react";
import BringMoney from "../Modal/BringMoney"

function Lots() {
  const [modalActive, setModalActive] = useState(false)
  return (
    <>
      <div className="Lots">
        <h3>Проинвестированные лоты</h3>
        <LotsCard setModalActive={setModalActive} />
        <hr />
        <LotsCard modalActive={modalActive} setModalActive={setModalActive} />
        <hr />
        <LotsCard modalActive={modalActive} setModalActive={setModalActive} />
        <hr />
        <LotsCard modalActive={modalActive} setModalActive={setModalActive} />
        <hr />
        <LotsCard modalActive={modalActive} setModalActive={setModalActive} />
      </div>
      < BringMoney  modalActive={modalActive} setModalActive={setModalActive}/>
    </>
  );
}

export default Lots;
