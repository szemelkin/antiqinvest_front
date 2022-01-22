import "./ProductsCard.css";
import "../../App.css";
import "../../index.css";
import i from "../../assets/images/i.png";

function ProductsCard({
  setModalActive,
  img,
  notification,
  product,
  sum,
  profit,
  payment,
}) {
  function takeOut() {
    console.log("Вывести");
  }

  let conversionPayment = payment
    .toString()
    .replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + " ");


  return (
    <>
      <div className="ProductsCard MarginBottom18">
        <div className="ProductsCard__blocks">
          <div className="ProductsCard-block background">
            <img src={img} alt="icon" />
          </div>
          <div className="ProductsCard-block bigBlock">
            <h4>Продукт</h4>
            <h5 className="notification" data-name={notification}>
              {product} <img src={i} alt="info" />
            </h5>
          </div>
          <div className="ProductsCard-block smallBlock">
            <h4>Сумма</h4>
            <h5>{sum} Р</h5>
          </div>
          <div className="ProductsCard-block">
            <h4>Доходность</h4>
            <h5>{profit} Р</h5>
          </div>
          <div className="ProductsCard-block">
            <h4>Внесено</h4>
            <h5>{conversionPayment} Р</h5>
          </div>
        </div>

        <div className="ProductsCard-buttonsBlock">
          <button onClick={takeOut} disabled={payment === 0}>
            {" "}
            Вывести
          </button>
          <button onClick={() => setModalActive(true)}>Внести</button>
        </div>
      </div>
    </>
  );
}

export default ProductsCard;
