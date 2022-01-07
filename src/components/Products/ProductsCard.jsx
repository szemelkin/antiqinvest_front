import "./ProductsCard.css";
import "../../index.css";
import classic from "../../assets/images/classic.png";
import i from "../../assets/images/i.png";

function ProductsCard() {
  return (
    <div className="ProductsCard MarginBottom18">
      <div className="ProductsCard__blocks">
        <div className="ProductsCard-block background">
          <img src={classic} alt="classic" />
        </div>
        <div className="ProductsCard-block bigBlock">
          <h4>Продукт</h4>
          <h5>
            Классический <img src={i} alt="info" />
          </h5>
        </div>
        <div className="ProductsCard-block smallBlock">
          <h4>Сумма</h4>
          <h5>75 000 Р</h5>
        </div>
        <div className="ProductsCard-block">
          <h4>Доходность</h4>
          <h5>10 000 Р</h5>
        </div>
        <div className="ProductsCard-block">
          <h4>Внесено</h4>
          <h5>2 000 Р</h5>
        </div>
      </div>

      <div className="ProductsCard-buttonsBlock">
        <button>Вывести</button>
        <button>Внести</button>
      </div>
    </div>
  );
}

export default ProductsCard;
