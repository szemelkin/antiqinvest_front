import "./Products.css";
import "../../index.css";
import ProductsCardAdmin from "./ProductsCardAdmin";
import BringMoney from "./../Modal/BringMoney";
import React, { useState, useContext } from "react";
import Context from "../../Context";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";


function ProductsAdmin() {
  const [modalActive, setModalActive] = useState(false);
  const value = useContext(Context)

  console.log(value.productData)


  return (
    <>
      <div className="Products">
        <div className="Products__left MarginBottom18">
          {value.productData.map((item, index) => {
            return (
              <ProductsCardAdmin
                key={index}
                setModalActive={setModalActive}
                img={item.img}
                notification={item.notification}
                product={item.product}
                sum={item.sum}
                profit={item.profit}
                payment={item.payment}
                term={item.term}
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

export default ProductsAdmin;
