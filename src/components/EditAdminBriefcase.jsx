import "../index.css";
import "../App.css";
import Header from "./Header/Header";
import MainCabinetAdmin from "./MainCabinet/MainCabinetAdmin";
import EditLotAdmin from "./EditLot/EditLotAdmin";
import AboutUser from "./AboutLot/AboutUser";
import Footer from "./Footer/Footer";

function EditAdminBriefcase() {
  return (
    <div className="Background-wrapper">
      <Header />
      <div className="wrapper">
        <div style={{height: '85vh'}}>
          <div className="marginTop70">
            <MainCabinetAdmin />
          </div>
          <div className="MarginTop80">
            <EditLotAdmin />
          </div>

   

          <div className="MarginTop80"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EditAdminBriefcase;
