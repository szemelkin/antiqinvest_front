import "./EditInvestCard.css";
import i from "../../assets/images/i.png";
import React from "react";

function EditIvestCard({ img, notification, product, sum, profit }) {
  return (
    <div className="EditIvestCard">
      <div className="EditIvestCard__blocks">
        <div className="EditIvestCard-block background">
          <img src={img} alt="icon" />
        </div>
        <div className="EditIvestCard-block">
          <h4>Продукт</h4>
          <h5 className="notification" data-name={notification}>
            {product} <img src={i} alt="info" />
          </h5>
        </div>
        <div className="EditIvestCard-block">
          <h4>Сумма свободных средств</h4>
          <h5>{sum} Р</h5>
        </div>
        <div className="EditIvestCard-block">
          <h4>Сумма замороженных средств</h4>
          <h5>{profit} Р</h5>
        </div>
      </div>
    </div>
  );
}

export default EditIvestCard;
