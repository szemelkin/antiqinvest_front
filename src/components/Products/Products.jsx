import "./Products.css";
import "../../index.css";
import ProductsCard from "./ProductsCard";
import BringMoney from "./../Modal/BringMoney";
import React, { useState, useContext } from "react";
import Context from "../../Context";

function Products() {
  const [modalActive, setModalActive] = useState(false);
  const value = useContext(Context);

  return (
    <>
      <div className="Products">
        <div className="Products__left MarginBottom18">
          {value.productData.map((item, index) => {
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
