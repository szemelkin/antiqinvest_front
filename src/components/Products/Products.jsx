import "./Products.css";
import "../../index.css";
import ProductsCard from "./ProductsCard";

function Products() {
  return (
      <div className="Products">
        <div className="Products__left MarginBottom18">
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <div className="Products__right-card"></div>
        </div>
      </div>
  );
}

export default Products;
