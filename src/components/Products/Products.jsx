import "./Products.css";
import "../../index.css";
import ProductsCard from "./ProductsCard";
import BringMoney from './../Modal/BringMoney'
import { useState } from "react";

function Products() {
  const [modalActive, setModalActive] = useState(false)


  return (
      <div className="Products">
        <div className="Products__left MarginBottom18">
          <ProductsCard  setModalActive={setModalActive}/>
          <ProductsCard setModalActive={setModalActive}/>
          <ProductsCard setModalActive={setModalActive}/>
          < BringMoney  modalActive={modalActive} setModalActive={setModalActive}/>
          <div className="Products__right-card"></div>
        </div>
      </div>
  );
}

export default Products;
