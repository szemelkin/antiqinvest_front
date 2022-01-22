import "./Products.css";
import "../../index.css";
import ProductsCard from "./ProductsCard";
import BringMoney from "./../Modal/BringMoney";
import { useState } from "react";

import classic from "../../assets/images/classic.png";
import trade from "../../assets/images/trade.png";
import vabank from "../../assets/images/vabank.png";

function Products() {
  const [modalActive, setModalActive] = useState(false);
  const pc = [
    {
      img: classic,
      notification: "Продукт Классический Фиксированный доход 2% в месяц",
      product: "Классический",
      sum: "75 000",
      profit: "10 000",
      payment: 2000,
    },
    {
      img: trade,
      notification:
        "Продукт Трейдерский 10% от объема инвестиции срок до 3х месяцев",
      product: "Трейдерский",
      sum: "75 000",
      profit: "10 000",
      payment: 0,
    },
    {
      img: vabank,
      notification: "Продукт Ва-банк Высокорисковый продукт. 40% от прибыли.",
      product: "Ва-банк",
      sum: "75 000",
      profit: "10 000",
      payment: 0,
    },
  ];

  return (
    <>
      <div className="Products">
        <div className="Products__left MarginBottom18">
          {pc.map((item, index) => {
            return (
              <ProductsCard
                key={index}
                setModalActive={setModalActive}
                img={item.img}
                notification={item.notification}
                product={item.product}
                sum={item.sum}
                profit={item.profit}
                payment={item.payment}
              />
            );
          })}

          <BringMoney
            modalActive={modalActive}
            setModalActive={setModalActive}
          />
          <div className="Products__right-card"></div>
        </div>
      </div>
    </>
  );
}

export default Products;
