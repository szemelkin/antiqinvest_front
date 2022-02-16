import React, { useContext } from "react";
import Context from "../../../Context";
import EditAdminCard from "./EditAdminCard";
import "./EditAdminCards.css";
import "../../../index.css";

function EditAdminCards() {
  const value = useContext(Context);

  return (
    <div className="Events">
      <h3>Лоты в портфеле</h3>
      {value.event.map((item, index) => {
        return (
          <EditAdminCard
            key={index}
            img={item.img}
            lot={item.lot}
            product={item.product}
            status={item.status}
            capital={item.capital}
            payment={item.payment}
            profit={item.profit}
          />
        );
      })}
    </div>
  );
}

export default EditAdminCards;
