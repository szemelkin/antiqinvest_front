import "../index.css";
import "../App.css";
import Header from "./Header/Header";
import MainCabinetAdmin from "./MainCabinet/MainCabinetAdmin";
import Footer from "./Footer/Footer";

function AdminCabinet() {
  const mb = {
    marginBottom: "80px",
  };

  return (
    <div className="Background-wrapper">
      <Header />
      <div className="wrapper">
        <div className="marginTop70" style={mb}>
          <MainCabinetAdmin />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminCabinet;
