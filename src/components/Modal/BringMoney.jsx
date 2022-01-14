import "./BringMoney.css";
import "../../index.css";
import cross from "../../assets/images/x.png";
import { useState } from "react";
import BringAmount from "../Modal/BringAmount";

function BringMoney({ modalActive, setModalActive }) {
  const [modalBringAmount, setModalBringAmount] = useState(false);

  

  function closeModal(modalBringAmount) {
    if (modalBringAmount) {
      setModalActive(false);
    }
  }

  setTimeout(closeModal, 10, modalBringAmount);

  return (
    <>
      <div className={modalActive ? "BringMoney" : "BringMoneyNone"}>
        <button onClick={() => setModalActive(false)}>
          <img src={cross} alt="cross" />
        </button>
        <h3>Внести сумму</h3>
        <h5>Вы действительно хотите внести данную сумму?</h5>

        <div className="buttonsBlock marginButton">
          <button onClick={() => setModalBringAmount(true)}>Внести</button>
          <button onClick={() => setModalActive(false)}>Отмена</button>
        </div>
      </div>
      <BringAmount
        modalBringAmount={modalBringAmount}
        setModalBringAmount={setModalBringAmount}
      />
    </>
  );
}

export default BringMoney;
