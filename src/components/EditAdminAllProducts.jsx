import "../index.css";
import "../App.css";
import Header from "./Header/Header";
import MainCabinetAdmin from "./MainCabinet/MainCabinetAdmin";
import AboutProducts from "./AboutLot/AboutProducts"
import Footer from "./Footer/Footer";

function EditAdminAllProducts() {
  return (
    <div className="Background-wrapper">
      <Header />
      <div className="wrapper">
        <div style={{ height: "85vh" }}>
          <div className="marginTop70">
            <MainCabinetAdmin />
          </div>
          <div className="marginTop70">
 
          </div>
          <div className="MarginTop80">
            <AboutProducts />
          </div>

          <div className="MarginTop80"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EditAdminAllProducts;
