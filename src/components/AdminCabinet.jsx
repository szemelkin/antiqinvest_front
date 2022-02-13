import "../index.css";
import "../App.css";
import Header from "./Header/Header";
import MainCabinetAdmin from "./MainCabinet/MainCabinetAdmin";
import Footer from "./Footer/Footer";

function AdminCabinet() {
  return (
    <div className="Background-wrapper">
      <Header />
      <div className="wrapper">
        <div className="marginTop70">
         <MainCabinetAdmin />
        </div>
        <div className="MarginTop80"></div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminCabinet;
