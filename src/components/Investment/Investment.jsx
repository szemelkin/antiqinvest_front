import "./investment.css";
import "../../index.css";
import Card from "./Card/Card";
import React, { useContext } from "react";
import Context from "../../Context";

function Investment() {
  const value = useContext(Context);

  return (
    <div className="Investment padding">
      <h3>Коротко о подходе к инвестициям</h3>
      <div className="Cards">
        {value.investmentCard.map((item, index) => {
          return (
            <Card
              key={index}
              service={item.service}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Investment;
