//import "../index.css";
//import "../App.css";
import EditIvestCard from "./EditInvestCard";
import "./EditLot.css";
import "../Products/ProductsCard.css";
import React, { useState, useContext } from "react";
import Context from "../../Context";


function EditIvestCards() {
  const value = useContext(Context);

  return (
    <div className="EditIvest">
      <h3>Инвестированные средства</h3>

      {value.productData.map((item, index) => {
        return (
          <EditIvestCard
            key={index}
            img={item.img}
            notification={item.notification}
            product={item.product}
            sum={item.sum}
            profit={item.profit}
            payment={item.payment}
          />
        );
      })}
    </div>
  );
}

export default EditIvestCards;
