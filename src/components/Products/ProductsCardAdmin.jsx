import "./ProductsCard.css";
import "../../App.css";
import "../../index.css";
import i from "../../assets/images/i.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function ProductsCardAdmin({
  setModalActive,
  img,
  notification,
  product,
  sum,
  profit,
  payment,
  term,
}) {
  function takeOut() {
    console.log("подробно");
  }

  return (
    <>
      <div className="ProductsCard MarginBottom18">
        <div className="ProductsCard__blocks">
          <div className="ProductsCard-block background">
            <img src={img} alt="icon" />
          </div>
          <div className="ProductsCard-block bigBlock">
            <h4>Название</h4>
            <h5 className="notification" data-name={notification}>
              {product} <img src={i} alt="info" />
            </h5>
          </div>
          <div className="ProductsCard-block smallBlock">
            <h4>ID продукта</h4>
            <h5>{sum} Р</h5>
          </div>
          <div className="ProductsCard-block">
            <h4>Доходность</h4>
            <h5>{profit} Р</h5>
          </div>
          <div className="ProductsCard-block">
            <h4>Срок</h4>
            <h5>{term}</h5>
          </div>
        </div>

        <div className="ProductsCard-buttonsBlock">
          <button onClick={takeOut} disabled={payment === 0}>
            {" "}
            Подробно
          </button>
          <Link to="/cabinetadmin/allpropducts/editproducts">
            <button className="btn-edit">Редактировать</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductsCardAdmin;
