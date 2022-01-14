import "./Lots.css";
import "../../index.css";
import LotsCard from "./LotsCard";
import { useState } from "react";
import BringMoney from "../Modal/BringMoney";
import clock from "../../assets/images/clock.png";
import event from "../Api"

function Lots(event) {
  const [modalActive, setModalActive] = useState(false);

console.log(event)


  const lots = [
    {
      img: clock,
      lot: "Антикварные часы",
      product: "Классический",
      status: "Завершён",
      capital: "75 000",
      payment: "75 000",
      profit: "10 000",
    },
    {
      img: clock,
      lot: "Антикварные часы",
      product: "Трейдерский",
      status: "В работе",
      capital: "75 000",
      payment: "75 000",
      profit: "10 000",
    },
    {
      img: clock,
      lot: "Антикварные часы",
      product: "Ва-банк",
      status: "В работе",
      capital: "75 000",
      payment: "75 000",
      profit: "10 000",
    },
    {
      img: clock,
      lot: "Антикварные часы",
      product: "Классический",
      status: "В работе",
      capital: "75 000",
      payment: "75 000",
      profit: "10 000",
    },

    {
      img: clock,
      lot: "Антикварные часы",
      product: "Классический",
      status: "В работе",
      capital: "75 000",
      payment: "75 000",
      profit: "10 000",
    },

    {
      img: clock,
      lot: "Антикварные часы",
      product: "Классический",
      status: "В работе",
      capital: "75 000",
      payment: "75 000",
      profit: "10 000",
    },
  ];


  return (
    <>
      <div className="Lots">
        <h3>Проинвестированные лоты</h3>
        {lots.map((item, index) => {
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
